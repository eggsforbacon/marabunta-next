"use client";

import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/_i18n.config";
import MarabuntaVer from "@/components/ui/svg/MarabuntaVer";
import Link from "next/link";
import {Behance, Facebook, Instagram, Linkedin} from "react-bootstrap-icons";
import React, {useEffect, useState} from "react";

export default function NotFound() {
    const [lang, setLang] = useState('es' as Locale);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setLang(sessionStorage.getItem('loc') as Locale);
        }
    }, []);

    return (
        <main className={"bg-off-black overflow-clip px-24 text-marabunta-red flex flex-col items-end justify-center"}>
            {/*<MarabuntaVer className={"absolute -right-12 -top-32 h-384 fill-red-900/50"} />*/}
            <div className={"absolute top-1/2 left-96 -translate-y-1/3"}>
                <h1 className={"orthographic-rotate text-[24rem]/[316px] font-black"}>{"<h1>"}</h1>
                <h1 className={"orthographic-rotate text-[24rem]/[304px] font-black"}>{"404"}</h1>
                <h1 className={"orthographic-rotate text-[24rem]/[316px] font-black"}>{"<h1>"}</h1>
            </div>
            <section className={"relative text-off-white flex flex-col items-end justify-between h-144"}>
                <p className={"text-2xl font-semibold "}>No encontramos la página que estás buscando</p>
                <div className={"flex flex-col items-end justify-start gap-6"}>
                    <div className={"flex md:flex-col 2xl:flex-row items-center justify-start gap-4"}>
                        <Link passHref href={"https://www.facebook.com/marabuntaagencia"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2 group transition duration-200 ease-in-out hover:border-marabunta-red"}>
                            <Facebook className={"fill-red-50 transition duration-200 ease-in-out group-hover:fill-marabunta-red"} size={22}/>
                        </Link>
                        <Link passHref href={"https://www.instagram.com/agenciamarabunta/"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2 group transition duration-200 ease-in-out hover:border-marabunta-red"}>
                            <Instagram className={"fill-red-50 transition duration-200 ease-in-out group-hover:fill-marabunta-red"} size={22}/>
                        </Link>
                        <Link passHref href={"https://co.linkedin.com/company/marabunta"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2 group transition duration-200 ease-in-out hover:border-marabunta-red"}>
                            <Linkedin className={"fill-red-50 transition duration-200 ease-in-out group-hover:fill-marabunta-red"} size={22}/>
                        </Link>
                        <Link passHref href={"https://www.behance.net/MarabuntaAgencia"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2 group transition duration-200 ease-in-out hover:border-marabunta-red"}>
                            <Behance className={"fill-red-50 transition duration-200 ease-in-out group-hover:fill-marabunta-red"} size={22}/>
                        </Link>
                    </div>
                    <LocaleLink lang={lang} href={"/"}>
                        <MarabuntaVer
                            className={"h-44 md:h-56 fill-off-white transition duration-200 ease-in-out hover:fill-marabunta-red"}/>
                    </LocaleLink>
                </div>
            </section>
        </main>
    );
}