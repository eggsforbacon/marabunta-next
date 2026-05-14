import Navbar from "@/components/ui/Navbar";
import { getLanguage } from "@/dictionaries";
import { Locale } from "@/_i18n.config";
import Introduction from "@/components/quote/ModeSelector";
import Question from "@/components/quote/Question";
import ProgressBar from "@/components/quote/ProgressBar";
import Warehouse from "@/components/quote/Warehouse";
import ContactSection from "@/components/contact/ContactSection";

export default function Quote({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { nav, contact } = getLanguage(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} current="/cotizador" />

            <section className="flex flex-col bg-black w-full overflow-x-clip relative">
                <ProgressBar />
                <Warehouse />
                <Question lang="es" />
                <Introduction lang="es" />
                <ContactSection contact={contact} />
            </section>
        </main>
    );
}