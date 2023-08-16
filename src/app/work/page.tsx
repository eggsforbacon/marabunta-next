import Navbar from "@/components/ui/Navbar";
import {ProjectCard} from "@/components/work/ProjectCard";
import React from "react";
import {projects} from "@/model/projects";

export default function Work() {

    return (
        <main>
            <Navbar current={"/work"} withBorder/>
            <section className={"absolute h-full w-full top-0 left-0 z-0"}>
                <span className={"absolute top-0 left-0 bg-off-black w-full h-full"}/>
                <span
                    className={"absolute top-[17rem] right-[38%] h-128 aspect-square bg-gradient-to-bl from-projects-cali-sonreir-orange/30 to-projects-cali-sonreir-yellow/60 rounded-full animate-rotate-blob"}/>{/*Cali volvamos a sonreír*/}
                <span
                    className={"absolute top-[70rem] left-[18%] h-96 aspect-square bg-gradient-to-l from-projects-pueblo-22-fuchsia/60 to-projects-pueblo-22-cyan/30 rounded-full animate-rotate-blob"}/>{/*Fiesta de mi pueblo 2022*/}
                <span
                    className={"absolute top-[96rem] right-[18%] h-112 aspect-square bg-gradient-to-tl from-projects-pueblo-22-yellow/30 to-projects-pueblo-22-salmon-red/60 rounded-full animate-rotate-blob"}/>{/*Fiesta de mi pueblo 2022*/}
                <span
                    className={"absolute top-[132rem] right-[38%] h-128 aspect-square bg-gradient-to-t from-projects-clinicannabis-caribbean-green/60 to-projects-clinicannabis-viridian-green/30 rounded-full animate-rotate-blob"}/>{/*Clinicannabis*/}
                <span
                    className={"absolute top-[176rem] left-[8%] h-128 aspect-square bg-gradient-to-tr from-projects-panamericanos-21-yellow/30 to-projects-panamericanos-21-pink/60 rounded-full animate-rotate-blob"}/>{/*Panamericanos Junior 2021*/}
                <span
                    className={"absolute top-[216rem] right-[8%] h-80 aspect-square bg-gradient-to-r from-projects-panamericanos-21-ocean-blue/60 to-projects-panamericanos-21-sky-blue/30 rounded-full animate-rotate-blob"}/>{/*Panamericanos Junior 2021*/}
                <span
                    className={"absolute top-[246rem] right-[64%] h-136 aspect-square bg-gradient-to-br from-projects-fondo-mixto-red/30 to-projects-fondo-mixto-blue/60 rounded-full animate-rotate-blob"}/>{/*Fondo Mixto*/}
                <span
                    className={"absolute top-[284rem] left-[40%] h-128 aspect-square bg-gradient-to-b from-projects-pueblo-21-purple/60 to-projects-pueblo-21-teal/30 rounded-full animate-rotate-blob"}/>{/*Fiesta de mi pueblo 2021*/}
                <span
                    className={"absolute top-[338rem] left-[8%] h-80 aspect-square bg-gradient-to-bl from-projects-ambientales-blue/30 to-projects-ambientales-green/60 rounded-full animate-rotate-blob"}/>{/*Promotores ambientales*/}
                <span
                    className={"absolute top-[390rem] right-[38%] h-128 aspect-square bg-gradient-to-tl from-white/10 to-projects-bio-expo-lime/80 rounded-full animate-rotate-blob"}/>{/*Bio Expo*/}
                <span
                    className={"absolute top-[416rem] left-[8%] h-72 aspect-square bg-gradient-to-t from-projects-bio-expo-blue/80 to-white/10 rounded-full animate-rotate-blob"}/>{/*Bio Expo*/}
                <div className={"top-0 left-0 absolute h-full w-full backdrop-blur-3xl"}/>
                {/*Screen*/}
            </section>
            <section
                className={"flex text-off-white flex-col w-full relative z-10 items-center justify-start gap-32 py-32"}>
                <h1 className={`cursor-default text-8xl relative font-light transition-all duration-300 delay-150 ease-quartic-in-out hover:tracking-[0.15em] hover:font-bold hover:text-off-white uppercase text-off-white/40`}
                >Comunicamos Ideas
                </h1>
                <p className={"w-192 text-center text-xl"}>Aquí hay algunos de los proyectos que hemos ayudado a
                    construir.</p>
                <ul className={"flex flex-col items-stretch justify-start gap-44 w-full px-16"}>
                    {projects.map((project, index) => {
                        return (
                            <ProjectCard key={`project${index}`} index={index} metadata={project.metadata}
                                         direction={project.direction}
                                         cardHeight={project.cardHeight} cardWidth={project.cardWidth}
                                         cover={project.cover}/>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}