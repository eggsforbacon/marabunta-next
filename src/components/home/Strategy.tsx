import StrategyCard from "@/components/home/StrategyCard";
import Image from "next/image";

export default function Strategy({s}: { s: { [key: string]: any } }) {

    const cards = s as {
        "title": string,
        "subtitle": string,
        "description": string,
    }[];

    const backgrounds = [
        "bg-marabunta-cyan",
        "bg-marabunta-red",
        "bg-marabunta-yellow-alt",
        "bg-off-black",
        "bg-marabunta-cyan"
    ];

    const colors = [
        "text-off-black",
        "text-off-white",
        "text-off-black",
        "text-off-white",
        "text-off-black",
    ];

    const borderColors = [
        "border-r-off-black",
        "border-r-off-white",
        "border-r-off-black",
        "border-r-off-white",
        "border-r-off-black",
    ];

    const z = [
        "z-50",
        "z-40",
        "z-30",
        "z-20",
        "z-10",
    ];

    const images = [
        <Image key={0} src={"/images/home/webp/360/1.webp"} alt={""} width={1920} height={1080}
               className={"absolute saturate-0 brightness-75 -left-52 top-0 h-full max-w-none object-cover"}/>,
        <Image key={1} src={"/images/home/webp/360/2.webp"} alt={""} width={1920} height={1080}
               className={"absolute saturate-0 brightness-75 -left-52 top-0 h-full max-w-none object-cover"}/>,
        <Image key={2} src={"/images/home/webp/360/3.webp"} alt={""} width={1920} height={1080}
               className={"absolute saturate-0 brightness-75 -right-96 top-0 h-full max-w-none object-cover"}/>,
        <Image key={3} src={"/images/home/webp/360/4.webp"} alt={""} width={1920} height={1080}
               className={"absolute saturate-0 brightness-125 -right-120 top-14 h-full max-w-none object-cover"}/>,
        <Image key={4} src={"/images/home/webp/360/5.webp"} alt={""} width={1920} height={1080}
               className={"absolute saturate-0 brightness-75 -left-52 top-0 h-full max-w-none object-cover"}/>
    ];

    return (
        <section className={"text-off-white  bg-black relative h-[302.5rem]"}>

            {
                cards.map((c, i) => {
                    return (
                        <StrategyCard title={c.title} subtitle={c.subtitle} description={c.description} angle={i * 90}
                                      background={backgrounds[i]} color={colors[i]} borderRColor={borderColors[i]}
                                      z={z[i]} image={images[i]} key={i} angleColor={backgrounds[i] === "bg-marabunta-cyan" ? "text-off-white" : undefined}/>
                    );
                })
            }
        </section>
    );
}