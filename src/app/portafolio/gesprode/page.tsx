
import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Locale } from "@/_i18n.config";
import Image from "next/image";
import { ProjectAbout } from "@/types/work";
import { getLanguage } from "@/dictionaries";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";

export default async function Gesprode({ params: { lang } }: { params: { lang: Locale } }) {
  const { nav, work } = getLanguage(lang);
  const about: ProjectAbout = work.projects.panamericanos.about;
  const subtitle: string | undefined = work.projects.panamericanos.subtitle;

  const projectDetails = {
    title: "GESPRODE",
    description: "Gesprode es una organización sin ánimo de lucro fundada en 1993 por el gobernador del Valle del Cauca y líderes privados, enfocada en proyectos de infraestructura y desarrollo social que transforman comunidades. Mejoramos la calidad de vida mediante iniciativas colaborativas que generan impacto duradero.",
    category: "Desarrollo web, Diseño UX/UI",
    year: "2025",
    languages: "React, TypeScript, TailwindCSS, Next.js",
    link: "https://gesprode.org.co/",
  };

  return (
    <main className="flex flex-col font-thin bg-gray-900 text-white min-h-screen">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang} />
      
      <div className="max-w-7xl mx-auto pt-28 overflow-hidden rounded-b-3xl">
        <Image
         src="/images/projects/gesprode/home.png"
          alt={projectDetails.title}
          width={1920}
          height={594}
          quality={100}
         className="xs:w-full md:w-screen h-auto object-cover md:h-144 pointer-events-none select-none"
        />
      </div>

      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#e84e16] mb-4">{projectDetails.title}</h1>
        <hr className="border-t-2 border-gray-600 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div className="space-y-4">
              <p><span className="font-semibold text-[#e84e16] mr-5">CATEGORÍA </span> {projectDetails.category}</p>
              <p><span className="font-semibold text-[#e84e16] mr-20">AÑO </span> {projectDetails.year}</p>
              <p><span className="font-semibold text-[#e84e16] mr-5">LENGUAJES</span> {projectDetails.languages}</p>
            </div>
          </div>
          <div>
            <p className="text-white font-normal leading-relaxed text-justify text-sm">{projectDetails.description}</p>
            <a
              href={projectDetails.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block border border-gray-300 text-white px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Ver el sitio web
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
       <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        
        <ImageWithOverlay
           src="/images/projects/gesprode/about.png"
          alt={`${projectDetails.title} - Imagen 2`}
          name="QUIENES SOMOS"
        />
        <ImageWithOverlay
           src="/images/projects/gesprode/about-2.png"
          alt={`${projectDetails.title} - Imagen 3`}
          name="QUIENES SOMOS"
        />
        <ImageWithOverlay
           src="/images/projects/gesprode/about-3.png"
          alt={`${projectDetails.title} - Imagen 4`}
          name="QUIENES SOMOS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
           src="/images/projects/gesprode/hacemos.png"
          alt={`${projectDetails.title} - Imagen 5`}
          name="QUE HACEMOS"
        />
        <ImageWithOverlay
           src="/images/projects/gesprode/hacemos-2.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="QUE HACEMOS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/gesprode/publicaciones.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="FILTRO PARA PUBLICACIONES"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/gesprode/contacto.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="PAGINA DE CONTACTO"
        />
      </div>
      {/* <div className="flex justify-center py-8 pb-16">
        <a
          href="/cotizar" // Cambia esta URL por la página de destino deseada
          className="bg-black border font-semibold border-white text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          ¡Cotiza tu página aquí!
        </a>
      </div> */}
    </main>
  );
}