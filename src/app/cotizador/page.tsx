import Navbar from "@/components/ui/Navbar";
import {getLanguage} from "@/dictionaries";
import {Locale} from "@/_i18n.config";
import Introduction from "@/components/quote/Introduction";
import Question from "@/components/quote/Question";

export default function Quote({params: {lang}}: { params: { lang: Locale } }) {

    const {nav, quote} = getLanguage(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} current={"/cotizador"}/>
            <section className={"flex flex-col bg-black w-full relative overflow-clip max-h-screen"}>
                <Introduction lang={"es"}  />
                <Question lang={"es"} />
            </section>
        </main>
    );
}