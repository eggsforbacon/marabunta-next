"use client";

import are from "../../../public/json/somos.json";
import {useLottie, useLottieInteractivity} from "lottie-react";
import Image from "next/image";
import {motion, useScroll, useTransform, Variants} from "framer-motion";
import {useWindowSize} from "@uidotdev/usehooks";
import {breakPoints} from "@/types/common";

export const Intro = ({s}: { s: { [key: string]: any } }) => {

    const {scrollYProgress} = useScroll();
    const {width: windowWidth} = useWindowSize();

    const options = {
        animationData: are,
        width: 1138,
        height: 640,
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
        ["-40%", "35%", "100%"]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0.1, 0.25, 0.8],
        ["0.1", "0.8", "0"]
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

    const splitTitle = () => {
        const split = (s.title as string).split('\n');
        return (
            split
                .map((p, i) => <span
                    key={i}>{p}{i !== split.length - 1
                    ? <><br/><br/></>
                    : <></>}</span>
                )
        );
    }

    return (
        <section
            className={"bg-marabunta-red w-full h-224 md:h-208 lg:h-224 relative overflow-x-clip text-off-white z-10 flex flex-col items-center justify-end"}>
            {/*<Image src={"/images/home/svg/top-bezel.svg"} alt={"no-alt"} width={1920} height={286}*/}
            {/*       className={"absolute -top-12 md:-top-24 lg:-top-36 xl:-top-44 select-none scale-[1.1] pointer-events-none"} priority quality={100}/>*/}
            <Image src={"/images/home/svg/bottom-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                   className={"absolute -bottom-10 lg:-bottom-24 right-20 select-none scale-[1.6] md:scale-125 pointer-events-none"}
                   priority quality={100}/>
            <section className={"absolute -top-10 left-0 w-full h-full"}>
                <p className={"sr-only"}>{s.sr}</p>
                <motion.div
                    className={"absolute -top-28 md:-top-44 lg:-top-36 -left-2 md:left-4 lg:left-56 xl:left-112 2xl:left-136 w-120 md:w-fit h-120 md:h-fit pointer-events-none select-none"}
                    style={windowWidth! < breakPoints.md ?? false ? {} : {x, opacity}}
                >
                    <Image src={"/images/home/png/marabuntaVerticalRed.png"}
                           alt={"Marabunta en rojo, separado en 3 grupos de sílabas alineado a la derecha, en minúsculas"}
                           width={640} height={360} loading={"lazy"} quality={100}
                           className={"scale-[.8] md:scale-75 lg:scale-[.8] 2xl:scale-90"}/>
                </motion.div>
                <div
                    className={"h-128 md:h-144 lg:h-192 xl:h-224 2xl:h-256 aspect-square absolute top-16 md:top-24 lg:top-12 2xl:top-0 -left-8 md:-left-12 xl:left-12 2xl:left-0"}>
                    {Animation}
                </div>
                <h2 className={"absolute top-28 left-4 md:left-12 xl:left-32 uppercase tracking-wide font-semibold text-2xl md:text-4xl xl:text-5xl"}>Nosotros</h2>
            </section>
            <motion.article
                initial="offscreen"
                whileInView="onscreen"
                viewport={{once: true, amount: 0.4}}
                variants={cardVariants}
                className={"relative md:absolute text-center md:text-start right-0 md:right-8 lg:right-12 xl:right-32 bottom-44 md:bottom-72 2xl:bottom-56 flex flex-col items-stretch md:items-start justify-center gap-6"}>
                <h3 className={"text-2xl lg:text-3xl font-bold"}>{splitTitle()}<br/>{(s.copy as string).split('\n').map((p, i) =>
                    <span
                        key={i}>{p}<br/></span>)}</h3>
                <p className={"text-xl lg:text-2xl font-base"}>{(s.body as string).split('\n').map((p, i) => <span
                    key={i}>{p}<br/></span>)}
                </p>
            </motion.article>
            <Image src={"/images/home/svg/black-key-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                   className={"absolute -bottom-128 select-none scale-[1.75] z-30 pointer-events-none"} priority quality={100}/>
        </section>
    );
}