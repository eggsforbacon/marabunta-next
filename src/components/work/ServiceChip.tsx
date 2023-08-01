import {ServiceCategories, ServiceChip as _ChipType, ServiceNames} from "@/types/work";
import Link from "next/link";

type _CProps = {
    href: string,
}

export const ServiceChip = (props: _CProps & _ChipType) => {

    const _LocNames: { [key in ServiceNames]: string } = {
        "Social Marketing": "Mercadeo Social",
        "Communication Strategies": "Estrategia Comunicativa",
        "Event Production": "Producción de Eventos",
        "POP Material": "Material POP",
        "Media Production": "Producción Audiovisual",
        "Digital Marketing": "Marketing Digital",
        "Brand Activation": "Activación de Marca",
        "Media Campaign": "Plan de Medios",
        "Web": "Web",
    }

    const _hoverClasses: { [key in ServiceCategories]: string } = {
        "Communication": "hover:border-marabunta-cyan hover:text-marabunta-cyan",
        "Events": "hover:border-marabunta-yellow hover:text-marabunta-yellow",
        "Digital Media": "hover:border-marabunta-red hover:text-marabunta-red",
    }

    return (
        <Link href={props.href}
              className={`flex items-center border-solid border-2 border-off-white/50 text-off-white/50 text-sm font-light justify-center px-4 py-2 rounded-full box-border transition duration-300 delay-75 cursor-default ease-exponential-in-out ${_hoverClasses[props.category]}`}>
            {_LocNames[props.name]}
        </Link>
    );
}