"use client";

import {TextField} from "@/components/ui/TextField";
import {Button} from "@/components/ui/Button";
import {Checkbox} from "@/components/ui/Checkbox";
import LocaleLink from "@/components/ui/LocaleLink";
import React from "react";
import {Locale} from "@/i18n.config";

export default function NewsletterForm({lang, s, customColors}: {
  lang: Locale,
  s: { [key: string]: any },
  customColors?: { text: string, bg: string }
}) {

  const {blog, terms} = s;

  return (
      <form
          className={"flex flex-col lg:flex-row items-center lg:items-start justify-start gap-16 lg:gap-0 lg:justify-between"}>
        <div
            className={"flex flex-col items-center text-center lg:text-start lg:items-start justify-center gap-8 md:w-128"}>
          <h2 className={"text-4xl md:text-5xl xl:text-6xl font-bold"}>{blog.newsletter.title}</h2>
          <p className={"text-lg md:text-xl xl:text-2xl"}>{blog.newsletter.copy}</p>
        </div>
        <div className={"flex flex-col items-center justify-center gap-8 lg:pl-16"}>
          <TextField label={blog.newsletter.email} type={"email"}
                     required
                     focusedLabel={`px-4 ${customColors ? customColors.text : "text-marabunta-cyan"}`}
                     overrideLabel={`${customColors ? customColors.text : "text-off-white"} font-medium md:text-base text-sm`}
                     overrideBorder={"border-solid border-2 border-off-white/80"}
                     overrideBackground={`${customColors ? customColors.bg : "bg-black"}`}
                     overrideSize={"h-14 w-96 md:w-128"}
                     className={`focus:outline-none transition duration-300 ease-in-out ${customColors ? "focus:text-off-white focus:border-off-white" : "focus:text-marabunta-cyan focus:border-marabunta-cyan"}`}/>
          <TextField label={blog.newsletter.nextBlog} type={"area"}
                     focusedLabel={`px-4 ${customColors ? customColors.text : "text-marabunta-cyan"}`}
                     overrideLabel={`${customColors ? customColors.text : "text-off-white"} font-medium md:text-base text-sm`}
                     overrideBorder={"border-solid border-2 border-off-white/80"}
                     overrideBackground={`${customColors ? customColors.bg : "bg-black"}`}
                     overrideSize={"h-52 w-96 md:w-128"}
                     className={`focus:outline-none transition duration-300 ease-in-out ${customColors ? "focus:text-off-white focus:border-off-white" : "focus:text-marabunta-cyan focus:border-marabunta-cyan"}`}/>
          <Button isSubmit value={blog.newsletter.subscribe}
                  overrideBorderRadius={"rounded-full"}
                  className={`px-20 hover:cursor-pointer focus:outline-0 transition duration-200 ease-quintic-in-out ${customColors ? "hover:bg-off-white/80 focus:bg-off-white/80 hover:border-off-white" : "hover:bg-marabunta-cyan/80 focus:bg-marabunta-cyan/80 hover:border-marabunta-cyan"} focus:scale-95 hover:!scale-105`}
          />
          <section
              className={"md:mt-16 mb-2 opacity-40 transition duration-500 ease-in-out hover:opacity-100 flex items-stretch justify-center w-4/5 md:w-full gap-4"}>
            <Checkbox required
                      overrideBackgroundAndBorder={customColors && "bg-neutral-200/20 border-neutral-400 checked:bg-off-white/20 checked:border-off-white/20"}
                      overrideRing={customColors && "focus:ring-offset-0 focus:ring-off-white focus:border-0"}/>
            <p className={"text-start text-xs md:text-sm text-neutral-300"}>{terms.read}
              <LocaleLink
                  className={`underline underline-offset-4 transition duration-200 ease-in-out ${customColors ? "hover:text-off-white" : "hover:text-marabunta-cyan"}`}
                  href={"/legal"} lang={lang}> {terms.link}</LocaleLink></p>
          </section>
        </div>
      </form>
  );
}