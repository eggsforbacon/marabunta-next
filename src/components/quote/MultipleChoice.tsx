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
import { motion } from "framer-motion";

type _Props = {
  id: string;
  choices: Choice[];
  state: { activeOption: number; setActiveOption: (i: number) => void };
  next: string[];
  closed?: boolean;
  options?: { unique: boolean[]; values: string[][] };
  types?: QuestionTypes | QuestionTypes[];
  isSimpleView?: boolean;
};

const MultipleChoice = ({
  id,
  choices,
  state: { activeOption, setActiveOption },
  next,
  closed,
  options,
  types,
  isSimpleView = false,
}: _Props) => {
  const { continueQuestion, setAnswer, answers, selectedOptions, setSelectedOptions, setWarehouseActive } = useQuoteStore();
  const swiperRef = useRef<SwiperCore>();
  const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;
  let controlIndex = -1;

  const getImagePath = (questionId: string, answerIndex: number): string => {
    if (questionId === "0") {
      return `/images/quote/questions/initial/${answerIndex + 1}.webp`;
    }
    const area = questionId.charAt(0).toUpperCase();
    const formattedId = questionId.replace(/\./g, "");
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
        if (nextId === "BODEGA") setWarehouseActive(true);
        setTimeout(() => {
          continueQuestion([nextId]);
        }, 300);
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
        <div className="relative w-full">
          <span className="h-full w-1/4 absolute left-0 top-0 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-10 rounded-l-3xl" />
          <span className="h-full w-1/4 absolute right-0 top-0 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10 rounded-r-3xl" />

          <button
            aria-label="prev"
            className={`absolute top-1/2 -translate-y-1/2 left-3 z-20 transition-all duration-200 ease-in-out ${swiperRef.current?.isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MaterialSymbol icon={"chevron_left"} size={48} weight={500} />
          </button>
          <button
            aria-label="next"
            className={`absolute top-1/2 -translate-y-1/2 right-3 z-20 transition-all duration-200 ease-in-out ${swiperRef.current?.isEnd ? "opacity-0 pointer-events-none" : "opacity-100"}`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MaterialSymbol icon={"chevron_right"} size={48} weight={500} />
          </button>

          <Swiper
            initialSlide={activeOption}
            className="!w-full !box-border !px-6 md:!px-12 lg:!px-20 rounded-3xl"
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides
            onSlideChange={(swiper) => !isMultipleSelect && setActiveOption(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {choices.map(({ title, description }, index) => {
              const active = isMultipleSelect ? selectedOptions.some(opt => opt.index === index) : index === activeOption;
              return (
                <SwiperSlide key={index} className="!w-56 md:!w-72 lg:!w-80">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                    <Answer
                      title={title}
                      description={description}
                      active={active}
                      closed={closed}
                      isMultipleSelect={isMultipleSelect}
                      isSimpleView={isSimpleView}
                      onClick={() => handleToggleOption(index)}
                    >
                      {!isSimpleView && (
                        <Image
                          src={getImagePath(id, index)}
                          alt={title || "Option"}
                          height={512}
                          width={512}
                          quality={100}
                          onClick={() => handleToggleOption(index)}
                          className={`h-full w-full object-cover rounded-3xl cursor-pointer transition-all duration-300 ease-in-out ${active && !isMultipleSelect ? "ring-4 ring-marabunta-red/60" : "ring-0"}`}
                        />
                      )}

                      {isMultipleSelect && active && (
                        <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 z-10">
                          <MaterialSymbol icon="check" size={24} className="text-marabunta-red" />
                        </div>
                      )}
                    </Answer>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      ) : (
        <div className="flex flex-col items-stretch justify-start gap-3 px-2 md:px-8">
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
                <OptionAnswer key={index} index={controlIndex} title={title} options={options!} />
              );
            } else if (isOpenAnswer) {
              return <OpenAnswer key={index} prompt={title} />;
            } else {
              return (
                <Answer key={index} title={title} active={index === activeOption} closed={closed} action={() => handleClosedAnswerClick(index)} />
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default MultipleChoice;