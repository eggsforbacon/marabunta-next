"use client";

import { MaterialSymbol } from "react-material-symbols";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";
import Image from "next/image";
import Answer from "./Answer";
import { useRef, useEffect, useState } from "react";
import { Choice, QuestionTypes, Answer as QuoteAnswer } from "../../types/quote";
import { useQuoteStore } from "@/store/quote";
import OptionAnswer from "./OptionAnswer";
import OpenAnswer from "./OpenAnswer";
import { motion, AnimatePresence } from "framer-motion";

type _Props = {
  id: string;
  choices: Choice[];
  state: { activeOption: number; setActiveOption: (i: number) => void };
  next: string[];
  prompt?: string;
  closed?: boolean;
  options?: { unique: boolean[]; values: string[][] };
  types?: QuestionTypes | QuestionTypes[];
  isSimpleView?: boolean;
  handleOptionClick: (index: number) => void;
};

const MOBILE_BREAKPOINT = 1024;

const MultipleChoice = ({
  id,
  choices,
  state: { activeOption, setActiveOption },
  next,
  prompt,
  closed,
  options,
  types,
  isSimpleView = false,
  handleOptionClick,
}: _Props) => {
  const {
    continueQuestion,
    setAnswer,
    answers,
    selectedOptions,
    setSelectedOptions,
    addToBasket,
  } = useQuoteStore();
  const swiperRef = useRef<SwiperCore | null>(null);
  const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;
  const suppressSlideChangeRef = useRef(false);
  let controlIndex = -1;

  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < MOBILE_BREAKPOINT;
  });

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const getImagePath = (questionId: string, answerIndex: number): string => {
    if (questionId === "0")
      return `/images/quote/questions/initial/${answerIndex + 1}.webp`;
    const area = questionId.charAt(0).toUpperCase();
    const formattedId = questionId.replace(/\./g, "");
    return `/images/quote/questions/${area}/${formattedId}_${answerIndex + 1
      }.webp`;
  };

  useEffect(() => {
    if (isMultipleSelect && answers[id]) {
      const savedAnswer = answers[id];
      if (
        Array.isArray(savedAnswer) &&
        savedAnswer.every(
          (item) =>
            typeof item === "object" && "index" in item && "timestamp" in item
        )
      ) {
        setSelectedOptions(savedAnswer as { index: number; timestamp: number }[]);
      } else {
        setSelectedOptions([]);
      }
    }
  }, [answers, id, isSimpleView, isMultipleSelect, setSelectedOptions]);

  const handleClosedAnswerClick = (index: number) => {
    setAnswer(id, index);
    setActiveOption(index);
    const nextId = next[index];
    if (nextId) {
      const storeAnswer: QuoteAnswer = {
        id: id,
        prompt: prompt ?? "",
        choices: [index],
        values: `${choices[index].title}${choices[index].description && ":"
          } ${choices[index].description ?? ""}`,
      };
      addToBasket(storeAnswer);

      continueQuestion([nextId]);
    }
  };

  if (isSimpleView && isMobile && !closed) {
    return (
      <div className="w-full flex flex-col gap-4 px-6">
        {choices.map(({ title, description }, index) => {
          const active = isMultipleSelect ? selectedOptions.some(opt => opt.index === index) : index === activeOption;
          const sortedOptions = [...selectedOptions].sort((a, b) => a.timestamp - b.timestamp);
          const selectionOrderIndex = sortedOptions.findIndex((opt) => opt.index === index);
          const selectionOrder = selectionOrderIndex !== -1 ? selectionOrderIndex + 1 : null;

          return (
            <div key={index} className="relative">
              <AnimatePresence>
                {isMultipleSelect && selectionOrder !== null && (
                  <motion.div
                    key={`simple-badge-${index}-${selectionOrder}`}
                    initial={{ scale: 0, rotate: -180, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0, rotate: 180, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-marabunta-red via-red-600 to-red-700 flex items-center justify-center z-10 shadow-[0_4px_20px_rgba(255,0,60,0.6)] ring-4 ring-white/20"
                  >
                    <span className="text-white font-black text-base">{selectionOrder}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => handleOptionClick(index)}
                className={`w-full rounded-2xl p-5 transition-all duration-300 text-left
                  bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10
                  ${active ? "ring-4 ring-marabunta-red/60 shadow-[0_10px_30px_-12px_rgba(255,0,60,0.5)]" : "hover:ring-2 hover:ring-white/10"}
                `}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
                  {description && <p className="text-sm text-gray-300/95 font-light leading-relaxed">{description}</p>}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      {!closed ? (
        <div className="relative w-full">
          <span className="h-full w-1/4 absolute left-0 top-0 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-10 rounded-l-3xl" />
          <span className="h-full w-1/4 absolute right-0 top-0 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10 rounded-r-3xl" />

          <button
            aria-label="prev"
            className={`absolute top-1/2 -translate-y-1/2 left-3 z-20 transition-all duration-200 ease-in-out ${swiperRef.current?.isBeginning
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
              }`}
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <MaterialSymbol icon={"chevron_left"} size={48} weight={500} />
          </button>
          <button
            aria-label="next"
            className={`absolute top-1/2 -translate-y-1/2 right-3 z-20 transition-all duration-200 ease-in-out ${swiperRef.current?.isEnd
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
              }`}
            onClick={() => swiperRef.current?.slideNext()}
          >
            <MaterialSymbol icon={"chevron_right"} size={48} weight={500} />
          </button>

          <Swiper
            initialSlide={Math.max(0, activeOption)}
            className="!w-full !box-border !px-6 md:!px-12 lg:!px-20 rounded-3xl"
            spaceBetween={24}
            slidesPerView="auto"
            centeredSlides
            onSlideChange={(swiper) => {
              if (!suppressSlideChangeRef.current && !isMultipleSelect) {
                setActiveOption(swiper.activeIndex);
              }
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {choices.map(({ title, description }, index) => {
              const active = isMultipleSelect
                ? selectedOptions.some((opt) => opt.index === index)
                : index === activeOption;

              const sortedOptions = [...selectedOptions].sort((a, b) => a.timestamp - b.timestamp);
              const selectionOrderIndex = sortedOptions.findIndex((opt) => opt.index === index);
              const selectionOrder = selectionOrderIndex !== -1 ? selectionOrderIndex + 1 : null;

              return (
                <SwiperSlide key={index} className="!w-56 md:!w-72 lg:!w-80">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Answer
                      title={title}
                      description={description}
                      active={active}
                      closed={closed}
                      isMultipleSelect={isMultipleSelect}
                      isSimpleView={isSimpleView}
                      onClick={() => handleOptionClick(index)}
                    >
                      {!isSimpleView && (
                        <>
                          <Image
                            src={getImagePath(id, index)}
                            alt={title || "Option"}
                            height={512}
                            width={512}
                            quality={100}
                            onClick={() => handleOptionClick(index)}
                            className={`h-full w-full object-cover rounded-3xl cursor-pointer transition-all duration-300 ease-in-out ${active && !isMultipleSelect
                              ? "ring-4 ring-marabunta-red/60"
                              : "ring-0"
                              }`}
                          />

                          <AnimatePresence>
                            {isMultipleSelect && selectionOrder !== null && (
                              <motion.div
                                key={`badge-${index}-${selectionOrder}`}
                                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                exit={{ scale: 0, rotate: 180, opacity: 0 }}
                                transition={{
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 20,
                                }}
                                className="absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-to-br from-marabunta-red via-red-600 to-red-700 flex items-center justify-center z-10 shadow-[0_4px_20px_rgba(255,0,60,0.6)] ring-4 ring-white/20"
                              >
                                <span className="text-white font-black text-lg">
                                  {selectionOrder}
                                </span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
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

            const isOptionAnswer =
              options && currentChoiceType === QuestionTypes.OPTIONS;
            const isOpenAnswer =
              currentChoiceType === QuestionTypes.USER_INPUT;

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