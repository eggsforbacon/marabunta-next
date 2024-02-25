import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Blogs from "@/components/blog/Blogs";
import React from "react";
import NewsletterForm from "@/components/blog/NewsletterForm";
import BlogFilters from "@/components/blog/BlogFilters";

export default async function BlogPage({params: {lang}}: { params: { lang: Locale } }) {

    const {nav, blog, common: {months}, footer: {terms}} = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} current={"/blog"}/>
            <section
                className={"flex flex-col bg-off-black w-full items-center justify-start gap-8 text-off-white overflow-x-clip"}>
                <span
                    className={"absolute top-0 w-full left-0 h-full pointer-events-none packed-dotted-background opacity-30 overflow-hidden"}/>
                <div
                    className={"relative w-full flex flex-col gap-6 lg:gap-0 lg:flex-row items-center md:items-start lg:items-center justify-between md:justify-start lg:justify-between px-16 lg:px-44 xl:px-64 pb-8 pt-28 lg:pt-40 text-center lg:text-start"}>
                    <h1 className={"text-5xl lg:text-6xl font-bold"}>{blog.title}</h1>
                    <p className={"text-center md:text-start lg:text-end lg:w-128"}>{blog.copy}</p>
                </div>
                <span className={"relative h-px bg-neutral-300 w-full"}/>
                <> {/* Blogs context */}
                    <BlogFilters s={{blog}}/>
                    <Blogs lang={lang} s={{blog, months}}/>
                </>
                <section
                    id={"newsletter"}
                    className={"relative text-off-white w-full flex flex-col items-center justify-start gap-8"}>
                    <section
                        className={"w-full bg-black px-6 lg:px-16 2xl:px-64 py-32 flex flex-col items-center lg:items-stretch justify-start gap-16"}>
                        <h3 className={"text-center lg:text-start text-xl md:text-2xl xl:text-3xl font-semibold tracking-widest"}>{blog.endRemark}</h3>
                        <NewsletterForm lang={lang} s={{blog, terms}}/>
                    </section>
                </section>
            </section>
        </main>
    );
}