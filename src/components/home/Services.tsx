"use client";

import Image from "next/image";
import {Locale} from "@/_i18n.config";
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
          className={"relative z-50 flex flex-col items-stretch justify-start text-off-white overflow-x-clip pb-8"}>
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

          <div className={"relative w-full h-full flex flex-col items-center justify-start gap-8 transition-all duration-200 ease-in-out"}>
            <h3 className={"inline-flex gap-4 justify-center items-center text-marabunta-cyan text-5xl font-bold tracking-wider"}>
              <span className={"h-10"}>{icons[selected]}</span><span
                className={"hidden lg:block"}>{titles[selected]}</span></h3>
            <p className={"font-light text-center text-base lg:text-xl max-w-[44rem] px-8"}>{descriptions[selected]}</p>
          </div>
        </div>
      </section>
  );
}