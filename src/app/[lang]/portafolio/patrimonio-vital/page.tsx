"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";
import Image from "next/image";


export default async function PatrimonioVital({params : {lang}} : {params : {lang : Locale}}) {
  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [title, setTitle] = useState<string>()
  const [subtitle, setSubtitle] = useState<string>()
  const [about, setAbout] = useState<ProjectAbout>();

  useEffect(() => {
    getDictionary(lang).then((item) => {
      setNav(item.nav);
      setAbout(item.work.projects.patrimonio_vital.about);
      setTitle(item.work.projects.patrimonio_vital.title);
      setSubtitle(item.work.projects.ingenieria_sas.subtitle);
    });
  }, [lang]);

  return (
    <main className="flex flex-col">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <section className={"w-full overflow-x-clip relative text-white px-6 md:px-72 py-14 md:py-48 bg-projects-patrimonio-vital-green text-md md:text-2xl"}>
        <h3><strong>{title}</strong></h3>
        {
          about?.articles.map(item => <p className="pt-2 leading-6 md:leading-8 md:pt-6" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
        }
      </section>
      <video key={0} playsInline loop muted controls={false} autoPlay
          width={1920} height={1080}>
        <source src={"/images/projects/patrimonio-vital/gif.webm"} type={"video/webm"}/>
      </video>
      <Image src={"/images/projects/patrimonio-vital/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/patrimonio-vital/img-11.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
    </main>
  )
}