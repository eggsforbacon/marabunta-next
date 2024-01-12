import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import SearchFilterBar from "@/components/blog/SearchFilterBar";
import Blogs from "@/components/blog/Blogs";
import React from "react";
import LocaleLink from "@/components/ui/LocaleLink";

export default async function Blog({params : {lang}} : {params : {lang : Locale}}) {

    const {nav} = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} current={"/blog"} />
            <section className={"flex flex-col bg-off-black w-full items-center justify-start gap-8 text-off-white"}>
                {/*<span*/}
                {/*    className={"absolute top-0 left-0 h-72 md:h-120 2xl:h-128 aspect-square bg-gradient-to-bl from-marabunta-yellow/30 to-marabunta-red/60 rounded-full animate-rotate-blob"}/>*/}
                {/*<div className={"top-0 left-0 absolute h-full w-full backdrop-blur-3xl"}/>*/}
                <div className={"relative flex flex-col items-stretch justify-start w-full"}>
                    <div className={"flex items-center justify-between px-16 py-8"}>
                        <h1 className={"text-6xl font-bold"}>Marabunta Blog</h1>
                        <p className={"w-128"}>Historias contadas desde el lente de nuestra experiencia. Vivencias, tips y tendencias que impulsan tu marca a un nuevo nivel.</p>
                    </div>
                    <span className={"h-px bg-neutral-300"} />
                    <ul className={"uppercase font-normal text-lg flex items-center justify-start gap-16 px-16 py-4"}>
                        <li><LocaleLink className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-white hover:text-marabunta-white"} lang={lang} href={"/blog/marabunta"}>Marabunta</LocaleLink></li>
                        <li><LocaleLink className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-red hover:text-marabunta-red"} lang={lang} href={"/blog/design"}>Diseño</LocaleLink></li>
                        <li><LocaleLink className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-cyan hover:text-marabunta-cyan"} lang={lang} href={"/blog/strategy"}>Estrategia</LocaleLink></li>
                        <li><LocaleLink className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-yellow hover:text-marabunta-yellow"} lang={lang} href={"/blog/prod"}>Producción</LocaleLink></li>
                    </ul>
                </div>
                <Blogs lang={lang}/>
            </section>
        </main>
    );
}