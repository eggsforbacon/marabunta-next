"use client";

import {Team} from "@/types/team";
import Image from "next/image";
import {Strapi} from "@/types/strapi";

export default function Department({area, people}: { area: Team.Area, people: Team.Attributes[] }) {
  return (
      <div
          className={"flex flex-col lg:flex-row items-start justify-between w-full relative text-off-white text-[0.9375rem] leading-[1.65rem] md:leading-normal md:text-xl lg:text-2xl py-8 gap-8 md:gap-4 lg:gap-0"}>
        <div className={"lg:sticky lg:top-32 lg:w-96"}>
          <h3 className={"font-bold"}>{area.charAt(0).toUpperCase() + area.slice(1)}</h3>
        </div>
        <ul className={"w-full flex flex-col items-start justify-start gap-2 lg:gap-4"}>
          {people.sort((a, b) => a.index - b.index).map((person, i) => {
            const {name, lastName, position, memoji} = person;
            const hasMemoji = memoji.data !== null;
            const attributes = hasMemoji && (memoji as Strapi.ImageAttributes).data.attributes;
            return (
                <li key={i}
                    className={"group relative flex items-center justify-start md:grid md:grid-cols-2 gap-2 md:gap-0 lg:gap-32 w-full"}>
                  <p className={"font-semibold md:font-normal"}><span>{name} {lastName}</span></p>
                  <p className={"text-off-white/40 md:text-inherit"}><span>{position}</span></p>
                  {
                      hasMemoji && <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${(attributes as Strapi.BodyImageAttributes).url}`}
                      alt={(attributes as Strapi.BodyImageAttributes).alternativeText ?? "No alt"} width={384}
                      height={384}
                      quality={100}
                    className={"transition-all timing-ease-out-expo duration-300 aspect-square w-0 group-hover:w-32 lg:group-hover:w-44 xl:group-hover:w-52 absolute -top-10 lg:-top-16 left-64 md:left-44 lg:left-64 xl:left-72 2xl:left-96 z-40"}/>
                  }
                </li>
            );
          })}
        </ul>
      </div>
  );
}