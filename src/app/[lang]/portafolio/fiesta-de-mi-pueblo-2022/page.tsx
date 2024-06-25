import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/_i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";
import TimeLine from "@/components/time-line";

export default async function FiestaDeMiPueblo22({params : {lang}} : {params : {lang : Locale}}) {

  const {nav, work} = await getDictionary(lang);
  const subtitle : string | undefined = work.projects.fiestaMiPueblo2022.subtitle;
  const about : ProjectAbout = work.projects.fiestaMiPueblo2022.about;

  return (
    <main className="flex flex-col">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <section className="text-white text-center pt-28 pb-6 bg-black">
        <span>Elije la versión</span>
      </section>
      {
        <TimeLine yearCurrent={2022}/>
      }
      <section className="w-full py-4 text-white bg-projects-pueblo-yelow flex text-2xl font-black"><span className="m-auto text-2xl md:text-4xl font-organik">2022</span></section>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/banner.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <section className="text-xs md:text-xl py:28 md:py-36 text-white bg-projects-pueblo-green px-6 md:px-72">
        <h5 className="font-bold text-xl md:text-2xl py-4">{about?.title}</h5>
        {
          about?.articles.map(item => <p className="pb-4" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
        }
      </section>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-1.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-2.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <span className="relative">
        <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-3.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
          <p className="absolute text-white top-64 right-24 max-w-[300px] text-right" dangerouslySetInnerHTML={{__html: subtitle ?? ""}}/>
      </span>
      
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-4.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-5.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-6.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-7.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-8.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-9.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      <Image src={"/images/projects/fiesta-de-mi-pueblo-22/img-10.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
    </main>
  )
}