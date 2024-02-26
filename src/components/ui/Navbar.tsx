"use client";

import LocaleLink from "@/components/ui/LocaleLink";
import {MarabuntaHor} from "@/components/ui/svg/MarabuntaHor";
import {useEffect, useState} from "react";
import {List} from "react-bootstrap-icons";
import {Locale} from "@/i18n.config";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type _PProps = {
    current?: "/" | "/servicios" | "/portafolio" | "/contacto" | "/blog",
    withBorder? : boolean,
    s : {[key : string] : any},
    lang : Locale
}

const Navbar = ({current, s, lang}: _PProps) => {

    const [open, setOpen] = useState(false);
    const [openLang, setOpenLang] = useState(false);

    const openSesame = () => {
        setOpen(!open);
    };

    const linkHoverStyle: string = "transition duration-200 ease-in-out hover:text-marabunta-cyan";

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setOpen(false);
                setOpenLang(false);
            });
        }

        return () => {
            window.removeEventListener("scroll", () => {});
        }
    });

    return (
        <>
            <span onClick={() => setOpen(false)}
                  className={`fixed top-0 left-0 w-screen h-screen bg-off-black/50 z-[60] transition duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 select-none pointer-events-none"}`}/>
            <nav
                className={`transition-all z-[60] duration-300 ease-in-out fixed top-2 lg:top-8 left-1/2 -translate-x-1/2 ${open ? "h-[50vh] w-screen -translate-y-5 rounded-none py-10" : "h-20 w-96 md:w-4/5 translate-y-0 rounded-xl py-4"} lg:translate-y-0 lg:h-auto z-20 lg:w-224 xl:w-288 2xl:w-320 bg-neutral-500/40 shadow-sm backdrop-blur-3xl lg:rounded-3xl text-sm text-white uppercase flex flex-col-reverse lg:flex-row-reverse items-center justify-end gap-8 lg:gap-0 lg:justify-between px-6 lg:py-4`}>
                <button
                    className={"lg:hidden absolute right-5 z-10 top-5 rounded-[3rem] flex items-center justify-center"}>
                    <List onClick={openSesame}
                          className={`fill-off-white transition duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
                          size={32}/>
                </button>
                <ul className={`transition duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0 lg:opacity-100 select-none lg:select-auto pointer-events-none lg:pointer-events-auto"} flex flex-col items-center lg:flex-row justify-start gap-7 px-8`}>
                    <li className={`${linkHoverStyle} ${current === "/" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/"}>{s.home}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/servicios" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/servicios"}>{s.services}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/portafolio" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/portafolio"}>{s.work}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/blog" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/blog"}>{s.blog}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/contacto" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/contacto"}>{s.contact}</LocaleLink>
                    </li>
                    <div className={"hidden lg:flex"}>
                        <LanguageSwitcher lang={lang} state={[openLang, setOpenLang]}/>
                    </div>
                </ul>
                <div className={"lg:hidden"}>
                    <LanguageSwitcher lang={lang} state={[openLang, setOpenLang]}/>
                </div>
                <LocaleLink lang={lang} href={"/"} className={"relative z-20"} passHref>
                    <MarabuntaHor
                        className={"fill-white lg:ml-0 lg:pl-0 w-52 lg:w-44 lg:-mt-1 transition duration-200 ease-in-out hover:fill-marabunta-cyan"}/>
                </LocaleLink>
            </nav>
        </>
    );
}

export default Navbar;