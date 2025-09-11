"use client";

import { useMemo, useEffect } from "react";
import { Locale } from "@/_i18n.config";
import { useQuoteStore } from "@/store/quote";
import { getQuestion } from "@/model/quote";
import { Question as QuestionType, QuestionTypes } from "@/types/quote";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";
import MultipleChoice from "@/components/quote/MultipleChoice";

interface QuestionComponentProps {
  lang: Locale;
}

const Question = ({ lang }: QuestionComponentProps) => {
  const {
    current,
    continueQuestion,
    goBackQuestion,
    activeOption,
    setActiveOption,
    rangeValue,
    setRangeValue,
    answers,
    selectedOptions,
    setSelectedOptions,
    setAnswer,
    setLang,
  } = useQuoteStore();

  useEffect(() => {
    setLang(lang);
  }, [lang, setLang]);

  const isVisible = current !== "intro" && current !== "BODEGA";

  const question: QuestionType | null = useMemo(() => {
    if (!isVisible) return null;

    return getQuestion(current, lang) ?? null;
  }, [current, lang, isVisible]);

  useEffect(() => {
    console.info(current);
  }, [current]);

  useEffect(() => {
    if (!question || !question.id) return;
    const savedAnswer = answers[question.id];
    const isMultiple = question.types === QuestionTypes.MULTIPLE_SELECT;
    if (!isMultiple) {
      setActiveOption(savedAnswer !== undefined ? (savedAnswer as number) : 0);
    } else if (Array.isArray(savedAnswer)) {
      setSelectedOptions(savedAnswer as { index: number; timestamp: number }[]);
    }
  }, [question, answers, setActiveOption, setSelectedOptions]);

  if (!question || !isVisible) {
    return null;
  }

  const {
    id,
    options,
    choices,
    ranges,
    prompt,
    highlight,
    next,
    closed,
    types,
    context,
  } = question;

  const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

  const handleNext = () => {
    if (isMultipleSelect) {
      const sortedSelections = [...selectedOptions].sort((a, b) => a.timestamp - b.timestamp);
      const nextIds = sortedSelections
        .map((selection) => next[selection.index])
        .filter((id) => id !== "-1" && id !== undefined);
      setAnswer(id, sortedSelections);
      continueQuestion(nextIds);
    } else {
      const nextId = next.length === 1 ? next[0] : next[activeOption];
      setAnswer(id, activeOption);
      continueQuestion(nextId ? [nextId] : []);
    }
  };

  return (
    <div
      className={`min-h-full w-screen overflow-clip pt-24 text-white gap-3 flex flex-col justify-between items-center transition-opacity delay-200 ease-in-out duration-200 ${isVisible ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}
    >
      <section className={"w-full flex flex-col items-stretch gap-6"}>
        <h2 className="text-center px-9 font-bold text-3xl w-full relative z-10">
          {context && <p className="text-sm mb-2 text-gray-700">{context}</p>}
          {highlight ? (
            <>
              {(prompt || "").split("$")[0]}
              <span className="text-marabunta-red">{highlight}</span>
              {(prompt || "").split("$")[1]}
            </>
          ) : (
            prompt
          )}
        </h2>
        {choices && choices.length > 0 && (
          <MultipleChoice
            id={id}
            choices={choices}
            state={{ activeOption, setActiveOption }}
            next={next}
            closed={closed}
            options={options}
            types={types}
          />
        )}
        {types === QuestionTypes.NUM_RANGE && ranges && (
          <div className={"flex px-8 w-full"}>
            <input
              type={"number"}
              className={"border-2 border-off-white rounded-xl bg-transparent w-full p-2 text-center"}
              placeholder={"Ingresa un valor numérico"}
              value={rangeValue}
              onChange={(e) => {
                setRangeValue(parseInt(e.currentTarget.value) || 0);
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  const nextId = next.length === 1 ? next[0] : next[activeOption];
                  continueQuestion(nextId ? [nextId] : []);
                }
              }}
            />
          </div>
        )}
      </section>
      <div className={"flex w-full px-6 box-border items-center justify-between text-marabunta-cyan text-sm pb-6"}>
        <button className={"flex gap-2 items-center"} onClick={goBackQuestion}>
          <MaterialSymbol icon={"north_west"} color={"#129cc0"} size={16} />
          <p>Atrás</p>
        </button>
        {(closed || isMultipleSelect || types === QuestionTypes.NUM_RANGE) && (
          <button
            className={`flex gap-2 items-center ${isMultipleSelect && selectedOptions.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isMultipleSelect && selectedOptions.length === 0}
            onClick={handleNext}
          >
            <p>Siguiente</p>
            <MaterialSymbol icon={"north_east"} color={"#129cc0"} size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;