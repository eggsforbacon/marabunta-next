import Link from "next/link";
import {FooterLogo} from "@/components/Footer/FooterLogo";
import {FooterForm} from "@/components/Footer/FooterForm";
import {ScrollToTop} from "@/components/Footer/ScrollToTop";
import {Locale} from "@/_i18n.config";
//import {getDictionary} from "@/lib/dictionary";
import { getLanguage } from "@/dictionaries";

export default async function Footer ({lang} : {lang : Locale}) {
    const { footer } = getLanguage(lang);

    const linkHoverStyle: string = "inline-block relative before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-1 before:opacity-0 before:transition-all before:duration-300 before:bg-marabunta-red hover:before:w-full hover:before:opacity-100 transition-all duration-300 hover:scale-105 hover:text-marabunta-red";
    const socials : string = "transition duration-300 ease-in-out hover:cursor-pointer [&>*]:transition [&>*]:duration-300 [&>*]:ease-in-out focus:[&>*]:scale-95 focus:text-marabunta-red";
    
    return (
        <>
            <footer
                className={"fixed bottom-0 z-[1] h-screen max-h-[1089px] flex flex-col overflow-x-clip w-full max-w-[1920px]"}>
                    <ScrollToTop className={"animate-float-up-sm border-2 p-6 rounded-full border-transparent transition duration-300 ease-back hover:border-marabunta-yellow flex w-min mx-auto mt-32"} />
                    <iframe className="hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.635183059755!2d-76.55008722418688!3d3.4386132513033365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a681f2d96d95%3A0x8bb15a936fe040ca!2sMarabunta%20Agencia%20Creativa!5e0!3m2!1ses-419!2sco!4v1715198873179!5m2!1ses-419!2sco" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <section
                    className={"flex flex-col bg-off-black z-0 h-full w-full justify-end mb-4 md:mb-0"}>
                    <section className={"w-full flex flex-col items-center justify-center h-full md:h-auto leading-[4rem] -pt-16 md:pt-16"}>
                        <ul className={"w-full flex items-center justify-center gap-4 -mt-24 md:mt-0 px-6 lg:px-32 flex-wrap md:gap-8 lg:gap-10 xl:gap-14 2xl:gap-16 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl !tracking-[-0.05em] font-light text-off-white"}>
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
                    
                    <section className={"md:pt-12 md:pb-4 px-6 md:px-16 flex items-center md:items-end justify-between"}>
                        <ul className={"text-sm md:text-base flex flex-col items-start justify-start gap-2 text-off-white font-light md:mb-12 md:w-52"}>
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
                        <FooterForm s={footer} lang={lang}/>
                        <FooterLogo lang={lang}/>
                    </section>
                    
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