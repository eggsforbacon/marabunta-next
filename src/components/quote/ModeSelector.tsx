"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useQuoteStore } from "@/store/quote";
import { Locale } from "@/_i18n.config";
import { QuoteMode } from "@/types/quote";

interface ModeSelectorProps {
  lang: Locale;
}

const ModeSelector = ({ lang }: ModeSelectorProps) => {
  const { current, setQuoteMode } = useQuoteStore();

  const startQuestionnaire = (mode: QuoteMode) => {
    setQuoteMode(mode);
  };

  const isVisible = current === "intro";

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      >
        <Image
          src="/images/quote/svg/background_quote.svg"
          alt=""
          fill
          priority
          className="object-cover object-bottom scale-[2] md:scale-125 opacity-30"
        />
      </motion.div>

      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 xl:gap-24 px-8 xs:px-12 md:px-24 xl:px-48 ${
          !isVisible ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30,
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start max-w-lg"
        >
          <h1 className="text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-semibold text-off-white leading-[1.1] mb-6">
            ¿Quieres saber cuánto cuesta{" "}
            <span className="font-extrabold text-marabunta-red">
              realizar tu idea?
            </span>
          </h1>

          <p className="text-slate-100 font-light text-sm xs:text-base md:text-lg xl:text-xl leading-relaxed max-w-[32rem] mb-10">
            Elige cómo quieres empezar. Puedes obtener una estimación rápida o
            una cotización detallada para resultados más precisos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <button
              onClick={() => startQuestionnaire(QuoteMode.SIMPLE)}
              className="font-bold text-marabunta-cyan rounded-full px-6 py-4 text-lg border-2 border-marabunta-cyan transition-all duration-300 hover:bg-marabunta-cyan hover:text-white hover:shadow-[0_0_30px_-8px_#00FFFF]"
            >
              Cotización rápida
            </button>

            <button
              onClick={() => startQuestionnaire(QuoteMode.COMPLEX)}
              className="font-bold text-white bg-marabunta-red rounded-full px-6 py-4 text-lg border-2 border-marabunta-red transition-all duration-300 hover:bg-transparent hover:text-marabunta-red hover:shadow-[0_0_30px_-8px_#FF003C]"
            >
              Cotización detallada
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 40,
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block relative w-[480px] xl:w-[580px] aspect-square"
        >
          <Image
            src="/images/quote/questions/initial/0.webp"
            alt="Visual Cotizador"
            fill
            className="object-cover rounded-[2rem] brightness-90 contrast-110 transition-transform duration-700 ease-out hover:scale-105 peer shadow-[0_0_60px_-10px_rgba(255,0,60,0.4)]"
          />
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-transform duration-700 ease-out peer-hover:scale-105" />
        </motion.div>
      </div>
    </>
  );
};

export default ModeSelector;