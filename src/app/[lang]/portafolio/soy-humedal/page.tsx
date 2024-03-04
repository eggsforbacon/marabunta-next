import Navbar from "@/components/ui/Navbar";
import {getDictionary} from "@/lib/dictionary";
import {Locale} from "@/i18n.config";
import Image from "next/image";

export default async function SoyHumedal({params: {lang}}: { params: { lang: Locale } }) {

    const { nav } = await getDictionary(lang);

    return (
        <main>
            <Navbar s={nav} lang={lang} />
            <article className={"flex flex-col items-center justify-start w-screen bg-[#461a00] text-amber-50"}>

                <header className={"flex flex-col items-stretch justify-start overflow-x-clip w-full"}>
                    <Image src={"/images/projects/humedal/intro1.webp"} alt={""} width={1920} height={783} quality={100} />
                    <Image src={"/images/projects/humedal/intro2.webp"} alt={""} width={1920} height={556} quality={100} />
                </header>
                <section className={"flex flex-col items-start justify-start gap-8 px-72 py-32 text-xl"}>
                    <h2 className={"text-2xl font-bold"}>¡Hola, soy Humedal!</h2>
                    <div className={"flex flex-col text-start leading-[1.8]"}>
                        <p>Una serie digital educativa diseñada para redes sociales que contó con 25 capítulos. Cada uno de ellos explora y narra la importancia de este tipo de ecosistemas en Cali, el Valle del Cauca y el país. Este viaje audiovisual es presentado por &quot;Humedal&quot;, un personaje carismático y alegre que conoce las acciones que líderes ambientales y otros actores realizan para cuidar de estos cuerpos de agua en el territorio.</p>
                        <p>Desde la conceptualización e investigación hasta la edición, este proyecto fue creado para ser una experiencia visualmente cautivadora y educativa. Recorrimos el departamento del Valle del Cauca, Colombia, en búsqueda de estos ecosistemas para registrar las mejores imágenes y crear una serie única. Fue la oportunidad ideal para desarrollar un proyecto medioambiental que se acercará a las personas y los introdujera como parte del ecosistema.</p>
                    </div>
                </section>
                <section className={"flex flex-col items-stretch justify-start w-full"}>
                    <Image src={"/images/projects/humedal/color.webp"} alt={""} width={1920} height={1560}
                           quality={100}/>
                    <video autoPlay playsInline loop muted controls={false} width={1920} height={1080}>
                        <source src={"/videos/projects/soy-humedal/intro.webm"} type={"video/webm"}/>
                        Your browser does not support the video tag
                    </video>
                    <video autoPlay playsInline loop muted controls={false} width={1920} height={1080}>
                        <source src={"/videos/projects/soy-humedal/mundo.webm"} type={"video/webm"}/>
                        Your browser does not support the video tag
                    </video>
                    <section className={"flex flex-col items-center justify-center gap-8 py-32 px-32"}>
                        <h2 className={"text-4xl font-bold"}>Capítulo 5 - Residuos Sólidos</h2>
                        <video playsInline controls width={1920} height={1080}
                               className={"rounded-2xl border-4 border-amber-50 overflow-clip"}>
                            <source src={"/videos/projects/soy-humedal/capitulo5.webm"} type={"video/webm"}/>
                            Your browser does not support the video tag
                        </video>
                    </section>
                    <video autoPlay playsInline loop muted controls={false} width={1920} height={1080}>
                        <source src={"/videos/projects/soy-humedal/celular.webm"} type={"video/webm"}/>
                        Your browser does not support the video tag
                    </video>
                    <Image src={"/images/projects/humedal/footer1.webp"} alt={""} width={1920} height={1584} quality={100} />
                    <Image src={"/images/projects/humedal/footer2.webp"} alt={""} width={1920} height={576} quality={100} />
                    <Image src={"/images/projects/humedal/footer3.webp"} alt={""} width={1920} height={696} quality={100} />
                </section>
                <section>
                    {/*Footer de proyecto */}
                </section>
            </article>
        </main>
    );
}