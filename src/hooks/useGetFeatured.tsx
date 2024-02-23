"use client";

import {Locale} from "@/i18n.config";
import useSWR from "swr";
import {Strapi} from "@/interfaces/strapi";
import {mapStrapiToBlog, normalizeLocale} from "@/services/blog";
import {fetchURI} from "@/lib/api";
import {Blog} from "@/interfaces/blog";
import {Month} from "@/types/common";

export default function useGetFeatured(locale: Locale, fallback : Blog.Attributes, month : Month) : {featured : Blog.Attributes, error : any} {

    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
        }
    }

    const normalizedMonth = `${month}`.padStart(2, '0');
    const { data, error } = useSWR<Strapi.MultipleResponse>(
        [`${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[featured][$eq]=true&filters[fecha][$contains]=-${normalizedMonth}-&sort=fecha%3Adesc&populate=*`, options],
        fetchURI<Strapi.MultipleResponse>,
    );
    const array : Blog.Attributes[] = [];
    try {
        data!.data!.forEach((blog) => {
            const attributes : {[key : string] : any} = blog.attributes;
            array.push({...mapStrapiToBlog(attributes), featured: true});
        });
    } catch (error) {
        console.error(error);
    }

    return { featured: array.length !== 0 ? array[0] : Blog.EmptyAttributes, error };
}