"use client"

import {Blog} from "@/types/blog";
import {ReactNode} from "react";
import Link from "next/link";
import LocaleLink from "@/components/ui/LocaleLink";
import {Locale} from "@/_i18n.config";
import {BoxArrowUpRight, Link45deg} from "react-bootstrap-icons";

export default function RecommendedSlide({children, title, excerpt, category, slug, lang}: {
  children: ReactNode,
  title: string,
  excerpt: string,
  category: Blog.Category,
  slug: string,
  lang? : Locale,
}) {

  return (
      <div
          className={"relative flex flex-col items-stretch justify-end rounded-2xl overflow-clip aspect-[3/4] w-96 mx-4 group"}>
        <div className={"w-full h-full absolute top-0 left-0 object-cover"}>
          {children}
        </div>
        <LocaleLink href={slug} lang={lang ?? "es"} passHref className={`overflow-clip absolute top-6 right-6 border-2 rounded-full border-off-white hidden group-hover:flex flex-col items-center justify-center bg-off-white`}>
          <BoxArrowUpRight className={"p-2"} size={32} />
        </LocaleLink>
        <LocaleLink href={slug} lang={lang ?? "es"} passHref
            className={"relative w-full flex items-center justify-center text-off-white"}>
          <p className={`w-full justify-start lg: xl:text-xl font-semibold h-full px-6 pb-8 pt-64 bg-gradient-to-t from-off-black via-off-black/60`}>{title} - <span
              className={"font-light"}>{excerpt}</span></p>
        </LocaleLink>
      </div>
  );
}
