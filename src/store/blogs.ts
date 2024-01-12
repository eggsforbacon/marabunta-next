import {create, Mutate, StoreApi} from "zustand";
import {posts} from "@/meilisearch";

interface BlogsState {
    query : string;
    search: (term : string) => void;
    page: number;
    changePage: (to : number) => void;
    filters: string[];
    filter: (by: string) => void;
}

export const useBlogStore = create<BlogsState>()((set) => ({
    query: '',
    search: (term) => set((state) => ({query: term})),
    page: 1,
    changePage: (to) => set((state) => ({page: to})),
    filters: [],
    filter: (by) => set((state) => {
        const alreadyAFilter = state.filters.includes(by);
        if (alreadyAFilter) return {filters: state.filters.filter((f) => f !== by)};
        return {
            filters: state.filters.concat(by)
        };
    }),
}));