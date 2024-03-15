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
            className={`${color} flex flex-col justify-end items-stretch w-full h-[35rem] lg:h-[60.5rem] ${background} sticky bottom-0 lg:-bottom-52 xl:-bottom-64 2xl:bottom-0 left-0 ${z} overflow-clip`}>
            <div className={"h-full object-cover w-full absolute right-0 overflow-clip top-0"}>
                {image}
                <span
                    className={`${background} mix-blend-overlay pointer-events-none absolute top-0 left-0 w-full h-full`}/>
            </div>
            <div className={"w-full px-6 lg:px-0 2xl:w-auto flex flex-col lg:flex-row items-center lg:items-stretch justify-start gap-8 absolute top-12 left-1/2 lg:left-60 xl:left-52 -translate-x-1/2 lg:translate-x-0 lg:top-52 xl:top-44 lg:right-168"}>
                <div className={`w-full flex flex-col items-end justify-start text-center lg:text-end lg:w-96 xl:w-136 lg:border-r-4 ${borderRColor} md:px-16 lg:pl-0 lg:pr-8`}>
                    <h1 className={"text-4xl text-center w-full lg:w-auto lg:text-end lg:text-6xl xl:text-7xl font-black uppercase tracking-wide hyphens-manual"}>{titleSplit.map((s, i) => <><span key={i}>{s}</span>{titleSplit.length - 1 !== i && <br/>}</>)}</h1>
                    <p className={"text-lg lg:text-xl xl:text-2xl font-medium w-full"}>{subtitle}</p>
                </div>
                <p className={`h-full font-normal text-base lg:text-lg xl:text-xl text-center lg:text-start max-w-[32rem] lg:max-w-[24rem] xl:max-w-[32rem]`}>{description}</p>
            </div>
            <h2 className={`${angleColor ?? ""} tracking-tighter w-[85rem] absolute -bottom-24 lg:-bottom-64 xl:-bottom-72 2xl:-bottom-80 -left-8 lg:-left-96 xl:-left-80 2xl:-left-16 lg:text-end text-[14rem] lg:text-[30rem] xl:text-[32rem] 2xl:text-[40rem] font-bold`}>{angle}°</h2>
        </div>
    );
}