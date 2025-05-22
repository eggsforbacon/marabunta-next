import React from "react";
import Image from "next/image";
import Link from "next/link";

type props = {
  yearCurrent: number
}

type yearsTipe = {
  year: number,
  link: string
}

const years:yearsTipe[] = [{
  year: 2021,
  link: '/portafolio/fiesta-de-mi-pueblo-2021'
}, {
  year: 2022,
  link: '/portafolio/fiesta-de-mi-pueblo-2022'
}, {
  year: 2023,
  link: '/portafolio/fiesta-de-mi-pueblo-2023'
}];

export default function TimeLine ({yearCurrent}: props) {
  return <section className="w-full pb-16 bg-black flex justify-center items-center">
    {
      years.map((item, i) => <>
        <Link key={i} className="relative mx-[-8px] md:mx-[-22px]" href={item.link}>
          <Image className="h-auto w-[20px] md:w-[40px]" src={yearCurrent === item.year ? "/images/point-line-time-dark.png" : "/images/point-line-time.png"} alt={""} width={40} height={40}
          quality={100}/>
          <span className={yearCurrent === item.year ? "absolute text-md md:text-3xl font-black font-organik text-projects-pueblo-yelow ml-[-8px]" : "text-white absolute mx-[-2px] text-xs md:text-xl"}>{item.year}</span>
        </Link>
        {
          i < (years.length-1) && 
          <Image className="w-[100px] md:w-auto" src={"/images/time-line.png"} alt={""} width={320} height={40}
            quality={100}/>
        }
      </>)
    }
  </section>;
};