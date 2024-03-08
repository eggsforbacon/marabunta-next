import {create} from "zustand";

interface ServicesState {
  dropdownState: boolean;
  toggleDropdown: (open: boolean) => void;
  selectedService: number;
  setSelectedService: (to: number) => void;
}

export const useServicesStore = create<ServicesState>()((set) => ({
  dropdownState: false,
  toggleDropdown: (open) => set((_) => ({dropdownState: open})),
  selectedService: 0,
  setSelectedService: (to) => set((_) => ({selectedService: to})),
}));