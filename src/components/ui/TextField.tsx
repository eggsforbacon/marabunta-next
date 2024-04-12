"use client";

import React, {Dispatch, HTMLInputTypeAttribute, SetStateAction, useState} from "react";

type _CProps = {
    className?: string,
    overrideSize?: string,
    overrideBorderRadius?: string,
    overrideBorder?: string,
    overrideBackground?: string,
    overrideText?: string,
    overrideLabel?: string,
    focusedLabel?: string,

    type?: HTMLInputTypeAttribute | "area",
    required?: boolean,
    name?: string,
    autoComplete?: string,
    label?: string,
}

const _defaults: { [key: string]: string } = {
    "size": "h-14 w-80 md:w-96",
    "borderRadius": "rounded-lg",
    "background": "bg-off-black",
    "border": "border-solid border-2 border-neutral-300/50",
    "text": "text-off-white md:text-base text-sm",
    "label": "text-neutral-500 font-medium md:text-base text-sm",
}

export const TextField = (props: _CProps) => {
    const [focused, setFocused] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
    const [hasText, setHasText] : [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFocused(false);
        const field = props.type !== "area" ? e.target as HTMLInputElement : e.target as HTMLTextAreaElement;
        setHasText(field.value.trim().length !== 0);
    };

    const labelPosition = {
        "default": "top-1/2 -translate-y-1/2 left-6",
        "default-area": "top-4 left-6",
        "active": `top-0 -translate-y-1/2 left-8`,
    };

    const baseOuter: string = `relative ${props.overrideSize || _defaults["size"]} `;
    const baseLabel: string = `absolute z-10 pointer-events-none transition-all duration-300 ease-quintic ${focused ? labelPosition.active : props.type === "area" ? labelPosition["default-area"] : labelPosition.default} ${props.overrideBackground || _defaults["background"]} ${focused ? props.focusedLabel || `text-sm px-4 ${props.overrideText || _defaults["text"]}` : props.overrideLabel || _defaults["label"]} ${hasText && !focused ? "opacity-0 select-none" : ""}`;
    const baseClassName: string = `resize-none focus:ring-0 h-full w-full relative text-black ${props.overrideBorderRadius || _defaults["borderRadius"]} ${props.overrideBackground || _defaults["background"]} ${props.overrideBorder || _defaults["border"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName: string = `${baseClassName} ${props.className}`;

    return (
        <div className={baseOuter}>
            <label className={baseLabel}>{props.label || ""}</label>
            {props.type !== "area" ?
                <input type={props.type} className={finalClassName} name={props.name}
                       required={props.required} autoComplete={props.autoComplete}
                       onFocus={handleFocus} onBlur={handleBlur}/>
                :
                <textarea className={finalClassName} name={props.name}
                          required={props.required} autoComplete={props.autoComplete}
                          onFocus={handleFocus} onBlur={handleBlur}/>
            }
        </div>
    );
}