import BlogCard from "@/components/blog/BlogCard";
import {Locale} from "@/i18n.config";
import Image from "next/image";

export default function Blogs({lang}: { lang: Locale }) {
    return (
        <section className={"relative flex flex-col items-stretch justify-start gap-8 w-full px-6 lg:px-16"}>
            <h2 className={"text-center lg:text-start text-3xl lg:text-6xl font-bold"} >Nuestro artículo <span className={"text-marabunta-red"}>recomendado <br className={"lg:hidden"}/>de febrero</span></h2>
            <BlogCard author={"Comunicaciones Marabunta"} featured lang={lang} title={"Recibimos al 2024 con una identidad renovada"} excerpt={"Descubre cómo nos reinventamos este nuevo año, nuestra nueva linea gráfica, nuestro proceso creativo y nuestras metas."} publishedDate={"2024-01-10"} slug={"el-articulo-del-mes"} category={"marabunta"}>
                <Image src={"/images/blog/temp_covers/featured.png"} alt={"A really cool texture"} height={1920} width={1920}
                       className={"absolute lg:scale-125 lg:top-12 lg:-left-16 scale-[3.4] top-44 left-32 lg:brightness-100 brightness-75"}/>
            </BlogCard>
            <section className={"grid grid-cols-1 lg:grid-cols-3 w-full place-items-center gap-4 mb-32"}>
                <BlogCard author={"Digital Marabunta"} lang={lang} title={"Nuestro top de carátulas 2023"}
                          excerpt={"La música y el arte nos mueven en marabunta"}
                          publishedDate={"2024-02-01"} slug={"nuestro-top-de-caratulas-2023"} category={"marabunta"} weight={1}>
                    <Image src={"/images/blog/temp_covers/fear.jpg"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute scale-[1.75] lg:scale-125 top-20"}/>
                </BlogCard>
                <BlogCard author={"Diseño Marabunta"} lang={lang} title={"El Lettering como herramienta para elevar tu marca"}
                          excerpt={"Dale un toque creativo al nombre de tu marca"}
                          publishedDate={"2024-01-24"} slug={"el-lettering-como-herramienta-para-elevar-tu-marca"} category={"diseño"} weight={2}>
                    <Image src={"/images/blog/temp_covers/lettering.jpg"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute lg:top-0 lg:left-0 object-cover lg:scale-100 scale-[2.2] top-12 left-44 lg:brightness-100 brightness-75"}/>
                </BlogCard>
                <BlogCard author={"Diseño Marabunta"} lang={lang} title={"Branding efectivo para empresas públicas"}
                          excerpt={"El panorama público tiene su cuento. Te contamos como manejarlo"}
                          publishedDate={"2024-02-04"} slug={"branding-efectivo-para-empresas-públicas"} category={"diseño"} weight={3}>
                    <Image src={"/images/blog/temp_covers/branding.jpg"} alt={"A really cool texture"} height={1920} width={1920} quality={100}
                           className={"absolute scale-[3.2] lg:scale-125 -left-32 lg:-left-20 lg:-top-20 lg:brightness-100 brightness-75"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Comunicación efectiva: tu marca debe tener su propia voz"}
                          excerpt={"La recordación y el posicionamiento de tu marca dependen de ello"}
                          publishedDate={"2024-01-17"} slug={"comunicacion-efectiva-tu-marca-debe-tener-su-propia-voz"} category={"estrategia"} weight={3}>
                    <Image src={"/images/blog/temp_covers/cosa.jpg"} alt={"A really cool texture"} height={1920} width={1920} quality={100}
                           className={"absolute object-cover left-24 lg:left-auto w-full h-full scale-[1.5] lg:scale-100 lg:brightness-100 brightness-75"}/>
                </BlogCard>
            </section>
        </section>
    );
}