import { Locale } from "@/_i18n.config";
import { Month } from "@/types/common";
import { Choice } from "@/types/quote";
import { en } from "@/constants/quote/en";
import { es } from "@/constants/quote/es";

export type TranslationEntry = {
    id: string;
    prompt: string;
    context?: string;
    highlight?: string;
    answers?: Choice[];
    options?: string[][];
    hint?: string;
}

export const options = {
    "method": "GET",
    "headers": {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
}

export const normalizeLocale = (locale: Locale) => {
    if (locale === "es") return "es-CO";
    return locale;
}

export function getCurrentMonth(): Month {
    const d = new Date();
    const month = d.getMonth();
    return (month + 1) as Month;
}

type TextKey = keyof TranslationEntry;

export function getText(lang: Locale, id: string, key: TextKey) {

    const source: TranslationEntry[] = lang === "es" ? es : en;
    const textData = source.find((t) => t.id === id);

    if (textData) {
        return textData[key];
    }

    return undefined;
}