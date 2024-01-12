import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/i18n.config";
import {ReactNode} from "react";
import {BlogCardWeight, BlogCategory} from "@/types/blog";

type _BlogCardComponents = {
    title: string,
    excerpt: string,
    publishedDate: string,
    slug: string,
    category: BlogCategory,
    featured?: boolean,
    weight?: BlogCardWeight,
    children: ReactNode,
    author: string,
}

export default function BlogCard({lang, title, excerpt, publishedDate, slug, category, featured, weight, author, children}: {
    lang: Locale
} & _BlogCardComponents) {

    const finalWeight = weight === undefined ? "col-span-3" : weight === 1 ? "col-span-1" : weight === 2 ? "col-span-2" : "col-span-3";

    return (
        <LocaleLink lang={lang} href={`/blog/${slug}`}
                    className={`relative ${finalWeight} overflow-clip ${featured ? "h-136" : "h-120"} group w-full border-neutral-400 border-2 rounded-xl transition-all duration-200 ease-in-out hover:border-off-white hover:-translate-y-2`}>
            {
                featured ? (
                    <div className={"relative h-full w-full overflow-clip flex flex-col items-start justify-start gap-4"}>
                        <div
                            className={"pointer-events-none h-full w-full absolute top-0 left-0 dotted-background transition-all duration-200 group-hover:dotted-background-expand"}/>
                        <div className={"absolute top-1/2 -translate-y-[50%] right-16 w-208 h-128 overflow-clip"}>
                            {children}
                        </div>
                        <article className={"h-full w-[45%] px-24 py-8 flex flex-col items-start justify-start gap-4"}>
                            <p className={"text-base font-semibold text-neutral-300 uppercase tracking-widest"}>{category}<span>{" • "}</span>{publishedDate}</p>
                            <h2 className={"text-7xl font-bold text-off-white"}>{title}</h2>
                            <p className={"text-xl"}>{excerpt}</p>
                            <p className={"text-base font-normal text-neutral-300"}>por {author}</p>
                        </article>
                    </div>
                ) : <></>
            }
            {/*<div className={"border-b-off-black border-b-2 h-[55%] relative overflow-clip"}>*/}
            {/*</div>*/}
            {/*<div className={"flex flex-col items-start justify-start gap-8 p-8 h-full"}>*/}
            {/*    <label className={"text-xl font-normal transition-all duration-200 ease-in-out group-hover:text-2xl group-hover:font-semibold"}>Lee más <ArrowRightShort className={"inline-block"} size={24} /></label>*/}
            {/*</div>*/}
        </LocaleLink>
    );
}