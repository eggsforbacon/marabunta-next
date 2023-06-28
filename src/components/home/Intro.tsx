"use client";

import are from "../../../public/json/somos.json";
import {useLottie, useLottieInteractivity} from "lottie-react";
import Image from "next/image";

export const Intro = () => {

    const options = {
        animationData: are,
    }

    const lottieObj = useLottie(options,);
    const Animation = useLottieInteractivity({
        lottieObj,
        mode: "scroll",
        actions: [
            {
                visibility: [0, 0.35],
                type: "stop",
                frames: [1],
            },
            {
                visibility: [0.35, 0.75],
                type: "seek",
                frames: [1, 35],
            },
        ],
    });

    return (
        <section className={"bg-marabunta-red w-full h-224 relative"}>
            <Image src={"/images/home/svg/top-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                   className={"absolute -top-44 select-none scale-[1.1]"} priority quality={100}/>
            <div className={"absolute -top-10 left-44"}>
                {Animation}
            </div>
        </section>
    );
}