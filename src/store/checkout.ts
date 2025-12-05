import {create} from "zustand";

export const industries = ["Gastronomía", "Salud", "Software"];

export type Industry = "" | typeof industries[number];

interface CheckoutState {
    name: string;
    project: string;
    industry: Industry;
    industryOther?: string;
    city: string; // Finde ich allerdings dumm um nachzufragen
    phone: string;
    email: string;
    setName: (name: string) => void;
    setIndustryOther: (other: string) => void;
    setProject: (project: string) => void;
    setIndustry: (industry: Industry) => void;
    setCity: (city: string) => void;
    setPhone: (phone: string) => void;
    setEmail: (email: string) => void;
    sent: boolean;
    setSent: (sent: boolean) => void;
}

export const useCheckoutStore = create<CheckoutState>((set) => ({
    name: "",
    project: "",
    industry: "",
    industryOther: "",
    city: "",
    phone: "",
    email: "",
    setName: (name: string) => set((_) => ({name})),
    setIndustryOther: (other: string) => set((_) => ({industryOther: other})),
    setProject: (project: string) => set((_) => ({project})),
    setIndustry: (industry: Industry) => set((_) => ({industry})),
    setCity: (city: string) => set((_) => ({city})),
    setPhone: (phone: string) => set((_) => ({phone})),
    setEmail: (email: string) => set((_) => ({email})),
    sent: false,
    setSent: (sent: boolean) => set((_) => ({sent})),
}));

