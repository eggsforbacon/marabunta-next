"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Locale } from "@/_i18n.config";
import { QuestionTypes } from "@/types/quote";
import { useQuestionFlow } from "@/hooks/useQuestionFlow";
import MultipleChoice from "./MultipleChoice";
import QuestionHeader from "./question/QuestionHeader";
import QuestionChoices from "./question/QuestionChoices";
import QuestionRangeInput from "./question/QuestionRangeInput";
import QuestionFooter from "./question/QuestionFooter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-material-symbols/rounded";
import { useEffect, useRef, useState } from "react";

interface QuestionProps {
    lang: Locale;
}

const Question = (
    { lang }: QuestionProps) => {
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
        finish,
        flowMeta,
    } = useQuestionFlow(lang);

    const [flowNotice, setFlowNotice] = useState<string | null>(null);
    const shownFlowsRef = useRef<Set<string>>(new Set());

    useEffect(() => {
        if (!isVisible) {
            setFlowNotice(null);
            shownFlowsRef.current = new Set();
        }
    }, [isVisible]);

    useEffect(() => {
        if (typeof window !== "undefined" && question?.id && isVisible) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [question?.id, isVisible]);

    useEffect(() => {
        const label = flowMeta?.flowRootOptionLabel;
        if (!label) return;

        if (shownFlowsRef.current.has(label)) return;

        shownFlowsRef.current.add(label);
        setFlowNotice(label);

        const timeout = setTimeout(() => {
            setFlowNotice(null);
        }, 2500);

        return () => clearTimeout(timeout);
    }, [flowMeta?.flowRootOptionLabel]);

    if (!question || !isVisible) return null;

    const { id, choices, context, prompt, highlight, types, closed, next } =
        question;

    const safeTypes = (types ??
        QuestionTypes.MULTIPLE_SELECT) as QuestionTypes | QuestionTypes[];
    const safeClosed = !!closed;
    const safePrompt = prompt?.replaceAll("$", highlight ?? "$") ?? "";

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
                {flowNotice && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="
                            fixed top-24 right-4 z-40
                            max-w-xs sm:max-w-sm
                            bg-black/85 backdrop-blur-xl
                            border border-white/15
                            rounded-2xl px-4 py-3
                            flex items-center gap-3
                            shadow-[0_18px_45px_rgba(0,0,0,0.85)]
                        "
                    >
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-marabunta-red via-red-500 to-marabunta-cyan flex items-center justify-center text-xs font-bold text-white shadow-[0_0_20px_rgba(255,0,60,0.6)]">
                            !
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-400">
                                Nuevo flujo
                            </span>
                            <span className="text-sm text-white font-semibold leading-snug">
                                {flowNotice}
                            </span>
                        </div>
                    </motion.div>
                )}
                <section
                    className="w-full flex flex-col items-center gap-6 lg:gap-10 pt-4 md:pt-0 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 pb-20 lg:pb-24">
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
                                    prompt={safePrompt}
                                    handleOptionClick={handleOptionClick}
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
                                prompt={safePrompt}
                                handleOptionClick={handleOptionClick}
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
                    showNext={
                        safeClosed || isMultipleSelect || safeTypes === QuestionTypes.NUM_RANGE
                    }
                    isNextDisabled={isMultipleSelect && selectedOptions.length === 0}
                    finish={finish}
                />
            </motion.div>
        </AnimatePresence>
    );
};

export default Question;