"use client";

import React, {useEffect, useState} from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";
import TimeLine from "@/components/time-line";

export default async function FiestaDeMiPueblo21({params : {lang}} : {params : {lang : Locale}}) {
  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [about, setAbout] = useState<ProjectAbout>();

  useEffect(() => {
    getDictionary(lang).then((item) => {
        setNav(item.nav);
        setAbout(item.work.projects.clinicannabis.about);
    });
  }, [lang]);

  return (
    <main className="flex flex-col">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <section className="text-white text-center pt-28 pb-6 bg-black">
        <span>Elije la versión</span>
      </section>
      {
        <TimeLine yearCurrent={2021}/>
      }
      <section className="w-full py-4 text-white bg-projects-pueblo-yelow flex text-2xl font-black"><span className="m-auto text-2xl md:text-4xl font-organik">2021</span></section>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/logo.gif"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <section className="relative">
        <p className="absolute text-center m-auto text-xs md:text-2xl py:28 md:py-36 max-w-[960px] text-white left-[50%] top-[10%] translate-x-[-50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo modi aperiam deleniti deserunt pariatur dolorem reprehenderit, culpa fugiat esse rem autem amet dolorum, vel eos ad quibusdam soluta, eum natus?
        </p>
        <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      </section>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-5.gif"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <span className="relative">
        <p className="absolute text-center m-auto text-xs md:text-2xl md:py-36 max-w-[960px] text-white left-[50%] top-[10%] translate-x-[-50%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo modi aperiam deleniti deserunt pariatur dolorem reprehenderit, culpa fugiat esse rem autem amet dolorum, vel eos ad quibusdam soluta, eum natus?
        </p>
        <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      </span>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-11.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      <span className="relative">
      <iframe className="absolute w-full h-full md:p-16" src="https://www.youtube.com/embed/9TZuaKpAJwU?si=iDp-uPrnSk04cUAI&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-12.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
      </span>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-13.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
        <Image src={"/images/projects/fiesta-de-mi-pueblo-21/img-14.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full w-auto pointer-events-none select-none"}/>
    </main> 
  )
}