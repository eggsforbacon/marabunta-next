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
    id: string;
    choices: Choice[];
    state: { activeOption: number; setActiveOption: (i: number) => void };
    next: string[];
    closed?: boolean;
    options?: { unique: boolean[]; values: string[][] };
    types?: QuestionTypes | QuestionTypes[];
};

const MultipleChoice = ({
    id,
    choices,
    state: { activeOption, setActiveOption },
    next,
    closed,
    options,
    types,
}: _Props) => {
    const { continueQuestion, setAnswer, answers, selectedOptions, setSelectedOptions } = useQuoteStore();
    const swiperRef = useRef<SwiperCore>();
    const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;
    let controlIndex = -1;

    const getImagePath = (questionId: string, answerIndex: number): string => {

        if (questionId === "0") {
            return `/images/quote/questions/initial/${answerIndex + 1}.webp`;
        }

        const area = questionId.charAt(0).toUpperCase();
        const formattedId = questionId.replace(/\./g, '');

        return `/images/quote/questions/${area}/${formattedId}_${answerIndex + 1}.webp`;
    };

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
        if (!closed && !isMultipleSelect) {
            setAnswer(id, index);
            setActiveOption(index);
            const nextId = next[index];
            if (nextId) {
                continueQuestion([nextId]);
            }
        } else if (isMultipleSelect) {
            const timestamp = Date.now();
            const isSelected = selectedOptions.some((opt) => opt.index === index);
            const newSelected = isSelected
                ? selectedOptions.filter((opt) => opt.index !== index)
                : [...selectedOptions, { index, timestamp }];
            setSelectedOptions(newSelected);
            setAnswer(id, newSelected);
        }
    };

    const handleClosedAnswerClick = (index: number) => {
        setAnswer(id, index);
        setActiveOption(index);
        const nextId = next[index];
        if (nextId) {
            continueQuestion([nextId]);
        }
    };

    return (
        <>
            {!closed ? (
                <>
                    <span className="h-full w-1/2 absolute bg-gradient-to-r from-black/70 via-25% via-black/10 pointer-events-none select-none left-0 top-0 z-10" />
                    <span className="h-full w-1/2 absolute bg-gradient-to-l from-black/70 via-25% via-black/10 pointer-events-none select-none right-0 top-0 z-10" />
                    <button
                        className={`absolute top-1/2 -translate-y-1/2 left-0 z-10 transition-all duration-200 ease-in-out ${swiperRef.current?.isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <MaterialSymbol icon={"chevron_left"} size={48} weight={500} />
                    </button>
                    <button
                        className={`absolute top-1/2 -translate-y-1/2 right-0 z-10 transition-all duration-200 ease-in-out ${swiperRef.current?.isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <MaterialSymbol icon={"chevron_right"} size={48} weight={500} />
                    </button>
                    <Swiper
                        initialSlide={activeOption}
                        className={"!w-screen !box-border !px-[4.75rem]"}
                        spaceBetween={20}
                        slidesPerView="auto"
                        centeredSlides
                        onSlideChange={(swiper) => setActiveOption(swiper.activeIndex)}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {choices.map(({ title, description }, index) => (
                            <SwiperSlide key={index} className={"!w-56"}>
                                <Answer
                                    title={title}
                                    description={description}
                                    active={isMultipleSelect ? selectedOptions.some(opt => opt.index === index) : index === activeOption}
                                    closed={closed}
                                    isMultipleSelect={isMultipleSelect}
                                >
                                    <Image
                                        src={getImagePath(id, index)}
                                        alt={"Option"}
                                        height={512}
                                        width={512}
                                        quality={100}
                                        onClick={() => handleToggleOption(index)}
                                        className={`h-full w-full object-cover rounded-3xl cursor-pointer transition-all duration-200 ease-in-out ${selectedOptions.some((opt) => opt.index === index) || (!isMultipleSelect && index === activeOption)
                                            ? "border-4 border-marabunta-red"
                                            : "border-0 border-transparent"
                                            }`}
                                    />
                                    {isMultipleSelect && selectedOptions.some((opt) => opt.index === index) && (
                                        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1">
                                            <MaterialSymbol icon="check" size={24} className="text-marabunta-red" />
                                        </div>
                                    )}
                                </Answer>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            ) : (
                <div className={"flex flex-col items-stretch justify-start gap-3 px-8"}>
                    {choices.map(({ title }, index) => {
                        let currentChoiceType: QuestionTypes | undefined;
                        if (Array.isArray(types)) {
                            currentChoiceType = types[index];
                        } else {
                            currentChoiceType = types;
                        }

                        const isOptionAnswer = options && currentChoiceType === QuestionTypes.OPTIONS;
                        const isOpenAnswer = currentChoiceType === QuestionTypes.USER_INPUT;

                        if (isOptionAnswer) {
                            controlIndex++;
                            return (
                                <OptionAnswer
                                    key={index}
                                    index={controlIndex}
                                    title={title}
                                    options={options!}
                                />
                            );
                        } else if (isOpenAnswer) {
                            return <OpenAnswer key={index} prompt={title} />;
                        } else {
                            return (
                                <Answer
                                    key={index}
                                    title={title}
                                    active={index === activeOption}
                                    closed={closed}
                                    action={() => handleClosedAnswerClick(index)}
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