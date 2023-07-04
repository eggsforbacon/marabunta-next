"use client";

import Link from "next/link";
import {MarabuntaHor} from "@/components/ui/svg/MarabuntaHor";
import {useEffect, useState} from "react";
import {ChevronDown} from "react-bootstrap-icons";

type _PProps = {
    current?: "/" | "/work" | "/contact" | "/blog",
}

const Navbar = (props: _PProps) => {

    const linkHoverStyle: string = "transition duration-200 ease-in-out hover:text-marabunta-cyan";

    const [open, setOpen] = useState(false);

    // What are you gonna do, sue me?
    const openSesame = () => {
        setOpen(!open);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
               setOpen(false);
            });
        }
        return () => {
            window.removeEventListener("scroll", () => {});
        }
    })

    return (
        <>
            <span onClick={() => setOpen(false)}
                  className={`fixed top-0 left-0 w-screen h-screen bg-off-black/80 z-40 transition duration-300 ease-in-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 select-none pointer-events-none"}`}/>
            <nav
                className={`transition-all z-50 duration-300 ease-in-out fixed lg:sticky top-5 lg:top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 ${open ? "h-[50vh] w-screen -translate-y-5 rounded-none" : "h-20 w-[95%] translate-y-0 rounded-xl"} lg:translate-y-0 lg:h-screen z-20 lg:max-w-[5rem] bg-off-black lg:rounded-none text-sm text-white uppercase flex flex-col-reverse lg:flex-col items-center justify-end gap-24 lg:gap-0 lg:justify-between py-4 px-6 lg:py-7`}>
                <button
                    className={"lg:hidden absolute z-10 -bottom-2.5 rounded-[3rem] bg-off-black flex items-center justify-center p-2"}>
                    <ChevronDown onClick={openSesame}
                                 className={`fill-neutral-500 transition duration-300 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
                                 size={22}/>
                </button>
                <ul className={`transition duration-300 ease-in-out ${open ? "opacity-100" : "opacity-0 lg:opacity-100 select-none lg:select-all pointer-events-none lg:pointer-events-auto"} relative flex flex-col items-center lg:flex-row justify-start gap-7 px-8 lg:nav-rotate`}>
                    <li className={`${linkHoverStyle} ${props.current === "/" ? "text-marabunta-cyan" : ""}`}>
                        <Link href={"/"}>Nosotros</Link>
                    </li>
                    <li className={`${linkHoverStyle} ${props.current === "/work" ? "text-marabunta-cyan" : ""}`}>
                        <Link href={"/work"}>Trabajo</Link>
                    </li>
                    <li className={`${linkHoverStyle} ${props.current === "/contact" ? "text-marabunta-cyan" : ""}`}>
                        <Link href={"/contact"}>Contacto</Link>
                    </li>
                    <li className={`${linkHoverStyle} ${props.current === "/blog" ? "text-marabunta-cyan" : ""}`}>
                        <Link href={"/blog"}>Blog</Link>
                    </li>
                </ul>
                <Link href={"/"} className={"relative z-20 lg:-rotate-90"} passHref>
                    <MarabuntaHor
                        className={"fill-white lg:ml-16 lg:pl-20 w-52 lg:-mt-1 transition duration-200 ease-in-out hover:fill-marabunta-cyan"}/>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;