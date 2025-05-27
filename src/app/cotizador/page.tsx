import Navbar from "@/components/ui/Navbar";
import { getLanguage } from "@/dictionaries";
import { Locale } from "@/_i18n.config";
import Introduction from "@/components/quote/Introduction";
import Question from "@/components/quote/Question";

export default function Quote({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { nav, quote } = getLanguage(lang);

  return (
    <main className="max-h-none">
      <Navbar s={nav} lang={lang} current={"/cotizador"} />
      <section
        className={
          "flex flex-col bg-black w-full overflow-x-clip relative min-h-[100vh] max-h-none"
        }
      >
        <Question lang={"es"} />
        <Introduction lang={"es"} />
      </section>
    </main>
  );
}
