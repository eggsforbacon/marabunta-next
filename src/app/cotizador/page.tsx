import Navbar from "@/components/ui/Navbar";
import {getLanguage} from "@/dictionaries";
import {Locale} from "@/_i18n.config";
import Introduction from "@/components/quote/ModeSelector";
import Question from "@/components/quote/Question";
import ProgressBar from "@/components/quote/ProgressBar";

export default function Quote({
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
                    "flex flex-col bg-black w-full overflow-x-clip relative max-h-[100vh] overflow-clip"
                }
            >
                <ProgressBar />
                <Question lang={"es"} />
                <Introduction lang={"es"}/>
            </section>
        </main>
    );
}
