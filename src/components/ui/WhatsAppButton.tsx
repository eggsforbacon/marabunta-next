'use client';

import React, { useState } from "react";

import {Whatsapp} from "react-bootstrap-icons";
import Link from "next/link";

export const WhatsappButton = () => {
    const [show, setShow] = useState(true);
    return (<section className="fixed right-4 bottom-4 !z-[60] ">
        {
            show && <span className="w-64 bg-white p-4 flex rounded-lg mb-4">
                <span>Bienvenido/a a Marabunta, ¿Cómo podemos ayudarte?</span>
                <span className="font-bold cursor-pointer" onClick={()=>setShow(false)}>X</span>
            </span>
        }
        
            <Link href={"https://wa.me/+573154767953"} target={"_blank"} rel={"noreferrer"} passHref style={{float: 'inline-end'}}
                className={`float-end text-white !z-[60] py-4 rounded-full px-4 lg:px-10 w-16 md:w-72 font-semibold flex items-center justify-center gap-4 backdrop-blur-lg bg-off-black/40 fill-white shadow-md transition duration-300 quintic-out hover:cursor-pointer hover:scale-110 hover:border-white focus:border-marabunta-yellow`}
            >
                <Whatsapp size={32}/>
                <p className={"max-md:hidden"}>¡Contáctanos!</p>
            </Link>
        </section>);
}