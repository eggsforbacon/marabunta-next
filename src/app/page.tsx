import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Hero} from "@/components/home/Hero";
import {Intro} from "@/components/home/Intro";
import {Locale} from "@/_i18n.config";
import Reel from "@/components/home/Reel";
import Strategy from "@/components/home/Strategy";

import CallToAction from "@/components/home/CallToAction";
import Image from "next/image";
import { getLenguage } from "@/dictionaries";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
  const {nav, home} = getLenguage(lang);

  return (
      <main>
        <Navbar lang={lang} s={nav} current={"/"}/>
        <section className={"flex flex-col bg-black w-full"}>
          <Hero/>
          <Intro s={home.intro}/>
          <section
          className={"relative z-20 flex flex-col items-stretch justify-start text-off-white overflow-x-clip"}>
            <Image src={"/images/home/svg/black-key-bezel.svg"} alt={"no-alt"} width={1920} height={286}
               className={"absolute top-72 lg:top-0 select-none scale-[8.2] -left-64 lg:left-auto lg:scale-[1.75] pointer-events-none"}
               priority quality={100}/>
              <Reel t={{reel: home.reel}}/>
          </section>
          <Strategy s={home.strategy}/>
          <CallToAction/>
        </section>
      </main>
  )
}
