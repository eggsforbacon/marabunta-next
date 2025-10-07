"use client";

import {Locale} from "@/_i18n.config";
import {getLanguage} from "@/dictionaries";
import Navbar from "@/components/ui/Navbar";
import {useEffect, useState} from "react";
import {Warehouse as W} from "@/types/warehouse";
import Image from "next/image";
import {Strapi} from "@/types/strapi";


export default function Checkout(
    {
        params: {lang},
    }: {
        params: { lang: Locale };
    }) {
    const {nav} = getLanguage(lang);

    const [answers, setAnswers] = useState(null);
    const [cart, setCart] = useState<(W.Element | W.Combo)[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                const stored = sessionStorage.getItem("answers");
                if (stored) {
                    const { answers: a, cart: c } = JSON.parse(stored);
                    setAnswers(a ?? null);
                    setCart(c ?? []);
                }
            } catch {
                setAnswers(null);
                setCart([]);
            }
        }
    }, []);

    return (
        <main className="text-white bg-off-black overflow-x-clip">
            <Navbar s={nav} lang={lang} current={"/cotizador"} />
            <section className="relative w-full flex flex-col items-center justify-start gap-12 pt-32 pb-16 px-6 overflow-y-scroll">
                <section className="flex flex-col items-stretch justify-start gap-4">
                    <h1 className="font-bold text-3xl">Resumen de tu cotización</h1>
                    <p>Gracias por completar el cuestionario. Aquí puedes ver el resumen de tus respuestas</p>
                </section>
                <section className="flex flex-col items-stretch justify-start gap-4">
                    <h2 className="font-bold text-2xl">Servicios</h2>

                </section>
                <section className="flex flex-col items-stretch justify-start gap-4">
                    <h2 className="font-bold text-2xl">Productos</h2>
                    {cart && cart.map((item, index) => {
                        const gallery = item.gallery! as unknown as {
                            data: { id: number, attributes: Strapi.BodyImageAttributes }[]
                        };
                        return (
                            <div key={index}
                                 className="py-2 flex flex-row gap-4">
                                <div
                                    className="aspect-square h-24 border rounded-lg border-white relative overflow-clip">
                                    {item.gallery && (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${gallery.data[0].attributes.url}`}
                                            alt={"Alt text"} width={1920} height={1080}
                                            quality={100}
                                            className="absolute top-0 left-0 object-cover h-full w-full"/>
                                    )}
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <h3 className="text-lg font-semibold">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                    <button>

                    </button>
                </section>
            </section>
            <Image
                src={"/images/quote/svg/background_quote.svg"}
                alt={""}
                width={1000}
                height={1000}
                quality={100}
                className={`transition-opacity duration-300 ease-in-out pointer-events-none select-none w-full absolute -top-0 -rotate-180 xs:bottom-0 md:-bottom-16 2xl:-bottom-144 left-0 scale-[2]`}
            />
        </main>
    );
}