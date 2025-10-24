import {create} from "zustand";
import {Warehouse} from "@/types/warehouse";

interface WarehouseStore {
    cart: (Warehouse.Element | Warehouse.Combo)[];
    setCart: (cart: Warehouse.Element[]) => void;
    removeOne: (id: string) => void;
    addOne: (id: string, item?: Warehouse.Element | Warehouse.Combo) => void;
    itemExists: (id: string) => boolean;
    pseudoPurchase: () => (Warehouse.Element | Warehouse.Combo)[];
    emptyCart: () => void;
    filters: Warehouse.Category[];
    updateFilters: (filter: Warehouse.Category) => void;
}

export const useWarehouseStore = create<WarehouseStore>((set, getState) => ({
    cart: [],
    setCart: (cart: Warehouse.Element[]) => set((_) => ({cart})),
    removeOne: (id) =>
        set((state) => ({
            ...state,
            cart: state.cart.filter((c) => c.id !== id),
        })),
    addOne: (id, item) =>
        set((state) => {
            const exists = state.cart.find((c) => c.id === id);
            let updated;
            if (!exists && item) {
                updated = [...state.cart, item];
            }
            return {...state, cart: updated};
        }),
    itemExists: (id: string) => {
        const state = getState();
        const entry = state.cart.find((c) => c.id === id);
        return !!entry;
    },
    pseudoPurchase: () => {
        const state = getState();
        return state.cart;
    },
    emptyCart: () => set((state) => ({...state, cart: []})),
    filters: [],
    updateFilters: (filter) => set((state) => {
        let newFilters: Warehouse.Category[];
        const oldFilters = state.filters;
        if (oldFilters.includes(filter)) {
            newFilters = oldFilters.filter(item => item !== filter);
        } else {
            newFilters = oldFilters.concat(filter);
        }
        return {...state, filters: newFilters};
    })
}));

