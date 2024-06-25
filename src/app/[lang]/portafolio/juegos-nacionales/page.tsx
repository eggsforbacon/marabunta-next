import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/_i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";

export default async function Panamericanos({params : {lang}} : {params : {lang : Locale}}) {
  const {nav, work} = await getDictionary(lang);
  const about : ProjectAbout = work.projects.juegos_nacionales.about;

  return (
    <main className="flex flex-col">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <Image src={"/images/projects/juegos-nacionales/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-none md:object-cover md:w-full h-max pointer-events-none select-none"}/>
      <section className="bg-projects-juegos-nacionales-red text-white text-xl md:text-2xl py-14 md:py-36 px-6 md:px-72">
        <h5 className="font-bold text-center md:text-left py-4">{about?.title}</h5>
        {
          about?.articles.map(item => <p className="pb-4" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
        }
      </section>
      <Image src={"/images/projects/juegos-nacionales/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/juegos-nacionales/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
    </main>
  )
}