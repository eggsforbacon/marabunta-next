"use client";

import Link from "next/link";
import {Checkbox} from "@/components/ui/Checkbox";
import {Button} from "@/components/ui/Button";
import {TextField} from "@/components/ui/TextField";

export const FooterForm = () => {
    return (
        <form className={"absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-start gap-4"}>
            <section className={"flex flex-col items-center justify-end gap-4"}>
                <TextField type={"email"} required name={"email"} placeholder={"Déjanos tu correo"}
                           className={"focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red focus:bg-marabunta-red/10"}/>
                <Button isSubmit value={"¡Hablemos!"}
                        overrideBackgroundAndBorder={"bg-marabunta-yellow/20 border-solid border-2 border-marabunta-yellow"}
                        className={"hover:cursor-pointer focus:outline-0 transition duration-200 ease-quintic-in-out hover:bg-marabunta-red/80 focus:bg-marabunta-red/80 hover:border-marabunta-red focus:scale-95 hover:!scale-105"}
                />
                <section className={"mt-16 mb-2 opacity-40 transition duration-500 ease-in-out hover:opacity-100 flex items-center justify-start gap-4"}>
                    <Checkbox required/>
                    <p className={"text-sm text-neutral-300"}>He leído y aceptado los <Link
                        className={"underline underline-offset-4 transition duration-200 ease-in-out hover:text-marabunta-red"}
                        href={"/legal"}>términos
                        de uso de datos y condiciones</Link></p>
                </section>
            </section>
        </form>
    );
}