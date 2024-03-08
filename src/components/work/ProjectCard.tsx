"use client";

import React, {ReactNode, useEffect, useRef} from "react";

export default function ProjectCard({children, mouse}: {
  children: ReactNode[],
  mouse: { x: number, y: number },
}) {

  const boundingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boundingRef.current) {
      const navWidth = 80;
      const cardBoundingRect = boundingRef.current.getBoundingClientRect();
      const cardCenter = {
        x: Math.ceil(cardBoundingRect.x - navWidth + (cardBoundingRect.width / 2)),
        y: Math.ceil(cardBoundingRect.y + (cardBoundingRect.height / 2))
      };

      const distance = {
        x: mouse.x - cardCenter.x,
        y: mouse.y - cardCenter.y
      };
      const xPercentage = distance.x / cardBoundingRect.width;
      const yPercentage = distance.y / cardBoundingRect.height;
      const xRotation = (xPercentage * 0.6 - 0.1) * 40;
      const yRotation = (0.1 - yPercentage * 0.6) * 40;

      const maxX = 15;
      const maxY = 18;

      const clampedXRotation = Math.abs(xRotation) < maxX ? xRotation : (Math.abs(xRotation) / xRotation) * maxX;
      const clampedYRotation = Math.abs(yRotation) < maxY ? yRotation : (Math.abs(yRotation) / yRotation) * maxY;

      // boundingRef.current.style.setProperty("--x-rotation", `${clampedYRotation}deg`);
      // boundingRef.current.style.setProperty("--y-rotation", `${clampedXRotation}deg`);
    }
  }, [mouse]);


  return (
      <div ref={boundingRef} draggable={false}
           className={"group/card shrink-0 cursor-grab rounded-lg flex flex-col items-center justify-center text-8xl text-off-white font-bold h-128 lg:h-168 aspect-[3/4] transition-transform duration-1000 ease-1-out [transform:translateX(var(--tw-translate-x))_translateY(var(--tw-translate-y))_rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]"}>
        <div
            className={"brightness-75 relative h-full w-full transition-all duration-200 ease-in-out group-hover/card:brightness-100"}>
          {children[0]}
          <div className={"opacity-0 group-hover/card:opacity-100 relative h-full w-full translate-z-24"}
               draggable={false}>
            {children[1]}
          </div>
        </div>
      </div>
  );
}