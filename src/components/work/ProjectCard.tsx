"use client";

import {ProjectCardDirection, ProjectCardMetadata} from "@/types/work";
import {ServiceChip} from "@/components/work/ServiceChip";
import React, {ReactNode, useState} from "react";

type _CProps = {
    index: number,
    direction?: ProjectCardDirection,
    cardWidth?: string,
    cardHeight?: string,
    metadata: ProjectCardMetadata
    cover: ReactNode
    highlightColor? : string
}

export const ProjectCard = (props: _CProps) => {

    const [projectIsHovered, setProjectIsHovered] = useState(false);

    const directionClassMap: { [key in ProjectCardDirection]: string } = {
        "none": "",
        "right to left": "flex-col-reverse lg:flex-row-reverse",
        "left to right": "flex-col lg:flex-row",
        "downwards": "flex-col",
        "upwards": "flex-col-reverse",
    };

    const hoverAnimationClassMap: { [key in ProjectCardDirection]: string } = {
        "none": "-translate-x-2",
        "right to left": "translate-x-2",
        "left to right": "-translate-x-2",
        "downwards": "-translate-y-2",
        "upwards": "translate-y-2",
    };

    const handleMouseEnter = () => {
        setProjectIsHovered(true);
    };

    const handleMouseLeave = () => {
        setProjectIsHovered(false);
    };

    return (
        <li>
            <article onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                     className={`flex items-stretch justify-start ${directionClassMap[props.direction ?? "none"]} w-full gap-8`}>
                <div
                    className={`${props.cardWidth ?? "w-full"} ${props.cardHeight ?? "h-64 md:h-128 lg:h-144"} relative overflow-clip rounded-2xl border-4 border-solid transition-all duration-500 delay-75 ease-circular-in-out ${projectIsHovered ? `brightness-100 ${hoverAnimationClassMap[(props.direction ?? "none")]} ${props.highlightColor ?? ""}` : "border-off-white/10 brightness-50"}`}>
                    {props.cover}
                </div>
                <section className={"text-off-white min-w-[20rem] xl:min-w-[42rem] flex flex-col items-stretch justify-center gap-6"}>
                    <h2 className={`${["right to left", "left to right", "none"].includes(props.direction ?? "none") ? `${props.direction === "left to right" ? "text-center lg:text-end" : "text-center lg:text-start"} text-center xl:text-center` : "text-center"} text-3xl md:text-5xl xl:text-6xl cursor-default transition-all duration-300 ease-circular-in-out ${projectIsHovered ? "font-semibold" : "font-light"}`}>{props.metadata.title}</h2>
                    <ul className={`flex-wrap flex items-center ${["right to left", "left to right", "none"].includes(props.direction ?? "none") ? `${props.direction === "left to right" ? "justify-center lg:justify-end" : "justify-center lg:justify-start"} justify-center xl:justify-center` : "justify-center"} gap-4 w-full`}>
                        {props.metadata.chips.map((d, i) => {
                            return (
                                <li key={`project${props.index}Chip${i}`}>
                                    <ServiceChip href={d.href} name={d.name} category={d.category}/>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </article>
        </li>
    );
}