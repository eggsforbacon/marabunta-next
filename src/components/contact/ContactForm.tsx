"use client";

import {TextField} from "@/components/ui/TextField";
import {Checkbox} from "@/components/ui/Checkbox";
import React from "react";
import {Button} from "@/components/ui/Button";

export const ContactForm = ({s} : {s : {[key : string] : any}}) => {

    const textFieldBorderStyle: string = "border-2 border-neutral-400";
    const textFieldBgStyle: string = "bg-off-white";
    const textFieldLabelStyle: string = "text-neutral-400 text-sm";
    const textFieldTextStyle: string = "text-neutral-400";
    const textFieldStyle: string = "focus:outline-none transition duration-300 ease-in-out focus:text-marabunta-red focus:border-marabunta-red";
    const textFieldFocusLabelStyle: string = "px-4 text-marabunta-red";

    const servicesUl: string = "mr-2 flex flex-col items-start justify-start gap-2";
    const servicesLi: string = "flex items-center justify-start gap-2";
    const servicesH3: string = "-mr-2 font-semibold";
    const checkboxBgBorder: string = "bg-red-200/20 border-red-300 checked:bg-marabunta-red/80 checked:border-marabunta-red/80 hover:bg-marabunta-red/60";
    const checkboxText: string = "text-marabunta-red/40";
    const checkboxRing: string = "focus:ring-offset-0 focus:ring-marabunta-red focus:border-0";
    const checkboxShadow = {overdrop: "bg-off-white", backdrop: "bg-red-700"};

    return (
        <form className={"flex flex-col items-stretch justify-start py-8 gap-4 text-neutral-700"}>
            <TextField type={"text"} overrideBackground={textFieldBgStyle} overrideLabel={textFieldLabelStyle}
                       overrideBorder={textFieldBorderStyle} overrideText={textFieldTextStyle}
                       overrideSize={"h-14 w-full"}
                       label={s.form.name} focusedLabel={textFieldFocusLabelStyle}
                       className={textFieldStyle}/>
            <TextField type={"email"} overrideBackground={textFieldBgStyle} overrideLabel={textFieldLabelStyle}
                       overrideBorder={textFieldBorderStyle} overrideText={textFieldTextStyle}
                       overrideSize={"h-14 w-full"}
                       label={s.form.mail} focusedLabel={textFieldFocusLabelStyle}
                       className={textFieldStyle}/>
            <TextField type={"area"} overrideBackground={textFieldBgStyle} overrideLabel={textFieldLabelStyle}
                       overrideBorder={textFieldBorderStyle} overrideText={textFieldTextStyle}
                       overrideSize={"h-32 w-full"}
                       label={s.form.comment} focusedLabel={textFieldFocusLabelStyle}
                       className={textFieldStyle}/>
            <label className={"text-lg font-semibold"}>{s.whatCanWeDo}</label>
            <section className={"flex flex-wrap flex-row items-start justify-between gap-4"}>
                {
                    (s.headings as string[]).map((heading , i) => {
                        return (
                            <ul key={`col${i}`} className={servicesUl}>
                                <h3 className={servicesH3}>{heading}</h3>
                                {
                                    (s.categories[i] as string[]).map((cat, j) => {
                                        return (
                                            <li key={`cat${j}Col${i}`} className={servicesLi}>
                                                <Checkbox withShadow={checkboxShadow}
                                                          overrideBackgroundAndBorder={checkboxBgBorder}
                                                          overrideText={checkboxText} overrideRing={checkboxRing}/>
                                                <p className={"text-sm"}>{cat}</p>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        );
                    })
                }
            </section>
            <Button isSubmit
                    className={"w-full mt-4 cursor-pointer transition duration-300 ease-exponential hover:shadow-xl hover:-translate-y-2 hover:border-marabunta-red hover:bg-off-white hover:text-marabunta-red"}
                    value={s.send}
                    overrideBackgroundAndBorder={"bg-off-black border-solid border-2 border-off-black"}
                    overrideText={"text-off-white font-semibold"}/>
        </form>
    );
}