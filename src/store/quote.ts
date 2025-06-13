import { create } from "zustand";
import { Answer } from "@/types/quote";
import { getQuestion } from "@/model/quote";
import { QuestionTypes } from "@/types/quote";

type Locale = "es" | "en";

interface QuoteStore {
    quoteEmail: string;
    average: number;
    floor: number;
    ceiling: number;
    basket: Answer[];
    addToBasket: (p: Answer) => void;
    removeFromBasket: (id: number) => void;
    current: number;
    continueQuestion: (id: number | number[]) => void;
    stack: number[];
    subflowQueue: number[];
    flowRootId: number | null;
    goBackQuestion: () => void;
    reset: () => void;
    activeOption: number;
    setActiveOption: (i: number) => void;
    rangeValue: number;
    setRangeValue: (i: number) => void;
    answers: { [key: number]: number | { index: number; timestamp: number }[] };
    setAnswer: (questionId: number, optionIndex: number | { index: number; timestamp: number }[]) => void;
    selectedOptions: { index: number; timestamp: number }[];
    setSelectedOptions: (options: { index: number; timestamp: number }[]) => void;
    lang: Locale;
    setLang: (lang: Locale) => void;
}

/** Función auxiliar para determinar el siguiente estado del flujo */
const determineNextState = (
    rawIds: number[],
    current: number,
    stack: number[],
    subflowQueue: number[],
    flowRootId: number | null,
    lang: Locale
) => {
    const ids = rawIds.filter((id) => id !== undefined && id !== -1);
    const currentQuestion = getQuestion(current, lang);

    // Establecer flowRootId si es una pregunta de selección múltiple y no está definido
    let newFlowRootId = flowRootId;
    if (currentQuestion?.types === QuestionTypes.MULTIPLE_SELECT && !flowRootId) {
        newFlowRootId = current;
    }

    // Caso 1: Hay subflujos válidos para procesar (nueva selección)
    if (ids.length > 0) {
        const nextId = ids[0];
        const newSubflowQueue = [...ids.slice(1), ...subflowQueue]; // Encolar el resto
        return {
            current: nextId,
            stack: [...stack, nextId],
            subflowQueue: newSubflowQueue,
            flowRootId: newFlowRootId,
            resetOptions: true,
        };
    }

    // Caso 2: Hay subflujos en la cola para procesar
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

    // Caso 3: No hay más subflujos, avanzar al postFlowId si corresponde
    if (newFlowRootId && stack.includes(newFlowRootId)) {
        const flowQuestion = getQuestion(newFlowRootId, lang);
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

    // Caso 4: Retroceder si no hay más opciones
    const updatedStack = stack.length > 1 ? stack.slice(0, -1) : [0x0000];
    return {
        current: updatedStack[updatedStack.length - 1] || 0x0000,
        stack: updatedStack,
        subflowQueue: [],
        flowRootId: newFlowRootId,
        resetOptions: true,
    };
};

export const useQuoteStore = create<QuoteStore>((set) => ({
    quoteEmail: "",
    average: 0,
    floor: 0,
    ceiling: 0,
    basket: [],
    addToBasket: (p: Answer) => set((state) => ({ basket: [...state.basket, p] })),
    removeFromBasket: (id: number) =>
        set((state) => ({ basket: state.basket.filter((p) => p.id !== id) })),
    current: 0x0000,
    stack: [0x0000],
    subflowQueue: [],
    flowRootId: null,
    continueQuestion: (id: number | number[]) =>
        set((state) => {
            const rawIds = Array.isArray(id) ? id : [id];

            // Caso especial para 0x1102
            if (state.current === 4354 && state.stack[state.stack.length - 2] === 4355) {
                return {
                    current: 0x1105,
                    stack: [...state.stack, 0x1105],
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
                state.lang
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
                return {
                    current: 0x0000,
                    stack: [0x0000],
                    subflowQueue: [],
                    flowRootId: null,
                    activeOption: 0,
                    selectedOptions: [],
                };
            }
            const newStack = state.stack.slice(0, -1);
            const newFlowRootId = state.flowRootId !== null && newStack.includes(state.flowRootId) ? state.flowRootId : null;
            return {
                current: newStack[newStack.length - 1] || 0x0000,
                stack: newStack,
                subflowQueue: state.subflowQueue,
                flowRootId: newFlowRootId,
                activeOption: 0,
                selectedOptions: [],
            };
        }),
    reset: () =>
        set(() => ({
            current: 0x0000,
            stack: [0x0000],
            subflowQueue: [],
            flowRootId: null,
            basket: [],
            floor: 0,
            ceiling: 0,
            average: 0,
            answers: {},
            lang: "es",
        })),
    activeOption: 0,
    setActiveOption: (i: number) => set(() => ({ activeOption: i })),
    rangeValue: 0,
    setRangeValue: (i: number) => set(() => ({ rangeValue: i })),
    answers: {},
    setAnswer: (questionId: number, optionIndex: number | { index: number; timestamp: number }[]) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: optionIndex },
        })),
    selectedOptions: [],
    setSelectedOptions: (options: { index: number; timestamp: number }[]) =>
        set(() => ({ selectedOptions: options })),
    lang: "es",
    setLang: (lang: Locale) => set(() => ({ lang })),
}));