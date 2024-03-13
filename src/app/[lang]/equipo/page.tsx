import Navbar from "@/components/ui/Navbar";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import React from "react";
import Team from "@/components/home/Team";
import {WhatsappButton} from "@/components/ui/WhatsAppButton";

export default async function TeamPage({params: {lang}}: { params: { lang: Locale } }) {

  const {nav, home} = await getDictionary(lang);

  return (
      <main>
        <Navbar s={nav} lang={lang} current={"/equipo"}/>
        <section className={"text-off-white bg-off-black w-full flex flex-col items-stretch justify-start"}>
          <div className={"flex flex-col items-center justify-end overflow-clip h-192"}>
            <div className={"overflow-clip aspect-video h-168 w-full relative"}>
              <Image src={"/images/team/cover.jpg"} alt={""} width={1920} height={876}
                     className={"object-cover absolute w-full -bottom-52 left-0 saturate-0 brightness-50"}
                     quality={100}/>
            </div>
            <div className={"relative px-128 py-16 flex flex-col items-center justify-center gap-6 text-center"}>
              <h1 className={"text-5xl font-bold"}>
                Somos <span className={"text-marabunta-red"}>Marabunta</span>
              </h1>
              <p className={"text-2xl"}>En marabunta tenemos una historia muy bonita y aquí va un párrafo lo más de
                lindo. Lorem ipsum Lorem
                ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
            </div>
          </div>
          <Team s={{team: home.team}} lang={lang}/>
        </section>
        <WhatsappButton/>
      </main>
  );
}