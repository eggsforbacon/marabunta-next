"use client";

import React, { useEffect, useState } from "react";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import { ProjectAbout } from "@/types/work";



export default async function IngenieriaSass({params : {lang}} : {params : {lang : Locale}}) {
  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [title, setTitle] = useState<string>()
  const [subtitle, setSubtitle] = useState<string>()
  const [about, setAbout] = useState<ProjectAbout>();

  useEffect(() => {
    getDictionary(lang).then((item) => {
      setNav(item.nav);
      setAbout(item.work.projects.ingenieria_sas.about);
      setTitle(item.work.projects.ingenieria_sas.title);
      setSubtitle(item.work.projects.ingenieria_sas.subtitle);
    });
  }, [lang]);

  return (
    <main className="flex flex-col font-galano">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <section className={"w-full overflow-x-clip relative text-white"}>
        <Image src={"/images/projects/ingenieria-sas/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
        <span className="absolute bottom-[-30px] md:bottom-[100px] left-[50%] w-[90%] md:w-[800px] text-center translate-x-[-50%] text-xl md:text-2xl mb-2" dangerouslySetInnerHTML={{__html: subtitle ?? ""}}/>
      </section>
      <section className={"text-xl md:text-2xl text-start md:leading-[1.8] w-full overflow-x-clip px-6 md:px-48 py-14 md:py-36 bg-projects-ingenieria_sas-blue text-white"}>
        <h5 className="font-bold"><strong>{about?.title}</strong></h5>
        {
          about?.articles.map(item => <p className="pt-6" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
        }
      </section>
      <Image src={"/images/projects/ingenieria-sas/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/ingenieria-sas/img-11.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
    </main>
  );
}