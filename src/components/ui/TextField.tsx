"use client";

import React, {HTMLInputTypeAttribute, useState} from "react";

type _CProps = {
    className?: string,
    overrideSize?: string,
    overrideBorderRadius?: string,
    overrideBorder?: string,
    overrideBackground?: string,
    overrideText?: string,
    overrideLabel?: string,
    focusedLabel?: string,

    type?: HTMLInputTypeAttribute,
    required?: boolean,
    name?: string,
    autoComplete?: string,
    label?: string,
}

const _defaults: { [key: string]: string } = {
    "size": "h-14 w-104 px-4",
    "borderRadius": "rounded-lg",
    "background": "bg-off-black",
    "border": "border-solid border-2 border-neutral-300/50",
    "text": "text-off-white",
    "label": "text-neutral-500 font-medium",
}

export const TextField = (props: _CProps) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
    };

    const labelPosition = {
        "default": "top-1/2 -translate-y-1/2 left-10",
        "active": `top-0 -translate-y-1/2 left-8`,
    };

    const baseOuter: string = `relative ${props.overrideSize || _defaults["size"]} `;
    const baseLabel: string = `absolute z-10 pointer-events-none transition-all duration-300 ease-quintic ${focused ? labelPosition.active : labelPosition.default} ${props.overrideBackground || _defaults["background"]} ${focused ? props.focusedLabel || `text-sm px-4 ${props.overrideText || _defaults["text"]}` : props.overrideLabel || _defaults["label"]}`;
    const baseClassName: string = `focus:ring-0 h-full w-full relative ${props.overrideBorderRadius || _defaults["borderRadius"]} ${props.overrideBackground || _defaults["background"]} ${props.overrideBorder || _defaults["border"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName: string = `${baseClassName} ${props.className}`;

    return (
        <div className={baseOuter}>
            <label className={baseLabel}>{props.label || ""}</label>
            <input type={props.type} className={finalClassName} name={props.name}
                   required={props.required} autoComplete={props.autoComplete}
                   onFocus={handleFocus} onBlur={handleBlur}/>
        </div>
    );
}