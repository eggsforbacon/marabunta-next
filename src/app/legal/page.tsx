import {Locale} from "@/_i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Navbar from "@/components/ui/Navbar";
import LegalNavigation from "@/components/legal/LegalNavigation";
import LocaleLink from "@/components/ui/LocaleLink";
import Link from "next/link";

export default async function Legal({params: {lang}}: { params: { lang: Locale } }) {
    const {nav, legal} = await getDictionary(lang);

    const liStyle: string = "list-decimal ml-6 flex flex-col gap-6";

    return (
        <main className={"bg-off-white"}>
            <Navbar s={nav} lang={lang}/>
            <article className={"flex flex-col items-center space-y-16 py-28"}>
                <section className={"flex flex-col text-marabunta-cyan items-center justify-center space-y-2"}>
                    <h1 className={"font-bold text-5xl text-center"}>{legal.title}</h1>
                    <p className={"text-xs font-light"}>{legal.update}</p>
                </section>
                <section
                    className={"relative flex flex-col md:flex-row items-center md:items-start justify-around h-full w-full md:w-3/4"}>
                    <LegalNavigation s={legal.navigation}/>
                    <article className={"flex flex-col items-center w-4/6 justify-start space-y-16"}>
                        <section
                            className={"flex flex-col w-full text-left items-start justify-center space-y-4"}>
                            <h2 className={"font-bold"} id={"protection"}>{legal.data.title}</h2>
                            <p>{legal.data.paragraph1.map((p, i) => {
                                if (i !== 1) return (
                                    <span key={i}>{p}</span>
                                ); else return (
                                    <span key={i}><strong className={"font-bold uppercase"}>{p}</strong></span>
                                );
                            })}</p>
                            <ol className={liStyle}>
                                {legal.data.purposes.map((p, i) => {
                                    return (
                                        <li key={i}>{p}</li>
                                    );
                                })}
                            </ol>
                            <p>{legal.data.paragraph2}</p>
                            <p>{legal.data.paragraph3}</p>
                            <p>{legal.data.paragraph4.map((p, i) => {
                                if (![1, 3].includes(i)) return (
                                    <span key={i}>{p}</span>
                                ); else if (i === 3) return (
                                    <LocaleLink key={i} lang={lang} href={"/"}
                                                className={"underline decoration-1 underline-offset-2 transition duration-300 ease-in-out hover:text-marabunta-red"}><strong
                                        className={"font-bold uppercase"}>{p}</strong></LocaleLink>
                                ); else return (
                                    <Link href={"mailto:subgerencia@marabunta.co"} target={"_blank"}
                                          rel={"noreferrer"}
                                          className={"underline decoration-1 underline-offset-2 transition duration-300 ease-in-out hover:text-marabunta-red"}>{p}</Link>
                                );
                            })}</p>
                        </section>
                        <section
                            className={"flex flex-col w-full text-left items-start justify-center space-y-4"}>
                            <h2 className={"font-bold"} id={"privacy"}>{legal.tos.title}</h2>
                            {legal.tos.content.map((p, i) => {
                                return (
                                    <p key={i}>{p}</p>
                                );
                            })}
                        </section>
                    </article>
                </section>
            </article>
        </main>
    );
}