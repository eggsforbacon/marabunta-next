"use client";

import Image from "next/image";
import {Locale} from "@/i18n.config";
import {useState} from "react";
import {Globe} from "react-bootstrap-icons";

export default function Services({s, lang}: { s: { [key: string]: any }, lang : Locale }) {

    const [selected, setSelected] = useState(0);

    const titles = s.categories.titles as string[];
    const descriptions = s.categories.descriptions as string[];
    const imagePairs = [
        ["cali-volvamos-a-sonreir", "clinicannabis"],
        ["cali-volvamos-a-sonreir", "clinicannabis"],
        ["cali-volvamos-a-sonreir", "clinicannabis"],
        ["cali-volvamos-a-sonreir", "clinicannabis"],
        ["cali-volvamos-a-sonreir", "clinicannabis"],
        ["cali-volvamos-a-sonreir", "clinicannabis"],
        ["cali-volvamos-a-sonreir", "clinicannabis"],
    ];

    return (
        <section className={"relative z-20 flex flex-col items-stretch justify-start text-off-white overflow-x-clip pb-8"}>
            <Image src={"/images/home/svg/black-key-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                   className={"absolute top-0 select-none scale-[1.75] pointer-events-none"} priority quality={100}/>
            <div className={"relative flex flex-col items-center justify-start gap-16 py-52"}>
                <h2 className={"text-6xl font-light"}>{s.title}<span className={"font-bold"}>{s.remark}</span></h2>
                <ul className={"py-10 flex items-center justify-center gap-12 text-xl"}>
                    {
                        titles.map((t, i) => {
                            return (
                                <>
                                    <li key={i} className={`transition-all duration-200 ease-in-out ${selected === i ? "text-marabunta-cyan font-bold" : "text-off-white font-light"}`}>
                                        <button onClick={() => setSelected(i)}>{t}</button>
                                    </li>
                                    {
                                        i === titles.length - 1 ?
                                            <></>
                                            :
                                            <span className={"h-12 w-px bg-off-white/50"}/>
                                    }
                                </>
                            );
                        })
                    }
                </ul>
                <div className={"w-full h-full relative flex flex-col items-center justify-start gap-8"}>
                    <h3 className={"inline-flex gap-4 justify-center items-center text-marabunta-cyan text-5xl font-bold tracking-wider"}><Globe />{titles[selected]}</h3>
                    <p className={"font-light text-center text-xl max-w-[44rem]"}>{descriptions[selected]}</p>
                    <section className={"relative w-full h-full mt-24"}>
                        <div className={"flex items-center w-full"}>
                            <Image src={`/images/projects/${imagePairs[selected][0]}/cover.png`} className={"saturate-0 transition-all duration-200 ease-in-out hover:saturate-100 w-1/2"} alt={""} width={1920} height={1080}/>
                            <Image src={`/images/projects/${imagePairs[selected][1]}/cover.png`} className={"saturate-0 transition-all duration-200 ease-in-out hover:saturate-100 w-1/2"} alt={""} width={1920} height={1080}/>
                        </div>
                        <span className={"pointer-events-none top-0 lef-to absolute w-full h-full bg-gradient-to-t from-black via-black/40 via-45% to-black/0"}/>
                        <button className={"absolute bottom-0 left-1/2 -translate-x-1/2 px-8 py-4 text-xl font-normal text-off-white border-off-white border bg-transparent rounded-xl transition-all duration-200 ease-in-out hover:font-bold hover:scale-110 cursor-pointer"}>
                            {s.cta}
                        </button>
                    </section>
                </div>
            </div>
        </section>
    );
}