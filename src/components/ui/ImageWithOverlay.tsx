"use client"; // Este componente es cliente porque usa useState

import React, { useState } from "react";
import Image from "next/image";

// Definimos la interfaz para las props del componente ImageWithOverlay
interface ImageWithOverlayProps {
  src: string;
  alt: string;
  name: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({ src, alt, name }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative  mb-4 mt-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={594}
        quality={100}
        className="object-cover w-full pointer-events-none select-none"
      />
      <div
        className={`absolute inset-0 flex items-end py-6 px-6 text-xl font-bold text-white bg-black bg-opacity-50 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
       <h2 className="text-xl font-bold text-white underline tracking-wider">{name}</h2>
      </div>
    </div>
  );
};

export default ImageWithOverlay;