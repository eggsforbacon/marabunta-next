import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Blogs from "@/components/blog/Blogs";
import React from "react";
import LocaleLink from "@/components/ui/LocaleLink";

export default async function Blog({params : {lang}} : {params : {lang : Locale}}) {

    const {nav} = await getDictionary(lang);

    return (
        <main>
            <Navbar withBorder s={nav} lang={lang} current={"/blog"} />
            <section
                className={"flex flex-col bg-off-black w-full items-center justify-start gap-8 text-off-white overflow-x-clip"}>
                <span
                    className={"absolute top-0 w-full left-0 h-full pointer-events-none packed-dotted-background opacity-30 overflow-hidden"}/>
                <div
                    className={"relative flex flex-col items-center lg:items-stretch justify-start w-full pt-20 lg:pt-0"}>
                    <div
                        className={"flex flex-col gap-6 lg:gap-0 lg:flex-row items-center justify-between px-16 py-8 text-center lg:text-start"}>
                        <h1 className={"text-5xl lg:text-6xl font-bold"}>Blog</h1>
                        <p className={"lg:w-128"}>Historias contadas desde el lente de nuestra experiencia. Vivencias,
                            tips y tendencias que impulsan tu marca a un nuevo nivel.</p>
                    </div>
                    <span className={"h-px bg-neutral-300 w-full"}/>
                    <ul className={"hidden uppercase font-normal text-lg lg:flex items-center justify-start gap-16 px-16 py-4"}>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-white hover:text-marabunta-white"}
                            lang={lang} href={"/blog/marabunta"}>Marabunta</LocaleLink></li>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-red hover:text-marabunta-red"}
                            lang={lang} href={"/blog/design"}>Diseño</LocaleLink></li>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-cyan hover:text-marabunta-cyan"}
                            lang={lang} href={"/blog/strategy"}>Estrategia</LocaleLink></li>
                        <li><LocaleLink
                            className={"transition-all duration-200 ease-in-out hover:font-black hover:underline hover:decoration hover:decoration-marabunta-yellow hover:text-marabunta-yellow"}
                            lang={lang} href={"/blog/prod"}>Producción</LocaleLink></li>
                    </ul>
                    <select
                        className={"mt-6 lg:hidden form-select bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-80"}>
                        <option value={"1"}>Marabunta</option>
                        <option value={"2"}>Diseño</option>
                        <option value={"3"}>Estrategia</option>
                        <option value={"4"}>Producción</option>
                    </select>
                </div>
                <Blogs lang={lang}/>
                {/*<section className={"w-full relative bg-marabunta-cyan flex flex-col py-16 px-6"}>*/}
                {/*    <form*/}
                {/*          className={"w-full lg:w-192 h-full flex flex-col justify-start items-center lg:px-8 text-off-black"}>*/}
                {/*        <h3>¿No te quieres perder de nada?</h3>*/}
                {/*        <p>¡Suscríbete a nuestro newsletter!</p>*/}
                {/*        <TextField label={"Tu Correo"} />*/}
                {/*    </form>*/}
                {/*</section>*/}
            </section>
        </main>
    );
}