import {API_URL, STRAPI_TOKEN} from "@/config";
import {Strapi} from "@/interfaces/strapi";
import {fetchURI} from "@/lib/api";
import {Month} from "@/types/common";
import {Locale} from "@/i18n.config";
import {Blog} from "@/interfaces/blog";

export const normalizeLocale = (locale : Locale) => {
    if (locale === "es") return "es-CO";
    return locale;
}

export async function getBlogs(locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${STRAPI_TOKEN}`
        },
        next: { cache: "no-store", tags: ['blogs']},
    }

    const {data: blogs, error} = await fetchURI<Strapi.MultipleResponse>(`${API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&sort=fecha%3Adesc&populate=*`, options);
    return {blogs};
}

export async function getMonthlyFeatured(month: Month, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${STRAPI_TOKEN}`
        },
        next: { cache: "no-store", tags: ['blogs']},
    }

    const normalizedMonth = `${month}`.padStart(2, '0');
    console.error("Month: ", normalizedMonth);

    const {data: featured} = await fetchURI<Strapi.MultipleResponse>(`${API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[featured][$eq]=true&filters[fecha][$contains]=-${normalizedMonth}-&sort=fecha%3Adesc&populate=*`, options);
    console.error("Featured: ", featured);
    return {featured}
}

export async function searchTitle(query : string, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${STRAPI_TOKEN}`
        }
    }

    const {data: result} = await fetchURI<Strapi.MultipleResponse>(`${API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[titulo][$contains]=${query}&sort=fecha%3Adesc&populate=*`, options);
    return {result}
}

export function getMonth() : Month {
    const d = new Date();
    const month = d.getMonth();
    return (month + 1) as Month;
}

export function mapStrapiToBlog (attributes : {[key : string] : any}) : Blog.Attributes {
    return {
        date: attributes.fecha,
        title: attributes.titulo,
        slug: attributes.slug,
        category: attributes.categoria,
        featured: attributes.featured,
        description: attributes.descripcion,
        excerpt: attributes.resumen,
        body:attributes.cuerpo,
        createdAt: attributes.createdAt,
        updatedAt: attributes.updatedAt,
        publishedAt: attributes.publishedAt,
        locale: attributes.locale,
        author: attributes.autor,
        cover: attributes.cover as Strapi.ImageAttributes,
        thumbnail: attributes.thumbnail as Strapi.ImageAttributes,
        localizations: [{}] as [Object]
    }
}