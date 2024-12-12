import React from "react";
import {BlobPlayground} from "@/components/home/BlobPlayground";

export const Hero = () => {

    return (
        <header
            className={"bg-off-black w-full h-[100vh] md:h-screen lg:h-auto flex items-center justify-center relative overflow-clip"}
        >
            <BlobPlayground/>
            <video autoPlay muted controls={false} playsInline height={1720}
                   width={1920 * .8}
                   className={"pointer-events-none absolute top-1/3 lg:-translate-y-24 -translate-y-1/3 2xl:translate-y-0 right-72 md:right-64 lg:-top-10 lg:right-0 scale-[2.5] md:scale-[1.8] lg:scale-100"}> {/* bottom-44 md:bottom-24 lg:-bottom-9 xl:-bottom-24 2xl:-bottom-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-right-44 lg:-right-[14rem] xl:-right-72 2xl:-right-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100 */}
                <source
                    src="/videos/webm/logo-webm.webm"
                    type="video/webm"/>
            </video>
        </header>
    );
}