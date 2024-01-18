"use client";

import React, {useEffect, useRef, useState} from "react";
import {PlayFill} from "react-bootstrap-icons";

export default function Reel() {

    const cursorRef = useRef<HTMLDivElement>(null);
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const followMouse = (event : MouseEvent) => {
            const {clientX, clientY} = event;

            const mouseX = clientX - cursorRef.current!.offsetWidth / 2;
            const mouseY = clientY - cursorRef.current!.offsetHeight / 2;

            const keyframes = {
                transform: `translate(${mouseX}px, ${mouseY}px)`
            }

            cursorRef.current!.animate(keyframes, {
                duration: 500,
                fill: "forwards"
            });
        }

        if (typeof window !== "undefined") {
            document.addEventListener("mousemove", followMouse);
        }
        return () => {
            document.removeEventListener("mousemove", followMouse);
        }
    }, [cursorRef]);

    const toggleMute = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setMuted(!muted);
    };

    const togglePlay = (e: React.MouseEvent<HTMLVideoElement>) => {
        const reel = (e.target as HTMLVideoElement);
        if (playing) reel.pause();
        else reel.play();

        setPlaying(!playing);
    }

    return (
        <section className={"bg-black pt-16 pb-44"}>
            <div className={"mx-32 relative group"}>
                <video autoPlay muted={muted} loop playsInline height={1920*.85} onContextMenu={toggleMute} onClick={togglePlay}
                       width={1920*.85}
                       className={"w-full h-full rounded-2xl border-off-white/50 border-4 cursor-none"}> {/* bottom-44 md:bottom-24 lg:-bottom-9 xl:-bottom-24 2xl:-bottom-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-right-44 lg:-right-[14rem] xl:-right-72 2xl:-right-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100 */}
                    <source
                        src="/videos/reel2022.mp4"
                        type="video/mp4"/>
                </video>
                <div ref={cursorRef} className={"border-4 border-off-black opacity-0 h-2 aspect-square rounded-full z-[1000] pointer-events-none absolute -top-16 -left-52 bg-off-white transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:h-32 text-2xl font-bold inline-flex items-center justify-center gap-2 px-4"}>
                    <PlayFill size={72} />
                    <p className={"bg-clip-text text-transparent bg-black absolute -bottom-10 left-1/2 -translate-x-1/2"}>{playing ? "Pausar" : "Reproducir"}</p>
                </div>
            </div>
        </section>
    );
}