import {Strapi} from "@/interfaces/strapi";
import {fetchURI} from "@/lib/api";
import {Month} from "@/types/common";
import {Locale} from "@/i18n.config";
import {Blog} from "@/interfaces/blog";

export const normalizeLocale = (locale : Locale) => {
    if (locale === "es") return "es-CO";
    return locale;
}

export async function getBlogs(locale? : Locale, filter?: Blog.Category | "") {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&${filter !== "" && filter !== undefined && `filters[categoria][$eq]=${filter}&`}sort=fecha%3Adesc&populate=*`;
    const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);

    const blogs: Blog.Attributes [] = [];

    if (data !== null) data.forEach((blog) => {
        const attributes: { [key: string]: any; } = blog.attributes;
        blogs.push({...mapStrapiToBlog(attributes), featured: false});
    });

    return {blogs};
}

export async function getMonthlyFeatured(month: Month, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
        },
    }
    const normalizedMonth = `${month}`.padStart(2, '0');
    const url = `${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[featured][$eq]=true&filters[fecha][$contains]=-${normalizedMonth}-&sort=fecha%3Adesc&populate=*`;
    const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);
    const featuredArray: Blog.Attributes[] = [];

    if (data !== null) {
        data.forEach((feat) => {
            const attributes : {[key : string] : any} = feat.attributes;
            featuredArray.push({...mapStrapiToBlog(attributes), featured: true});
        });
    }
    return {featuredArray}
}

export async function searchTitle(query : string, locale? : Locale) {
    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
        }
    }

    const {data: result} = await fetchURI<Strapi.MultipleResponse>(`${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[titulo][$contains]=${query}&sort=fecha%3Adesc&populate=*`, options);
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