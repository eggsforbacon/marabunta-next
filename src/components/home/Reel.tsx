"use client";

import React, {useEffect, useRef, useState} from "react";
import {PauseFill, PlayFill, VolumeMuteFill, VolumeUpFill} from "react-bootstrap-icons";

export default function Reel({t}: { t: { [_: string]: any } }) {

  const cursorRef = useRef<HTMLDivElement>(null);
  const rangeInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [seekbarValue, setSeekbarValue] = useState(0);

  const { pause, play } = t.reel;

  useEffect(() => {
    const followMouse = (event: MouseEvent) => {
      const {clientX, clientY} = event;

      const mouseX = clientX - cursorRef.current!.offsetWidth / 2;
      const mouseY = clientY - cursorRef.current!.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${mouseX}px, ${mouseY}px)`
      }

      cursorRef.current!.animate(keyframes, {
        duration: 400,
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

  const toggleMute = () => {
    setMuted(!muted);
  };

  const togglePlay = () => {
    const reel = videoRef.current!;
    if (playing) reel.pause();
    else reel.play();
    setPlaying(!playing);
  }

  const handleProgress = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const currentTime = e.currentTarget.currentTime;
    const maxSeconds = e.currentTarget.duration;

    setSeekbarValue(currentTime / maxSeconds * 100);
  }

  const handleSeekbarChange = () => {
    if (rangeInputRef.current) {
      const newValue = parseInt(rangeInputRef.current.value);
      setSeekbarValue(newValue);
      if (videoRef.current) {
        const duration = videoRef.current.duration;
        videoRef.current.currentTime = newValue / 100 * duration;
      }
    }
  };

  return (
      <section className={"mt-14 pt-24 pb-24 px-4 md:px-24 z-10"}>
        <p className="text-white font-bold text-center w-full text-[10vw] md:text-[12vw]">SHOWREEL</p>
        <div className={"relative group reel w-full"}>
          <video autoPlay muted={muted} loop playsInline height={1920 * .85}
                 onClick={togglePlay}
                 width={1920 * .85} onProgress={handleProgress} ref={videoRef}
                 className={"top-0 left-0 rounded-xl w-full aspect-[9/16] lg:aspect-auto object-cover lg:h-full cursor-none"}> {/* bottom-44 md:bottom-24 lg:-bottom-9 xl:-bottom-24 2xl:-bottom-9 -translate-x-1/2 md:translate-x-0 left-[55%] md:-right-44 lg:-right-[14rem] xl:-right-72 2xl:-right-[14rem] scale-[2] md:scale-125 lg:scale-100 xl:scale-75 2xl:scale-100 */}
            <source
                src="/videos/webm/reel2023.mp4"
                type="video/webm"/>
          </video>
          <div ref={cursorRef}
               className={"border-4 text-black border-off-black opacity-0 h-2 aspect-square rounded-full z-30 pointer-events-none absolute top-4 -left-24 bg-off-white transition-all duration-200 ease-in-out lg:group-hover:opacity-100 lg:group-hover:h-28 xl:group-hover:h-32 text-2xl font-bold inline-flex items-center justify-center gap-2 pl-2"}>
            {playing ? <PauseFill className="-ml-2" size={72}/> : <PlayFill size={72}/>}
            <p className={"bg-clip-text text-transparent bg-black absolute -bottom-10 left-1/2 -translate-x-1/2"}>{playing ? pause : play}</p>
          </div>
        </div>
        <div
            className={`transition-all duration-600 ease-in-out hover:opacity-100 ${playing ? "opacity-0" : "opacity-100"} transition-all duration-200 ease-in-out z-40 absolute bottom-8 md:bottom-16 xl:bottom-24 w-full left-1/2 -translate-x-1/2 flex items-center justify-between gap-6 lg:gap-16 px-10 md:px-32 xl:px-48 pb-24 bg-gradient-to-t from-black/80 via-black/60`}>
          <button className={"rounded-full p-2 flex items-center justify-center border border-off-white"}
                  onClick={togglePlay}>
            {
              playing ?
                  <PauseFill size={24} className={"aspect-square h-3 w-3 xl:h-auto xl:w-auto"}/> :
                  <PlayFill size={24} className={"aspect-square h-3 w-3 xl:h-auto xl:w-auto"}/>
            }
          </button>
          <input type={"range"} className={"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}
                 min={0} max={100} value={seekbarValue.toString()}
                 ref={rangeInputRef}
                 onChange={handleSeekbarChange}/>
          <button className={"rounded-full p-2 flex items-center justify-center border border-off-white"}
                  onClick={toggleMute}>
            {
              muted ?
                  <VolumeMuteFill size={24} className={"aspect-square h-3 w-3 xl:h-auto xl:w-auto"}/> :
                  <VolumeUpFill size={24} className={"aspect-square h-3 w-3 xl:h-auto xl:w-auto"}/>
            }
          </button>
        </div>
      </section>
  );
}