"use client";

import React, {useEffect, useState} from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";

export default async function FondoMixto({params : {lang}} : {params : {lang : Locale}}) {
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
      <Image src={"/images/projects/fondo-mixto/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <section className="bg-white text-center text-projects-fondo-mixto-blue-light">
        <p className="text-xl md:text-2xl py-36 max-w-[960px] m-auto">
          Se reconstruyó el símbolo mejorando las formas y la disposición de los elementos que lo componen. En la gama crómatica se suprimió el color amarillo para dar armonía.
        </p>
        <div className="flex justify-center items-center pb-24">
          <span>
            <Image src={"/images/projects/fondo-mixto/icon-1.png"} alt={""} width={100} height={110} quality={100}
              className={"object-cover pointer-events-none select-none"}/>
            <p>Deporte</p>
          </span>
          <span className="text-5xl font-normal mx-16">
            <p>+</p>
          </span>
          <span>
            <Image src={"/images/projects/fondo-mixto/icon-2.png"} alt={""} width={100} height={110} quality={100}
              className={"object-cover pointer-events-none select-none"}/>
              <p>Triunfo</p>
          </span>
          <span className="text-5xl font-normal mx-16">
            <p>+</p> 
          </span>
          <span>
            <Image src={"/images/projects/fondo-mixto/icon-3.png"} alt={""} width={100} height={110} quality={100}
              className={"object-cover pointer-events-none select-none"}/>
              <p>Metas</p>
          </span>
        </div>
        <Image src={"/images/projects/fondo-mixto/icon-hr.png"} alt={""} width={325} height={25} quality={100}
          className={"object-cover pointer-events-none select-none m-auto pt-12"}/>
      </section>
      <Image src={"/images/projects/fondo-mixto/gif.gif"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-11.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
      <Image src={"/images/projects/fondo-mixto/img-12.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"md:object-cover w-full h-max pointer-events-none select-none"}/>
    </main>
  )
}