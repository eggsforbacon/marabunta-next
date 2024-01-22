import {ReactNode} from "react";

type StrategyCardProps = {
    title: string,
    subtitle: string,
    description: string,
    angle: number,
    background: string,
    color: string,
    borderRColor : string,
    angleColor?: string,
    z: string,
    image: ReactNode,
}

export default function StrategyCard(
    {
        title,
        subtitle,
        description,
        angle,
        background,
        color,
        borderRColor,
        angleColor,
        z,
        image,
    }: StrategyCardProps) {

    const titleSplit = title.split('\n');

    return (
        <div
            className={`${color} flex flex-col justify-end items-stretch w-full h-[60.5rem] ${background} sticky bottom-0 left-0 ${z} overflow-clip`}>
            <div className={"h-full w-[35%] absolute right-0 overflow-clip top-0"}>
                {image}
                <span
                    className={`${background} mix-blend-overlay pointer-events-none absolute top-0 left-0 w-full h-full`}/>
            </div>
            <div className={"flex items-stretch justify-start gap-8 absolute top-44 right-168"}>
                <div className={`flex flex-col items-end justify-start text-end w-136 border-r-4 ${borderRColor} pr-8`}>
                    <h1 className={"text-7xl font-black uppercase tracking-wide"}>{titleSplit.map((s, i) => <><span key={i}>{s}</span>{titleSplit.length - 1 !== i && <br/>}</>)}</h1>
                    <p className={"text-2xl font-medium"}>{subtitle}</p>
                </div>
                <p className={`h-full font-normal text-xl text-start max-w-[22rem]`}>{description}</p>
            </div>
            <h2 className={`${angleColor ?? ""} tracking-tighter w-[85rem] text-end absolute -bottom-80 -left-16 text-[40rem] font-bold`}>{angle}°</h2>
        </div>
    );
}