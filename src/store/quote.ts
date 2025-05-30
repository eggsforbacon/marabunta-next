import {create} from "zustand";
import {Answer} from "@/types/quote";

interface QuoteStore {
    quoteEmail: string;
    average : number;
    floor : number;
    ceiling: number;
    basket: Answer[];
    addToBasket: (p: Answer) => void;
    removeFromBasket: (id: number) => void;
    current: number;
    continueQuestion: (id: number) => void;
    stack: number[],
    goBackQuestion: () => void;
    reset: () => void;
    activeOption: number;
    setActiveOption: (i: number) => void;
    rangeValue: number;
    setRangeValue: (i: number) => void;
}

export const useQuoteStore = create<QuoteStore>()((set) => ({
    quoteEmail: "",
    average: 0,
    floor : 0,
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
    continueQuestion: (id: number) => set((state) => ({
        current: id,
        stack: [...state.stack, id],
    })),
    goBackQuestion: () => set((state) => ({
        stack: state.stack.slice(0, -1),
        current: state.stack.slice(0, -1).at(-1) ?? 0x0000,
    })),
    reset: () => set(() => ({
        current: 0x0000,
        stack: [0x0000],
        basket: [],
        floor: 0,
        ceiling: 0,
        average: 0,
    })),
    activeOption: 0,
    setActiveOption: (i: number) => set((_) => ({
        activeOption: i,
    })),
    rangeValue: 0,
    setRangeValue: (i: number) => set((_) => ({
        rangeValue: i,
    }))
}));