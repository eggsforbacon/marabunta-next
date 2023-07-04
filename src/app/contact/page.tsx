import React from "react";
import Navbar from "@/components/ui/Navbar";
import {ContactForm} from "@/components/contact/ContactForm";
import {ActionCard} from "@/components/contact/ActionCard";
import {Behance, Chat, Facebook, Geo, Instagram, Linkedin, Telephone} from "react-bootstrap-icons";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Navbar current={"/contact"}/>
            <span className={"aspect-square z-50 h-16 absolute top-6 right-6 md:debug"} />
            <section className={"flex relative flex-col bg-marabunta-red items-center justify-start pt-16 2xl:pt-0 w-full px-6 md:px-12 lg:px-24 xl:px-32"}>
                <section
                    className={"flex flex-col bg-off-white rounded-2xl bottom-8 2xl:max-h-[56rem] max-w-[56rem] w-full 2xl:absolute 2xl:right-16 2xl:top-8 py-8 px-20 shadow-2xl"}>
                    <div
                        className={"text-off-black text-lg font-semibold flex flex-col items-start justify-start gap-6"}>
                        <h1 className={"text-5xl font-bold"}>¿Tienes una idea <br/><span
                            className={"underline-offset-8 underline text-marabunta-red"}>creativa?</span></h1>
                        <p>Cuéntanos más acerca de ti y materialicemos juntos tu idea.</p>
                    </div>
                    <ContactForm/>
                </section>
                <aside
                    className={"flex items-center justify-between 2xl:flex-col 2xl:items-start 2xl:justify-end py-20 w-full h-full 2xl:gap-32"}>
                    <div className={"flex flex-col items-stretch justify-start gap-4"}>
                        <ActionCard icon={<Chat className={"fill-red-50"} size={28}/>} heading={"Hablemos"}
                                    subtitle={"¿Tienes dudas? Escríbenos por correo."}
                                    action={{label: "info@marabunta.co", href: "mailto:info@marabunta.co"}}/>
                        <ActionCard icon={<Geo className={"fill-red-50"} size={28}/>} heading={"Visitanos"}
                                    subtitle={"Encuéntranos en nuestras oficinas"}
                                    action={{label: "Calle 8 oeste #28 - 45, Cali", href: "https://goo.gl/maps/2tR1LGMZnG4zo3CSA"}}/>
                        <ActionCard icon={<Telephone className={"fill-red-50"} size={28}/>} heading={"Llámanos"}
                                    subtitle={"De lunes a viernes, de 8am a 5pm."}
                                    action={{label: "+57 (602) 407 2035", href: "tel:+576024072035"}}/>
                    </div>
                    <div className={"flex flex-col 2xl:flex-row items-center justify-start gap-4"}>
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