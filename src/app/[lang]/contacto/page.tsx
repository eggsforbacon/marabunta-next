import React from "react";
import Navbar from "@/components/ui/Navbar";
import {ContactForm} from "@/components/contact/ContactForm";
import {ActionCard} from "@/components/contact/ActionCard";
import {Behance, Chat, Facebook, Geo, Instagram, Linkedin, Telephone} from "react-bootstrap-icons";
import Link from "next/link";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import Image from "next/image";

export default async function Home({params : {lang}} : {params : {lang : Locale}}) {
    const { nav, contact } = await getDictionary(lang);

    return (
        <main>
            <Navbar current={"/contacto"} s={nav} lang={lang}/>
            <span className={"aspect-square z-50 h-16 absolute top-6 right-6"} />
            <section className={"flex relative flex-col bg-off-black items-center justify-start pt-24 2xl:pt-0 w-full px-4 md:px-12 lg:px-24 xl:px-32 overflow-x-clip"}>
                <Image src={"/images/contact/footer-bezel.png"} alt={""} width={1920} height={1080} className={"bottom-64 left-44 lg:bottom-0 lg:left-0 absolute lg:scale-100 scale-[3.2]"}/>
                <section
                    className={"relative flex flex-col bg-off-white rounded-2xl bottom-8 2xl:max-h-[56rem] max-w-[56rem] w-full 2xl:absolute 2xl:right-16 2xl:top-8 py-8 px-6 md:px-10 lg:px-20 shadow-2xl"}>
                    <div
                        className={"text-off-black text-lg font-semibold flex flex-col items-start justify-start gap-6"}>
                        <h1 className={"text-3xl md:text-5xl font-bold"}>{contact.card.title} <br className={"lg:inline-block hidden"}/><span
                            className={"underline-offset-8 underline text-marabunta-red"}>{contact.card.remark}</span></h1>
                        <p className={"text-base md:text-lg"}>{contact.card.prompt}</p>
                    </div>
                    <ContactForm s={contact.card}/>
                </section>
                <aside
                    className={"relative flex items-center justify-between flex-col md:flex-row 2xl:flex-col 2xl:items-start 2xl:justify-end pt-20 pb-44 w-full h-full 2xl:gap-32"}>
                    <div className={"flex flex-col items-stretch justify-start gap-4"}>
                        <ActionCard icon={<Chat className={"fill-off-white transition duration-200 ease-in-out peer-hover:fill-marabunta-red"} size={28}/>} heading={contact.actions.talk}
                                    subtitle={contact.actions.talkDetail}
                                    action={{label: "info@marabunta.co", href: "mailto:info@marabunta.co"}}/>
                        <ActionCard icon={<Geo className={"fill-off-white transition duration-200 ease-in-out peer-hover:fill-marabunta-red"} size={28}/>} heading={contact.actions.visit}
                                    subtitle={contact.actions.visitDetail}
                                    action={{label: "Calle 8 oeste #28 - 45, Cali", href: "https://goo.gl/maps/2tR1LGMZnG4zo3CSA"}}/>
                        <ActionCard icon={<Telephone className={"fill-off-white transition duration-200 ease-in-out peer-hover:fill-marabunta-red"} size={28}/>} heading={contact.actions.call}
                                    subtitle={contact.actions.callDetail}
                                    action={{label: "+57 (602) 407 2035", href: "tel:+576024072035"}}/>
                    </div>
                    <div className={"flex md:flex-col 2xl:flex-row items-center justify-start gap-4"}>
                        <Link passHref href={"https://www.facebook.com/marabuntaagencia"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2"}>
                            <Facebook className={"fill-red-50"} size={22}/>
                        </Link>
                        <Link passHref href={"https://www.instagram.com/marabuntaagenciacreativa/"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2"}>
                            <Instagram className={"fill-red-50"} size={22}/>
                        </Link>
                        <Link passHref href={"https://co.linkedin.com/company/marabunta"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2"}>
                            <Linkedin className={"fill-red-50"} size={22}/>
                        </Link>
                        <Link passHref href={"https://www.behance.net/MarabuntaAgencia"}
                              target={"_blank"} rel={"noreferrer"}
                              className={"rounded-lg aspect-square p-2 border-solid border-red-50 border-2"}>
                            <Behance className={"fill-red-50"} size={22}/>
                        </Link>
                    </div>
                </aside>
            </section>
        </main>
    );
}