type _CProps = {
    className?: string,
    overrideBackgroundAndBorder?: string,
    overrideRing?: string,
    overrideText?: string,
    withShadow?: {
        overdrop : string,
        backdrop : string,
    },

    name?: string,
    required?: boolean,
}

const _defaults: { [key: string]: string } = {
    "background&border": "bg-neutral-200/20 border-neutral-400 checked:bg-marabunta-cyan/20 checked:border-marabunta-cyan/20",
    "ring": "focus:ring-offset-0 focus:ring-marabunta-cyan focus:border-0",
    "text": "text-marabunta-cyan/30",
}

export const Checkbox = (props: _CProps) => {

    const baseClassName: string = `h-4 aspect-square rounded-sm border-2 border-solid ${props.overrideBackgroundAndBorder || _defaults["background&border"]} ${props.overrideRing || _defaults["ring"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName: string = `relative z-10 ${baseClassName} ${props.className}`;

    if (!props.withShadow) return (
        <input type={"checkbox"} className={finalClassName} name={props.name} required={props.required}/>
    ); else return (
        <div className={"relative h-4 aspect-square flex items-start justify-start"}>
            <span className={`absolute z-0 top-0.5 left-0.5 aspect-square h-4 ${props.withShadow.backdrop} rounded-sm shadow-lg`}/>
            <span className={`absolute z-0 top-0 left-0 aspect-square h-full ${props.withShadow.overdrop} rounded-sm`}/>
            <input type={"checkbox"} className={finalClassName} name={props.name} required={props.required}/>
        </div>
    );

}