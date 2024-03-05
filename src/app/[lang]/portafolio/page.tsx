"use client";

import Navbar from "@/components/ui/Navbar";
import React, {useEffect, useRef, useState} from "react";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";
import ProjectCard from "@/components/work/ProjectCard";
import Image from "next/image";
import {ArrowLeft, ArrowRight} from "react-bootstrap-icons";
import {motion} from "framer-motion";
import Link from "next/link";
import useScreenSize from "@/hooks/useScreenSize";

export default function Work({params: {lang}}: { params: { lang: Locale } }) {

    const [nav, setNav] = useState<{ [key: string]: any }>([]);
    const [work, setWork] = useState<{ [key: string]: any }>([]);
    const [mouse, setMouse] = useState({x: 0, y: 0});

    const boundingRef = useRef<DOMRect | null>(null);

    const { width } = useScreenSize();

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

    const covers = [
        <Image key={0} src={"/images/projects/panamericanos/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={1} src={"/images/projects/fiesta-23/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={2} src={"/images/projects/indervalle/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={3} src={"/images/projects/invencible/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={4} src={"/images/projects/humedal/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={5} src={"/images/projects/rap-valle/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={6} src={"/images/projects/cali-sonreir/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={7} src={"/images/projects/clinicannabis/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={8} src={"/images/projects/ecopanitas/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={9} src={"/images/projects/humedales/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={10} src={"/images/projects/buenaventura/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={11} src={"/images/projects/turismo-38/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={12} src={"/images/projects/telepacifico/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
        <Image key={13} src={"/images/projects/carrozas-fiesta/cover.jpg"} alt={""} width={504} height={672} quality={100}
               className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>,
    ];

    const content = [
        <article key={0} className={"absolute top-0 left-0 w-full h-full"}>
            <a href="#">Ver</a>
            <Image src={"/images/projects/panamericanos/fore.jpg"} alt={""} width={504} height={672} quality={100}
                   className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>
        </article>,
        <article key={1} className={"absolute top-0 left-0 w-full h-full"}>
            <Image src={"/images/projects/fiesta-23/fore.png"} alt={""} width={504} height={672}
                   className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none"}/>
        </article>,
        <article key={2} className={"absolute top-0 left-0 w-full h-full"}>
            <Image src={"/images/projects/indervalle/fore.jpg"} alt={""} width={504} height={672} quality={100}
                   className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"}/>
        </article>,
        <article key={3} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={4} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={5} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={6} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={7} className={"absolute top-0 left-0 w-full h-full flex"}>
            <a href="/portafolio/cannabinoides" className="hidden lg:flex items-center gap-2 bg-off-white/10 border-none backdrop-blur-xl rounded-lg p-2 m-auto text-3xl">Ver más</a>
        </article>,
        <article key={8} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={9} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={10} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={11} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={12} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
        <article key={13} className={"absolute top-0 left-0 w-full h-full"}>

        </article>,
    ];

    const hrefs = [
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
        "https://www.behance.net/MarabuntaAgencia",
    ];

    return (
        <main className={"h-screen lg:h-full bg-off-black overflow-clip"}>
            <Navbar current={"/portafolio"} withBorder s={nav} lang={lang}/>
            <span
                className={"absolute top-0 w-full left-0 h-full pointer-events-none packed-dotted-background opacity-30 overflow-hidden"}/>
            <motion.div
                drag={width > 768 ? 'x' : 'y'}
                dragConstraints={width > 768 ? {
                    right: 550,
                    left: -6350,
                } : {
                    top: -6350,
                    bottom: 120
                }}
                className={"box-border w-screen lg:w-fit cursor-grab lg:min-h-screen relative flex flex-col lg:flex-row items-center justify-start py-16 lg:p-16 gap-6 [perspective:10000px] active:cursor-grabbing mt-24"}
                onMouseMove={handleVisorOver}
                onMouseEnter={e => {
                    boundingRef.current = e.currentTarget.getBoundingClientRect();
                }} onMouseLeave={(e) => {
                if (typeof window !== "undefined" && boundingRef.current !== null) {
                    setMouse({x: window.screen.width / 2, y: window.screen.height / 2});
                }
                boundingRef.current = null;
            }}>
                {covers.map((s, i) => {
                    return (
                        <ProjectCard i={i} key={i} mouse={mouse} href={hrefs[i]}>
                            {s}
                            {content[i]}
                        </ProjectCard>
                    );
                })}
            </motion.div>
            <section
                className={"absolute -bottom-2 pb-12 w-full lg:w-auto lg:pb-0 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row items-center justify-center gap-4 text-off-white text-xl"}>
                <span
                    className={"lg:hidden bg-gradient-to-t from-off-black via-off-black/70 absolute bottom-0 w-full left-0 h-64"}/>
                <button
                    className={"hidden lg:flex items-center gap-2 bg-off-white/10 border-none backdrop-blur-xl rounded-lg p-2"}>
                    <ArrowLeft/>Anterior
                </button>
                <select
                    className={"form-select bg-off-white/10 border-none backdrop-blur-2xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-80"}>
                    <option value={"1"}>Juegos Panamericanos Junior 2021</option>
                    <option value={"2"}>Fiesta de mi Pueblo: Lo que Somos</option>
                    <option value={"3"}>Juegos Nacionales</option>
                    <option value={"4"}>Valle Invencible</option>
                    <option value={"5"}>Soy Humedal</option>
                    <option value={"6"}>Rap del Valle</option>
                    <option value={"7"}>Cali, Volvamos a Sonreír</option>
                    <option value={"8"}>Clinicannabis</option>
                    <option value={"9"}>Seamos ecopanitas invencibles</option>
                    <option value={"10"}>Humedales Valle del Cauca</option>
                    <option value={"11"}>Buenaventura</option>
                    <option value={"12"}>Encuentro de Autoridades Nacionales de Turismo</option>
                    <option value={"13"}>Telepacífico</option>
                    <option value={"14"}>Fiesta de mi Pueblo: Caravanas</option>
                </select>
                <select
                    className={"form-select bg-off-white/10 border-none backdrop-blur-xl rounded-lg py-2 px-8 text-start text-ellipsis text-xl w-80 lg:w-64"}>
                    <option value={"1"}>Estrategia Digital</option>
                    <option value={"2"}>Marketing</option>
                    <option value={"3"}>Producción Audiovisual</option>
                    <option value={"4"}>Material POP</option>
                    <option value={"5"}>Activación de Marca</option>
                    <option value={"6"}>Plan de Medios</option>
                    <option value={"7"}>Branding</option>
                    <option value={"8"}>Producción de Medios</option>
                    <option value={"9"}>Animación 3D y 2D</option>
                    <option value={"10"}>Experiencias Interactivas</option>
                </select>
                <button
                    className={"hidden lg:flex items-center gap-2 bg-off-white/10 border-none backdrop-blur-xl rounded-lg p-2"}>Siguiente<ArrowRight/>
                </button>
            </section>
            <section
                className={"absolute top-28 lg:top-32 -translate-x-1/2 left-1/2 lg:translate-x-0 lg:left-28 flex items-center justify-center gap-2 font-light tracking-wide text-off-white text-lg"}>
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