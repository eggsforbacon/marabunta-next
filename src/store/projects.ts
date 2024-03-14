import {create} from "zustand";

interface ProjectsState {
  projectDropdownState: boolean;
  toggleProjectDropdown: (open: boolean) => void;
  selectedProject: number;
  setSelectedProject: (to: number) => void;
  categoryDropdownState: boolean;
  toggleCategoryDropdown: (open: boolean) => void;
  selectedCategory: number;
  setSelectedCategory: (to: number) => void;
}

export const useProjectsStore = create<ProjectsState>()((set) => ({
  projectDropdownState: false,
  toggleProjectDropdown: (open) => set((_) => ({projectDropdownState: open})),
  selectedProject: 0,
  setSelectedProject: (to) => set((_) => ({selectedProject: to})),
  categoryDropdownState: false,
  toggleCategoryDropdown: (open) => set((_) => ({categoryDropdownState: open})),
  selectedCategory: 0,
  setSelectedCategory: (to) => set((_) => ({selectedCategory: to})),
}));