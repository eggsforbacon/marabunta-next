import {create} from "zustand";
import {Answer, Question} from "@/types/quote";
import {getQuestion} from "@/model/quote";
import {id} from "postcss-selector-parser";

interface QuoteStore {
    quoteEmail: string;
    average : number;
    floor : number;
    ceiling: number;
    basket: Answer[];
    addToBasket: (p: Answer) => void;
    removeFromBasket: (id: number) => void;
    current: number;
    next: (id: number) => void;
    previous: (id: number) => void;
    reset: () => void;
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
    next: (id : number) => set((state) => {
        return {
            current: id,
        }
    }),
    previous: (id : number) => set((state) => {
        return {
            current: id,
        }
    }),
    reset: () => set((state) => {
        return {
            current: 0x0000,
            basket: [],
            floor: 0,
            ceiling: 0,
            average: 0,
        }
    }),
}));