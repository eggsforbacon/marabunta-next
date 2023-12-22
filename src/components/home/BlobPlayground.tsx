"use client";

import React from "react";
import useMeasure from 'react-use-measure';
import {animated, useTrail} from "@react-spring/web";
import liquid from "../../../public/json/liquid.json";
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

    const liquidOptions = {
        animationData: liquid,
        loop: true,
        autoplay: true,
        width: 1920,
        height: 1080,
    }

    const {View: Liquid} = useLottie(liquidOptions,);

    return (
        <div className={"absolute top-0 bottom-0 right-0 left-0"}>
            <svg style={{position: 'absolute', width: 0, height: 0}}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="25"/>
                    <feColorMatrix
                        in="blur"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 75 -12"
                    />
                </filter>
            </svg>
            <div ref={ref} className={"absolute w-full h-full filter-goo select-none bg-transparent"}
                 onMouseMove={handleMouseMove}>
                {trail.map((props, index) => (
                    <animated.div
                        className={"absolute will-change-transform rounded-full bg-marabunta-cyan/[0.8] opacity-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] [&:nth-child(1)]:aspect-square [&:nth-child(1)]:h-20 [&:nth-child(2)]:aspect-square [&:nth-child(2)]:h-36 [&:nth-child(3)]:aspect-square [&:nth-child(3)]:h-44 after:content-[''] after:absolute after:top-4 after:left-4 after:w-4 after:h-4 after:rounded-full after:bg-marabunta-cyan/[0.8]"}
                        key={index} style={{transform: props.xy.to(trans)}}/>
                ))}
                <div className={"absolute bottom-0 left-0 h-full w-full"}>
                    {Liquid}
                </div>
            </div>
        </div>
    );
}