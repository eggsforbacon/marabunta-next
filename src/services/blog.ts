import {API_URL, STRAPI_PASS, STRAPI_USER} from "@/config";
import {Strapi} from "@/interfaces/strapi";
import {fetchURI} from "@/lib/api";
import {Month} from "@/types/common";
import {Locale} from "@/i18n.config";

const normalizeLocale = (locale : Locale) => {
    if (locale === "es") return "es-CO";
    return locale;
}

export async function authenticate(): Promise<{ jwt?: string, error?: any }> {
    const options = {
        method: 'POST',
        body: {
            identifier: STRAPI_USER,
            password: STRAPI_PASS,
        }
    }
    const {jwt, error} = await fetchURI<{ jwt: string, error: any }>(`${API_URL}/auth/local`, options);
    if (jwt !== null && jwt !== undefined) return {jwt};
    return {error};
}

export async function getBlogs(token: string, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    }
    const {data: blogs} = await fetchURI<Strapi.MultipleResponse>(`${API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&sort=fecha%3Adesc&populate=*`, options);
    return {blogs};
}

export async function getMonthlyFeatured(token: string, month: Month, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    }

    const normalizedMonth = `${month}`.padStart(2, '0');

    const {data: featured} = await fetchURI<Strapi.MultipleResponse>(`${API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[featured][$eq]=true&filters[fecha][$contains]=-${normalizedMonth}-&sort=fecha%3Adesc&populate=*`, options);
    return {featured}
}

export async function searchTitle(token : string, query : string, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    }

    const {data: result} = await fetchURI<Strapi.MultipleResponse>(`${API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[titulo][$contains]=${query}&sort=fecha%3Adesc&populate=*`, options);
    return {result}
}