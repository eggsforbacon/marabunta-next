import React from "react";

export const Hero = () => {


    return (
        <header
            className={"bg-marabunta-cyan w-full py-32 pr-64 pl-[21rem] flex items-center justify-center h-[105vh] relative debug"}
        >
            <video autoPlay muted controls={false} playsInline height={1920}
                   width={1920 * .8} className={"absolute -top-3 -left-[17rem]"}>
                {/*<source*/}
                {/*    src="/videos/mov/logo-mov.mov"*/}
                {/*    type='video/mp4; codecs="hvc1"'/>*/}
                <source
                    src="/videos/webm/logo-webm.webm"
                    type="video/webm"/>
            </video>


        </header>
    );
}