"use client";

import React, {useEffect, useRef, useState} from "react";
import useMeasure from 'react-use-measure';
import {useTrail, animated} from "@react-spring/web";
import MovingBall from "@/components/home/MovingBall";
import Image from "next/image";

const fast = {tension: 1200, friction: 40}
const slow = {mass: 10, tension: 100, friction: 60}
const trans = (x: number, y: number) =>
    `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

export const BlobPlayground = () => {
    const [containerSize, setContainerSize] = useState({w: 0, h: 0});
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = (containerRef.current as HTMLDivElement);
        setContainerSize({w: container.clientWidth, h: container.clientHeight});
    }, [containerRef]);

    const [trail, api] = useTrail(3, i => ({
        xy: [0, 0],
        config: i === 0 ? fast : slow,
    }));
    const [ref, {left, top}] = useMeasure();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        api.start({xy: [e.clientX - left, e.clientY - top]})
    }

    const renderNBalls = (n: number, containerWidth: number, containerHeight: number) => {
        const ballConfigs: { speed: number, size: number, initialPosition: { x: number, y: number }, initialDirection: { x: number, y: number } }[] = [];
        for (let i = 0; i < n; i++) {
            const speed = Math.floor(Math.random() * 4) + 1;
            const size = Math.floor(Math.random() * 128) + 32;

            const initialPosition = {
                x: Math.floor(Math.random() * containerWidth),
                y: Math.floor(Math.random() * containerHeight),
            };

            const initialDirection = {
                x: Math.random() * 2 - 1,
                y: Math.random() * 2 - 1,
            };

            ballConfigs.push({speed, size, initialPosition, initialDirection});
        }

        return (
            <>
                {
                    ballConfigs.map((ball, index) =>
                        (
                            <MovingBall key={`bal${index}`} speed={ball.speed} size={ball.size} containerHeight={containerHeight}
                                        containerWidth={containerWidth} initialDirection={ball.initialDirection}
                                        initialPosition={ball.initialPosition} backgroundColorClass={"bg-marabunta-red"}/>
                        )
                    )
                }
            </>
        );
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
                <div className={"pointer-events-none absolute h-136 w-[33rem] rounded-full bg-marabunta-red filter-goo top-4 right-168 animate-rotate-blob"}/>
                <div
                    className={"pointer-events-none absolute w-136 h-[33rem] rounded-full weird-blob-thingy filter-goo top-7 right-144 animate-rotate-blob animation-duration-[120s]"}/>
                <div
                    className={"pointer-events-none absolute h-112 w-[25rem] rounded-full bg-marabunta-red filter-goo top-8 -right-16"}/>
                <div
                    className={"pointer-events-none absolute h-72 w-[19rem] rounded-full bg-marabunta-red filter-goo bottom-44 left-16"}/>
                <Image src={"/images/home/svg/top-bezel.svg"} alt={"no-alt"} width={1920} height={286}
                       className={"absolute -bottom-14 select-none scale-[1.1] pointer-events-none"} priority quality={100}/>
                {/*{renderNBalls(1, containerSize.w, containerSize.h)}*/}
            </div>

        </div>
    );
}