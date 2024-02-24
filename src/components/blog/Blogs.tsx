"use client";

import BlogCard from "@/components/blog/BlogCard";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import {getBlogs, getMonth, getMonthlyFeatured} from "@/services/blog";
import useSWR from 'swr';
import {Blog} from "@/interfaces/blog";
import {ScrollToNewsLetter} from "@/components/blog/ScrollToNewsletter";
import React from "react";
import {useBlogStore} from "@/store/blogs";

export default function Blogs({lang, s}: { lang: Locale, s: { [key: string]: any } }) {

    const { filter } = useBlogStore();

    const {blog, months} = s;
    const month = getMonth();

    const {
        data: {blogs},
    } = useSWR(['getBlogs', lang, filter], () => getBlogs(lang, filter), {fallbackData: {blogs: [Blog.EmptyAttributes]}});
    const {
        data: {featuredArray},
    } = useSWR(['getMonthlyFeatured', 1, lang, filter], () => getMonthlyFeatured(month, lang), {fallbackData: {featuredArray: []}});

    const featured = featuredArray[0];

    const styles = {
        1: "absolute scale-[2.9] md:scale-[2.1] lg:scale-[1.6] xl:scale-125 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
        2: "absolute scale-[2.9] md:scale-150 lg:scale-125 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
        3: "absolute scale-[2.9] md:scale-[1.15] xl:scale-125 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    };

    return (
        <section
            className={"relative flex flex-col items-stretch justify-start gap-8 lg:gap-16 w-full px-6 lg:px-16 2xl:px-64"}>
            <ScrollToNewsLetter className={"z-30 lg:-mb-32 hidden lg:grid place-items-center aspect-square w-28 sticky top-32 right-6 lg:ml-[60rem] xl:ml-[78rem] 2xl:ml-[86rem] animate-float-up-sm border-2 p-6 rounded-full border-transparent transition duration-300 ease-back hover:border-marabunta-cyan hover:bg-off-black"} />
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
                ) : (
                    <>
                        <h2 className={"text-center lg:text-start text-3xl lg:text-4xl 2xl:text-6xl font-bold lg:w-208 xl:w-fit"}>{blog.stayTuned}
                            <span
                                className={"text-marabunta-red"}>{blog.stayTunedRemark}{(months[month - 1] as string).toLowerCase()}</span>
                        </h2>
                    </>
                )
            }
            <span className={"w-full h-px bg-off-white/50"}/>
            <div className={"grid grid-cols-1 lg:grid-cols-3 w-full place-items-center gap-4 mb-32"}>
                {
                    blogs.map((blog, i) => {
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
                                    objectFit={"cover"}
                                    height={thumbnail.data.attributes.height}
                                    width={thumbnail.data.attributes.width}
                                    className={styles[weight]}/>
                            </BlogCard>
                        );
                    })
                }
            </div>
        </section>
    );
}