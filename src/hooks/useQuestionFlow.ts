"use client";

import { useEffect, useMemo, useCallback } from "react";
import { Locale } from "@/_i18n.config";
import { getQuestion } from "@/model/quote";
import { useQuoteStore } from "@/store/quote";
import { useWarehouseStore } from "@/store/warehouse";
import {
    Question as QuestionType,
    QuestionTypes,
    Answer as QuoteAnswer,
    QuoteMode,
} from "@/types/quote";
const inferFlowMeta = (
    questionId: string,
    lang: Locale,
    quoteMode: QuoteMode | null
): { flowRootId: string | null; flowRootOptionLabel: string | null } => {
    const { flowRootId, answers } = useQuoteStore.getState();

    if (!flowRootId || questionId === flowRootId) {
        return { flowRootId: null, flowRootOptionLabel: null };
    }

    const rootQuestion = getQuestion(flowRootId, lang, quoteMode);
    if (!rootQuestion || rootQuestion.types !== QuestionTypes.MULTIPLE_SELECT) {
        return { flowRootId: null, flowRootOptionLabel: null };
    }

    const storedSelections = answers[flowRootId];
    if (!Array.isArray(storedSelections)) {
        return { flowRootId: null, flowRootOptionLabel: null };
    }

    const selections = storedSelections as { index: number; timestamp: number }[];

    const isReachableFrom = (
        startId: string,
        targetId: string,
        visited: Set<string>
    ): boolean => {
        if (startId === targetId) return true;
        if (visited.has(startId)) return false;
        visited.add(startId);

        const q = getQuestion(startId, lang, quoteMode);
        if (!q) return false;

        for (const nextId of q.next) {
            if (
                !nextId ||
                nextId === "-1" ||
                nextId === "intro" ||
                nextId === "BODEGA"
            )
                continue;

            if (isReachableFrom(nextId, targetId, visited)) return true;
        }

        return false;
    };

    for (const sel of selections) {
        const idx = sel.index;
        const startId = rootQuestion.next[idx];

        if (!startId || startId === "-1") continue;

        const visited = new Set<string>();
        if (isReachableFrom(startId, questionId, visited)) {
            const label = rootQuestion.choices?.[idx]?.title ?? null;
            return {
                flowRootId,
                flowRootOptionLabel: label,
            };
        }
    }

    return { flowRootId: null, flowRootOptionLabel: null };
};

export const useQuestionFlow = (lang: Locale) => {
    const {
        current,
        continueQuestion,
        goBackQuestion,
        activeOption,
        setActiveOption,
        rangeValue,
        setRangeValue,
        answers,
        selectedOptions,
        setSelectedOptions,
        setAnswer,
        setLang,
        quoteMode,
        setWarehouseActive,
        addToBasket,
        basket,
        subflowQueue,
        setFinish,
        finish,
    } = useQuoteStore();

    const { cart } = useWarehouseStore();

    useEffect(() => {
        setLang(lang);
    }, [lang, setLang]);

    const isVisible = current !== "intro" && current !== "BODEGA";

    const question: QuestionType | null = useMemo(() => {
        if (!isVisible || !quoteMode) return null;
        return getQuestion(current, lang, quoteMode) ?? null;
    }, [current, lang, isVisible, quoteMode]);

    useEffect(() => {
        if (!question?.id) return;
        const savedAnswer = answers[question.id];
        const isMultiple = question.types === QuestionTypes.MULTIPLE_SELECT;

        if (!isMultiple) {
            setActiveOption(savedAnswer !== undefined ? (savedAnswer as number) : -1);
        } else if (Array.isArray(savedAnswer)) {
            setSelectedOptions(savedAnswer as { index: number; timestamp: number }[]);
        } else {
            setSelectedOptions([]);
        }
    }, [question, answers, setActiveOption, setSelectedOptions]);

    useEffect(() => {
        if (!question) {
            setFinish(false);
            return;
        }

        const hasRealNext = question.next.some(
            (id) => id !== undefined && id !== "-1"
        );

        const noMoreSubflows = subflowQueue.length === 0;

        const isFinal =
            !hasRealNext &&
            noMoreSubflows &&
            question.id !== "intro" &&
            question.id !== "BODEGA";

        setFinish(isFinal);
    }, [question, subflowQueue.length, setFinish]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const payload = { basket, cart };
        sessionStorage.setItem("answers", JSON.stringify(payload));
    }, [basket, cart]);

    const isSimpleView = useMemo(() => {
        if (!question?.id) return false;
        return question.id.startsWith("S");
    }, [question?.id]);

    const flowMeta = useMemo(() => {
        if (!question?.id || !quoteMode) {
            return { flowRootId: null, flowRootOptionLabel: null };
        }
        return inferFlowMeta(question.id, lang, quoteMode);
    }, [question?.id, lang, quoteMode]);

    const handleNext = useCallback(() => {
        if (!question) return;
        const { id, next, types, prompt, highlight, choices, options } = question;
        const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;
        const safePrompt = prompt.replaceAll("$", highlight ?? "$");

        if (isMultipleSelect) {
            const sortedSelections = [...selectedOptions].sort(
                (a, b) => a.timestamp - b.timestamp
            );
            const nextIds = sortedSelections
                .map((s) => next[s.index])
                .filter((id) => id !== "-1" && id !== undefined);
            setAnswer(id, sortedSelections);

            const meta = inferFlowMeta(id, lang, quoteMode);

            const storeAnswer: QuoteAnswer = {
                id,
                prompt: safePrompt,
                choices: sortedSelections.map((s) => s.index),
                values: sortedSelections.map(
                    (s) =>
                        `${choices?.[s.index].title}${choices?.[s.index].description ? ":" : ""
                        } ${choices?.[s.index].description ?? ""}`
                ),
                flowRootId: meta.flowRootId,
                flowRootOptionLabel: meta.flowRootOptionLabel,
            };
            addToBasket(storeAnswer);

            if (nextIds.includes("BODEGA")) setWarehouseActive(true);
            continueQuestion(nextIds.length > 0 ? nextIds : ["-1"]);
        }
        else if (
            types === QuestionTypes.OPTIONS ||
            (Array.isArray(types) && types.includes(QuestionTypes.OPTIONS))
        ) {
            const nextId = next.length === 1 ? next[0] : next[activeOption];
            setAnswer(id, activeOption);
            const meta = inferFlowMeta(id, lang, quoteMode);
            const storeAnswer: QuoteAnswer = {
                id,
                prompt: safePrompt,
                options:
                    selectedOptions.length === 0
                        ? undefined
                        : selectedOptions
                            .map((sel) => options?.values?.[0]?.[sel.index])
                            .filter((v): v is string => typeof v === "string"),
                values: safePrompt,
                flowRootId: meta.flowRootId,
                flowRootOptionLabel: meta.flowRootOptionLabel,
            };
            addToBasket(storeAnswer);
            continueQuestion(nextId ? [nextId] : ["-1"]);
        }
        else {
            const nextId = next.length === 1 ? next[0] : next[activeOption];
            setAnswer(id, activeOption);
            const meta = inferFlowMeta(id, lang, quoteMode);
            const storeAnswer: QuoteAnswer = {
                id,
                prompt: safePrompt,
                values: safePrompt,
                numericAnswer:
                    types === QuestionTypes.NUM_RANGE ? rangeValue : undefined,
                flowRootId: meta.flowRootId,
                flowRootOptionLabel: meta.flowRootOptionLabel,
            };
            addToBasket(storeAnswer);
            continueQuestion(nextId ? [nextId] : ["-1"]);
        }

        if (types === QuestionTypes.NUM_RANGE) {
            setRangeValue(-1);
        }
    }, [
        question,
        selectedOptions,
        activeOption,
        continueQuestion,
        setAnswer,
        addToBasket,
        setWarehouseActive,
        rangeValue,
        setRangeValue,
        lang,
        quoteMode,
    ]);

    const handleOptionClick = useCallback(
        (index: number) => {
            if (!question) return;
            const { id, next, closed, types, prompt, highlight, choices } = question;
            const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

            if (isMultipleSelect) {
                const timestamp = Date.now();
                const isSelected = selectedOptions.some((opt) => opt.index === index);
                const newSelected = isSelected
                    ? selectedOptions.filter((opt) => opt.index !== index)
                    : [...selectedOptions, { index, timestamp }];

                setSelectedOptions(newSelected);
                setAnswer(id, newSelected);

                if (finish) {
                    const safePrompt = prompt.replaceAll("$", highlight ?? "$");
                    const sortedSelections = [...newSelected].sort(
                        (a, b) => a.timestamp - b.timestamp
                    );
                    const meta = inferFlowMeta(id, lang, quoteMode);
                    const storeAnswer: QuoteAnswer = {
                        id,
                        prompt: safePrompt,
                        choices: sortedSelections.map((s) => s.index),
                        values: sortedSelections.map(
                            (s) =>
                                `${choices?.[s.index].title}${choices?.[s.index].description ? ":" : ""
                                } ${choices?.[s.index].description ?? ""}`
                        ),
                        flowRootId: meta.flowRootId,
                        flowRootOptionLabel: meta.flowRootOptionLabel,
                    };
                    addToBasket(storeAnswer);
                }
            }
            else {
                setActiveOption(index);
                setAnswer(id, index);

                const safePrompt = prompt.replaceAll("$", highlight ?? "$");
                const meta = inferFlowMeta(id, lang, quoteMode);
                const storeAnswer: QuoteAnswer = {
                    id,
                    prompt: safePrompt,
                    choices: [index],
                    values: `${choices?.[index].title
                        }${choices?.[index].description ? ":" : ""} ${choices?.[index].description ?? ""
                        }`,
                    flowRootId: meta.flowRootId,
                    flowRootOptionLabel: meta.flowRootOptionLabel,
                };

                addToBasket(storeAnswer);

                if (!closed) {
                    let targetIds: string[] = [];

                    const hasRealNext = next.some((n) => n && n !== "-1");

                    if (hasRealNext) {
                        const nextId = next.length === 1 ? next[0] : next[index];
                        if (nextId && nextId !== "-1") {
                            targetIds = [nextId];
                        } else if (subflowQueue.length > 0) {
                            targetIds = ["-1"];
                        }
                    } else if (subflowQueue.length > 0) {
                        targetIds = ["-1"];
                    }

                    if (targetIds.length > 0) {
                        if (targetIds[0] === "BODEGA") setWarehouseActive(true);
                        setTimeout(() => continueQuestion(targetIds), 400);
                    }
                }
            }
        },
        [
            question,
            selectedOptions,
            setSelectedOptions,
            setAnswer,
            setActiveOption,
            continueQuestion,
            setWarehouseActive,
            addToBasket,
            finish,
            subflowQueue,
            lang,
            quoteMode,
        ]
    );

    const getSelectionOrder = useCallback(
        (index: number): number | null => {
            if (question?.types !== QuestionTypes.MULTIPLE_SELECT) return null;
            const sortedOptions = [...selectedOptions].sort(
                (a, b) => a.timestamp - b.timestamp
            );
            const selectedIndex = sortedOptions.findIndex(
                (opt) => opt.index === index
            );
            return selectedIndex !== -1 ? selectedIndex + 1 : null;
        },
        [question, selectedOptions]
    );

    return {
        question,
        isVisible,
        isSimpleView,
        handleNext,
        handleOptionClick,
        getSelectionOrder,
        goBackQuestion,
        rangeValue,
        setRangeValue,
        activeOption,
        selectedOptions,
        setActiveOption,
        finish,
        flowMeta,
    };
};