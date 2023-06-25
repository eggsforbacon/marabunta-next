type _CProps = {
    isSubmit? : boolean,
    overrideBackgroundAndBorder? : string,
    overrideBorderRadius? : string,
    overrideText?: string,
    className? : string,
    value? : string,
}

const _defaults : {[key : string] : string} = {
    "background&border" : "bg-neutral-200/20 border-solid border-2 border-neutral-400",
    "borderRadius" : "rounded-lg",
    "text": "text-off-white font-semibold",
}

export const Button = (props : _CProps) => {

    const baseClassName : string = `py-3.5 px-8 ${props.overrideBackgroundAndBorder || _defaults["background&border"]} ${props.overrideBorderRadius || _defaults["borderRadius"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName : string = `${baseClassName} ${props.className || ""}`;

    if (props.isSubmit) return (
        <input type={"submit"} className={finalClassName} value={props.value || "Botón"}/>
    ); else return (
        <button>

        </button>
    );
}