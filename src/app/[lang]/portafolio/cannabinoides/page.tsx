"use client";

import React, {useEffect, useState} from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";

export default async function Cannabinoides({params : {lang}} : {params : {lang : Locale}}) {
  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [title, setTitle] = useState<string>()
  const [subtitle, setSubtitle] = useState<string>()
  const [about, setAbout] = useState<ProjectAbout>();

  useEffect(() => {
    getDictionary(lang).then((item) => {
        setNav(item.nav);
        setAbout(item.work.projects.clinicannabis.about);
        setTitle(item.work.projects.clinicannabis.title);
        setSubtitle(item.work.projects.clinicannabis.subtitle);
    });
}, [lang]);

  return (
    <main className="flex flex-col font-solomon">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <section className={"w-full overflow-x-clip relative text-white"}>
        <span className="absolute top-36 left-[40%] text-3xl leading-7 mt-2" dangerouslySetInnerHTML={{__html: title ?? ''}} />
        <Image src={"/images/projects/clinicannabis/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-none md:object-cover md:w-full h-max w-auto pointer-events-none select-none"}/>
          <span className="absolute bottom-36 left-[40%] text-5xl mb-2">{subtitle}</span>
          <span className="absolute bottom-36 left-[40%] text-5xl border-2 border-solid w-[440px]"></span>
      </section>
      <section className={"text-xl md:text-2xl text-start leading-[1.8] w-full overflow-x-clip px-6 md:px-48 py-14 md:py-36 bg-projects-clinicannabis-bgOrange"}>
        <h5 className="font-bold text-center md:text-left"><strong>{about?.title}</strong></h5>
        {
          about?.articles.map(item => <p className="pt-2 leading-6 md:leading-8 md:pt-6" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
        }
      </section>
      <Image src={"/images/projects/clinicannabis/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/clinicannabis/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
    </main>
  );
}