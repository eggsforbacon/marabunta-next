import { Locale } from "@/_i18n.config";
import Navbar from "@/components/ui/Navbar";
import LegalNavigation from "@/components/legal/LegalNavigation";
import { getLanguage } from "@/dictionaries";
import { LegalBlockRenderer } from "@/components/legal/LegalBlockRenderer";

export default async function Legal({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const { nav, legal } = await getLanguage(lang);

    return (
        <main className="bg-off-white overflow-x-hidden">
            <Navbar s={nav} lang={lang} />
            <article className="flex flex-col items-center space-y-16 py-28 px-4 md:px-0">
                <section className="flex flex-col text-marabunta-cyan items-center justify-center space-y-2">
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
                        {legal.title}
                    </h1>
                    <p className="text-xs font-light">{legal.update}</p>
                </section>

                <section className="relative flex flex-col md:flex-row items-start justify-around h-full w-full md:w-10/12 gap-10">
                    <div className="w-full md:w-72">
                        <LegalNavigation items={legal.navigation.items} />
                    </div>

                    <article className="flex flex-col items-start w-full md:flex-1 space-y-16">
                        {legal.sections.map((sec) => (
                            <section
                                key={sec.id}
                                id={sec.id}
                                className="flex flex-col w-full text-left items-start justify-center space-y-4 scroll-mt-24"
                            >
                                <h2 className="font-bold text-2xl">{sec.title}</h2>
                                {sec.blocks.map((b, i) => (
                                    <LegalBlockRenderer key={i} block={b} />
                                ))}
                            </section>
                        ))}
                    </article>
                </section>
            </article>
        </main>
    );
}