import Image from "next/image";

export default function Strategy() {
    return (
        <section className={"h-288 bg-black"}>
            <Image src={"/images/strategy-demo.png"} alt={""} width={1920} height={1080} quality={100} />
        </section>
    );
}