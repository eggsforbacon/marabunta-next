"use client";

import { motion } from "framer-motion";
import { MaterialSymbol } from "react-material-symbols";
import LocaleLink from "@/components/ui/LocaleLink";

interface QuestionFooterProps {
    onBack: () => void;
    onNext: () => void;
    showNext: boolean;
    isNextDisabled?: boolean;
    finish: boolean;
}

const QuestionFooter = ({
    onBack,
    onNext,
    showNext,
    isNextDisabled = false,
    finish,
}: QuestionFooterProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 w-full z-30 pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black via-black/95 to-transparent -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="relative z-10 flex w-full px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 mx-auto box-border items-center justify-between pb-8 lg:pb-10 max-w-[85rem] pointer-events-auto"
            >
                <button
                    className="
            group/back
            flex items-center gap-2.5
            rounded-full
            px-5 lg:px-6
            py-3 lg:py-3.5
            border border-marabunta-cyan/40
            bg-black/40
            text-marabunta-cyan
            font-semibold
            text-sm lg:text-base
            backdrop-blur-md
            shadow-[0_0_24px_-10px_rgba(0,255,255,0.75)]
            transition-all duration-300
            hover:border-marabunta-cyan/80
            hover:bg-marabunta-cyan/10
            hover:text-white
            hover:shadow-[0_0_32px_-8px_rgba(0,255,255,0.9)]
            active:scale-[0.97]
          "
                    onClick={onBack}
                >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-marabunta-cyan/10 border border-marabunta-cyan/25 transition-all duration-300 group-hover/back:bg-marabunta-cyan/20 group-hover/back:border-marabunta-cyan/50">
                        <MaterialSymbol
                            icon="north_west"
                            color="currentColor"
                            size={20}
                            className="transition-transform duration-300 group-hover/back:-translate-x-0.5 group-hover/back:-translate-y-0.5"
                        />
                    </span>

                    <span>Atrás</span>
                </button>

                <LocaleLink
                    href="/cotizador/checkout"
                    disabled={!finish}
                    className={`flex gap-2.5 items-center rounded-full px-6 lg:px-8 py-3 lg:py-3.5
            bg-gradient-to-r from-marabunta-red via-marabunta-red to-marabunta-red/90
            hover:from-marabunta-red hover:via-marabunta-red/95 hover:to-marabunta-red/90
            border border-marabunta-red/40
            text-white font-semibold text-sm lg:text-base
            transition-all duration-300
            shadow-[0_0_25px_-6px_rgba(255,0,60,0.6)]
            hover:shadow-[0_0_35px_-4px_rgba(255,0,60,0.8)]
            disabled:opacity-40 disabled:cursor-not-allowed
            group/finish ${!finish && "!pointer-events-none !brightness-50"}`}
                    lang="es"
                >
                    Finalizar
                </LocaleLink>

                {showNext && !finish && (
                    <button
                        className={`flex gap-2.5 items-center rounded-full px-6 lg:px-8 py-3 lg:py-3.5
              bg-gradient-to-r from-marabunta-red via-marabunta-red to-marabunta-red/90
              hover:from-marabunta-red hover:via-marabunta-red/95 hover:to-marabunta-red/90
              border border-marabunta-red/40
              text-white font-semibold text-sm lg:text-base
              transition-all duration-300
              shadow-[0_0_25px_-6px_rgba(255,0,60,0.6)]
              hover:shadow-[0_0_35px_-4px_rgba(255,0,60,0.8)]
              disabled:opacity-40 disabled:cursor-not-allowed
              disabled:hover:shadow-[0_0_25px_-6px_rgba(255,0,60,0.6)]
              active:scale-[0.97]
              group/next`}
                        disabled={isNextDisabled}
                        onClick={onNext}
                    >
                        <span>Siguiente</span>

                        <MaterialSymbol
                            icon="north_east"
                            color="currentColor"
                            size={20}
                            className="transition-transform duration-300 group-hover/next:translate-x-1 group-hover/next:-translate-y-1"
                        />
                    </button>
                )}
            </motion.div>
        </div>
    );
};

export default QuestionFooter;