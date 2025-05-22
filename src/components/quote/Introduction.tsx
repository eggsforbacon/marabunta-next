"use client";

import Image from "next/image";
import {useQuoteStore} from "@/store/quote";
import {Locale} from "@/_i18n.config";

interface IntroductionProps {
    lang: Locale,
}

const Introduction = ({lang}: IntroductionProps) => {

    const {current, next} = useQuoteStore();

    function startQuestionnaire() {
        next(0x0001);
    }

    return (
        <>
            <Image src={"/images/quote/svg/background_quote.svg"} alt={""} width={1000} height={1000} quality={100}
                   className={`transition-all duration-200 ease-in-out ${current !== 0x0000 ? "opacity-0" : "opacity-100"} pointer-events-none select-none w-full absolute bottom-12 xs:bottom-0 md:-bottom-16 left-0 scale-[2]`}/>
            <div
                className={`transition-all duration-200 ease-in-out ${current !== 0x0000 ? "opacity-0 select-none pointer-events-none" : "opacity-100"} flex flex-col justify-start gap-6 px-16 xs:px-12 md:px-32 h-full pt-36 xs:pt-44`}>
                <h1 className={"text-3xl xs:text-4xl md:text-5xl font-semibold text-off-white -mr-4 xd:mr-0 leading-[1]"}>¿Quieres
                    saber cuánto cuesta <span
                        className={"font-extrabold text-marabunta-red"}>realizar tu idea?</span></h1>
                <p className={"text-slate-100 font-light text-sm xs:text-base xs:leading-[1.7] md:text-xl md:max-w-[24rem]"}>Descubre
                    nuestra herramienta de estimación de costos: responde un
                    breve cuestionario y recibe tu cotización <span className={"font-bold text-white"}>¡en tiempo récord!</span>
                </p>
                <button
                    onClick={startQuestionnaire}
                    className={"font-bold text-marabunta-cyan rounded-full px-4 py-4 w-[75%] mt-6 xs:mt-16 text-lg border-2 border-marabunta-cyan transition-all duration-200 animation-timing-ease-in-out-sine hover:bg-marabunta-cyan hover:text-white"}>¡Comencemos!
                </button>
            </div>
        </>
    );
}

export default Introduction;