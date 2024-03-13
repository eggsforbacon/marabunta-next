import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Hero} from "@/components/home/Hero";
import {Intro} from "@/components/home/Intro";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import Services from "@/components/home/Services";
import Reel from "@/components/home/Reel";
import Strategy from "@/components/home/Strategy";
import CallToAction from "@/components/home/CallToAction";
import Team from "@/components/home/Team";
import {WhatsappButton} from "@/components/ui/WhatsAppButton";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
  const {nav, home} = await getDictionary(lang);

  return (
      <main>
        <Navbar lang={lang} s={nav} current={"/"}/>
        <section className={"flex flex-col bg-black w-full"}>
          <Hero/>
          <Intro s={home.intro}/>
          <Services s={home.services} lang={lang}/>
          <Reel/>
          <Strategy s={home.strategy}/>
          <Team s={{team: home.team}} lang={lang}/>
          <CallToAction/>
        </section>
        <WhatsappButton/>
      </main>
  )
}
