import {create} from "zustand";

export const industries = ["Gastronomía", "Salud", "Software"];

export type Industry = "" | typeof industries[number];

interface CheckoutState {
    name: string;
    project: string;
    industries: Industry[];
    city: string; // Finde ich allerdings dumm darum nachzufragen
    phone: string;
    email: string;
    setName: (name: string) => void;
    setProject: (project: string) => void;
    setIndustry: (industry: Industry[]) => void;
    setCity: (city: string) => void;
    setPhone: (phone: string) => void;
    setEmail: (email: string) => void;
    sent: boolean;
    setSent: (sent: boolean) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    name: "",
    project: "",
    industries: [""],
    city: "",
    phone: "",
    email: "",
    setName: (name: string) => set((_) => ({name})),
    setProject: (project: string) => set((_) => ({project})),
    setIndustry: (industry: Industry[]) => set((_) => ({industries: industry})),
    setCity: (city: string) => set((_) => ({city})),
    setPhone: (phone: string) => set((_) => ({phone})),
    setEmail: (email: string) => set((_) => ({email})),
    sent: false,
    setSent: (sent: boolean) => set((_) => ({sent})),
}));

