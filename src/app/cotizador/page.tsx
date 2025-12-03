"use client";

import { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import { getLanguage } from "@/dictionaries";
import { Locale } from "@/_i18n.config";
import Introduction from "@/components/quote/ModeSelector";
import Question from "@/components/quote/Question";
import ProgressBar from "@/components/quote/ProgressBar";
import Warehouse from "@/components/quote/Warehouse";
import RestoreSessionModal from "@/components/quote/RestoreSessionModal";

export default function Quote(
    {
        params: { lang },
    }: {
        params: { lang: Locale };
    }) {
    const { nav } = getLanguage(lang);

    useEffect(() => {
        if (typeof window === "undefined") return;

        sessionStorage.setItem("in_quote_active", "true");

        return () => {
            sessionStorage.removeItem("in_quote_active");
        };
    }, []);

    return (
        <main className="">
            <Navbar s={nav} lang={lang} current={"/cotizador"} />
            <RestoreSessionModal />
            <section
                className={
                    "flex flex-col bg-black w-full overflow-x-clip relative"
                }
            >
                <ProgressBar />
                <Warehouse />
                <Question lang={"es"} />
                <Introduction lang={"es"} />
            </section>
        </main>
    );
}
