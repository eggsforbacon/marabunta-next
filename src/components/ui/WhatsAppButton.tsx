'use client';

import React, {useState} from "react";

import {Whatsapp, X} from "react-bootstrap-icons";
import Link from "next/link";
import {usePathname} from "next/navigation";

export const WhatsappButton = () => {
    const [show, setShow] = useState(true);
    const navigation = usePathname();
    return (
        <>{(navigation !== "/cotizador") &&
            (
                <div className={"fixed right-4 bottom-4 !z-[60]"}>
                    <span
                        className={`w-64 p-4 hidden lg:flex rounded-lg mb-4 backdrop-blur-lg bg-slate-700/50 text-white px-3 pt-5 transition-all duration-200 ease-in-out ${show ? "opacity-100 pointer-events-auto select-auto" : "opacity-0 pointer-events-none select-none"}`}>
                        <span>Bienvenido/a a Marabunta, ¿Cómo podemos ayudarte?</span>
                        <button className={"font-bold cursor-pointer absolute right-2 top-2"}
                                onClick={() => setShow(false)}>
                            <X className={"-mr-1 -mt-1"} size={24}/>
                        </button>
                    </span>
                    <Link href={"https://wa.me/+573154767953"} target={"_blank"} rel={"noreferrer"} passHref
                          style={{float: 'inline-end'}}
                          className={`float-end text-white !z-[60] py-4 rounded-full px-4 lg:px-10 w-16 md:w-60 font-semibold flex items-center justify-center gap-4 backdrop-blur-lg bg-slate-700/50 fill-white shadow-md transition duration-300 quintic-out hover:cursor-pointer hover:scale-110 hover:border-white focus:border-marabunta-yellow`}
                    >
                        <Whatsapp size={32}/>
                        <p className={"max-md:hidden"}>¡Contáctanos!</p>
                    </Link>
                </div>
            )
        }</>
    );
}