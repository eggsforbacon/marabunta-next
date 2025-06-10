"use client";

import { MaterialSymbol } from "react-material-symbols";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import Image from "next/image";
import Answer from "@/components/quote/Answer";
import { useRef, useEffect } from "react";
import { Choice, QuestionTypes } from "@/types/quote";
import { useQuoteStore } from "@/store/quote";
import OptionAnswer from "@/components/quote/OptionAnswer";
import OpenAnswer from "@/components/quote/OpenAnswer";

type _Props = {
    id: number;
    choices: Choice[];
    state: { activeOption: number; setActiveOption: (i: number) => void };
    area: number;
    next: number[];
    closed?: boolean;
    options?: { unique: boolean[]; values: string[][] };
    types?: QuestionTypes[] | QuestionTypes;
};

const MultipleChoice = (
    {
        id,
        choices,
        state: { activeOption, setActiveOption },
        area,
        next,
        closed,
        options,
        types,
    }: _Props) => {
    const { continueQuestion, setAnswer, answers, selectedOptions, setSelectedOptions } = useQuoteStore();
    const swiperRef = useRef<SwiperCore>();
    const choicesLength = choices?.length ?? 4;
    const idHexString = "0x" + ("0000" + id.toString(16).toUpperCase()).slice(-4);
    const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;
    let controlIndex = -1;

    useEffect(() => {
        if (!closed && swiperRef.current && swiperRef.current.activeIndex !== activeOption) {
            swiperRef.current.slideTo(activeOption);
        }
        if (isMultipleSelect && answers[id]) {
            const savedAnswer = answers[id];
            if (
                Array.isArray(savedAnswer) &&
                savedAnswer.every((item) => typeof item === "object" && "index" in item && "timestamp" in item)
            ) {
                setSelectedOptions(savedAnswer as { index: number; timestamp: number }[]);
            } else {
                setSelectedOptions([]);
            }
        }
    }, [activeOption, closed, id, answers, setSelectedOptions, isMultipleSelect]);

    const handleToggleOption = (index: number) => {
        if (isMultipleSelect) {
            const timestamp = Date.now();
            const isSelected = selectedOptions.some((opt) => opt.index === index);
            const newSelected = isSelected
                ? selectedOptions.filter((opt) => opt.index !== index)
                : [...selectedOptions, { index, timestamp }];
            setSelectedOptions(newSelected);
            setAnswer(id, newSelected);
        } else {
            setAnswer(id, index);
            setActiveOption(index);
            continueQuestion(next[index]);
        }
    };

    return (
        <>
            {!closed || typeof closed === undefined ? (
                <>
                    <span
                        className={
                            "h-full w-1/2 absolute bg-gradient-to-r from-black/70 via-25% via-black/10 pointer-events-none select-none left-0 top-0 z-10"
                        }
                    />
                    <span
                        className={
                            "h-full w-1/2 absolute bg-gradient-to-l from-black/70 via-25% via-black/10 pointer-events-none select-none right-0 top-0 z-10"
                        }
                    />
                    <button
                        className={`absolute top-1/2 -translate-y-1/2 left-0 z-10 transition-all duration-200 ease-in-out ${swiperRef.current?.activeIndex !== 0 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <MaterialSymbol
                            icon={"chevron_left"}
                            size={48}
                            weight={500}
                            className={``}
                        />
                    </button>
                    <button
                        className={`absolute top-1/2 -translate-y-1/2 right-0 z-10 transition-all duration-200 ease-in-out ${swiperRef.current?.activeIndex !== choicesLength - 1 ? "opacity-100" : "opacity-0 pointer-events-none select-none"}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <MaterialSymbol
                            icon={"chevron_right"}
                            size={48}
                            weight={500}
                            className={``}
                        />
                    </button>
                    <Swiper
                        initialSlide={activeOption}
                        className={"!w-screen !box-border !px-[4.75rem]"}
                        spaceBetween={20}
                        slidesPerView='auto'
                        scrollbar={{ draggable: true }}
                        mousewheel
                        keyboard
                        centeredSlides
                        onSlideChange={(swiper) => setActiveOption(swiper.activeIndex)}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    >
                        {choices.map(({ title, description }, index) => {
                            return (
                                <SwiperSlide key={index} className={"!w-56"}>
                                    <Answer
                                        title={title}
                                        description={description}
                                        active={isMultipleSelect ? true : index === activeOption}
                                        closed={closed}
                                        isMultipleSelect={isMultipleSelect}
                                    >
                                        <Image
                                            src={`/images/quote/questions/${area}/${idHexString}_${index + 1}.webp`}
                                            alt={"Option"}
                                            height={512}
                                            width={512}
                                            quality={100}
                                            onClick={() => handleToggleOption(index)}
                                            className={`h-full object-cover absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-3xl transition-all duration-200 ease-in-out delay-100 ${isMultipleSelect
                                                    ? selectedOptions.some((opt) => opt.index === index)
                                                        ? "border-4 border-marabunta-red"
                                                        : "border-0 border-transparent"
                                                    : index === activeOption
                                                        ? "border-4 border-marabunta-red"
                                                        : "border-0 border-transparent"
                                                }`}
                                        />
                                        {isMultipleSelect &&
                                            selectedOptions.some((opt) => opt.index === index) && (
                                                <span className="absolute top-2 right-4 text-red-500 text-xl font-bold">
                                                    X
                                                </span>
                                            )}
                                    </Answer>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </>
            ) : (
                <div className={"flex flex-col items-stretch justify-start gap-3 px-8"}>
                    {choices.map(({ title }, index) => {
                        const isSingle = (types as QuestionTypes[]) === undefined;
                        const isOpenAnswer = (types as QuestionTypes[])[index] === QuestionTypes.USER_INPUT.valueOf();
                        if (
                            options !== undefined &&
                            !isSingle &&
                            (types as QuestionTypes[])[index] ===
                            QuestionTypes.OPTIONS.valueOf()
                        ) {
                            controlIndex++;
                            return (
                                <OptionAnswer
                                    key={index}
                                    index={controlIndex}
                                    title={title}
                                    options={options}
                                />
                            );
                        } else if (isOpenAnswer) {
                            return (
                                <OpenAnswer key={index}
                                    prompt={title} />
                            )
                        } else {
                            return (
                                <Answer
                                    key={index}
                                    title={title}
                                    active={index === activeOption}
                                    closed={closed}
                                    action={() => continueQuestion(next[index])}
                                />
                            );
                        }
                    })}
                </div>
            )}
        </>
    );
};

export default MultipleChoice;