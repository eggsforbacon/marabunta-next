import BlogCard from "@/components/blog/BlogCard";
import {Locale} from "@/i18n.config";
import Image from "next/image";

export default function Blogs({lang}: { lang: Locale }) {
    return (
        <section className={"relative flex flex-col items-stretch justify-start gap-8 w-full px-16"}>
            <h2 className={"text-6xl font-bold"} >Nuestro artículo recomendado de enero</h2>
            <BlogCard author={"Comunicaciones Marabunta"} featured lang={lang} title={"Recibimos al 2024 con una identidad renovada"} excerpt={"Descubre cómo nos reinventamos este nuevo año, nuestra nueva linea gráfica, nuestro proceso creativo y nuestras metas."} publishedDate={"2024-01-10"} slug={"el-articulo-del-mes"} category={"marabunta"}>
                <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                       className={"absolute"}/>
            </BlogCard>
            <section className={"grid grid-cols-3 w-full place-items-center gap-4 mb-32"}>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={1}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={2}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={3}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={2}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={1}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={1}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={1}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
                <BlogCard author={"Comunicaciones Marabunta"} lang={lang} title={"Marabunta estrena página"}
                          excerpt={"Descubre cómo la agencia creativa más parchada de Cali se reinventa a través del marketing digital"}
                          publishedDate={"2024-01-01"} slug={"marabunta-estrena-pagina"} category={"diseño"} weight={1}>
                    <Image src={"/images/blog/marabunta_texture.webp"} alt={"A really cool texture"} height={1920} width={1920}
                           className={"absolute"}/>
                </BlogCard>
            </section>
        </section>
    );
}