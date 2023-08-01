"use client";

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
                    className={"absolute top-[17rem] right-[38%] h-128 aspect-square bg-gradient-to-br from-marabunta-yellow/25 to-marabunta-cyan/80 rounded-full animate-rotate-blob"}/>{/*Blob*/}

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