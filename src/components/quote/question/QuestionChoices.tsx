"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MaterialSymbol } from "react-material-symbols";
import { QuestionTypes, Choice } from "@/types/quote";

interface QuestionChoicesProps {
  id: string;
  choices: Choice[];
  activeOption: number;
  selectedOptions: { index: number; timestamp: number }[];
  handleOptionClick: (index: number) => void;
  getSelectionOrder: (index: number) => number | null;
  types: QuestionTypes | QuestionTypes[];
  isSimpleView: boolean;
  closed: boolean;
  next: string[];
}

const QuestionChoices = ({
  id,
  choices,
  activeOption,
  selectedOptions,
  handleOptionClick,
  getSelectionOrder,
  types,
  isSimpleView,
  closed,
  next,
}: QuestionChoicesProps) => {
  const isMultipleSelect = types === QuestionTypes.MULTIPLE_SELECT;

  const getImagePath = (questionId: string, answerIndex: number): string => {
    if (questionId === "0") {
      return `/images/quote/questions/initial/${answerIndex + 1}.webp`;
    }
    const area = questionId.charAt(0).toUpperCase();
    const formattedId = questionId.replace(/\./g, "");
    return `/images/quote/questions/${area}/${formattedId}_${answerIndex + 1}.webp`;
  };

  if (!choices?.length) return null;

  return (
    <div className="hidden lg:grid w-full max-w-[85rem] grid-cols-2 gap-6 xl:gap-8">
      {choices.map(({ title, description }, index) => {
        const isSelected = isMultipleSelect
          ? selectedOptions.some((opt) => opt.index === index)
          : activeOption === index;
        const selectionOrder = getSelectionOrder(index);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.25 + index * 0.08,
              type: "spring",
              stiffness: 120,
              damping: 15,
            }}
            className="h-full"
          >
            <motion.button
              onClick={() => handleOptionClick(index)}
              className={`relative w-full h-full rounded-2xl xl:rounded-3xl overflow-hidden transition-all duration-300 group
                ${isSimpleView ? "min-h-min xl:min-h-min" : "min-h-[320px] xl:min-h-[360px]"}
                ${isSelected
                  ? "ring-4 ring-marabunta-red shadow-[0_0_50px_-8px_rgba(255,0,60,0.7)]"
                  : "ring-2 ring-white/15 hover:ring-white/30 hover:shadow-[0_0_40px_-12px_rgba(255,255,255,0.25)]"
                }
                ${isSimpleView
                  ? "bg-gradient-to-br from-white/[0.12] to-white/[0.02] backdrop-blur-xl"
                  : ""
                }`}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.99 }}
            >
              {!isSimpleView && (
                <div className="absolute inset-0">
                  <Image
                    src={getImagePath(id, index)}
                    alt={title || "Option"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={95}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />
                </div>
              )}

              <AnimatePresence>
                {isMultipleSelect && selectionOrder && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className={`absolute ${isSimpleView ? "top-4 right-4" : "top-5 right-5"
                      } w-12 h-12 rounded-full bg-gradient-to-br from-marabunta-red via-red-600 to-red-700 flex items-center justify-center z-20 shadow-[0_4px_20px_rgba(255,0,60,0.6)] ring-4 ring-white/20`}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-white font-black text-2xl"
                    >
                      {selectionOrder}
                    </motion.span>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isMultipleSelect && !isSelected && (
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-white/40 group-hover:border-white/80 group-hover:bg-white/10 backdrop-blur-sm flex items-center justify-center z-20 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <MaterialSymbol icon="touch_app" size={20} className="text-white" />
                </div>
              )}

              <div
                className={`relative h-full flex flex-col ${isSimpleView
                    ? "justify-center items-center text-center"
                    : "justify-end text-left"
                  } p-7 xl:p-9 z-10`}
              >
                <h3 className="text-2xl xl:text-2xl font-bold text-white mb-2.5 leading-tight transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {title}
                </h3>
                {description && (
                  <p className="text-sm xl:text-base text-gray-300/95 font-light leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default QuestionChoices;