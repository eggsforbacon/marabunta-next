import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/_i18n.config";
import Image from "next/image";
import { ProjectAbout } from "@/types/work";
import { getLanguage } from "@/dictionaries";

export default async function JuegosPanamericanos({params : {lang}} : {params : {lang : Locale}}) {
  const {nav, work} = getLanguage(lang);
  const about : ProjectAbout = work.projects.panamericanos.about;
  const subtitle : string | undefined = work.projects.panamericanos.subtitle;

  return (
    <main className="flex flex-col font-typoRound">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <Image src={"/images/projects/panamericanos/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <span className="relative">
       <Image src={"/images/projects/panamericanos/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
          <a href="https://www.behance.net/gallery/155552569/Juegos-Panamericanos-2021" target="_blank" className={"absolute top-2 md:top-48 right-2 md:right-36 text-white"}>
            <span className="text-projects-panamericanos-21-purple md:text-7xl font-bold">{about?.title}</span>
            {
              about?.articles.map(item => <p className="text-projects-panamericanos-21-gray max-w-[180px] md:max-w-[500px] text-right md:text-justify py-2 md:py-8 text-xs md:text-xl leading-3" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
            }
            <span className="btn-show-more bg-projects-panamericanos-21-blue py-[2px] px-6 text-md md:text-xl">{subtitle}</span>
          </a>
      </span>
      <span className="relative text-white">
       <Image src={"/images/projects/panamericanos/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
          <a href="https://www.behance.net/gallery/155552569/Juegos-Panamericanos-2021" target="_blank" className={"absolute top-2 md:top-54 left-2 md:left-36"}>
            <span className="md:text-7xl font-bold">Medalla</span>
            {
              about?.articles.map(item => <p className="max-w-[180px] md:max-w-[400px] text-left md:text-justify py-2 md:py-8 text-xs md:text-xl leading-3" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
            }
            <span className="btn-show-more bg-white py-[2px] px-6 text-md md:text-xl text-projects-panamericanos-21-purple font-bold">{subtitle}</span>
          </a>
      </span>
      <Image src={"/images/projects/panamericanos/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-11.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/panamericanos/img-12.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
    </main>
  )
}