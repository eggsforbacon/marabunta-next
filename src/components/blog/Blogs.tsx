import BlogCard from "@/components/blog/BlogCard";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import {authenticate, getBlogs, getMonthlyFeatured} from "@/services/blog";
import {Months} from "@/types/common";
import {Blog} from "@/interfaces/blog";
import {Strapi} from "@/interfaces/strapi";
import {STRAPI_URL} from "@/config";


export default async function Blogs({lang, s}: { lang: Locale, s: { [key: string]: any } }) {

    const {jwt: token} = await authenticate();
    const blogs: Blog.Attributes [] = [];
    const featuredArray: Blog.Attributes[] = [];
    let featured: Blog.Attributes = Blog.EmptyAttributes;
    if (token) {
        const {blogs: blogList} = (await getBlogs(token, lang));
        const {featured: featuredList} = (await getMonthlyFeatured(token, Months.JANUARY, lang));

        if (blogList !== null) blogList.forEach((blog) => {
            const attributes : {[key : string] : any} = blog.attributes;
            blogs.push({
                date: attributes.fecha,
                title: attributes.titulo,
                slug: attributes.slug,
                category: attributes.categoria,
                featured: false,
                description: attributes.descripcion,
                excerpt: attributes.resumen,
                body:attributes.cuerpo,
                createdAt: attributes.createdAt,
                updatedAt: attributes.updatedAt,
                publishedAt: attributes.publishedAt,
                locale: attributes.locale,
                author: attributes.autor,
                cover: attributes.cover as Strapi.ImageAttributes,
                thumbnail: attributes.thumbnail as Strapi.ImageAttributes,
                localizations: [Object]
            });
        });

        if (featuredList !== null) {
            featuredList.forEach((feat) => {
                const attributes : {[key : string] : any} = feat.attributes;
                featuredArray.push({
                    date: attributes.fecha,
                    title: attributes.titulo,
                    slug: attributes.slug,
                    category: attributes.categoria,
                    featured: true,
                    description: attributes.descripcion,
                    excerpt: attributes.resumen,
                    body:attributes.cuerpo,
                    createdAt: attributes.createdAt,
                    updatedAt: attributes.updatedAt,
                    publishedAt: attributes.publishedAt,
                    locale: attributes.locale,
                    author: attributes.autor,
                    cover: attributes.cover as Strapi.ImageAttributes,
                    thumbnail: attributes.thumbnail as Strapi.ImageAttributes,
                    localizations: [Object]
                });
            });

            featured = featuredArray[Math.floor(Math.random() * featuredArray.length)];
        }
    }

    return (
        <section className={"relative flex flex-col items-stretch justify-start gap-8 w-full px-6 lg:px-16 2xl:px-64"}>
            <h2 className={"text-center lg:text-start text-3xl lg:text-4xl 2xl:text-6xl font-bold"}>{s.featured} <span
                className={"text-marabunta-red"}>{s.featuredRemark}febrero</span></h2>
            <BlogCard s={s} author={featured.author} featured
                      title={featured.title}
                      excerpt={featured.excerpt}
                      publishedDate={featured.date} slug={featured.slug} category={featured.category}>
                <Image src={`${STRAPI_URL}${featured.thumbnail.data.attributes.url}`} alt={"A really cool texture"}
                       height={featured.thumbnail.data.attributes.height}
                       width={featured.thumbnail.data.attributes.width}
                       className={"absolute lg:scale-125 lg:top-12 lg:-left-16 scale-[3.4] top-44 left-32 lg:brightness-100 brightness-75"}/>
            </BlogCard>
            <section className={"grid grid-cols-1 lg:grid-cols-3 w-full place-items-center gap-4 mb-32"}>
                <BlogCard s={s} author={"Digital Marabunta"} title={"Nuestro top de carátulas 2023"}
                          excerpt={"La música y el arte nos mueven en marabunta"}
                          publishedDate={"2024-02-01"} slug={"nuestro-top-de-caratulas-2023"} category={"marabunta"}
                          weight={1}>
                    <Image src={"/images/blog/temp_covers/fear.jpg"} alt={"A really cool texture"} height={1920}
                           width={1920}
                           className={"absolute scale-[1.75] lg:scale-[1.75] top-20"}/>
                </BlogCard>
                <BlogCard s={s} author={"Diseño Marabunta"}
                          title={"El Lettering como herramienta para elevar tu marca"}
                          excerpt={"Dale un toque creativo al nombre de tu marca"}
                          publishedDate={"2024-01-24"} slug={"el-lettering-como-herramienta-para-elevar-tu-marca"}
                          category={"diseño"} weight={2}>
                    <Image src={"/images/blog/temp_covers/lettering.jpg"} alt={"A really cool texture"} height={1920}
                           width={1920}
                           className={"absolute lg:top-0 lg:left-0 object-cover lg:scale-100 scale-[2.2] top-12 left-44 lg:brightness-100 brightness-75"}/>
                </BlogCard>
                {/*<BlogCard author={"Diseño Marabunta"} title={"Branding efectivo para empresas públicas"}*/}
                {/*          excerpt={"El panorama público tiene su cuento. Te contamos como manejarlo"}*/}
                {/*          publishedDate={"2024-02-04"} slug={"branding-efectivo-para-empresas-públicas"}*/}
                {/*          category={"diseño"} weight={3}>*/}
                {/*    <Image src={"/images/blog/temp_covers/branding.jpg"} alt={"A really cool texture"} height={1920}*/}
                {/*           width={1920} quality={100}*/}
                {/*           className={"absolute scale-[3.2] lg:scale-125 -left-32 lg:-left-20 lg:-top-20 lg:brightness-100 brightness-75"}/>*/}
                {/*</BlogCard>*/}
                <BlogCard s={s} author={"Comunicaciones Marabunta"}
                          title={"Comunicación efectiva: tu marca debe tener su propia voz"}
                          excerpt={"La recordación y el posicionamiento de tu marca dependen de ello"}
                          publishedDate={"2024-01-17"} slug={"comunicacion-efectiva-tu-marca-debe-tener-su-propia-voz"}
                          category={"estrategia"} weight={3}>
                    <Image src={"/images/blog/temp_covers/cosa.jpg"} alt={"A really cool texture"} height={1920}
                           width={1920} quality={100}
                           className={"absolute object-cover left-24 lg:left-auto w-full h-full scale-[1.5] lg:scale-100 lg:brightness-100 brightness-75"}/>
                </BlogCard>
            </section>
        </section>
    );
}