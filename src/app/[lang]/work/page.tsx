import Navbar from "@/components/ui/Navbar";
import {ProjectCard} from "@/components/work/ProjectCard";
import React from "react";
import {projects} from "@/model/projects";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";

export default async function Work({params : {lang}} : {params : {lang : Locale}}) {

    const { nav, work } = await getDictionary(lang);

    return (
        <main>
            <Navbar current={"/work"} withBorder s={nav} lang={lang}/>
            <section className={"absolute h-full w-full top-0 left-0 z-0 overflow-clip"}>
                <span className={"absolute top-0 left-0 bg-off-black w-full h-full"}/>
                <span
                    className={"absolute top-168 md:top-128 lg:top-72 2xl:top-[17rem] right-[12%] lg:right-[24%] xl:right-[32%] 2xl:right-[38%] h-72 md:h-120 2xl:h-128 aspect-square bg-gradient-to-bl from-projects-cali-sonreir-orange/30 to-projects-cali-sonreir-yellow/60 rounded-full animate-rotate-blob"}/>{/*Cali volvamos a sonreír*/}
                <span
                    className={"absolute top-256 md:top-288 lg:top-[60rem] xl:top-256 2xl:top-[70rem] left-[2%] lg:left-[18%] h-56 md:h-80 2xl:h-96 aspect-square bg-gradient-to-l from-projects-pueblo-22-fuchsia/60 to-projects-pueblo-22-cyan/30 rounded-full animate-rotate-blob"}/>{/*Fiesta de mi pueblo 2022*/}
                <span
                    className={"absolute top-288 md:top-320 lg:top-[90rem] xl:top-[98rem] 2xl:top-384 right-[6%] lg:right-[12%] 2xl:right-[18%] h-72 md:h-96 2xl:h-112 aspect-square bg-gradient-to-tl from-projects-pueblo-22-yellow/30 to-projects-pueblo-22-salmon-red/60 rounded-full animate-rotate-blob"}/>{/*Fiesta de mi pueblo 2022*/}
                <span
                    className={"absolute top-[100rem] md:top-[124rem] lg:top-[124rem] xl:top-[128rem] 2xl:top-[132rem] right-[12%] lg:right-[32%] xl:right-[42%] h-96 md:h-144 lg:h-120 2xl:h-128 aspect-square bg-gradient-to-t from-projects-clinicannabis-caribbean-green/60 to-projects-clinicannabis-viridian-green/30 rounded-full animate-rotate-blob"}/>{/*Clinicannabis*/}
                <span
                    className={"absolute top-[152rem] md:top-[184rem] lg:top-[172rem] xl:top-[178rem] 2xl:top-[176rem] lg:left-[8%] h-72 md:h-112 lg:h-128 aspect-square bg-gradient-to-tr from-projects-panamericanos-21-yellow/30 to-projects-panamericanos-21-pink/60 rounded-full animate-rotate-blob"}/>{/*Panamericanos Junior 2021*/}
                <span
                    className={"absolute top-[164rem] md:top-[198rem] lg:top-[196rem] xl:top-[216rem] right-0 lg:right-[8%] h-52 md:h-80 lg:h-96 2xl:h-80 aspect-square bg-gradient-to-r from-projects-panamericanos-21-ocean-blue/60 to-projects-panamericanos-21-sky-blue/30 rounded-full animate-rotate-blob"}/>{/*Panamericanos Junior 2021*/}
                <span
                    className={"absolute top-[180rem] md:top-[224rem] lg:top-[236rem] xl:top-[246rem] right-[19%] md:right-1/4 lg:right-[64%] h-112 md:h-136 aspect-square bg-gradient-to-br from-projects-fondo-mixto-red/30 to-projects-fondo-mixto-blue/60 rounded-full animate-rotate-blob"}/>{/*Fondo Mixto*/}
                <span
                    className={"absolute top-[232rem] md:top-[276rem] lg:top-[284rem] left-[20%] lg:left-[40%] h-96 md:h-144 lg:h-128 aspect-square bg-gradient-to-b from-projects-pueblo-21-purple/60 to-projects-pueblo-21-teal/30 rounded-full animate-rotate-blob"}/>{/*Fiesta de mi pueblo 2021*/}
                <span
                    className={"absolute top-[264rem] md:top-[324rem] lg:top-[328rem] xl:top-[336rem] 2xl:top-[338rem] left-[8%] h-80 md:h-144 lg:h-96 2xl:h-80 aspect-square bg-gradient-to-bl from-projects-ambientales-blue/30 to-projects-ambientales-green/60 rounded-full animate-rotate-blob"}/>{/*Promotores ambientales*/}
                <span
                    className={"absolute top-[298rem] md:top-[358rem] lg:top-[376rem] xl:top-[386rem] 2xl:top-[390rem] right-[38%] h-56 md:h-128 aspect-square bg-gradient-to-tl from-white/10 to-projects-bio-expo-lime/80 rounded-full animate-rotate-blob"}/>{/*Bio Expo*/}
                <span
                    className={"absolute top-[304rem] md:top-[374rem] lg:top-[402rem] xl:top-[416rem] left-[36%] md:left-[68%] lg:left-[8%] h-44 md:h-72 aspect-square bg-gradient-to-t from-projects-bio-expo-blue/80 to-white/10 rounded-full animate-rotate-blob"}/>{/*Bio Expo*/}
                <div className={"top-0 left-0 absolute h-full w-full backdrop-blur-3xl"}/>
                {/*Screen*/}
            </section>
            <section
                className={"flex text-off-white flex-col w-full relative z-10 items-center justify-start gap-16 xl:gap-32 py-32 px-8 xl:px-16 overflow-clip"}>
                <h1 className={`cursor-default uppercase text-center lg:text-start font-bold text-off-white tracking-[0.1em] md:tracking-[0.15em] lg:tracking-normal lg:text-off-white/40 text-4xl md:text-7xl xl:text-8xl relative lg:font-light transition-all duration-300 delay-150 ease-quartic-in-out hover:tracking-[0.15em] hover:font-bold hover:text-off-white`}
                >{work.heading}
                </h1>
                <p className={"md:w-192 text-center text-xl"}>{work.copy}</p>
                <ul className={"flex flex-col items-stretch justify-start gap-24 lg:gap-44 w-full"}>
                    {(await projects(lang)).map((project, index) => {
                        return (
                            <ProjectCard key={`project${index}`} index={index} metadata={project.metadata}
                                         direction={project.direction}
                                         cardHeight={project.cardHeight} cardWidth={project.cardWidth}
                                         cover={project.cover} lang={lang}/>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}