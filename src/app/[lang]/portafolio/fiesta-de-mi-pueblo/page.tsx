"use client";

import React, {useEffect, useState} from "react";
import Navbar from "@/components/ui/Navbar";
import {Locale} from "@/i18n.config";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import { ProjectAbout } from "@/types/work";

export default async function FiestaDeMiPueblo({params : {lang}} : {params : {lang : Locale}}) {
  const [nav, setNav] = useState<{ [key: string]: any }>([]);
  const [about, setAbout] = useState<ProjectAbout>();

  useEffect(() => {
    getDictionary(lang).then((item) => {
        setNav(item.nav);
        setAbout(item.work.projects.clinicannabis.about);
    });
  }, [lang]);

  return (
    <main className="flex flex-col bg-white">
        <button className="border-2 rounded-full border-solid  w-[100px] h-[100px]">2021</button>
        <button className="border-2 rounded-full border-solid  w-[100px] h-[100px]">2022</button>
        <button>2023</button>
    </main>
  )
}