"use client";

import { useMemo } from "react";
import { Locale } from "@/_i18n.config";
import { useQuoteStore } from "@/store/quote";
import { getQuestion } from "@/model/quote";
import { Question as QuestionType } from "@/types/quote";

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
  } = useQuoteStore();

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
  } = question;

  return (
    <div
      className={`min-h-full w-screen overflow-clip pt-24 text-white gap-3 flex flex-col justify-between items-center transition-opacity delay-200 ease-in-out duration-200 ${current !== 0 ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}
    >
      <section className={"w-full flex flex-col items-stretch gap-6"}>
        <h2 className="text-center px-9 font-bold text-3xl w-full relative z-10">
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
          className={"flex gap-2 items-center"}
          onClick={() =>
            continueQuestion(next.length === 1 ? next[0] : next[activeOption])
          }
        >
          <p>Siguiente</p>
          <MaterialSymbol icon={"north_east"} color={"#129cc0"} size={16} />
        </button>
      </div>
    </div>
  );
};

export default Question;
