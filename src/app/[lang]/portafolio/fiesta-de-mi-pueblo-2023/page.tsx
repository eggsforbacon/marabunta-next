import {Locale} from "@/_i18n.config";
import {getDictionary} from "@/lib/dictionary";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import TimeLine from "@/components/time-line";

export default async function FiestaDeMiPueblo23({params: {lang}}: { params: { lang: Locale } }) {
    const {nav} = await getDictionary(lang);

    return (
        <main className="flex flex-col">
            <Navbar s={nav} lang={lang}/>
            <section className="text-white text-center pt-28 pb-6 bg-black">
                     <span>Elije la versión</span>
              </section>
              {
                     <TimeLine yearCurrent={2023}/>
              }
            <section className="w-full py-4 text-white bg-projects-pueblo-yelow flex text-2xl font-black"><span className="m-auto text-2xl md:text-4xl font-organik">2023</span></section>
            <article
                className={"flex flex-col items-center justify-start w-screen bg-projects-pueblo-22-fuchsia text-fuchsia-50"}>
                <header className={"flex flex-col items-stretch justify-start overflow-x-clip w-full"}>
                    <Image src={"/images/projects/fiesta-23/header.webp"} alt={""} width={1920*5} height={727}
                           quality={100}/>
                </header>
                <section className={"flex flex-col items-start justify-start gap-8 text-sm px-6 py-16 lg:px-72 lg:py-32 lg:text-xl"}>
                    <h2 className={"text-base lg:text-2xl font-bold"}>Concepto</h2>
                    <div className={"flex flex-col text-start leading-[1.8]"}>
                        <p>La tercera edición de &quot;La Fiesta de mi Pueblo, lo que Somos&quot; fue la oportunidad de resaltar la tradición cultural del Valle del Cauca, representada, principalmente por el color oro que simboliza la riqueza de nuestra diversidad cultural, entrelazada con la belleza natural que se encuentra en los 42 municipios del departamento. Cada una de las carrozas fueron diseñadas para exaltar desde las verdes montañas y los cafetales imponentes hasta las cristalinas fuentes hídricas y las vibrantes costas del pacífico.</p>
                    </div>
                </section>
                <section className={"flex flex-col items-stretch justify-start w-full"}>
                    <Image src={"/images/projects/fiesta-23/quote.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/shirt.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/bracelet.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/phone.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/pop.webp"} alt={""} width={1920} height={1572}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/flag.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/carrozas.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/sombrero.webp"} alt={""} width={1920} height={1080}
                           quality={100}/>
                    <Image src={"/images/projects/fiesta-23/footer.webp"} alt={""} width={1920} height={562}
                           quality={100}/>
                </section>
            </article>
        </main>
);
}