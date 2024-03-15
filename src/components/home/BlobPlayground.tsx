"use client";

import React from "react";
import useMeasure from 'react-use-measure';
import {animated, useTrail} from "@react-spring/web";
import liquid from "../../../public/json/liquid.json";
import redLiquid from "../../../public/json/red.json";
import blueLiquid from "../../../public/json/blue.json";
import {useLottie} from "lottie-react";

const fast = {mass: 10, tension: 120, friction: 80}
const slow = {mass: 100, tension: 90, friction: 12}
const trans = (x: number, y: number) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const BlobPlayground = () => {

    const [trail, api] = useTrail(3, i => ({
        xy: [0, 0],
        config: i === 0 ? fast : slow,
    }));
    const [ref, {left, top}] = useMeasure();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        api.start({xy: [e.clientX - left, e.clientY - top]})
    }

    const baseOptions = {
        loop: true,
        autoplay: true,
        width: 1920,
        height: 1080,
    }

    const liquidOptions = {
        animationData: liquid,
        ...baseOptions,
    };

    const blueOptions = {
        animationData: blueLiquid,
        ...baseOptions
    };

    const redOptions = {
        animationData: redLiquid,
        ...baseOptions
    };


    const {View: Liquid} = useLottie(liquidOptions,);
    const {View: Blue} = useLottie(blueOptions,);
    const {View: Red} = useLottie(redOptions,);

    return (
        <div className={"absolute top-0 bottom-0 right-0 left-0"}>
            <svg style={{position: 'absolute', width: 0, height: 0}}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25"/>
                    <feColorMatrix
                        in="blur"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 60 -12"
                    />
                </filter>
            </svg>
            <div ref={ref} className={"absolute w-full h-full lg:filter-goo select-none bg-transparent"}
                 onMouseMove={handleMouseMove}>
                {trail.map((props, index) => (
                    <animated.div
                        className={"hidden lg:block absolute will-change-transform rounded-full bg-marabunta-cyan/[0.8] opacity-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] [&:nth-child(1)]:aspect-square [&:nth-child(1)]:h-20 [&:nth-child(2)]:aspect-square [&:nth-child(2)]:h-36 [&:nth-child(3)]:aspect-square [&:nth-child(3)]:h-44 after:content-[''] after:absolute after:top-4 after:left-4 after:w-4 after:h-4 after:rounded-full after:bg-marabunta-cyan/[0.8]"}
                        key={index} style={{transform: props.xy.to(trans)}}/>
                ))}
                <div className={"absolute bottom-0 right-0 h-full w-full object-cover lg:block hidden z-20"}>
                    {Liquid}
                </div>
                <div className={"absolute top-28 md:top-40 lg:hidden right-44 md:right-96 w-full object-cover scale-[2.1]"}>
                    {Blue}
                </div>
                <div className={"absolute bottom-20 md:bottom-52 lg:hidden right-48 md:right-80 w-full object-cover scale-[2]"}>
                    {Red}
                </div>
            </div>
        </div>
    );
}