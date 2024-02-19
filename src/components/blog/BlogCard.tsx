"use client";

import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/i18n.config";
import {ReactNode} from "react";
import {BlogCardWeight, BlogCategory} from "@/types/blog";
import useScreenSize from "@/hooks/useScreenSize";

type _BlogCardComponents = {
    title: string,
    excerpt: string,
    publishedDate: string,
    slug: string,
    category: BlogCategory,
    featured?: boolean,
    weight?: BlogCardWeight,
    children: ReactNode,
    author: string,
}

export default function BlogCard(
    {
        lang,
        title,
        excerpt,
        publishedDate,
        slug,
        category,
        featured,
        weight,
        author,
        children
    }: {
        lang: Locale
    } & _BlogCardComponents) {

    const {width} = useScreenSize();

    const finalWeight = width < 768 ? "col-span-1" : weight === undefined ? "col-span-3" : weight === 1 ? "col-span-1" : weight === 2 ? "col-span-2" : "col-span-3";

    return (
        <LocaleLink lang={lang} href={`/blog/${slug}`}
                    className={`relative ${finalWeight} overflow-clip h-128 lg:h-136 group w-full ${featured ? "border-marabunta-red shadow-2xl shadow-marabunta-red/40 hover:shadow-off-white/20" : "border-neutral-400"} border-2 rounded-xl transition-all duration-200 ease-in-out hover:border-off-white hover:-translate-y-2`}>
            {
                weight === undefined || weight === 3 || featured ? (
                    <div
                        className={"relative h-full w-full overflow-clip flex flex-col items-start justify-start gap-4"}>
                        <div
                            className={"pointer-events-none h-full w-full absolute top-0 left-0  transition-all duration-200 group-hover:-expand"}/>
                        <div
                            className={"absolute lg:top-1/2 lg:-translate-y-[50%] lg:right-16 lg:w-168 lg:h-128 overflow-clip top-0 right-0 w-full h-full"}>
                            {children}
                        </div>
                        <article
                            className={"relative h-full lg:w-[45%] px-6 lg:px-16 lg:py-8 flex flex-col items-start pb-16 lg:pb-0 justify-end lg:justify-start gap-4"}>
                            <p className={"text-base font-semibold text-neutral-300 uppercase tracking-widest"}>{category}<span>{" • "}</span>{publishedDate}
                            </p>
                            <h2 className={"text-3xl lg:text-6xl font-bold text-off-white"}>{title}</h2>
                            <p className={"hidden lg:block text-xl"}>{excerpt}</p>
                            <p className={"text-base font-normal text-neutral-300"}>por {author}</p>
                        </article>
                    </div>
                ) : weight === 1 ? (
                    <div
                        className={"relative h-full w-full overflow-clip flex flex-col items-start pb-16 lg:pb-0 justify-end lg:justify-start gap-4"}>
                        <div
                            className={"pointer-events-none h-full w-full absolute top-0 left-0  transition-all duration-200 group-hover:-expand"}/>
                        <div className={"absolute top-0 right-0 w-full h-full overflow-clip"}>
                            {children}
                        </div>
                        <article
                            className={"relative h-full px-6 lg:p-16 flex flex-col items-start pb-16 lg:pb-0 justify-end lg:justify-start gap-4"}>
                            <p className={"text-base font-semibold text-neutral-300 uppercase tracking-widest"}>{category}<span>{" • "}</span>{publishedDate}
                            </p>
                            <h2 className={"text-3xl lg:text-6xl font-bold text-off-white"}>{title}</h2>
                            <p className={"hidden lg:block text-xl"}>{excerpt}</p>
                            <p className={"text-base font-normal text-neutral-300"}>por {author}</p>
                        </article>
                    </div>
                ) : ( // weight === 2
                    <div
                        className={"relative h-full w-full overflow-clip flex flex-col items-start justify-start gap-4"}>
                        <div
                            className={"pointer-events-none h-full w-full absolute top-0 left-0  transition-all duration-200 group-hover:-expand"}/>
                        <div
                            className={"absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-16 aspect-square lg:h-128 lg:w-auto overflow-clip box-border top-0 right-0 w-full h-full"}>
                            {children}
                        </div>
                        <article
                            className={"relative h-full lg:w-[45%] px-6 lg:px-16 lg:py-8 flex flex-col items-start pb-16 lg:pb-0 justify-end lg:justify-start gap-4"}>
                            <p className={"text-base font-semibold text-neutral-300 uppercase tracking-widest"}>{category}<span>{" • "}</span>{publishedDate}
                            </p>
                            <h2 className={"text-3xl lg:text-6xl font-bold text-off-white"}>{title}</h2>
                            <p className={"hidden lg:block text-xl"}>{excerpt}</p>
                            <p className={"text-base font-normal text-neutral-300"}>por {author}</p>
                        </article>
                    </div>
                )
            }
            {/*<div className={"border-b-off-black border-b-2 h-[55%] relative overflow-clip"}>*/}
            {/*</div>*/}
            {/*<div className={"flex flex-col items-start justify-start gap-8 p-8 h-full"}>*/}
            {/*    <label className={"text-xl font-normal transition-all duration-200 ease-in-out group-hover:text-2xl group-hover:font-semibold"}>Lee más <ArrowRightShort className={"inline-block"} size={24} /></label>*/}
            {/*</div>*/}
        </LocaleLink>
    );
}