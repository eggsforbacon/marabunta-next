"use client";

import Navbar from "@/components/ui/Navbar";
import React, {useEffect, useRef, useState} from "react";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import ProjectCard from "@/components/work/ProjectCard";
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";
import {useProjectsStore} from "@/store/projects";
import DropdownMenu from "@/components/ui/DropdownMenu";
import { covers } from "@/constants/covers";

export default function Work({params: {lang}}: { params: { lang: Locale } }) {

  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [work, setWork] = useState<{ [key: string]: any }>([]);
  const [mouse, setMouse] = useState({x: 0, y: 0});

  const {
    projectDropdownState,
    toggleProjectDropdown,
    selectedProject,
    setSelectedProject,
    categoryDropdownState,
    toggleCategoryDropdown,
    selectedCategory,
    setSelectedCategory
  } = useProjectsStore();

  const boundingRef = useRef<DOMRect | null>(null);

  const {width} = useScreenSize();

  useEffect(() => {
    getDictionary(lang).then((d) => {
      setNav(d.nav);
      setWork(d.work);
    });
  }, [lang]);

  const handleVisorOver = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!boundingRef.current) return;
    const x = e.clientX - boundingRef.current.left;
    const y = e.clientY - boundingRef.current.top;
    setMouse({x, y});
  };
  
  const projectList = [
    "Promotores Ambientales",
    "Fiesta de mi Pueblo, lo que Somos 2023",
    "Patrimonio Vital",
    "Fondo Mixto",
    "Soy Humedal",
    "Hacemos Ingeniería",
    "Rap del Valle",
    "Clinivital: Seminario Iberoaméricano",
    "Fiesta de mi Pueblo 2021",
    "Juegos Panamericanos Junior 2021",
    "Bio Expo",
    "ARA",
  ]

  return (
    <main className={"h-screen lg:h-full bg-off-black overflow-clip"}>
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
      <span className={"absolute top-0 w-full left-0 h-full pointer-events-none packed-dotted-background opacity-30 overflow-hidden"}/>
      <motion.div
        drag={width > 768 ? 'x' : 'y'}
        dragConstraints={width > 768 ? {
          right: 550,
          left: -(covers.length*440),
        } : {
          top: -6350,
          bottom: 120
        }}
        className={"box-border w-screen lg:w-fit cursor-grab lg:min-h-screen relative flex flex-col lg:flex-row items-center justify-start py-16 lg:p-16 gap-6 [perspective:10000px] active:cursor-grabbing"}
        onMouseMove={handleVisorOver}
        onMouseEnter={e => {
          boundingRef.current = e.currentTarget.getBoundingClientRect();
        }} onMouseLeave={() => {
        if (typeof window !== "undefined" && boundingRef.current !== null) {
          setMouse({x: window.screen.width / 2, y: window.screen.height / 2});
        }
        boundingRef.current = null;
      }}>
        {covers.map((s, i) => {
          return (
            <ProjectCard key={i} mouse={mouse}>
              <Image key={i} src={s.cover} alt={""} width={504} height={672} quality={100}
                className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>
              <article key={i} className={"absolute top-0 left-0 w-full h-full flex"}>
                <a href={s.link}
                  className="flex rounded-full m-auto text-3xl backdrop-blur-sm bg-white/80 w-[100px] z-30">
                  <Image src={"/images/png/Arrow.png"} width={100} height={100} alt={""} quality={100}/>
                </a>
                {
                  s.fore && 
                  <Image src={s.fore} alt={""} width={504} height={672}
                    className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>
                }
              </article>
            </ProjectCard>
          );
        })}
      </motion.div>
      <section
          className={"absolute -bottom-2 pb-12 w-full lg:w-auto lg:pb-0 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row items-center justify-center gap-4 text-off-white text-xl"}>
          <span className={"lg:hidden bg-gradient-to-t from-off-black via-off-black/70 absolute bottom-0 w-full left-0 h-64"}/>
        {/*<button*/}
        {/*    className={"hidden lg:flex items-center gap-2 bg-off-white/10 border-none backdrop-blur-xl rounded-lg p-2"}>*/}
        {/*    <ArrowLeft/>Anterior*/}
        {/*</button>*/}
        <div className={"w-[90vw] lg:w-128"}>
          <DropdownMenu defaultOption={projectList[0]} options={projectList} open={projectDropdownState}
                        setOpen={toggleProjectDropdown} collateral={(i) => {
            setSelectedProject(i);
          }} defaultCondition={selectedProject === 0} direction={"up"}/>
        </div>
        <div className={"w-[90vw] lg:w-96"}>
          <DropdownMenu defaultOption={(work.categories ?? ["-"])[0]} options={(work.categories ?? ["-"])} open={categoryDropdownState}
                        setOpen={toggleCategoryDropdown} collateral={(i) => {
            setSelectedCategory(i);
          }} defaultCondition={selectedCategory === 0} direction={"up"}/>
        </div>
      </section>
      <section
          className={"absolute w-full top-28 lg:top-9 -translate-x-1/2 left-1/2 lg:translate-x-0 lg:left-0 flex items-center justify-center lg:justify-between px-0 lg:px-16 gap-2 font-light tracking-wide text-off-white text-lg"}>
        <Link
          className={"w-44 text-center box-border lg:box-content lg:w-auto bg-off-white/10 border-none backdrop-blur-2xl rounded-lg w- py-2 px-8 lg:text-start text-lg"}
          href={"https://www.behance.net/MarabuntaAgencia"} target={"_blank"}>Behance</Link>
        <Link
          className={"w-44 text-center box-border lg:box-content lg:w-auto bg-off-white/10 border-none backdrop-blur-2xl rounded-lg w- py-2 px-8 lg:text-start text-lg"}
          href={"https://www.instagram.com/marabuntaagenciacreativa/"} target={"_blank"}>Instagram</Link>
      </section>
    </main>
  );
}