"use client";

import LocaleLink from "@/components/ui/LocaleLink";
import {MarabuntaHor} from "@/components/ui/svg/MarabuntaHor";
import {useEffect, useState} from "react";
import {List} from "react-bootstrap-icons";
import {Locale} from "@/_i18n.config";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

type _PProps = {
  current?: "/" | "/servicios" | "/portafolio" | "/equipo" | "/blog" | "/cotizador",
  withBorder?: boolean,
  s: { [key: string]: any },
  lang: Locale,
  blogData? : {
    slugs : {
      en : string,
      es : string,
    }
  }
}

const Navbar = ({current, s, lang, blogData}: _PProps) => {

  const [open, setOpen] = useState(false);
  const [openLang, setOpenLang] = useState(false);

  const openSesame = () => {
    setOpen(!open);
  };

  const linkHoverStyle: string = "transition-all duration-200 ease-in-out hover:text-marabunta-cyan";

  useEffect(() => {


    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setOpen(false);
        setOpenLang(false);
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {
      });
    }
  });

  const pickSlug = () : string | undefined => {
    return blogData ? blogData.slugs[lang] : undefined;
  }

  return (
      <>
            <span onClick={() => setOpen(false)}
                  className={`fixed top-0 left-0 w-screen h-screen bg-off-black/50 z-[60] transition duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 select-none pointer-events-none"}`}/>
        <nav
            className={`transition-all z-[60] duration-300 ease-in-out fixed top-2 lg:top-6 left-1/2 -translate-x-1/2 ${open ? "h-112 md:h-64 w-screen -translate-y-5 rounded-none py-10" : "h-20 w-[90%] md:w-4/5 translate-y-0 rounded-xl py-4"} lg:translate-y-0 lg:h-auto z-20 lg:w-224 xl:w-288 2xl:w-320 bg-neutral-800/80 shadow-sm backdrop-blur-3xl lg:rounded-3xl text-sm text-neutral-400 uppercase flex flex-col lg:flex-row items-center justify-end gap-8 lg:gap-0 lg:justify-between px-6 lg:py-4`}>
          <div className={`flex flex-row items-center w-full lg:w-auto justify-between h-20 lg:h-10 absolute lg:relative px-6 lg:px-0 transition-all duration-300 ease-in-out ${open ? "top-4" : "-top-1"} lg:top-auto`}>
            <LocaleLink lang={lang} href={"/"} className={"relative z-20 flex group gap-2"} passHref>
              {/* <div
                  className={`${open ? "opacity-0" : "animate-fade-ant"} lg:animate-none lg:opacity-0 absolute -top-[1.75rem] lg:top-auto h-16 aspect-square lg:relative flex items-center justify-center transition-all duration-700 ease-in-out group-hover:opacity-100`}>
                <Image src={"/_ant.svg"} alt={"Marabunta Agencia Creativa"} width={32} height={32} className={"rotate-90"}/>
              </div> */}
              <MarabuntaHor
                    className={"fill-white lg:ml-0 lg:pl-0 w-40 lg:w-44 lg:-mt-1 transition duration-200 ease-in-out hover:fill-marabunta-cyan"}/> {/* Provisional mientras se aprueba la hormiga */}
                  {/* className={`${open ? "opacity-100" : "animate-fade-marabunta"} lg:animate-none fill-white absolute -top-4 lg:top-auto lg:relative lg:ml-0 lg:pl-0 w-40 lg:w-44 lg:-mt-1 transition-all duration-200 ease-in-out hover:fill-marabunta-cyan`}/> */}
            </LocaleLink>
            <button
                className={"lg:hidden z-10 flex items-center justify-center"}>
              <List onClick={openSesame}
                    className={`fill-off-white transition duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
                    size={32}/>
            </button>
          </div>
          <ul className={`transition-all duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0 lg:opacity-100 select-none lg:select-auto pointer-events-none lg:pointer-events-auto"} flex flex-col items-center md:flex-row justify-start gap-7 lg:pl-8`}>
            <li className={`${linkHoverStyle} ${current === "/" ? "text-off-white font-bold" : ""}`}>
              <LocaleLink lang={lang} href={"/"}>{s.home}</LocaleLink>
            </li>
            <li className={`${linkHoverStyle} ${current === "/equipo" ? "text-off-white font-bold" : ""}`}>
              <LocaleLink lang={lang} href={"/equipo"}>{s.team}</LocaleLink>
            </li>
            <li className={`${linkHoverStyle} ${current === "/portafolio" ? "text-off-white font-bold" : ""}`}>
              <LocaleLink lang={lang} href={"/portafolio"}>{s.work}</LocaleLink>
            </li>
            <li className={`${linkHoverStyle} ${current === "/blog" ? "text-off-white font-bold" : ""}`}>
              <LocaleLink lang={lang} href={"/blog"}>{s.blog}</LocaleLink>
            </li>
             <li className={`${linkHoverStyle} ${current === "/cotizador" ? "text-off-white font-bold" : ""}`}>
              <LocaleLink lang={lang} href={"/cotizador"}>{s.quote}</LocaleLink>
            </li>
            <div className={"hidden lg:flex"}>
              <LanguageSwitcher lang={lang} state={[openLang, setOpenLang]}/>
            </div>
          </ul>
          <div className={"lg:hidden"}>
            <LanguageSwitcher lang={lang} state={[openLang, setOpenLang]} slug={pickSlug()}/>
          </div>
        </nav>
      </>
  );
}

export default Navbar;