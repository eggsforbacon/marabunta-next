type _CProps = {
    className? : string,
    overrideBackgroundAndBorder? : string,
    overrideRing? : string,
    overrideText? : string,

    name? : string,
    required? : boolean,
}

const _defaults : {[key : string] : string} = {
    "background&border" : "checked:bg-marabunta-red/20 checked:border-marabunta-red/20",
    "ring" : "focus:ring-offset-0 focus:ring-marabunta-red focus:border-0",
    "text" : "text-marabunta-red/30",
}

export const Checkbox = (props : _CProps) => {

    const baseClassName: string = `h-4 aspect-square rounded-sm bg-neutral-200/20 border-2 border-solid border-neutral-400 ${props.overrideBackgroundAndBorder || _defaults["background&border"]} ${props.overrideRing || _defaults["ring"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName: string = `${baseClassName} ${props.className}`;

    return (
        <input type={"checkbox"} className={finalClassName} name={props.name} required={props.required}/>
    );
}