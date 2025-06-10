import {Locale} from "@/_i18n.config";
import {Month} from "@/types/common";
import {en} from "@/constants/quote/en";
import {es} from "@/constants/quote/es";

export const options = {
    "method": "GET",
    "headers": {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
}

export const normalizeLocale = (locale : Locale) => {
    if (locale === "es") return "es-CO";
    return locale;
}

export function getCurrentMonth() : Month {
    const d = new Date();
    const month = d.getMonth();
    return (month + 1) as Month;
}

export function getText(lang: Locale, id: number, key: "context" | "prompt" | "answers" | "options" | "highlight") {
    switch (lang) {
        case "en":
            return en.filter((t) => id === t.id)[0][key];
        case "es":
            return es.filter((t) => id === t.id)[0][key];
    }
}