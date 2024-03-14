"use client";

import {Team} from "@/types/team";
import {useState} from "react";
import useSWR from "swr";
import {getTeam} from "@/services/team";
import {Locale} from "@/i18n.config";
import Department from "@/components/home/Department";

export default function Team({s, lang}: { s: { [_: string]: any }, lang: Locale }) {


  const {team} = s;
  const {categories}: { categories: (Team.Area | "todas" | "all")[] } = team;
  const [selected, setSelected] = useState(categories[0]);

  const linkStyle = "transition-all duration-300 ease-in-out hover:text-off-white hover:font-black";

  const {
    data: {ants},
  } = useSWR(['getTeam', lang], () => getTeam(lang), {fallbackData: {ants: []}});

  const selectedIs = (compare: Team.Area | "todas" | "all") => {
    return compare.toLowerCase() === selected.toLowerCase();
  }

  return (
      <section className={"text-off-white py-32 px-6 md:px-16 overflow-x-clip"}>
        <div className={"flex flex-col items-center justify-start gap-16 lg:px-32 xl:px-48"}>
          <h2 className={"text-3xl md:text-4xl xl:text-5xl font-normal text-center"}>{team.copy}<strong
              className={"text-marabunta-red font-black"}>marabunta.</strong></h2>
          <span className={"w-screen h-0.5 bg-off-white/60 rounded-full -mx-6 md:-mx-16 lg:-mx-64"}/>
          <ul className={"flex items-center justify-start gap-6 text-neutral-500 text-center text-base flex-wrap"}>
            <li className={`${linkStyle} ${selectedIs(categories[0]) && "font-bold text-off-white"}`}>
              <button onClick={() => setSelected(categories[0])}>
                {categories[0].charAt(0).toUpperCase() + categories[0].slice(1)}
              </button>
            </li>
            <li className={`${linkStyle} ${selectedIs(categories[1]) && "font-bold text-off-white"}`}>
              <button onClick={() => setSelected(categories[1])}>
                {categories[1].charAt(0).toUpperCase() + categories[1].slice(1)}
              </button>
            </li>
            {
              categories.slice(2).sort().map((cat, i) => {
                return (
                    <li className={`${linkStyle} ${selectedIs(cat) && "font-bold text-off-white"}`} key={i + 2}>
                      <button onClick={() => setSelected(cat)}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                );
              })
            }
          </ul>
          <span className={"w-screen h-0.5 bg-off-white/60 rounded-full -mx-6 md:-mx-16 lg:-mx-64"}/>
        </div>
        <section className={"text-off-white flex flex-col items-stretch justify-start"}>
          {
            categories.slice(1).map((cat, i) => {
              const people = ants.filter((person) => person.area === cat);
              if (selectedIs("todas") || selectedIs("all") || selectedIs(cat)) return (
                  <>
                    <Department key={i} area={cat as Team.Area} people={people}/>
                    {i !== categories.slice(1).length - 1 &&
                      <span className={"w-screen h-0.5 bg-off-white/60 rounded-full -mx-6 md:-mx-16"}/>}
                  </>
              ); else return <></>
            })
          }
        </section>
      </section>
  );
}