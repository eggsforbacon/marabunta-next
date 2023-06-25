import {HTMLInputTypeAttribute} from "react";

type _CProps = {
    className?: string,
    overrideSize?: string,
    overrideBorderRadius?: string,
    overrideBackgroundAndBorder?: string,
    overrideText?: string,

    type?: HTMLInputTypeAttribute,
    placeholder?: string,
    required?: boolean,
    name?: string,
    autoComplete?: string,

}

const _defaults: { [key: string]: string } = {
    "size": "h-14 w-104 px-4",
    "borderRadius": "rounded-lg",
    "background&border": "bg-neutral-300/20 border-solid border-2 border-neutral-400",
    "text": "text-off-white placeholder:text-neutral-500 placeholder:font-medium",
}

export const TextField = (props: _CProps) => {
    const baseClassName: string = `${props.overrideSize || _defaults["size"]} ${props.overrideBorderRadius || _defaults["borderRadius"]} ${props.overrideBackgroundAndBorder || _defaults["background&border"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName: string = `${baseClassName} ${props.className}`;

    return (
        <input type={props.type} className={finalClassName} placeholder={props.placeholder}
               name={props.name} required={props.required} autoComplete={props.autoComplete}/>
    );
}