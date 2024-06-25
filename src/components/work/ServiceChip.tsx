import {ServiceCategories, ServiceChip as _ChipType} from "@/types/work";
import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/_i18n.config";

type _CProps = {
    href: string,
    lang : Locale,
}

export const ServiceChip = (props: _CProps & _ChipType) => {

    const _hoverClasses: { [key in ServiceCategories]: string } = {
        "Communication": "hover:border-marabunta-cyan hover:text-marabunta-cyan",
        "Events": "hover:border-marabunta-yellow hover:text-marabunta-yellow",
        "Digital Media": "hover:border-marabunta-red hover:text-marabunta-red",
    }

    return (
        <LocaleLink lang={props.lang} href={props.href}
              className={`flex items-center border-solid border-2 border-off-white/50 text-off-white/50 text-xs md:text-sm font-light justify-center px-4 py-2 rounded-full box-border transition duration-300 delay-75 cursor-default ease-exponential-in-out ${_hoverClasses[props.category]}`}>
            {props.name}
        </LocaleLink>
    );
}