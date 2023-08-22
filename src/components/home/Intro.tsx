"use client";

import are from "../../../public/json/somos.json";
import {useLottie, useLottieInteractivity} from "lottie-react";
import Image from "next/image";
import {motion, useScroll, useTransform, Variants} from "framer-motion";

export const Intro = () => {

    const {scrollYProgress} = useScroll();

    const options = {
        animationData: are,
        height: 640,
        width: 1138,
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

    const x = useTransform(
        scrollYProgress,
        [0, 0.25, 0.8],
        ["-40%", "10%", "70%"]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.7],
        ["0.1", "1", "0"]
    )

    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 50,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.5
            }
        }
    };

    return (
        <section className={"bg-marabunta-red w-full h-224 relative overflow-x-clip text-off-white"}>
            <Image src={"/images/home/svg/top-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                   className={"absolute -top-44 select-none scale-[1.1]"} priority quality={100}/>
            <section className={"absolute -top-10 left-20 w-full h-full"}>
                <p className={"sr-only"}>Nosotros somos Marabunta</p>
                <motion.div
                    className={"absolute -top-36 left-136 w-fit h-fit"}
                    style={{x, opacity}}
                >
                    <Image src={"/images/home/png/marabuntaVerticalRed.png"}
                           alt={"Marabunta en rojo, separado en 3 grupos de sílabas alineado a la derecha, en minúsculas"}
                           width={640} height={360} loading={"lazy"} quality={100}
                           className={"scale-90"}/>
                </motion.div>
                <div className={"h-256 aspect-square absolute top-0 left-0"}>
                    {Animation}
                </div>
                <h2 className={"absolute top-28 left-32 uppercase tracking-wide font-semibold text-5xl"}>Nosotros</h2>
            </section>
            <motion.article
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardVariants}
                className={"absolute right-32 bottom-56 flex flex-col items-start justify-center gap-6 text-start"}>
                <h3 className={"text-3xl font-bold"}>{"Trabajamos en equipo,"}<br/>{"le ponemos el alma a todo"}<br/>{"lo que hacemos"}</h3>
                <p className={"text-2xl font-base"}>{"Buscamos materializar ideas,"}<br/>{"cumplir sueños y generar"}<br/>{"en cada proyecto experiencias"}<br/>{"llenas de creatividad."}
                </p>
            </motion.article>
        </section>
    );
}