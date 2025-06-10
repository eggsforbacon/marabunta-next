import { create } from "zustand";
import { Answer } from "@/types/quote";

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
    stack: number[],
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
}

export const useQuoteStore = create<QuoteStore>()((set) => ({
    quoteEmail: "",
    average: 0,
    floor: 0,
    ceiling: 0,
    basket: [],
    addToBasket: (p: Answer) => set((state) => {
        state.basket.push(p);
        return {
            basket: state.basket,
        };
    }),
    removeFromBasket: (id: number) => set((state) => {
        const basket = state.basket.filter((p) => p.id !== id);
        return {
            basket,
        };
    }),
    current: 0x0000,
    stack: [0x0000],
    continueQuestion: (id: number | number[]) => set((state) => {
        const ids = Array.isArray(id) ? id : [id];
        const newStack = [...state.stack, ...ids];
        const current = state.current;
        const stack = state.stack;

        if (current === 4354 && stack[stack.length - 2] === 4355) {
            return {
                current: 0x1105,
                stack: [...stack, 0x1105],
                activeOption: 0,
            };
        }

        return {
            current: ids[0],
            stack: newStack,
            activeOption: 0,
            selectedOptions: [],
        };
    }),
    goBackQuestion: () => set((state) => {
        if (state.stack.length <= 1) {
            return {
                current: 0x0000,
                stack: [0x0000],
            };
        }

        const newStack = state.stack.slice(0, -1);
        return {
            current: newStack[newStack.length - 1],
            stack: newStack,
            activeOption: 0,
        };
    }),
    reset: () => set(() => ({
        current: 0x0000,
        stack: [0x0000],
        basket: [],
        floor: 0,
        ceiling: 0,
        average: 0,
        answers: {},
    })),
    activeOption: 0,
    setActiveOption: (i: number) => set((_) => ({
        activeOption: i,
    })),
    rangeValue: 0,
    setRangeValue: (i: number) => set((_) => ({
        rangeValue: i,
    })),
    answers: {},
    setAnswer: (questionId: number, optionIndex: number | { index: number; timestamp: number }[]) =>
        set((state) => ({
            answers: { ...state.answers, [questionId]: optionIndex },
        })),
    selectedOptions: [],
    setSelectedOptions: (options: { index: number; timestamp: number }[]) => set(() => ({ selectedOptions: options })),
}));