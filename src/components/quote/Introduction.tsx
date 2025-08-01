"use client";

import Image from "next/image";
import { useQuoteStore } from "@/store/quote";
import { Locale } from "@/_i18n.config";

interface IntroductionProps {
    lang: Locale;
}

const Introduction = ({ lang }: IntroductionProps) => {
    const { current, continueQuestion } = useQuoteStore();

    function startQuestionnaire() {
        continueQuestion("0");
    }
    const isVisible = current === "intro";

    return (
        <>
            <Image
                src={"/images/quote/svg/background_quote.svg"}
                alt={""}
                width={1000}
                height={1000}
                quality={100}
                className={`transition-all duration-200 ease-in-out ${!isVisible ? "opacity-0" : "opacity-100"} pointer-events-none select-none w-full absolute bottom-12 xs:bottom-0 md:-bottom-16 2xl:-bottom-144 left-0 scale-[2]`}
            />
            <div
                className={`absolute top-0 transition-all duration-200 ease-in-out ${!isVisible ? "opacity-0 select-none pointer-events-none" : "opacity-100"} flex flex-col w-full justify-start lg:justify-center lg:items-center gap-6 px-16 xs:px-12 md:px-32 2xl:px-96 h-full pt-36 xs:pt-44 lg:pt-0`}
            >
                <h1 className="text-3xl xs:text-4xl md:text-5xl font-semibold text-off-white -mr-4 xd:mr-0 leading-[1]">
                    {"¿Quieres saber cuánto cuesta "}
                    <span className={"font-extrabold text-marabunta-red"}>{"realizar tu idea?"}</span>
                </h1>
                <p className="text-slate-100 font-light text-sm xs:text-base xs:leading-[1.7] md:text-xl lg:text-2xl lg:text-center md:max-w-[24rem] lg:max-w-none">
                    {"Te invitamos a conocer nuestras áreas de servicio a través de nuestra encuesta de servicio. Te orientamos para que obtengas "}
                    <span className={"font-bold text-white"}>los mejores resultados</span>
                </p>
                <button
                    onClick={startQuestionnaire}
                    className="font-bold text-marabunta-cyan rounded-full px-4 py-4 w-[75%] max-w-[24rem] mt-6 xs:mt-16 text-lg border-2 border-marabunta-cyan transition-all duration-200 animation-timing-ease-in-out-sine hover:bg-marabunta-cyan hover:text-white"
                >
                    ¡Comencemos!
                </button>
            </div>
        </>
    );
};

export default Introduction;