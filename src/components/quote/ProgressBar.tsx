"use client";

import { useEffect, useState } from "react";
import { useQuoteStore } from "@/store/quote";
import {
    motion,
    useMotionValueEvent,
    useSpring,
    useTransform,
} from "framer-motion";

const ProgressBar = () => {
    const { progress, current, setFinish, subflowQueue, stack } = useQuoteStore();

    const size = 90;
    const center = size / 2;

    const [displayProgress, setDisplayProgress] = useState(0);

    const progressSpring = useSpring(progress, {
        stiffness: 80,
        damping: 30,
        restDelta: 0.1,
    });

    useEffect(() => {
        progressSpring.set(progress);

        if (
            !stack.includes("intro") &&
            (progress >= 100 || subflowQueue.length <= 1) &&
            !subflowQueue.includes("BODEGA")
        ) {
            setFinish(true);
        } else {
            setFinish(false);
        }
    }, [progress, progressSpring, setFinish, stack, subflowQueue]);

    useMotionValueEvent(progressSpring, "change", (latest) => {
        setDisplayProgress(Math.round(latest));
    });

    const liquidY = useTransform(progressSpring, [0, 100], [size + 5, 0]);

    const wavePath = useTransform(liquidY, (y) => {
        return `M 0 ${y} C ${size / 2} ${y - 15}, ${size / 2} ${y + 15}, ${size} ${y} L ${size} ${size} L 0 ${size} Z`;
    });

    const wavePath2 = useTransform(liquidY, (y) => {
        return `M 0 ${y} C ${size / 2} ${y + 15}, ${size / 2} ${y - 15}, ${size} ${y} L ${size} ${size} L 0 ${size} Z`;
    });

    const isVisible = current !== "intro" && current !== "BODEGA";

    return (
        <motion.div
            className="fixed bottom-16 right-6 translate-x-1/2 md:bottom-8 md:right-8 md:translate-x-0 z-50"
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 50,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className="relative" style={{ width: size, height: size }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <defs>
                        <filter id="gooey-liquid">
                            <feGaussianBlur
                                in="SourceGraphic"
                                stdDeviation="4"
                                result="blur"
                            />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>

                        <linearGradient
                            id="liquid-gradient"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#E60023" />
                            <stop offset="100%" stopColor="#129CC0" />
                        </linearGradient>

                        <mask id="circle-mask">
                            <circle
                                cx={center}
                                cy={center}
                                r={size / 2 - 4}
                                fill="white"
                            />
                        </mask>
                    </defs>

                    <circle
                        cx={center}
                        cy={center}
                        r={size / 2 - 2}
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="3"
                        fill="rgba(10, 10, 10, 0.7)"
                    />

                    <g filter="url(#gooey-liquid)" mask="url(#circle-mask)">
                        <motion.path
                            d={wavePath}
                            fill="url(#liquid-gradient)"
                            opacity={0.7}
                        />
                        <motion.path
                            d={wavePath2}
                            fill="url(#liquid-gradient)"
                            opacity={0.5}
                        />
                    </g>
                </svg>

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white pointer-events-none">
                    <motion.span className="font-bold text-2xl drop-shadow-md">
                        {displayProgress}
                    </motion.span>
                    <span className="font-bold text-lg drop-shadow-md pt-1">%</span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProgressBar;