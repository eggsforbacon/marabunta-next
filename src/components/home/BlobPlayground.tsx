"use client";

import React, {useEffect, useRef} from "react";
import useMeasure from 'react-use-measure';
import {useTrail, animated} from "@react-spring/web";
import Image from "next/image";

const fast = {tension: 1200, friction: 40}
const slow = {mass: 10, tension: 100, friction: 60}
const trans = (x: number, y: number) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const BlobPlayground = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = (containerRef.current as HTMLDivElement);
    }, [containerRef]);

    const [trail, api] = useTrail(3, i => ({
        xy: [0, 0],
        config: i === 0 ? fast : slow,
    }));
    const [ref, {left, top}] = useMeasure();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        api.start({xy: [e.clientX - left, e.clientY - top]})
    }

    return (
        <div ref={containerRef} className={"absolute top-0 bottom-0 right-0 left-0"}>
            <svg style={{position: 'absolute', width: 0, height: 0}}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30"/>
                    <feColorMatrix
                        in="blur"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 50 -12"
                    />
                </filter>
            </svg>
            <div ref={ref} className={"absolute w-full h-full filter-goo select-none bg-transparent"}
                 onMouseMove={handleMouseMove}>
                {trail.map((props, index) => (
                    <animated.div className={"absolute will-change-transform rounded-full bg-marabunta-red opacity-60 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] [&:nth-child(1)]:aspect-square [&:nth-child(1)]:h-20 [&:nth-child(2)]:aspect-square [&:nth-child(2)]:h-36 [&:nth-child(3)]:aspect-square [&:nth-child(3)]:h-44 after:content-[''] after:absolute after:top-4 after:left-4 after:w-4 after:h-4 after:rounded-full after:bg-marabunta-red/80"} key={index} style={{ transform: props.xy.to(trans) }} />
                ))}
                <div className={"pointer-events-none absolute 2xl:w-[33rem] 2xl:h-136 rounded-full bg-marabunta-red filter-goo top-4 right-168 animate-rotate-blob"}/>
                <div
                    className={"pointer-events-none absolute 2xl:w-136 2xl:h-[33rem] rounded-full weird-blob-thingy filter-goo top-7 right-144 animate-rotate-blob animation-duration-[120s]"}/>
                <div
                    className={"pointer-events-none absolute 2xl:w-[25rem] 2xl:h-112 rounded-full bg-marabunta-red filter-goo top-8 -right-16"}/>
                <div
                    className={"pointer-events-none absolute  2xl:w-[19rem] 2xl:h-72 rounded-full bg-marabunta-red filter-goo bottom-44 left-16"}/>
                <Image src={"/images/home/svg/top-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                       className={"absolute -bottom-14 select-none scale-[1.1] pointer-events-none"} priority quality={100}/>
                {/*{renderNBalls(1, containerSize.w, containerSize.h)}*/}
            </div>

        </div>
    );
}