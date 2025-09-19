import { create } from "zustand";
import { Answer, Question, QuestionTypes, QuoteMode } from "@/types/quote";
import { getQuestion } from "@/model/quote";
import { questions as allQuestions } from "@/constants/quote";
import { buildQuestionMap, QuestionMap } from "@/utils/quote-progress";

type Locale = "es" | "en";

const INTRO_ID = "intro";

const questionMap = buildQuestionMap(allQuestions("es"));

interface QuoteStore {
    quoteEmail: string;
    average: number;
    floor: number;
    ceiling: number;
    basket: Answer[];
    addToBasket: (p: Answer) => void;
    removeFromBasket: (id: string) => void;
    current: string;
    continueQuestion: (id: string | string[]) => void;
    stack: string[];
    subflowQueue: string[];
    flowRootId: string | null;
    goBackQuestion: () => void;
    reset: () => void;
    activeOption: number;
    setActiveOption: (i: number) => void;
    rangeValue: number;
    setRangeValue: (i: number) => void;
    answers: { [key: string]: number | { index: number; timestamp: number }[] };
    setAnswer: (
        questionId: string,
        optionIndex: number | { index: number; timestamp: number }[]
    ) => void;
    selectedOptions: { index: number; timestamp: number }[];
    setSelectedOptions: (options: { index: number; timestamp: number }[]) => void;
    lang: Locale;
    setLang: (lang: Locale) => void;
    quoteMode: QuoteMode | null;
    setQuoteMode: (mode: QuoteMode) => void;
    totalSteps: number;
    currentStep: number;
    progress: number;
    totalStepsHistory: number[];
    warehouseActive: boolean;
    setWarehouseActive: (toggle: boolean) => void;
}

const determineNextState = (
    rawIds: string[],
    current: string,
    stack: string[],
    subflowQueue: string[],
    flowRootId: string | null,
    lang: Locale,
    quoteMode: QuoteMode | null
) => {

    if (current === INTRO_ID) {
        const nextId = rawIds[0];
        return {
            current: nextId,
            stack: [current, nextId],
            subflowQueue: [],
            flowRootId: null,
            resetOptions: true,
        };
    }

    const ids = rawIds.filter((id) => id !== undefined && id !== "-1");
    const currentQuestion = getQuestion(current, lang, quoteMode);

    let newFlowRootId = flowRootId;
    if (currentQuestion?.types === QuestionTypes.MULTIPLE_SELECT && !flowRootId) {
        newFlowRootId = current;
    }

    if (ids.length > 0) {
        const nextId = ids[0];
        const newSubflowQueue = [...ids.slice(1), ...subflowQueue];
        return {
            current: nextId,
            stack: [...stack, nextId],
            subflowQueue: newSubflowQueue,
            flowRootId: newFlowRootId,
            resetOptions: true,
        };
    }

    if (subflowQueue.length > 0) {
        const nextSubflowId = subflowQueue[0];
        const updatedQueue = subflowQueue.slice(1);
        return {
            current: nextSubflowId,
            stack: [...stack, nextSubflowId],
            subflowQueue: updatedQueue,
            flowRootId: newFlowRootId,
            resetOptions: true,
        };
    }

    if (newFlowRootId && stack.includes(newFlowRootId)) {
        const flowQuestion = getQuestion(newFlowRootId, lang, quoteMode);
        if (flowQuestion?.postFlowId) {
            return {
                current: flowQuestion.postFlowId,
                stack: [
                    ...stack.slice(0, stack.indexOf(newFlowRootId) + 1),
                    flowQuestion.postFlowId,
                ],
                subflowQueue: [],
                flowRootId: null,
                resetOptions: true,
            };
        }
    }

    const updatedStack = stack.length > 1 ? stack.slice(0, -1) : [INTRO_ID];
    return {
        current: updatedStack[updatedStack.length - 1] || INTRO_ID,
        stack: updatedStack,
        subflowQueue: [],
        flowRootId: null,
        resetOptions: true,
    };
};

export const useQuoteStore = create<QuoteStore>((set, get) => ({
    quoteMode: null,
    setQuoteMode: (mode: QuoteMode) => {
        const firstQuestionId = '0';
        const initialTotalSteps = questionMap.get(firstQuestionId)?.maxSteps ?? 10;
        set({
            quoteMode: mode,
            current: firstQuestionId,
            stack: [INTRO_ID, firstQuestionId],
            totalSteps: initialTotalSteps,
            currentStep: 1,
            progress: (1 / initialTotalSteps) * 100,
            totalStepsHistory: [initialTotalSteps],
        });
    },
    quoteEmail: "",
    average: 0,
    floor: 0,
    ceiling: 0,
    basket: [],
    addToBasket: (p: Answer) =>
        set((state) => ({ basket: [...state.basket, p] })),
    removeFromBasket: (id: string) =>
        set((state) => ({ basket: state.basket.filter((p) => p.id !== id) })),
    current: INTRO_ID,
    stack: [INTRO_ID],
    subflowQueue: [],
    flowRootId: null,
    continueQuestion: (id: string | string[]) =>
        set((state) => {
            const rawIds = Array.isArray(id) ? id : [id];

            if (state.current === "G1b.3" && ['G1a', 'G2a', 'G1.3.1'].some(val => state.stack.includes(val))) {
                return {
                    current: "G1b.5",
                    stack: [...state.stack, "G1b.5"],
                    activeOption: 0,
                    selectedOptions: [],
                };
            }

            const nextState = determineNextState(
                rawIds,
                state.current,
                state.stack,
                state.subflowQueue,
                state.flowRootId,
                state.lang,
                state.quoteMode,
            );

            const currentStep = nextState.stack.length - 1;
            let totalSteps = state.totalSteps;
            const newHistory = [...state.totalStepsHistory];

            const currentQuestion = getQuestion(state.current, state.lang, state.quoteMode);
            if (currentQuestion?.types === QuestionTypes.MULTIPLE_SELECT) {
                const selectedNextIds = (get().answers[state.current] as { index: number }[])
                    .map(opt => currentQuestion.next[opt.index])
                    .filter(id => id && id !== "-1");

                if (selectedNextIds.length > 0) {
                    totalSteps = selectedNextIds.reduce((acc, nextId) => {
                        return acc + (questionMap.get(nextId)?.maxSteps ?? 0);
                    }, state.stack.length - 1);
                }
            }
            newHistory.push(totalSteps);

            const potentialProgress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : state.progress;

            // BUG FIX: El progreso nunca disminuye al avanzar
            const progress = Math.max(potentialProgress, state.progress);

            return {
                ...nextState,
                currentStep,
                totalSteps,
                totalStepsHistory: newHistory,
                progress,
                ...(nextState.resetOptions && {
                    activeOption: 0,
                    selectedOptions: [],
                }),
            };
        }),
    goBackQuestion: () =>
        set((state) => {
            if (state.stack.length <= 1 || state.current === '0') {
                return { current: INTRO_ID, stack: [INTRO_ID], quoteMode: null, progress: 0, currentStep: 0, totalSteps: 1, totalStepsHistory: [] };
            }
            const newStack = state.stack.slice(0, -1);
            const newHistory = state.totalStepsHistory.slice(0, -1);
            const previousQuestionId = newStack[newStack.length - 1] || INTRO_ID;
            const newFlowRootId =
                state.flowRootId !== null && newStack.includes(state.flowRootId)
                    ? state.flowRootId
                    : null;

            const currentStep = newStack.length - 1;
            const totalSteps = newHistory.length > 0 ? newHistory[newHistory.length - 1] : 1;

            return {
                current: previousQuestionId,
                stack: newStack,
                subflowQueue: [],
                flowRootId: newFlowRootId,
                activeOption: 0,
                selectedOptions: [],
                currentStep,
                totalSteps,
                totalStepsHistory: newHistory,
                progress: totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0,
            };
        }),
    reset: () =>
        set(() => ({
            current: INTRO_ID,
            stack: [INTRO_ID],
            subflowQueue: [],
            flowRootId: null,
            basket: [],
            floor: 0,
            ceiling: 0,
            average: 0,
            answers: {},
            lang: "es",
            activeOption: 0,
            selectedOptions: [],
            rangeValue: 0,
            totalSteps: 0,
            currentStep: 0,
            progress: 0,
            totalStepsHistory: [],
        })),
    activeOption: 0,
    setActiveOption: (i: number) => set({ activeOption: i }),
    rangeValue: 0,
    setRangeValue: (i: number) => set({ rangeValue: i }),
    answers: {},
    setAnswer: (
        questionId: string,
        optionIndex: number | { index: number; timestamp: number }[]
    ) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: optionIndex },
        })),
    selectedOptions: [],
    setSelectedOptions: (options: { index: number; timestamp: number }[]) =>
        set({ selectedOptions: options }),
    lang: "es",
    setLang: (lang: Locale) => set({ lang }),
    totalSteps: 1,
    currentStep: 0,
    progress: 0,
    totalStepsHistory: [],
    warehouseActive: false,
    setWarehouseActive: (toggle: boolean) => set(() => ({ warehouseActive: toggle })),
}));