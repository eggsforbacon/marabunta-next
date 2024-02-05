import {ReactNode} from "react";
import Link from "next/link";

type _CProps = {
    icon : ReactNode,
    heading : string,
    subtitle : string,
    action : {label : string, href : string}
}

export const ActionCard = (props : _CProps) => {
    return (
        <Link href={props.action.href} className={"max-w-[28rem] h-36 flex items-start justify-start gap-2"}>
            <span className={"rounded-lg aspect-square p-2"}>
                {props.icon}
            </span>
            <section className={"text-off-white transition duration-200 ease-in-out peer hover:text-marabunta-red flex flex-col items-start justify-start gap-3"}>
                <h3 className={"font-bold text-lg"}>{props.heading}</h3>
                <h3 className={"text-base"}>{props.subtitle}</h3>
                <p className={"font-semibold text-base"}>{props.action.label}</p>
            </section>
        </Link>
    );
}