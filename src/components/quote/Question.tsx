"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Locale } from "@/_i18n.config";
import { QuestionTypes } from "@/types/quote";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import MultipleChoice from "@/components/quote/MultipleChoice";
import QuestionHeader from "@/components/quote/question/QuestionHeader";
import QuestionChoices from "@/components/quote/question/QuestionChoices";
import QuestionRangeInput from "@/components/quote/question/QuestionRangeInput";
import QuestionFooter from "@/components/quote/question/QuestionFooter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-material-symbols/rounded";
import { useEffect } from "react";

interface QuestionProps {
  lang: Locale;
}

const Question = ({ lang }: QuestionProps) => {
  const {
    question,
    isVisible,
    isSimpleView,
    handleNext,
    handleOptionClick,
    getSelectionOrder,
    goBackQuestion,
    rangeValue,
    setRangeValue,
    activeOption,
    selectedOptions,
    setActiveOption,
  } = useQuestionFlow(lang);

  useEffect(() => {
    if (typeof window !== "undefined" && question?.id && isVisible) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [question?.id, isVisible]);

  if (!question || !isVisible) return null;

  const { id, choices, context, prompt, highlight, types, closed, next } = question;

  const safeTypes = (types ?? QuestionTypes.MULTIPLE_SELECT) as QuestionTypes | QuestionTypes[];
  const safeClosed = !!closed;

  const isMultipleSelect =
    Array.isArray(safeTypes) ? false : safeTypes === QuestionTypes.MULTIPLE_SELECT;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen w-full overflow-clip py-20 md:py-28 lg:py-32 text-white flex flex-col items-center"
      >
        <section className="w-full flex flex-col items-center gap-6 lg:gap-10 pt-4 md:pt-0 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 pb-20 lg:pb-24">

          <QuestionHeader context={context} prompt={prompt} highlight={highlight} />

          {!safeClosed && choices && choices.length > 0 && (
            <>
              <QuestionChoices
                id={id}
                choices={choices}
                activeOption={activeOption}
                selectedOptions={selectedOptions}
                handleOptionClick={handleOptionClick}
                getSelectionOrder={getSelectionOrder}
                types={safeTypes}
                isSimpleView={isSimpleView}
                closed={safeClosed}
                next={next}
              />

              <div className="lg:hidden w-full">
                <MultipleChoice
                  id={id}
                  choices={choices}
                  state={{ activeOption, setActiveOption }}
                  next={next}
                  closed={safeClosed}
                  options={question.options}
                  types={safeTypes}
                  isSimpleView={isSimpleView}
                />
              </div>
            </>
          )}

          {safeClosed && choices && choices.length > 0 && (
            <div className="w-full max-w-[85rem]">
              <MultipleChoice
                id={id}
                choices={choices}
                state={{ activeOption, setActiveOption }}
                next={next}
                closed={safeClosed}
                options={question.options}
                types={safeTypes}
                isSimpleView={isSimpleView}
              />
            </div>
          )}

          {safeTypes === QuestionTypes.NUM_RANGE && (
            <QuestionRangeInput
              value={rangeValue}
              onChange={setRangeValue}
              onNext={handleNext}
            />
          )}
        </section>

        <QuestionFooter
          onBack={goBackQuestion}
          onNext={handleNext}
          showNext={safeClosed || isMultipleSelect || safeTypes === QuestionTypes.NUM_RANGE}
          isNextDisabled={isMultipleSelect && selectedOptions.length === 0}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Question;