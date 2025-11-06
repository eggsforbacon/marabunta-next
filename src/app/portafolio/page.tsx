"use client";

import React, { useState } from "react";
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

import Navbar from "@/components/ui/Navbar";
import { Locale } from "@/_i18n.config";
//import {getDictionary} from "@/lib/dictionary";
import ProjectCard from "@/components/work/ProjectCard";
import useScreenSize from "@/hooks/useScreenSize";
import { covers } from "@/constants/covers";
import { getLanguage } from "@/dictionaries";

import 'swiper/css';
import './styles.css';


export default function Work({ params: { lang } }: { params: { lang: Locale } }) {
  const [sliderMove, setSliderMove] = useState(0);
  const { nav } = getLanguage(lang);

  const { width } = useScreenSize();

  const [selectedCategory, setSelectedCategory] = useState(
    "Selecciona una categoría"
  );

  const filteredCovers =
    selectedCategory === "Selecciona una categoría"
      ? covers
      : covers.filter((project) =>
        project.category?.includes(selectedCategory)
      );

  /*useEffect(() => {
    getDictionary(lang).then((d) => {
      setNav(d.nav);
    });
  }, [lang]);*/
  return (
    <main className={" min:h-screen relative bg-off-black overflow-clip slider-projects"}>
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang} />
      <span className={"absolute top-0 w-full left-0 h-full pointer-events-none packed-dotted-background opacity-30 overflow-hidden"} />

      <div className={`  w-full flex z-10 ${width <= 780
          ? "fixed bottom-6 justify-center items-center"
          : "absolute top-28  left-14 justify-start  items-start"
        }`}
      >
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-black text-white rounded-lg p-1 pr-8 pl-2 border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer "
        >
          {[
            "Selecciona una categoría",
            "Salud",
            "Deporte",
            "Medio ambiente",
            "Cultura",
            "Social",
            "Gobierno",
            "Corporativo",
            "Desarrollo Software",
          ].map((category) => (
            <option key={category} value={category} className="p-2">
              {category}
            </option>
          ))}
        </select>
      </div>

      {
        //home && home.services && <Services s={home?.services} lang={lang}/>
      }
      {
        width > 780 ?
          <Swiper
            keyboard
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={width < 1680 ? 3.3 : 4.3}
            scrollbar={{ draggable: true }}
            navigation
            pagination={{ clickable: true }}
            mousewheel
            className={`h-36 md:!h-max pb-12 rounded-2xl w-full !ml-10 mt-20 absolute -bottom-10 left-4 hidden`}
          >
            {filteredCovers.map((s, i) => {
              return (
                <SwiperSlide className="!w-max !h-screen" key={i}>
                  <ProjectCard key={i}>
                    <Image key={i} src={s.cover} alt={""} width={504} height={672} quality={100}
                      className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"} />
                    <article key={i} className={"card absolute top-0 left-0 w-full h-full flex"}>
                      <a href={s.link}
                        className="flex rounded-full m-auto text-3xl backdrop-blur-sm bg-white/80 w-[100px] z-30">
                        <Image src={"/images/png/Arrow.png"} width={100} height={100} alt={""} quality={100} />
                      </a>
                      <a href={s.link} className="card absolute bottom-0 z-50 rounded-lg  p-4 pt-0 md:py-8  md:p-8 pr-0 text-sm md:text-xl bg-gradient-to-t from-[#000] w-full h-[14%] ">
                        <h5>{s.name}</h5>
                        <p className="text-xs underline decoration-1">
                          {s.category?.join(", ")}
                        </p>
                      </a>
                      {
                        s.fore &&
                        <Image src={s.fore} alt={""} width={504} height={672}
                          className={"absolute  left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"} />
                      }
                    </article>
                  </ProjectCard>
                </SwiperSlide>

              );
            })}
          </Swiper>
          :
          <>
            <motion.div
              drag={width > 768 ? "y" : undefined}
              animate={{ x: sliderMove }}
              dragConstraints={
                width > 768
                  ? { right: 550, left: -(covers.length * 440) }
                  : undefined
              }
              className={"box-border w-screen lg:w-fit cursor-grab lg:min-h-screen relative flex flex-col lg:flex-row items-center justify-start py-16 lg:p-16 gap-6 [perspective:10000px] active:cursor-grabbing"}
            >
              {filteredCovers.map((s, i) => {
                return (
                  <ProjectCard key={i} >
                    <Image key={i} src={s.cover} alt={""} width={504} height={672} quality={100}
                      className={"absolute top-0 left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"} />
                    <article key={i} className={"card absolute top-0 left-0 w-full h-full flex"}>
                      <a href={s.link}
                        className="flex rounded-full m-auto text-3xl backdrop-blur-sm bg-white/80 w-[100px] z-30">
                        <Image src={"/images/png/Arrow.png"} width={100} height={100} alt={""} quality={100} />
                      </a>
                      <a href={s.link} className="card absolute bottom-0 z-50 rounded-lg  p-4 pt-0 md:py-8  md:p-8 pr-0 text-sm md:text-xl bg-gradient-to-t from-[#000] w-full h-[14%] ">
                        <h5>{s.name}</h5>
                        <p className="text-xs underline decoration-1">{s.category}</p>
                      </a>
                      {
                        s.fore &&
                        <Image src={s.fore} alt={""} width={504} height={672}
                          className={"absolute  left-0 object-cover h-full w-auto pointer-events-none select-none rounded-xl"} />
                      }
                    </article>
                  </ProjectCard>
                );
              })}
            </motion.div>
            {
              sliderMove > -((covers.length * 420) - 800) && width > 768 && <svg aria-label="arrow-next" onClick={() => setSliderMove(sliderMove - 540)} className="h-[85%] mt-[4%] bg-gradient-to-l from-black absolute z-50 right-0 pr-4 cursor-pointer opacity-50 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={"40"}><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            }
            {
              sliderMove <= -0 && width > 768 && <svg aria-label="arrow-left" onClick={() => setSliderMove(sliderMove + 550)} className="h-[85%] mt-[3%] bg-gradient-to-l from-black absolute z-40 left-0 pr-4 cursor-pointer opacity-50 hover:opacity-80 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width={"40"}><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            }

            <section
              className={"absolute w-12 right-0 top-48 items-end md:items-center lg:left-0 flex flex-col px-1 gap-2 font-light tracking-wide text-off-white text-lg z-50"}>
              <Link
                className={"w-12 lg:w-16 text-center lg:pl-6 box-border bg-black border-none backdrop-blur-xs rounded-lg w- p-2 text-lg"}
                href={"https://www.behance.net/MarabuntaAgencia"} target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 576 512"><path fill="#ffff" d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" /></svg>
              </Link>
              <Link
                className={"w-12 lg:w-16 text-center lg:pl-6 box-border bg-black  border-none backdrop-blur-xs rounded-lg  p-2 text-lg"}
                href={"https://www.instagram.com/marabuntaagenciacreativa/"} target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#fff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </Link>
            </section>
          </>
      }

    </main>
  );
}