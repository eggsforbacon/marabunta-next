import React from "react";
import Link from "next/link";

export const Hero = () => {


    return (
        <header
            className={"bg-marabunta-cyan w-full py-32 flex items-center justify-center xl:max-h-[68rem] h-[95vh] lg:h-[105vh] relative overflow-clip"}
        >
            <video autoPlay muted controls={false} playsInline height={1920}
                   width={1920 * .6} className={"absolute top-44 md:top-24 lg:-top-9 xl:-top-24 2xl:-top-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-left-44 lg:-left-[14rem] xl:-left-72 2xl:-left-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100"}>
                <source
                    src="/videos/webm/logo-webm.webm"
                    type="video/webm"/>
            </video>
            <div className={"group absolute translate-x-1/2 md:translate-x-0 right-1/2 md:right-24 2xl:right-32 bottom-16 md:bottom-56 xl:bottom-64 2xl:bottom-72 min-w-[256px] flex flex-col items-center justify-end text-center gap-6 transition-all duration-300 ease-quintic-in-out hover:translate-x-[31px]"}>
                <h1 className={"text-off-white text-xl lg:text-3xl font-base transition-all duration-300 ease-quintic-in-out group-hover:font-semibold group-hover:tracking-widest"}>Comunicamos Ideas</h1>
                <Link href={"/contact"} className={"rounded-full h-auto w-auto text-base md:text-xl z-40 py-2 md:py-3 px-6 md:px-12 font-semibold text-white flex items-center justify-center space-x-4 bg-marabunta-red fill-off-white shadow-md border-solid border-[3px] border-red-800 transition duration-300 ease-quintic-in-out group-hover:cursor-pointer group-hover:scale-110 group-hover:border-white"}>Contactanos</Link>
            </div>
        </header>
    );
}