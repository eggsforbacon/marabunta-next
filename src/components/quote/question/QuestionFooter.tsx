"use client";

import {motion} from "framer-motion";
import {MaterialSymbol} from "react-material-symbols";
import LocaleLink from "@/components/ui/LocaleLink";

interface QuestionFooterProps {
    onBack: () => void;
    onNext: () => void;
    showNext: boolean;
    isNextDisabled?: boolean;
    finish: boolean;
}

const QuestionFooter = (
    {
        onBack,
        onNext,
        showNext,
        isNextDisabled = false,
        finish,
    }: QuestionFooterProps) => {
    console.log("FIN: ", finish);
    return (
        <div className="fixed bottom-0 left-0 right-0 w-full z-30 pointer-events-none">
            <div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/90 to-transparent -z-10"/>

            <motion.div
                initial={{opacity: 0, y: 15}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.35}}
                className="relative z-10 flex w-full px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-48 mx-auto box-border items-center justify-between pb-8 lg:pb-10 max-w-[85rem] pointer-events-auto"
            >
                <button
                    className="flex gap-2.5 items-center text-marabunta-cyan hover:text-white transition-all duration-250 group"
                    onClick={onBack}
                >
                    <MaterialSymbol
                        icon={"north_west"}
                        color={"currentColor"}
                        size={20}
                        className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-250"
                    />
                    <p className="text-sm lg:text-base font-medium">Atrás</p>
                </button>
                <LocaleLink
                    href={"/cotizador/checkout"}
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
              group/next ${!finish && "!pointer-events-none !brightness-50"}`}
                    lang={"es"}>
                    Finalizar
                </LocaleLink>
                {showNext && (
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
              group/next`}
                        disabled={isNextDisabled}
                        onClick={onNext}
                    >
                        <p>Siguiente</p>
                        <MaterialSymbol
                            icon={"north_east"}
                            color={"currentColor"}
                            size={20}
                            className="group-hover/next:translate-x-1 group-hover/next:-translate-y-1 transition-transform duration-250"
                        />
                    </button>
                )}
            </motion.div>
        </div>
    );
};

export default QuestionFooter;