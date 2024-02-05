"use client";

import LocaleLink from "@/components/ui/LocaleLink";
import {MarabuntaHor} from "@/components/ui/svg/MarabuntaHor";
import {useEffect, useState} from "react";
import {List} from "react-bootstrap-icons";
import {Locale} from "@/i18n.config";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type _PProps = {
    current?: "/" | "/work" | "/contact" | "/blog",
    withBorder? : boolean,
    s : {[key : string] : any},
    lang : Locale
}

const Navbar = ({current, withBorder, s, lang}: _PProps) => {

    const linkHoverStyle: string = "transition duration-200 ease-in-out hover:text-marabunta-cyan";

    const [open, setOpen] = useState(false);
    const [openLang, setOpenLang] = useState(false);

    const openSesame = () => {
        setOpen(!open);
    };

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
    })

    return (
        <>
            <span onClick={() => setOpen(false)}
                  className={`fixed top-0 left-0 w-screen h-screen bg-off-black/50 z-[60] transition duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 select-none pointer-events-none"}`}/>
            <nav
                className={`${withBorder ? "lg:border-none border-off-white/20 border-2 " : ""} transition-all z-[60] duration-300 ease-in-out fixed lg:sticky top-2 lg:top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 ${open ? "h-[50vh] w-screen -translate-y-5 rounded-none py-10" : "h-20 w-96 translate-y-0 rounded-xl py-4"} lg:translate-y-0 lg:h-screen z-20 lg:max-w-[5rem] bg-off-black/40 backdrop-blur-3xl lg:rounded-none text-sm text-white uppercase flex flex-col-reverse lg:flex-col items-center justify-end gap-24 lg:gap-0 lg:justify-between px-6 lg:pb-7 lg:pt-14`}>
                <button
                    className={"lg:hidden absolute right-5 z-10 top-5 rounded-[3rem] flex items-center justify-center"}>
                    <List onClick={openSesame}
                                 className={`fill-off-white transition duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
                                 size={32}/>
                </button>
                <LanguageSwitcher lang={lang} state={[openLang, setOpenLang]} />
                <ul className={`transition duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0 lg:opacity-100 select-none lg:select-auto pointer-events-none lg:pointer-events-auto"} relative flex flex-col items-center lg:flex-row justify-start gap-7 px-8 lg:nav-rotate`}>
                    <li className={`${linkHoverStyle} ${current === "/" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/"}>{s.home}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/work" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/work"}>{s.work}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/blog" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/blog"}>{s.blog}</LocaleLink>
                    </li>
                    <li className={`${linkHoverStyle} ${current === "/contact" ? "text-marabunta-cyan" : ""}`}>
                        <LocaleLink lang={lang} href={"/contact"}>{s.contact}</LocaleLink>
                    </li>
                </ul>
                <LocaleLink lang={lang} href={"/"} className={"relative z-20 lg:-rotate-90"} passHref>
                    <MarabuntaHor
                        className={"fill-white lg:ml-16 lg:pl-20 w-52 lg:-mt-1 transition duration-200 ease-in-out hover:fill-marabunta-cyan"}/>
                </LocaleLink>
            </nav>
        </>
    );
}

export default Navbar;