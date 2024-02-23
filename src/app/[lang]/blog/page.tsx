import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Blogs from "@/components/blog/Blogs";
import React from "react";
import LocaleLink from "@/components/ui/LocaleLink";
import { Blog } from "@/interfaces/blog";
import { getBlogs, getMonthlyFeatured, getMonth, mapStrapiToBlog} from "@/services/blog";

export default async function BlogPage({params : {lang}} : {params : {lang : Locale}}) {

    const {nav, blog} = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} current={"/blog"} />
            <section
                className={"flex flex-col bg-off-black w-full items-center justify-start gap-8 text-off-white overflow-x-clip"}>
                <span
                    className={"absolute top-0 w-full left-0 h-full pointer-events-none packed-dotted-background opacity-30 overflow-hidden"}/>
                <div
                    className={"relative flex flex-col items-center lg:items-stretch justify-start w-full pt-20 lg:pt-32"}>
                    <div
                        className={"flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between md:px-52 lg:px-44 xl:px-64 py-8 text-center lg:text-start"}>
                        <h1 className={"text-5xl lg:text-6xl font-bold"}>{blog.title}</h1>
                        <p className={"text-center lg:text-end lg:w-128"}>{blog.copy}</p>
                    </div>
                    <span className={"h-px bg-neutral-300 w-full"}/>
                    <ul className={"hidden uppercase font-normal text-lg lg:flex items-center justify-start gap-16 px-64 py-4"}>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-white hover:text-marabunta-white"}
                            lang={lang} href={"/blog/marabunta"}>{blog.categories[0]}</LocaleLink></li>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-red hover:text-marabunta-red"}
                            lang={lang} href={"/blog/design"}>{blog.categories[1]}</LocaleLink></li>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-cyan hover:text-marabunta-cyan"}
                            lang={lang} href={"/blog/strategy"}>{blog.categories[2]}</LocaleLink></li>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-yellow hover:text-marabunta-yellow"}
                            lang={lang} href={"/blog/prod"}>{blog.categories[3]}</LocaleLink></li>
                    </ul>
                    <select
                        className={"mt-6 lg:hidden form-select bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-80"}>
                        <option value={"1"}>{blog.categories[0]}</option>
                        <option value={"2"}>{blog.categories[1]}</option>
                        <option value={"3"}>{blog.categories[2]}</option>
                        <option value={"4"}>{blog.categories[3]}</option>
                    </select>
                </div>
                <Blogs lang={lang} s={blog}/>
            </section>
        </main>
    );
}