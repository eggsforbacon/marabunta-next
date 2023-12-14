import Link from "next/link";
import {FooterLogo} from "@/components/Footer/FooterLogo";
import {FooterForm} from "@/components/Footer/FooterForm";
import {ScrollToTop} from "@/components/Footer/ScrollToTop";
import {Locale} from "@/i18n.config";
import {getDictionary} from "@/lib/dictionary";

export const Footer = async ({lang} : {lang : Locale}) => {
    const { footer } = await getDictionary(lang);

    const linkHoverStyle: string = "inline-block relative before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-300 before:bg-marabunta-red hover:before:w-full hover:before:opacity-100 transition-all duration-300 hover:scale-105 hover:text-marabunta-red";
    const socials : string = "transition duration-300 ease-in-out hover:cursor-pointer [&>*]:transition [&>*]:duration-300 [&>*]:ease-in-out focus:[&>*]:scale-95 focus:text-marabunta-red";
    
    return (
        <>
            <footer
                className={"fixed bottom-0 z-[1] h-screen max-h-[1089px] flex flex-col items-stretch justify-end overflow-x-clip w-full max-w-[1920px]"}>
                <section
                    className={"flex pb-4 flex-col items-stretch justify-end gap-32 bg-off-black relative z-0 h-full w-full"}>
                    <section className={"absolute -top-16 left-0 w-full h-full flex flex-col items-center justify-center pt-16"}>
                        <ScrollToTop className={"animate-float-up-sm border-2 p-6 rounded-full border-transparent transition duration-300 ease-back hover:border-marabunta-yellow"} />
                        <ul className={"w-full flex items-center h-36 lg:h-72 justify-center gap-4 px-6 lg:px-32 flex-wrap md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-16 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl !tracking-[-0.05em] font-light text-off-white"}>
                            <li className={"text-center w-24 grow"}><Link passHref
                                      className={socials}
                                      href={"https://www.facebook.com/marabuntaagencia"} target={"_blank"}
                                      rel={"noreferrer"}>
                                <p className={linkHoverStyle}>Facebook</p></Link>
                            </li>
                            <li className={"text-center w-24 grow"}><Link passHref
                                      className={socials}
                                      href={"https://co.linkedin.com/company/marabunta"} target={"_blank"}
                                      rel={"noreferrer"}>
                                <p className={linkHoverStyle}>Linkedin</p></Link>
                            </li>
                            <li className={"text-center w-24 grow"}><Link passHref
                                      className={socials}
                                      href={"mailto:info@marabunta.co"} target={"_blank"}
                                      rel={"noreferrer"}>
                                <p className={linkHoverStyle}>E-mail</p></Link>
                            </li>
                            <li className={"text-center w-24 grow"}><Link passHref
                                      className={socials}
                                      href={"https://www.behance.net/MarabuntaAgencia"} target={"_blank"}
                                      rel={"noreferrer"}>
                                <p className={linkHoverStyle}>Behance</p></Link></li>
                            <li className={"text-center w-24 grow"}><Link passHref
                                      className={socials}
                                      href={"https://www.instagram.com/marabuntaagenciacreativa/"} target={"_blank"}
                                      rel={"noreferrer"}><p className={linkHoverStyle}>Instagram</p></Link>
                            </li>
                        </ul>
                    </section>
                    <section className={"md:py-8 px-6 md:px-16 flex items-center relative justify-between"}>
                        <ul className={"text-sm md:text-base flex flex-col items-start justify-start gap-2 text-off-white font-light"}>
                            <li><Link
                                className={"transition duration-300 ease-in-out hover:text-marabunta-cyan focus:text-marabunta-cyan"}
                                href={"tel:+576024072035"} target={"_blank"} rel={"noreferrer"}>(602) 407 2035</Link>
                            </li>
                            <li><Link
                                className={"transition duration-300 ease-in-out hover:text-marabunta-cyan focus:text-marabunta-cyan"}
                                href={"mailto:info@marabunta.co"} target={"_blank"}
                                rel={"noreferrer"}>info@marabunta.co</Link></li>
                            <li><Link
                                className={"transition duration-300 ease-in-out hover:text-marabunta-cyan focus:text-marabunta-cyan"}
                                href={"https://goo.gl/maps/2tR1LGMZnG4zo3CSA"} target={"_blank"} rel={"noreferrer"}>Calle
                                8
                                oeste #28-45, Cali</Link></li>
                        </ul>
                        <FooterLogo lang={lang}/>
                    </section>
                    <FooterForm s={footer} lang={lang}/>
                </section>
                {/*Footer itself*/}
                <section className={"bg-neutral-950 w-full p-5 flex items-center justify-center text-center text-sm md:text-base text-off-white/60"}>
                    <p>{footer.footNote}</p>
                </section>
                {/*Footnote*/}
            </footer>
        </>
    );
}