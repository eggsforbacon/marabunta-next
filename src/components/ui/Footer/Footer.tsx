import Image from "next/image";
import Link from "next/link";
import {Behance, Facebook, Instagram, Linkedin} from "react-bootstrap-icons";
import {TextField} from "@/components/ui/TextField";
import {Checkbox} from "@/components/ui/Checkbox";
import {Button} from "@/components/ui/Button";
import {FooterLogo} from "@/components/ui/Footer/FooterLogo";

export const Footer = () => {
    return (
        <footer className={"flex flex-col items-stretch justify-end"}>
            <section className={"flex flex-col items-stretch justify-center bg-off-black"}>
                <section
                    className={"relative flex flex-col pb-8 pt-16 items-center justify-end gap-4 border-b-solid border-b-2 border-b-neutral-600"}>
                    <FooterLogo />
                    <p className={"uppercase tracking-[0.04em] font-medium text-neutral-400"}>Una marca Prensa&<span
                        className={"font-bold"}>Entretenimiento</span></p>
                    <Image src={"/images/svg/yellowDecorator.svg"} alt={""} width={680} height={680} loading={"lazy"}
                           quality={100}
                           className={"absolute -bottom-[20px] -left-20"}/>
                </section>
                <section className={"pt-36 pb-24 px-32 flex items-start justify-between"}>
                    <ul className={"flex flex-col items-start justify-start gap-4 text-off-white font-medium"}>
                        <li><Link
                            className={"transition duration-150 ease-in-out hover:text-marabunta-red focus:text-marabunta-red"}
                            href={"tel:+576024072035"} target={"_blank"} rel={"noreferrer"}>(602) 407 2035</Link></li>
                        <li><Link
                            className={"transition duration-150 ease-in-out hover:text-marabunta-red focus:text-marabunta-red"}
                            href={"mailto:info@marabunta.co"} target={"_blank"}
                            rel={"noreferrer"}>info@marabunta.co</Link></li>
                        <li><Link
                            className={"transition duration-150 ease-in-out hover:text-marabunta-red focus:text-marabunta-red"}
                            href={"https://goo.gl/maps/2tR1LGMZnG4zo3CSA"} target={"_blank"} rel={"noreferrer"}>Calle 8
                            oeste #28-45, Cali</Link></li>
                        <div className={"flex items-center justify-start gap-6"}>
                            <li><Link passHref
                                className={"transition duration-150 ease-in-out hover:cursor-pointer [&>*]:transition [&>*]:duration-150 [&>*]:ease-in-out hover:[&>*]:scale-110 focus:[&>*]:scale-95 hover:text-marabunta-red focus:text-marabunta-red"}
                                href={"https://www.facebook.com/marabuntaagencia"} target={"_blank"} rel={"noreferrer"}>
                                <p className={"sr-only"}>Facebook</p><Facebook className={"h-10"} size={24}/></Link>
                            </li>
                            <li><Link passHref
                                className={"transition duration-150 ease-in-out hover:cursor-pointer [&>*]:transition [&>*]:duration-150 [&>*]:ease-in-out hover:[&>*]:scale-110 focus:[&>*]:scale-95 hover:text-marabunta-red focus:text-marabunta-red"}
                                href={"https://www.instagram.com/marabuntaagenciacreativa/"} target={"_blank"}
                                rel={"noreferrer"}><p className={"sr-only"}>Instagram</p><Instagram className={"h-10"}
                                                                                                    size={24}/></Link>
                            </li>
                            <li><Link passHref
                                className={"transition duration-150 ease-in-out hover:cursor-pointer [&>*]:transition [&>*]:duration-150 [&>*]:ease-in-out hover:[&>*]:scale-110 focus:[&>*]:scale-95 hover:text-marabunta-red focus:text-marabunta-red"}
                                href={"https://www.behance.net/MarabuntaAgencia"} target={"_blank"} rel={"noreferrer"}>
                                <p className={"sr-only"}>Behance</p><Behance className={"h-10"}
                                                                             size={24}/></Link></li>
                            <li><Link passHref
                                className={"transition duration-150 ease-in-out hover:cursor-pointer [&>*]:transition [&>*]:duration-150 [&>*]:ease-in-out hover:[&>*]:scale-110 focus:[&>*]:scale-95 hover:text-marabunta-red focus:text-marabunta-red"}
                                href={"https://co.linkedin.com/company/marabunta"} target={"_blank"} rel={"noreferrer"}>
                                <p className={"sr-only"}>Linkedin</p><Linkedin className={"h-10"} size={24}/></Link>
                            </li>
                        </div>
                    </ul>
                    <form className={"flex flex-col items-start justify-start gap-4"}>
                        <section className={"flex items-center justify-start gap-4"}>
                            <TextField type={"email"} required name={"email"} placeholder={"Déjanos tu correo"}
                                       className={"focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red focus:bg-marabunta-red/10"}/>
                            <Button isSubmit value={"¡Hablemos!"}
                                    overrideBackgroundAndBorder={"bg-marabunta-yellow/20 border-solid border-2 border-marabunta-yellow"}
                                    className={"hover:cursor-pointer focus:outline-0 transition duration-200 ease-quintic-in-out hover:bg-marabunta-red/80 focus:bg-marabunta-red/80 hover:border-marabunta-red focus:scale-95 hover:!scale-105"}
                            />
                        </section>
                        <section className={"flex items-center justify-start gap-4"}>
                            <Checkbox required/>
                            <p className={"text-sm text-neutral-300"}>He leído y aceptado los <Link
                                className={"underline underline-offset-4 transition duration-200 ease-in-out hover:text-marabunta-red"}
                                href={"/legal"}>términos
                                de uso de datos y condiciones</Link></p>
                        </section>
                    </form>
                </section>
            </section>
            {/*Footer itself*/}
            <section className={"bg-neutral-950 w-full p-6 flex items-center justify-center text-off-white/60"}>
                <p>Marabunta&reg; Agencia Creativa &#x2022; Comunicamos Ideas &copy; 2023</p>
            </section>
            {/*Footnote*/}
        </footer>
    );
}