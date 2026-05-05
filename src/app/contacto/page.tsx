import React from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/_i18n.config";
import { getLanguage } from "@/dictionaries";
import ContactSection from "@/components/contact/ContactSection";

export default async function Home({params : {lang}} : {params : {lang : Locale}}) {
    const {nav, contact} = getLanguage(lang);

    return (
        <main>
            <Navbar current={"/"} s={nav} lang={lang} />
            <span className={"aspect-square z-50 h-16 absolute top-6 right-6"} />
            <ContactSection contact={contact} />
        </main>
    );
}