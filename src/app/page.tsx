import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Hero} from "@/components/home/Hero";
import {Intro} from "@/components/home/Intro";
import {Key360} from "@/components/home/Key360";

export default function Home() {
    return (
        <main>
            <Navbar current={"/"}/>
            <section className={"flex flex-col bg-off-white w-full"}>
                <Hero />
                <Intro />
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
