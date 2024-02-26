"use client"

import {Locale} from "@/i18n.config";
import useSWR from "swr";
import {getSingleBlog} from "@/services/blog";
import {Blog} from "@/interfaces/blog";
import {type BlocksContent, BlocksRenderer} from '@strapi/blocks-react-renderer';
import Image from "next/image";

export default function SlugContent({slug, s}: { slug: string, s: { [_: string]: any } }) {

    const {entry, months, by} = s;

    const {
        data: {post},
    } = useSWR(['getSingleBlog', slug], () => getSingleBlog(slug), {fallbackData: {post: Blog.EmptyAttributes}});

    const {title, date, author, excerpt, cover, body, category} = post;

    const outerColor: { [key in Blog.Category]: string } = {
        ["marabunta"]: "bg-neutral-300",
        ["diseño"]: "bg-red-300",
        ["design"]: "bg-red-300",
        ["estrategia"]: "bg-sky-300",
        ["strategy"]: "bg-sky-300",
        ["producción"]: "bg-amber-300",
        ["production"]: "bg-amber-300",
    }

    const innerColor: { [key in Blog.Category]: string } = {
        ["marabunta"]: "bg-off-white",
        ["diseño"]: "bg-red-100",
        ["design"]: "bg-red-100",
        ["estrategia"]: "bg-sky-100",
        ["strategy"]: "bg-sky-100",
        ["producción"]: "bg-amber-100",
        ["production"]: "bg-amber-100",
    }

    const { month, day, year } = (() => {

        const splitDate = date.split("-");

        const month: string = months[parseInt(splitDate[1])];
        const day : number = parseInt(splitDate[2]);
        const year : string = splitDate[0];

        return {
            month, day, year
        }
    })();

    return (
        <article
            className={`relative h-full ${outerColor[category]} flex flex-col items-stretch justify-start gap-4 pt-24 lg:py-32 lg:px-6`}>
            <div className={"z-0 sticky top-0 left-0 w-full lg:relative flex flex-col lg:flex-row lg:items-center lg:justify-around px-6 lg:px-44 py-32"}>
                <h1 className={"text-3xl lg:text-6xl font-bold max-w-xl"}>{title}</h1>
                <p className={"text-xl lg:text-end lg:text-2xl font-semibold max-w-xl"}>{excerpt}</p>
                <span className={`block lg:hidden w-ful h-96 ${outerColor[category]}`} />
            </div>
            <section className={`lg:mt-0 -mt-96 relative flex flex-col items-stretch justify-start gap-16 lg:gap-32 overflow-clip rounded-2xl ${innerColor[category]} pb-32`}>
                <div className={"overflow-clip w-full aspect-video relative"}>
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.data.attributes.url}`} alt={cover.data.attributes.alternativeText ?? "No alt"}
                           width={cover.data.attributes.width} height={cover.data.attributes.height} priority quality={100}
                           className={"w-full h-full object-cover absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"}
                    />
                </div>
                <div className={"relative flex flex-col lg:flex-row items-start justify-start lg:justify-center px-6 lg:px-0 gap-16 lg:gap-32"}>
                    <div className={"relative lg:sticky lg:top-32 flex flex-col items-start justify-start gap-4 lg:w-112 lg:px-16 lg:py-8"}>
                        <label className={"font-light text-sm"}>{entry.publishedOn}</label>
                        <p className={"text-base font-light"}>{month} {day}, {year}</p>
                        <p className={"text-lg font-normal"}>{by} {author}</p>
                    </div>
                    <section className={"flex flex-col items-start justify-start gap-4 lg:w-168"}>
                        <BlocksRenderer content={body as BlocksContent}
                                        blocks={{
                                            image: ({image}) => {
                                                return (
                                                    <Image src={image.url}
                                                           alt={image.alternativeText ?? "No alt"}
                                                           width={image.width} height={image.height}
                                                    quality={100}/>
                                                );
                                            },
                                            paragraph: ({children}) => <p className={"text-xl leading-[1.5]"}>{children}</p>,
                                            heading: ({ children, level }) => {
                                                switch (level) {
                                                    case 1:
                                                        return <h1 className={""}>{children}</h1>
                                                    case 2:
                                                        return <h2 className={""}>{children}</h2>
                                                    case 3:
                                                        return <h3 className={""}>{children}</h3>
                                                    case 4:
                                                        return <h4 className={"text-3xl font-bold"}>{children}</h4>
                                                    case 5:
                                                        return <h5 className={""}>{children}</h5>
                                                    case 6:
                                                        return <h6 className={""}>{children}</h6>
                                                }
                                            }
                        }}/>
                    </section>
                </div>
            </section>
            <section className={`relative rounded-2xl ${innerColor[category]} p-16`}>  {/*recommended*/}

            </section>
            <section className={"relative p-16"}> {/* newsletter */}

            </section>
        </article>
    );
}