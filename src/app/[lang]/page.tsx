import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Hero} from "@/components/home/Hero";
import {Intro} from "@/components/home/Intro";
import {Key360} from "@/components/home/Key360";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";

export default async function Home({params : {lang}} : {params : {lang : Locale}}) {
    const { nav, home } = await getDictionary(lang);

    return (
        <main>
            <Navbar lang={lang} s={nav} current={"/"}/>
            <section className={"flex flex-col bg-off-white w-full"}>
                <Hero />
                <Intro s={home.intro} />
                <Key360 />
                <p>This is content</p><br/>
                <p>This is content</p><br/>
                <p>This is content</p><br/>
                <p>This is content</p><br/>
                <p>This is content</p><br/>
                <p>This is content</p><br/>
                <p>This is content</p><br/>
                <p>This is content</p><br/>
            </section>
        </main>
    )
}
