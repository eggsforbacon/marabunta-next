import StrategyCard from "@/components/home/StrategyCard";
import Image from "next/image";

export default function Strategy({s}: { s: { [_: string]: any } }) {

    const cards = s as {
        "title": string,
        "subtitle": string,
        "description": string,
    }[];

    const backgrounds = [
        "bg-marabunta-cyan",
        "bg-marabunta-red",
        "bg-marabunta-yellow-alt",
        "bg-marabunta-red",
        "bg-marabunta-cyan"
    ];

    const colors = [
        "text-off-white lg:text-off-white",
        "text-off-white lg:text-off-white",
        "text-off-white lg:text-off-white",
        "text-off-white lg:text-off-white",
        "text-off-white",
    ];

    const borderColors = [
        "lg:border-r-off-white",
        "lg:border-r-off-white",
        "lg:border-r-off-white",
        "lg:border-r-off-white",
        "lg:border-r-off-white",
    ];

    const z = [
        "z-50",
        "z-40",
        "z-30",
        "z-20",
        "z-10",
    ];

    /* <Image key={0} src={"/images/home/webp/360/1.webp"} alt={""} width={1920} height={1080}
               className={"absolute lg:scale-100 opacity-80 lg:opacity-100 saturate-0 brightness-50 top-0 left-0 h-full max-w-none object-cover"}/>  */

    const images = [
        <video key={0} playsInline loop muted controls={false} autoPlay
               className={"absolute md:scale-[1.2] lg:scale-100 opacity-100 saturate-0 brightness-50 top-0 md:top-12 lg:top-0 -left-144 md:-left-96 lg:left-0 h-full max-w-none object-cover"}
               width={1920} height={1080}>
            <source src={"/videos/webm/360/1.webm"} type={"video/webm"}/>
        </video>,
        <video key={1} playsInline loop muted controls={false} autoPlay
               className={"absolute md:scale-[1.2] lg:scale-100 opacity-100 saturate-0 brightness-50 top-0 md:-top-4 lg:top-0 -left-168 md:-left-96 lg:left-0 h-full max-w-none object-cover"}
               width={1920} height={1080}>
            <source src={"/videos/webm/360/2.webm"} type={"video/webm"}/>
        </video>,
        <video key={2} playsInline loop muted controls={false} autoPlay
               className={"absolute md:scale-[1.2] lg:scale-100 opacity-100 saturate-0 brightness-50 top-0 md:-top-4 lg:top-0 -left-96 md:-left-80 lg:left-0 h-full max-w-none object-cover"}
               width={1920} height={1080}>
            <source src={"/videos/webm/360/3_1.webm"} type={"video/webm"}/>
        </video>,
        <video key={3} playsInline loop muted controls={false} autoPlay
               className={"absolute md:scale-[1.2] lg:scale-100 opacity-100 saturate-0 brightness-50 top-0 md:-top-4 lg:top-0 -left-168 md:-left-80 lg:left-0 h-full max-w-none object-cover"}
               width={1920} height={1080}>
            <source src={"/videos/webm/360/4.webm"} type={"video/webm"}/>
        </video>,
        <video key={4} playsInline loop muted controls={false} autoPlay
               className={"absolute md:scale-[1.2] lg:scale-100 opacity-100 saturate-0 brightness-50 top-0 md:-top-10 lg:top-0 -left-136 md:-left-80 lg:left-0 h-full max-w-none object-cover"}
               width={1920} height={1080}>
            <source src={"/videos/webm/360/5.webm"} type={"video/webm"}/>
        </video>,
    ];

    return (
        <section className={"text-off-white  bg-black relative h-[175rem] lg:h-[302.5rem]"}>

            {
                cards.map((c, i) => {
                    return (
                        <StrategyCard title={c.title} subtitle={c.subtitle} description={c.description} angle={i * 90}
                                      background={backgrounds[i]} color={colors[i]} borderRColor={borderColors[i]}
                                      z={z[i]} image={images[i]} key={i}/>
                    );
                })
            }
        </section>
    );
}