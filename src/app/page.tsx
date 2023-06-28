import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Hero} from "@/components/home/Hero";
import {Intro} from "@/components/home/Intro";

export default function Home() {
    return (
        <main>
            <Navbar current={"/"}/>
            <section className={"flex flex-col bg-off-white w-full"}>
                <Hero />
                <Intro />
                <p>This is content</p><br/>
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
