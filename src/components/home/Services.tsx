"use client";

import Image from "next/image";
import {Locale} from "@/i18n.config";
import React, {useEffect, useState} from "react";
import {Headset, LightBulb, Magic, Megaphone, Reels, Rocket, StageLight} from "@/components/ui/svg/services";
import LocaleLink from "@/components/ui/LocaleLink";
import BrandCarousel from "@/components/home/BrandCarousel";
import DropdownMenu from "@/components/ui/DropdownMenu";
import {useServicesStore} from "@/store/services";

export default function Services({s, lang}: { s: { [_: string]: any }, lang: Locale }) {
  
  const {
    dropdownState,
    toggleDropdown,
    selectedService: selected,
    setSelectedService: setSelected
  } = useServicesStore();
  
  const [opacity, setOpacity] = useState("opacity-0 pointer-events-none");
  const [next, setNext] = useState(0);
  
  const titles = s.categories.titles as string[];
  const descriptions = s.categories.descriptions as string[];
  const imagePairs = [
    ["cali-sonreir", "clinicannabis"],
    ["cali-sonreir", "clinicannabis"],
    ["cali-sonreir", "clinicannabis"],
    ["cali-sonreir", "clinicannabis"],
    ["cali-sonreir", "clinicannabis"],
    ["cali-sonreir", "clinicannabis"],
    ["cali-sonreir", "clinicannabis"],
  ];

  const icons = [
    <LightBulb size={48} className={"h-full aspect-square"} key={0}/>,
    <Megaphone size={48} className={"h-full aspect-square"} key={1}/>,
    <Magic size={48} className={"h-full aspect-square"} key={2}/>,
    <Headset size={48} className={"h-full aspect-square"} key={3}/>,
    <Reels size={48} className={"h-full aspect-square"} key={4}/>,
    <Rocket size={48} className={"h-full aspect-square"} key={5}/>,
    <StageLight size={48} className={"h-full aspect-square"} key={6}/>,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (opacity.includes("opacity-100")) {
        setSelected(next)
        setOpacity("opacity-0 pointer-events-none");
      }
    }, 300);

    return () => clearInterval(intervalId);
  }, [next, opacity, setSelected]);

  return (
      <section
          className={"relative z-20 flex flex-col items-stretch justify-start text-off-white overflow-x-clip pb-8"}>
        <Image src={"/images/home/svg/black-key-bezel.svg"} alt={"no-alt"} width={1920} height={286}
               className={"absolute top-72 lg:top-0 select-none scale-[8.2] -left-64 lg:left-auto lg:scale-[1.75] pointer-events-none"}
               priority quality={100}/>
        <div className={"relative flex flex-col items-center justify-start gap-10 lg:gap-16 py-32 lg:py-52"}>
          <h2 className={"px-16 lg:px-0 text-3xl lg:text-6xl text-center lg:text-start font-light"}>{s.title}<span
              className={"font-bold"}>{s.remark}</span></h2>
          <ul className={"hidden lg:flex py-10 items-center justify-center gap-12 text-xl"}>
            {
              titles.map((t, i) => {
                return (
                    <>
                      <li key={i}
                          className={`transition-all duration-200 ease-in-out ${next === i ? "text-marabunta-cyan font-bold" : "text-off-white font-light"}`}>
                        <button onClick={() => {
                          setNext(i);
                          setOpacity("opacity-100 pointer-events-auto");
                        }}>{t}</button>
                      </li>
                      {
                        i === titles.length - 1 ?
                            <></>
                            :
                            <span className={"h-12 w-px bg-off-white/50"}/>
                      }
                    </>
                );
              })
            }
          </ul>
          <div className={"w-full px-32 lg:hidden"}>
            <DropdownMenu defaultOption={titles[0]} options={titles} open={dropdownState} setOpen={toggleDropdown}
                          collateral={(i: number) => {
                            setNext(i);
                            setOpacity("opacity-100 pointer-events-auto");
                          }} defaultCondition={selected === 0}/>
          </div>

          <div
              className={"relative w-full h-full flex flex-col items-center justify-start gap-8 transition-all duration-200 ease-in-out"}>
            <h3 className={"inline-flex gap-4 justify-center items-center text-marabunta-cyan text-5xl font-bold tracking-wider"}>
              <span className={"h-10"}>{icons[selected]}</span><span
                className={"hidden lg:block"}>{titles[selected]}</span></h3>
            <p className={"font-light text-center text-base lg:text-xl max-w-[44rem] px-8"}>{descriptions[selected]}</p>
            <section className={"flex flex-col items-center justify-start gap-4 relative w-full h-full lg:mt-24"}>
              <div className={"flex flex-col gap-4 lg:gap-0 lg:flex-row items-center w-full"}>
                <div className={"w-full lg:w-1/2 rounded-3xl lg:rounded-none overflow-clip"}>
                  <Image src={`/images/projects/${imagePairs[selected][0]}/cover.png`}
                         className={"lg:saturate-0 transition-all duration-200 ease-in-out hover:saturate-100"}
                         alt={""} width={1920} height={1080}/>
                </div>
                <div className={"w-full lg:w-1/2 rounded-3xl lg:rounded-none overflow-clip"}>
                  <Image src={`/images/projects/${imagePairs[selected][1]}/cover.png`}
                         className={"lg:saturate-0 transition-all duration-200 ease-in-out hover:saturate-100"}
                         alt={""} width={1920} height={1080}/>
                </div>
              </div>
              <span
                  className={"hidden lg:block pointer-events-none lg:top-0 lg:absolute w-full h-full bg-gradient-to-t from-black via-black/40 via-45% to-black/0"}/>
              <LocaleLink lang={lang} href={"/portafolio"}
                          className={"lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 px-8 py-4 text-base lg:text-xl font-normal text-off-white border-off-white border bg-transparent rounded-xl transition-all duration-200 ease-in-out hover:font-bold hover:scale-110 cursor-pointer"}>
                {s.cta}
              </LocaleLink>
            </section>
            <span className={`w-full h-full absolute top-0 left-0 bg-black select-none transition-all duration-[250ms] ease-in-out ${opacity}`}/>
          </div>
        </div>
        <div className={"w-full flex flex-col gap-12 items-center no-scrollbar"}>
          <h2 className={"px-12 lg:px-0 text-4xl text-center lg:text-6xl font-normal text-off-white tracking-wide"}>
            <span className={"font-semibold lg:font-normal"}>Nuestros</span> aliados</h2>
          <span className={"w-full h-0.5 lg:h-1 rounded-full bg-off-white/60"}/>
          <BrandCarousel>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/0.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/1.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/2.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/3.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/4.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/5.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[15.5rem] max-w-[15.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/6.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/7.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/8.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/9.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/10.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/11.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/12.svg"} alt={""} width={128} height={128}/>
            <Image
                className={"flex-1 brightness-50 w-[5.5rem] max-w-[5.5rem] transition-all duration-300 ease-in-out hover:brightness-100"}
                src={"/images/home/svg/brands/14.svg"} alt={""} width={128} height={128}/>
            {/*<Image src={"/images/home/svg/brands/13.svg"} alt={""} width={128} height={128} />*/}
          </BrandCarousel>
        </div>
      </section>
  );
}