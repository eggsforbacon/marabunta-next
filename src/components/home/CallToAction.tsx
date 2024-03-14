import React from "react";

export default function CallToAction() {
    return (
        <section className={"h-64 lg:h-208 w-full bg-marabunta-red flex flex-col justify-end items-center relative"}>
            <h2 className={"text-off-white text-4xl text-center lg:text-start lg:text-7xl font-semibold"}>¿Tienes una idea</h2>
            <video autoPlay muted controls={false} playsInline height={1920}
                   width={1920}
                   className={"pointer-events-none"}> {/* bottom-44 md:bottom-24 lg:-bottom-9 xl:-bottom-24 2xl:-bottom-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-right-44 lg:-right-[14rem] xl:-right-72 2xl:-right-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100 */}
                <source
                    src="/videos/webm/creativa.webm"
                    type="video/webm"/>
            </video>
        </section>
    );
}