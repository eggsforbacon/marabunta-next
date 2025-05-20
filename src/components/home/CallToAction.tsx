"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CallToAction() {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
        setIsIOS(ios);
    }, []);

    return (
        <section className={"py-8 w-full bg-marabunta-red flex flex-col justify-end items-center relative"}>
            <h2 className={"text-off-white text-4xl text-center lg:text-start lg:text-7xl font-semibold"}>¿Tienes una idea</h2>
            {isIOS ? (
                <h3 className="text-off-white text-6xl lg:text-8xl font-bold mt-4">
                    CREATIVA?
                </h3>
            ) : (
                <video autoPlay muted={true} controls={false} playsInline loop height={1920}
                    width={1920}
                    className={"pointer-events-none"}> {/* bottom-44 md:bottom-24 lg:-bottom-9 xl:-bottom-24 2xl:-bottom-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-right-44 lg:-right-[14rem] xl:-right-72 2xl:-right-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100 */}
                    <source
                        src="/videos/webm/creativa.webm"
                        type="video/webm" />
                    <source
                        src="/videos/webm/creativa.mp4"
                        type="video/mp4" />
                </video>
            )}
            <Link
                href="https://wa.me/+573154767953"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-neutral-200/0 border-none rounded-full text-white text-xl lg:text-4xl font-semibold transition duration-200 ease-quintic-in-out hover:bg-off-white hover:text-marabunta-red hover:scale-105 focus:outline-0 focus:bg-off-white focus:text-marabunta-red focus:scale-95"
            >
                Contáctanos
            </Link>
        </section>
    );
}