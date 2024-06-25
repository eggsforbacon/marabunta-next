"use client";

import React, { useEffect, useState } from "react";

import Navbar from "@/components/ui/Navbar";
import { Locale } from "@/_i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";
import Image from "next/image";



export default function Work({params: {lang}}: { params: { lang: Locale } }) {
  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [about, setAbout] = useState<ProjectAbout>();

  useEffect(() => {
    getDictionary(lang).then((item) => {
        setNav(item.nav);
        setAbout(item.work.projects.promotores.about);
    });
  }, [lang]);

  return (
    <main className="flex flex-col">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <Image src={"/images/projects/promotores-ambientales/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <section className="bg-white text-center text-md md:text-2xl text-projects-ambientales-ocean-blue px-6 md:px-72">
        <p className="m-auto pt-16 md:pt-24 pb-8 px-2 md:px-14 max-w-[930px]">
          {about?.articles[0]}
        </p>
        <p className="m-auto pb-24 max-w-[960px]">
        {about?.articles[1]}
        </p>
      </section>
      <Image src={"/images/projects/promotores-ambientales/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover md:w-full h-max w-auto pointer-events-none select-none"}/>
        <iframe 
          className="w-full md:h-[800px]" 
          title="Guardabosque" 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          xr-spatial-tracking 
          execution-while-out-of-viewport 
          execution-while-not-rendered 
          web-share 
          src="https://sketchfab.com/models/f216f09dbaed452cb466a2ea9ffefa5f/embed?autostart=1"/>
      <Image src={"/images/projects/promotores-ambientales/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover md:w-full w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/promotores-ambientales/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover md:w-full h-max w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/promotores-ambientales/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover md:w-full h-max w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/promotores-ambientales/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover md:w-full h-max w-auto pointer-events-none select-none"}/>
      <Image src={"/images/projects/promotores-ambientales/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover md:w-full h-max w-auto pointer-events-none select-none"}/>
    </main>
  )
}