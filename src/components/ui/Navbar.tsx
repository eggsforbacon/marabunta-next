"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

const Navbar = () => {

    const [visible, setVisible] = useState(true);
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);

    const navRef = useRef(null);

    const handleMouseEnter = () => {
        setHovered(true);
        if (!visible) {
            setVisible(true);
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (!hovered && !focused) {
            setVisible(false);
        }
    };

    const handleFocus = () => {
        setFocused(true);
        setVisible(true);
    }

    const handleBlur = () => {
        setFocused(false);
        if (!hovered && !focused) {
            setVisible(false);
        }
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            if (!hovered && !focused) {
                setVisible(false);
                clearTimeout(timeout);
            }
        };

        const handleStartTimer = () => {
            timeout = setTimeout(() => {
                setVisible(false);
            }, 5000);
        };

        handleStartTimer();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeout);
        };
    }, [focused, hovered]);

    return (
        <nav ref={navRef}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}
             className={`transition-opacity duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} sticky top-0 left-0 z-40 max-h-[5rem] bg-off-black text-sm text-white uppercase flex flex-row-reverse items-center justify-between px-6 py-7`}>
            <ul className={"relative flex items-center flex-row-reverse justify-start gap-7 px-8"}>
                <li>
                    <Link onFocus={handleFocus} onBlur={handleBlur} href={"/"}>Nosotros</Link>
                </li>
                <li>
                    <Link onFocus={handleFocus} onBlur={handleBlur} href={"/work"}>Proyectos</Link>
                </li>
                <li>
                    <Link onFocus={handleFocus} onBlur={handleBlur} href={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link onFocus={handleFocus} onBlur={handleBlur} href={"/contact"}>Contacto</Link>
                </li>
            </ul>
            <Link href={"/"} className={"relative"} passHref onFocus={handleFocus} onBlur={handleBlur}>
                <Image src={"/images/svg/marabunta-white.svg"} alt={"Marabunta, ir a inicio"} width={140} height={28}
                       priority/>
            </Link>
        </nav>
    );
}

export default Navbar;