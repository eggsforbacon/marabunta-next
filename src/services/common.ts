import {Locale} from "@/i18n.config";
import {Month} from "@/types/common";

export const options = {
    "method": "GET",
    "headers": {
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
    }
}

export const normalizeLocale = (locale : Locale) => {
    if (locale.includes("es")) return "es-CO";
    return locale;
}

export function getCurrentMonth() : Month {
    const d = new Date();
    const month = d.getMonth();
    return (month + 1) as Month;
}