"use client";

import BlogCard from "@/components/blog/BlogCard";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import {getBlogs, getMonth, getMonthlyFeatured, mapStrapiToBlog} from "@/services/blog";
import useSWR from 'swr';
import {Blog} from "@/interfaces/blog";

export default function Blogs({lang, s}: { lang: Locale, s: { [key: string]: any } }) {

    const { data: {blogs}, error: blogsError } = useSWR(['getBlogs', lang], () => getBlogs(lang), {fallbackData: {blogs: [Blog.EmptyAttributes]}});
    const { data: {featured}, error: featuredError } = useSWR(['getMonthlyFeatured', getMonth(), lang], () => getMonthlyFeatured(getMonth(), lang), {fallbackData: {featured: Blog.EmptyAttributes}});

    return (
        <section className={"relative flex flex-col items-stretch justify-start gap-8 w-full px-6 lg:px-16 2xl:px-64"}>
            <h2 className={"text-center lg:text-start text-3xl lg:text-4xl 2xl:text-6xl font-bold"}>{s.featured} <span
                className={"text-marabunta-red"}>{s.featuredRemark}febrero</span></h2>
            <BlogCard s={s} author={featured.author} featured
                      title={featured.title}
                      excerpt={featured.excerpt}
                      publishedDate={featured.date} slug={featured.slug} category={featured.category}>
                <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}${featured.thumbnail.data.attributes.url}`} alt={"A really cool texture"}
                       height={featured.thumbnail.data.attributes.height}
                       width={featured.thumbnail.data.attributes.width}
                       className={featured.twClass}/>
            </BlogCard>
            <ul className={"grid grid-cols-1 lg:grid-cols-3 w-full place-items-center gap-4 mb-32"}>
                {
                    blogs.map((blog, i) => {
                        const modulo = i % 4 as 0 | 1 | 2 | 3;
                        const weight: 1 | 2 | 3 = modulo === 0 ? 3 : modulo;
                        const {
                            date,
                            title,
                            slug,
                            category,
                            excerpt,
                            author,
                            thumbnail,
                            twClass,
                        } = blog;
                        return (
                            <li key={i}>
                                <BlogCard s={s}
                                          author={author}
                                          title={title}
                                          excerpt={excerpt}
                                          publishedDate={date}
                                          slug={slug}
                                          category={category}
                                          weight={weight}>
                                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL ?? ""}${thumbnail.data.attributes.url}`}
                                           alt={thumbnail.data.attributes.alternativeText! ?? "No alt text"}
                                           height={thumbnail.data.attributes.height}
                                           width={thumbnail.data.attributes.width}
                                           className={twClass}/>
                                </BlogCard>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}