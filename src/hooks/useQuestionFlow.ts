"use client";

import {useEffect, useMemo, useCallback} from "react";
import {Locale} from "@/_i18n.config";
import {getQuestion} from "@/model/quote";
import {useQuoteStore} from "@/store/quote";
import {useWarehouseStore} from "@/store/warehouse";
import {
    Question as QuestionType,
    QuestionTypes,
    Answer as QuoteAnswer,
} from "@/types/quote";

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

    const {cart} = useWarehouseStore();

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
        if (
            question &&
            question.next.length === 0 &&
            !subflowQueue.includes("BODEGA")
        ) {
            setFinish(true);
            if (typeof window !== "undefined") {
                const answers = {basket, cart};
                sessionStorage.setItem("answers", JSON.stringify(answers));
            }
        }
    }, [question, subflowQueue, setFinish, basket, cart]);

    const isSimpleView = useMemo(() => {
        if (!question?.id) return false;
        return question.id.startsWith("S");
    }, [question?.id]);

    const handleNext = useCallback(() => {
        if (!question) return;
        const {id, next, types, prompt, highlight, choices, options} = question;
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

            if (nextIds.includes("BODEGA")) setWarehouseActive(true);
            const storeAnswer: QuoteAnswer = {
                id: id,
                prompt: safePrompt,
                choices: sortedSelections.map((selection) => selection.index),
                values: sortedSelections.map(
                    (selection) =>
                        `${choices?.[selection.index].title}${choices?.[selection.index].description && ":"
                        } ${choices?.[selection.index].description}`
                ),
            };
            addToBasket(storeAnswer);

            continueQuestion(nextIds.length > 0 ? nextIds : ["-1"]);
        } else if (
            types === QuestionTypes.OPTIONS ||
            (Array.isArray(types) && types.includes(QuestionTypes.OPTIONS))
        ) {
            const nextId = next.length === 1 ? next[0] : next[activeOption];
            setAnswer(id, activeOption);
            const storeAnswer: QuoteAnswer = {
                id: id,
                prompt: safePrompt,
                options:
                    selectedOptions.length === 0
                        ? undefined
                        : selectedOptions
                            .map((sel) => options?.values?.[0]?.[sel.index])
                            .filter((v): v is string => typeof v === "string"),
                values: `${safePrompt}`,
            };
            addToBasket(storeAnswer);
            continueQuestion(nextId ? [nextId] : ["-1"]);
        } else {
            const nextId = next.length === 1 ? next[0] : next[activeOption];
            setAnswer(id, activeOption);
            const storeAnswer: QuoteAnswer = {
                id: id,
                prompt: safePrompt,
                values: `${safePrompt}`,
                numericAnswer: types === QuestionTypes.NUM_RANGE ? rangeValue : undefined,
            };
            addToBasket(storeAnswer);
            continueQuestion(nextId ? [nextId] : ["-1"]);
        }

        if (types === QuestionTypes.NUM_RANGE) {
            setRangeValue(-1);
        }
    }, [question, selectedOptions, activeOption, continueQuestion, setAnswer, addToBasket, setWarehouseActive, rangeValue, setRangeValue]);

    const handleOptionClick = useCallback(
        (index: number) => {
            if (!question) return;
            const {id, next, closed, types, prompt, highlight, choices} = question;
            const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

            if (isMultipleSelect) {
                const timestamp = Date.now();
                const isSelected = selectedOptions.some((opt) => opt.index === index);
                const newSelected = isSelected
                    ? selectedOptions.filter((opt) => opt.index !== index)
                    : [...selectedOptions, {index, timestamp}];
                setSelectedOptions(newSelected);
                setAnswer(id, newSelected);
            } else {
                setActiveOption(index);
                setAnswer(id, index);
                if (!closed) {
                    const nextId = next.length === 1 ? next[0] : next[index];
                    if (nextId) {
                        if (nextId === "BODEGA") setWarehouseActive(true);

                        const safePrompt = prompt.replaceAll("$", highlight ?? "$");
                        const storeAnswer: QuoteAnswer = {
                            id: id,
                            prompt: safePrompt,
                            choices: [index],
                            values: `${choices?.[index].title}${choices?.[index].description && ":"
                            } ${choices?.[index].description ?? ""}`,
                        };
                        addToBasket(storeAnswer);

                        setTimeout(() => continueQuestion([nextId]), 400);
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
    };
};