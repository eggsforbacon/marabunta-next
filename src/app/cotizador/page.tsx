import Navbar from "@/components/ui/Navbar";
import {getLanguage} from "@/dictionaries";
import {Locale} from "@/_i18n.config";
import Introduction from "@/components/quote/Introduction";
import Question from "@/components/quote/Question";
import Warehouse from "@/components/quote/Warehouse";

export default function Quote(
    {
        params: {lang},
    }: {
        params: { lang: Locale };
    }) {
    const {nav, quote} = getLanguage(lang);

    return (
        <main className="">
            <Navbar s={nav} lang={lang} current={"/cotizador"}/>
            <section
                className={
                    "flex flex-col bg-black w-full overflow-x-clip relative"
                }
            >
                <Question lang={"es"}/>
                <Introduction lang={"es"}/>
                <Warehouse />
            </section>
        </main>
    );
}
