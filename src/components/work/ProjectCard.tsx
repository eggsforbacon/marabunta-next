"use client";

import React, {ReactNode, useEffect, useRef} from "react";

export default function ProjectCard({children}: {
  children: ReactNode[],
}) {

  const boundingRef = useRef<HTMLDivElement>(null);



  return (
      <div ref={boundingRef} draggable={false}
           className={"group/card shrink-0 cursor-grab rounded-lg md:mt-12 flex flex-col items-center justify-center text-8xl text-off-white font-bold h-128 lg:h-136 aspect-[3/4] transition-transform duration-1000 ease-1-out [transform:translateX(var(--tw-translate-x))_translateY(var(--tw-translate-y))_rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"}>
        <div
            className={"brightness-90 lg:brightness-75 relative h-full w-full transition-all duration-200 ease-in-out lg:group-hover/card:brightness-100"}>
          {children[0]}
          <div className={"md:opacity-0 md:group-hover/card:opacity-100 relative h-full w-full translate-z-24"}
               draggable={false}>
            {children[1]}
          </div>
        </div>
      </div>
  );
}