"use client";

import Image from "next/image";

export const Key360 = () => {
    return (
        <section className={"w-full h-256 relative overflow-x-clip text-off-white mt-16"}>
            {/*<span className={"absolute w-full h-224 top-16 left-0 z-0 bg-black select-none pointer-events-none"}/>*/}
            <Image src={"/images/home/svg/yellow-key-bezel.svg"} alt={"no-alt"} width={1920} height={1920}
                   className={"absolute -top-40 right-0 select-none scale-100"} priority quality={100}/>
        </section>
    );
}