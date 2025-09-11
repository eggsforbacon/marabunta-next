import {create} from "zustand";
import {Warehouse} from "@/types/warehouse";

interface WarehouseStore {
    cart: { item: Warehouse.Element, quantity: number; }[];
    removeOne: (id: string) => void;
    removeAll: (id: string) => void;
    addOne: (id: string, item?: Warehouse.Element) => void;
    addToCart: (item: Warehouse.Element, quantity: number) => void;
    getRequestedQuantity: (id: string) => number;
    pseudoPurchase: () => { item: Warehouse.Element, quantity: number; }[];
    emptyCart: () => void;
    filters: Warehouse.Category[];
    updateFilters: (filter: Warehouse.Category) => void;
}

export const useWarehouseStore = create<WarehouseStore>((set, getState) => ({
    cart: [],
    removeOne: (id) =>
        set((state) => {
            const updated = state.cart
                .map((c) =>
                    c.item.id === id ? {...c, quantity: c.quantity - 1} : c
                )
                .filter((c) => c.quantity > 0);
            return {...state, cart: updated};
        }),
    removeAll: (id) =>
        set((state) => ({
            ...state,
            cart: state.cart.filter((c) => c.item.id !== id),
        })),
    addOne: (id, item) =>
        set((state) => {
            const exists = state.cart.find((c) => c.item.id === id);
            let updated;
            if (!exists && item) {
                updated = [...state.cart, {item: item, quantity: 1}];
            } else {
                updated = state.cart.map((c) =>
                    c.item.id === id ? {...c, quantity: c.quantity + 1} : c
                );
            }
            return {...state, cart: updated};
        }),
    addToCart: (item, quantity) => set((state) => {
        const exists = state.cart.find((c) => c.item.id === item.id);
        let updated;
        if (exists) {
            updated = state.cart.map((c) =>
                c.item.id === item.id
                    ? {...c, quantity: c.quantity + quantity}
                    : c
            );
        } else {
            updated = [...state.cart, {item, quantity}];
        }
        return {...state, cart: updated};
    }),
    getRequestedQuantity: (id: string) => {
        const state = getState();
        const entry = state.cart.find((c) => c.item.id === id);
        return entry ? entry.quantity : 0;
    },
    pseudoPurchase: () => {
        const state = getState();
        return state.cart;
    },
    emptyCart: () => set((state) => ({...state, cart: []})),
    filters: [],
    updateFilters: (filter) => set((state) => {
        let newFilters: Warehouse.Category[] = [];
        const oldFilters = state.filters;
        if (oldFilters.includes(filter)) {
            newFilters = oldFilters.filter(item => item !== filter);
        } else {
            newFilters = oldFilters.concat(filter);
        }
        return {...state, filters: newFilters};
    })
}));

