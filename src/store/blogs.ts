import {create} from "zustand";
import {Blog} from "@/interfaces/blog";
import Category = Blog.Category;

interface BlogsState {
    query : string;
    search: (term : string) => void;
    page: number;
    changePage: (to : number) => void;
    filter: Category | "";
    changeFilter: (to: Category | "") => void;
    dropdownState: boolean;
    toggleDropdown : (open : boolean) => void;
}

export const useBlogStore = create<BlogsState>()((set) => ({
    query: '',
    search: (term) => set((_) => ({query: term})),
    page: 1,
    changePage: (to) => set((_) => ({page: to})),
    filter: "",
    changeFilter: (to) => set((state) => {
        const alreadyAFilter = state.filter === to;
        const reset = to === "";
        if (alreadyAFilter) return {filter: state.filter};
        if (reset) return {filter: ""}
        return {
            filter: to
        };
    }),
    dropdownState: false,
    toggleDropdown: (open) => set((_) => ({dropdownState: open})),
}));