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

interface IntroductionProps {
  lang: Locale;
}

const Question = ({ lang }: IntroductionProps) => {
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

  const question = useMemo(() => {
    return current !== 0
      ? (getQuestion(current, lang) as QuestionType)
      : {
        id: 0,
        options: { unique: [], values: [] },
        choices: [],
        ranges: [],
        prompt: "",
        highlight: "",
        area: 0,
        next: [],
        previous: [],
        closed: false,
        types: [],
        context: "",
      };
  }, [current, lang]);

  const {
    id,
    options,
    choices,
    ranges,
    prompt,
    area,
    highlight,
    next,
    closed,
    types,
    context,
  } = question;

  const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

  useEffect(() => {
    const savedAnswer = answers[id];
    if (!isMultipleSelect) {
      setActiveOption(savedAnswer !== undefined ? (savedAnswer as number) : 0);
    } else if (Array.isArray(savedAnswer)) {
      setSelectedOptions(savedAnswer as { index: number; timestamp: number }[]);
    }
  }, [id, answers, setActiveOption, setSelectedOptions, isMultipleSelect]);

  return (
    <div
      className={`min-h-full w-screen overflow-clip pt-24 text-white gap-3 flex flex-col justify-between items-center transition-opacity delay-200 ease-in-out duration-200 ${current !== 0 ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}
    >
      <section className={"w-full flex flex-col items-stretch gap-6"}>
        <h2 className="text-center px-9 font-bold text-3xl w-full relative z-10">
          {question.context && <p className="text-sm mb-2 text-gray-700">{question.context}</p>}
          {highlight ? (
            <>
              {prompt.split("$")[0]}
              <span className="text-marabunta-red">{highlight}</span>
              {prompt.split("$")[1]}
            </>
          ) : (
            prompt
          )}
        </h2>
        {choices && (
          <MultipleChoice
            id={id}
            choices={choices}
            state={{ activeOption, setActiveOption }}
            area={area}
            next={next}
            closed={closed}
            options={options}
            types={types}
          />
        )}
        {ranges && (
          <div className={"flex px-8 w-full"}>
            <input
              type={"number"}
              className={
                "border-2 border-off-white rounded-xl bg-transparent w-full"
              }
              placeholder={"Ingresa un valor numérico"}
              value={rangeValue}
              onChange={(e) => {
                setRangeValue(parseInt(e.currentTarget.value));
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter")
                  continueQuestion(
                    next.length === 1 ? next[0] : next[activeOption],
                  );
              }}
            />
          </div>
        )}
      </section>
      <div
        className={
          "flex w-full px-6 box-border items-center justify-between text-marabunta-cyan text-sm pb-6"
        }
      >
        <button
          className={"flex gap-2 items-center"}
          onClick={() => goBackQuestion()}
        >
          <MaterialSymbol icon={"north_west"} color={"#129cc0"} size={16} />
          <p>Atrás</p>
        </button>
        {/*<span className={"debug"}>{id.toString(16)}</span>*/}
        <button
          className={`flex gap-2 items-center ${isMultipleSelect && selectedOptions.length === 0
            ? "opacity-50 cursor-not-allowed"
            : ""
            }`}
          disabled={isMultipleSelect && selectedOptions.length === 0}
          onClick={() => {
            if (isMultipleSelect) {
              const sortedSelections = [...selectedOptions].sort((a, b) => a.timestamp - b.timestamp);
              const nextIds = sortedSelections
                .map((selection) => next[selection.index])
                .filter((id) => id !== -1);
              setAnswer(id, sortedSelections);
              continueQuestion(nextIds);
            } else {
              const nextId = next.length === 1 ? next[0] : next[activeOption];
              setAnswer(id, activeOption);
              continueQuestion(nextId ? [nextId] : []);
            }
          }}
        >
          <p>Siguiente</p>
          <MaterialSymbol icon={"north_east"} color={"#129cc0"} size={16} />
        </button>
      </div>
    </div>
  );
};

export default Question;
