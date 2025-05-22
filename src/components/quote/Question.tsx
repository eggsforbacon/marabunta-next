"use client";

import {useEffect, useMemo, useRef, useState} from "react";
import {Locale} from "@/_i18n.config";
import {useQuoteStore} from "@/store/quote";
import Answer from "@/components/quote/Answer";
import {getQuestion} from "@/model/quote";
import {Question as QuestionType} from "@/types/quote";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from 'swiper/types';
import Image from "next/image";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {MaterialSymbol} from "react-material-symbols";
import 'react-material-symbols/rounded';

interface IntroductionProps {
    lang: Locale,
}

const Question = ({lang}: IntroductionProps) => {

    const {current, next} = useQuoteStore();
    const [activeIndex, setActiveIndex] = useState(0);

    const swiperRef = useRef<SwiperCore>();

    const question = useMemo(() => {
        return current !== 0
            ? getQuestion(current, lang) as QuestionType
            : {id: 0, options: {unique: [], values: []}, choices: [], ranges: [], prompt: "", highlight: "", area: 0};
    }, [current, lang]);
    const {id, options, choices, ranges, prompt, area, highlight} = question;
    useEffect(() => {
        console.log(question);
    }, [question]);
    const choicesLength = (choices?.length ?? 4);
    return (
        <div
            className={`absolute w-screen overflow-clip pt-24 text-white gap-3 flex flex-col items-center transition-opacity delay-200 ease-in-out duration-200 ${current !== 0 ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}>
            <span
                className={"h-full w-1/2 absolute bg-gradient-to-r from-black/70 via-25% via-black/10 pointer-events-none select-none left-0 top-0 z-10"}/>
            <span
                className={"h-full w-1/2 absolute bg-gradient-to-l from-black/70 via-25% via-black/10 pointer-events-none select-none right-0 top-0 z-10"}/>
            <button
                className={`absolute top-1/2 -translate-y-1/2 left-0 z-10 transition-all duration-200 ease-in-out ${swiperRef.current?.activeIndex !== 0 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
                onClick={() => swiperRef.current?.slidePrev()}><MaterialSymbol icon={"chevron_left"} size={48}
                                                                               weight={500} className={``}/>
            </button>
            <button
                className={`absolute top-1/2 -translate-y-1/2 right-0 z-10 transition-all duration-200 ease-in-out ${swiperRef.current?.activeIndex !== choicesLength - 1 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
                onClick={() => swiperRef.current?.slideNext()}><MaterialSymbol icon={"chevron_right"} size={48}
                                                                               weight={500} className={``}/>
            </button>
            <h2 className="text-center px-16 font-bold text-3xl w-full relative z-10">
                {highlight
                    ? (
                        <>
                            {prompt.split("$")[0]}
                            <span className="text-marabunta-red">{highlight}</span>
                            {prompt.split("$")[1]}
                        </>
                    )
                    : prompt}
            </h2>
            <Swiper
                className={"!w-screen !box-border !px-[4.75rem]"}
                spaceBetween={20}
                slidesPerView={1.02}
                scrollbar={{draggable: true}}
                mousewheel
                keyboard
                centeredSlides
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {
                    choices && choices.map(({title, description}, index) => {
                        const idHexString = "0x" + ('0000' + id.toString(16).toUpperCase()).slice(-4);
                        console.log(idHexString);

                        return (
                            <SwiperSlide key={index} className={"!w-56"}>
                                <Answer title={title} description={description} active={index === activeIndex}>
                                    <Image src={`/images/quote/questions/${area}/${idHexString}_${index + 1}.webp`}
                                           alt={"Option"}
                                           height={512} width={512} quality={100}
                                           className={`h-full object-cover absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl transition-all duration-500 ease-in-out delay-200 ${activeIndex === index ? "border-4 border-marabunta-red" : "border-0 border-transparent"}`}/>
                                </Answer>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className={"flex w-full px-6 box-border items-center justify-between text-marabunta-cyan text-sm mt-2"}>
                <button className={"flex gap-2 items-center"}>
                    <MaterialSymbol icon={"north_west"} color={"#129cc0"} size={16}/>
                    <p>Atrás</p>
                </button>
                <button className={"flex gap-2 items-center"}>
                    <p>Siguiente</p>
                    <MaterialSymbol icon={"north_east"} color={"#129cc0"} size={16}/>
                </button>
            </div>
        </div>
    );
}

export default Question;