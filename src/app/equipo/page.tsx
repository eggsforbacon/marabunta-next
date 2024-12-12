import Navbar from "@/components/ui/Navbar";
//import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/_i18n.config";
import Image from "next/image";
import React from "react";
import Team from "@/components/home/Team";
import { getLanguage } from "@/dictionaries";

export default async function TeamPage({params: {lang = 'es'}}: { params: { lang: Locale } }) {

  const {nav, team} = getLanguage(lang);

  return (
      <main>
        <Navbar s={nav} lang={lang} current={"/equipo"}/>
        <section className={"text-off-white bg-off-black w-full flex flex-col items-stretch justify-start"}>
          <div className={"flex flex-col items-center justify-end overflow-clip h-192"}>
            <div className={"overflow-clip aspect-video h-168 w-full relative"}>
              <Image src={"/images/team/comunicacioneslindos.webp"} alt={""} width={1920} height={876}
                     className={"object-cover absolute w-full scale-[1.35] md:scale-125 lg:scale-100 -bottom-2 -left-8 md:-bottom-32 lg:-bottom-64 xl:-bottom-96 2xl:-bottom-128 md:-left-16 lg:left-0 saturate-0 brightness-50"}
                     quality={100}/>
            </div>
            <div className={"relative px-6 md:px-20 lg:px-64 xl:px-80 2xl:px-112 py-16 flex flex-col items-center justify-center gap-6 text-center"}>
              <h1 className={"text-3xl md:text-4xl xl:text-5xl font-bold"}>
                {team.title} <span className={"text-marabunta-red"}>Marabunta</span>
              </h1>
              <p className={"md:text-xl xl:text-2xl"}>{team.copy}</p>
            </div>
          </div>
          <Team s={{team: team.showcase}} lang={lang}/>
        </section>
      </main>
  );
}