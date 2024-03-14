"use client";

import BlogCard from "@/components/blog/BlogCard";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import {getBlogs, getMonthlyFeatured} from "@/services/blog";
import {getCurrentMonth} from "@/services/common";
import useSWR from 'swr';
import {Blog} from "@/types/blog";
import {ScrollToNewsLetter} from "@/components/blog/ScrollToNewsletter";
import React from "react";
import {useBlogStore} from "@/store/blogs";
import Link from "next/link";

export default function Blogs({lang, s}: { lang: Locale, s: { [_: string]: any } }) {

    const {filter} = useBlogStore();

    const {blog, months} = s;
    const month = getCurrentMonth();

    const {
        data: {blogs},
    } = useSWR(['getBlogs', lang, filter], () => getBlogs(lang, filter), {fallbackData: {blogs: []}});
    const {
        data: {featuredArray},
    } = useSWR(['getMonthlyFeatured', 1, lang, filter], () => getMonthlyFeatured(month, lang), {fallbackData: {featuredArray: []}});

    const featured = featuredArray[0];

    const styles = {
        1: "absolute scale-[2.9] md:scale-[2.1] lg:scale-[1.6] xl:scale-125 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
        2: "absolute scale-[2.9] md:scale-150 lg:scale-125 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
        3: "absolute scale-[2.9] md:scale-[1.15] xl:scale-125 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    };

    const categoryStyles: { [key in Blog.Category]: { inner: string, outer: string } } = {
        ["marabunta"]: {inner: "border-off-black bg-off-white text-off-black", outer: "bg-off-white"},
        ["design"]: {inner: "border-off-black bg-marabunta-red text-off-white", outer: "bg-marabunta-red"},
        ["diseño"]: {inner: "border-off-black bg-marabunta-red text-off-white", outer: "bg-marabunta-red"},
        ["strategy"]: {inner: "border-off-white bg-marabunta-cyan text-off-white", outer: "bg-marabunta-cyan"},
        ["estrategia"]: {inner: "border-off-white bg-marabunta-cyan text-off-white", outer: "bg-marabunta-cyan"},
        ["production"]: {
            inner: "border-off-black bg-marabunta-yellow-alt text-off-black",
            outer: "bg-marabunta-yellow-alt"
        },
        ["producción"]: {
            inner: "border-off-black bg-marabunta-yellow-alt text-off-black",
            outer: "bg-marabunta-yellow-alt"
        },
    }

    function renderBlogs() {
        const filteredBlogs = filter !== "" && blogs.length !== 1 ? blogs.slice(1) : blogs;
        return filteredBlogs.map((blog, i) => {
            const weight: 1 | 2 | 3 = i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1;
            const {
                date,
                title,
                slug,
                category,
                excerpt,
                author,
                thumbnail,
            } = blog;
            return (
                <BlogCard key={i} s={s}
                          author={author}
                          title={title}
                          excerpt={excerpt}
                          publishedDate={date}
                          slug={slug}
                          category={category}
                          weight={weight}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}${thumbnail.data.attributes.url}`}
                        alt={thumbnail.data.attributes.alternativeText! ?? "No alt text"}
                        height={thumbnail.data.attributes.height}
                        width={thumbnail.data.attributes.width}
                        priority={i <= 1}
                        className={styles[weight]}/>
                </BlogCard>
            );
        })
    }

    return (
        <section
            className={"relative flex flex-col items-stretch justify-start gap-8 lg:gap-16 w-full px-6 lg:px-16 2xl:px-64"}>
            <ScrollToNewsLetter
                className={"z-30 lg:-mb-32 hidden lg:grid place-items-center aspect-square w-28 sticky top-32 right-6 lg:ml-[60rem] xl:ml-[78rem] 2xl:ml-[86rem] animate-float-up-sm border-2 p-6 rounded-full border-transparent transition duration-300 ease-back hover:border-marabunta-cyan hover:bg-off-black"}/>
            {
                featured && filter === "" ? (
                    <>
                        <h2 className={"text-center lg:text-start text-3xl lg:text-4xl 2xl:text-6xl font-bold"}>{blog.featured}
                            <span
                                className={"text-marabunta-red"}>{blog.featuredRemark}{(months[month - 1] as string).toLowerCase()}</span>
                        </h2>
                        <BlogCard s={s} author={featured.author} featured
                                  title={featured.title}
                                  excerpt={featured.excerpt}
                                  publishedDate={featured.date} slug={featured.slug} category={featured.category}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}${featured.thumbnail.data.attributes.url}`}
                                alt={"A really cool texture"}
                                height={featured.thumbnail.data.attributes.height}
                                width={featured.thumbnail.data.attributes.width}
                                className={""}/>
                        </BlogCard>
                    </>
                ) : filter === "" ? (
                    <>
                        <h2 className={"text-center lg:text-start text-3xl lg:text-4xl 2xl:text-6xl font-bold lg:w-208 xl:w-fit"}>{blog.stayTuned}
                            <span
                                className={"text-marabunta-red"}>{blog.stayTunedRemark}{(months[month - 1] as string).toLowerCase()}</span>
                        </h2>
                    </>
                ) : (
                    <>
                        <div className={"flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-0 md:-mx-6 md:px-16 lg:mx-0 lg:px-0"}>
                            <h2 className={"text-4xl md:text-5xl lg:text-6xl text-off-white font-bold tracking-wider"}>{filter.toUpperCase()}</h2>
                            <p className={"text-start lg:w-128"}>{blog.categoryDescriptions[filter]}</p>
                        </div>
                        {blogs.length !== 0 && (
                            <Link href={`/blog/${blogs[0].slug}`}
                                className={`flex items-stretch box-border p-2 rounded-2xl ${categoryStyles[filter].outer}`}>
                                <div
                                    className={`w-full h-128 md:h-144 lg:h-136 rounded-2xl border-2 ${categoryStyles[filter].inner} flex flex-col items-start justify-start pt-8 pb-16 px-6 lg:px-16 gap-16`}>
                                    <label>{blog.latest}</label>
                                    <div className={"flex flex-col items-start justify-end gap-4 h-full"}>
                                        <h1 className={"text-4xl lg:text-8xl font-bold"}>{blogs[0].title}</h1>
                                        <p className={"text-xl lg:text-3xl font-semibold"}>{blogs[0].excerpt}</p>
                                    </div>
                                </div>
                            </Link>
                        )}
                    </>
                )
            }
            <span className={"w-full h-px bg-off-white/50"}/>
            <>
                {blogs.length !== 0 ?
                    <>
                        <div className={"grid grid-cols-1 lg:grid-cols-3 w-full place-items-center gap-4 mb-32"}>
                            {
                                renderBlogs()
                            }
                        </div>
                        <span className={"w-full h-px bg-off-white/50"}/>
                        <p className={"text-4xl md:text-5xl py-16 px-6 text-center md:px-0 text-off-white lg:text-off-white/80 font-bold lg:font-normal transition-all duration-300 ease-in-out hover:tracking-wider hover:font-bold hover:text-off-white"}>{blog.end}</p>
                    </>
                    :
                    <>
                        <div className={"text-off-white w-full flex flex-col items-center justify-center gap-6"}>
                            <h2 className={"text-center font-semi-bold text-xl lg:text-53xl"}>{blog.loading}</h2>
                        </div>
                        <span className={"w-full h-px bg-off-white/50"}/>
                    </>
                }
            </>
        </section>
    );
}