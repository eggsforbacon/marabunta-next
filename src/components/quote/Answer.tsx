import {ReactNode} from "react";

type _Props = {
    title: string,
    description?: string,
    children: ReactNode,
    active: boolean,
}

const Answer = ({title, description, children, active}: _Props) => {
    return (
        <div className={"flex flex-col items-center justify-start gap-4"}>
            <div className={"rounded-3xl overflow-clip relative h-64 w-56"}>
                {children}
            </div>
            <div
                className={`-mx-4 flex flex-col items-start justify-center transition-all duration-400 delay-200 ease-in-out ${active ? "opacity-100" : "opacity-0 select-none pointer-events-none"}`}>
                <h3 className={"font-bold text-2xl"}>{title}</h3>
                {description && <p className={"text-sm font-light"}>{description}</p>}
            </div>
        </div>
    );
}

export default Answer;