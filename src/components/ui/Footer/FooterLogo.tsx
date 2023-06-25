"use client";

import Image from "next/image";
import Link from "next/link";
import {Dispatch, SetStateAction, useState} from "react";

export const FooterLogo = () => {
    const [focused, setFocused]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [hovered, setHovered]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const focusedStyle: string = "opacity-100 translate-x-2 -translate-y-2";

    return (
        <Link href={"/"} passHref className={"relative focus:outline-none focus:cursor-pointer"}
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
              onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Image src={"/images/svg/marabunta-white-border.svg"} className={`text-off-white border-solid border-y-2 border-transparent relative transition duration-200 ease-back-in-out ${focused ? "border-y-marabunta-red" : ""}`}
                   alt={"Marabunta"} width={1200} height={220}/>
            <Image id={"footerTopLogo"} src={"/images/svg/marabunta-white.svg"}
                   className={`text-off-white absolute left-0 -top-0 transition duration-200 ease-back-in-out ${focused || hovered ? focusedStyle : "opacity-0"}`}
                   alt={"Marabunta"} width={1200} height={220}/>
        </Link>
    );
}