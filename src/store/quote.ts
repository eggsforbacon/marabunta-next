import { create } from "zustand";
import { Answer, Question, QuestionTypes, QuoteMode } from "@/types/quote";
import { getQuestion } from "@/model/quote";

type Locale = "es" | "en";

const INTRO_ID = "intro";

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
    setAnswer: (questionId: string, optionIndex: number | { index: number; timestamp: number }[]) => void;
    selectedOptions: { index: number; timestamp: number }[];
    setSelectedOptions: (options: { index: number; timestamp: number }[]) => void;
    lang: Locale;
    setLang: (lang: Locale) => void;
    quoteMode: QuoteMode | null;
    setQuoteMode: (mode: QuoteMode) => void;
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
                stack: [...stack.slice(0, stack.indexOf(newFlowRootId) + 1), flowQuestion.postFlowId],
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
    setQuoteMode: (mode: QuoteMode) => set({ quoteMode: mode, current: '0', stack: [INTRO_ID, '0'] }),
    quoteEmail: "",
    average: 0,
    floor: 0,
    ceiling: 0,
    basket: [],
    addToBasket: (p: Answer) => set((state) => ({ basket: [...state.basket, p] })),
    removeFromBasket: (id: string) => set((state) => ({ basket: state.basket.filter((p) => p.id !== id) })),
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
            return {
                ...nextState,
                ...(nextState.resetOptions && {
                    activeOption: 0,
                    selectedOptions: [],
                }),
            };
        }),
    goBackQuestion: () =>
        set((state) => {
            if (state.stack.length <= 1) {
                return { current: INTRO_ID, stack: [INTRO_ID] };
            }
            const newStack = state.stack.slice(0, -1);
            const previousQuestionId = newStack[newStack.length - 1] || INTRO_ID;
            const newFlowRootId = state.flowRootId !== null && newStack.includes(state.flowRootId) ? state.flowRootId : null;

            return {
                current: previousQuestionId,
                stack: newStack,
                subflowQueue: [],
                flowRootId: newFlowRootId,
                activeOption: 0,
                selectedOptions: [],
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
        })),
    activeOption: 0,
    setActiveOption: (i: number) => set({ activeOption: i }),
    rangeValue: 0,
    setRangeValue: (i: number) => set({ rangeValue: i }),
    answers: {},
    setAnswer: (questionId: string, optionIndex: number | { index: number; timestamp: number }[]) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: optionIndex },
        })),
    selectedOptions: [],
    setSelectedOptions: (options: { index: number; timestamp: number }[]) =>
        set({ selectedOptions: options }),
    lang: "es",
    setLang: (lang: Locale) => set({ lang }),
    warehouseActive: false,
    setWarehouseActive: (toggle: boolean) => set(() => ({ warehouseActive: toggle })),
}));