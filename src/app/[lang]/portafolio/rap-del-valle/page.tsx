import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";

export default async function RapDelValle({params : {lang}} : {params : {lang : Locale}}) {
  const {nav, work} = await getDictionary(lang);
  const about : ProjectAbout = work.projects.rap_valle.about;

  return (
    <main className="flex flex-col">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <video playsInline loop muted controls={false} autoPlay
          width={1920} height={1080}>
        <source src={"/images/projects/rap-valle/banner.webm"} type={"video/webm"}/>
      </video>
      <section className="bg-black text-white text-md md:text-2xl text-center md:text-left leading-6">
        <div className="py-12 px-4 md:px-72">
          <span className="font-bold text-xl md:text-2xl py-4">{about?.title}</span>
          {
            about?.articles.map(item => <p className="py-4 opacity-80" key={item} dangerouslySetInnerHTML={{__html: item}}/>)
          }
        </div>
        <Image src={"/images/projects/rap-valle/img-1.png"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
        <Image src={"/images/projects/rap-valle/img-2.png"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
        <Image src={"/images/projects/rap-valle/img-3.png"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
        <video playsInline loop muted controls={false} autoPlay
          width={1920} height={1080}>
          <source src={"/images/projects/rap-valle/gif-01.webm"} type={"video/webm"}/>
        </video>
        <Image src={"/images/projects/rap-valle/img-4.png"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
        <span className=" relative block w-full pb-[56.25%] h-auto overflow-hidden max-w-full">
          <iframe title="vimeo-player" className="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/919792063?h=974fe7402e" width={1920} height={594} allowFullScreen></iframe>
        </span>
        <Image src={"/images/projects/rap-valle/poster.jpg"} alt={""} width={1920} height={594} quality={100}
          className={"object-cover w-full pointer-events-none select-none"}/>
      </section>
    </main>
  )
}