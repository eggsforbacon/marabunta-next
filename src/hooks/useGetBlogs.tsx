"use client";

import {Locale} from "@/i18n.config";
import useSWR from "swr";
import {Strapi} from "@/interfaces/strapi";
import {API_URL, STRAPI_TOKEN} from "@/config";
import {fetchURI} from "@/lib/api";
import {Blog} from "@/interfaces/blog";
import {mapStrapiToBlog, normalizeLocale} from "@/services/blog";

export default function useGetBlogs(lang: Locale, fallback: Blog.Attributes[]) : {blogs : Blog.Attributes[], error : any} {

    const options = {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${STRAPI_TOKEN}`
        },
    }
    const {data, error} = useSWR<Strapi.MultipleResponse>(
        [`${API_URL}/notas?locale=${normalizeLocale(lang ?? "es")}&sort=fecha%3Adesc&populate=*`, options],
        fetchURI<Strapi.MultipleResponse>,
    );

    const blogs : Blog.Attributes[] = [];
    try {
        data!.data!.forEach((blog) => {
            const attributes : {[key : string] : any} = blog.attributes;
            blogs.push({...mapStrapiToBlog(attributes), featured: false});
        });
    } catch (error) {
        console.error(error);
    }

    return {blogs, error};
}