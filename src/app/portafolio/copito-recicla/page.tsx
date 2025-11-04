
import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Locale } from "@/_i18n.config";
import Image from "next/image";
import { ProjectAbout } from "@/types/work";
import { getLanguage } from "@/dictionaries";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay";

export default async function Copitorecicla({ params: { lang } }: { params: { lang: Locale } }) {
  const { nav, work } = getLanguage(lang);
  const about: ProjectAbout = work.projects.panamericanos.about;
  const subtitle: string | undefined = work.projects.panamericanos.subtitle;

  const projectDetails = {
    title: "COPITO RECICLA",
    description: "Copito Recicla es una iniciativa creada para promover la sostenibilidad y el reciclaje en el Valle del Cauca, sensibilizando a la comunidad sobre la gestión responsable de residuos. Sus acciones incluyen talleres educativos, participación comunitaria y herramientas digitales para combatir el cambio climático.",
    category: "Desarrollo web,\nDiseño UX/UI",
    year: "2025",
    languages: "TypeScript, TailwindCSS, Next.js",
    link: "https://copitorecicla.com",
  };

  return (
    <main className="flex flex-col font-thin bg-gray-900  text-white min-h-screen">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang} />
      
      <div className="max-w-7xl mx-auto pt-28 overflow-hidden rounded-b-3xl">
        <Image
          src="/images/projects/copito-recicla/homepage.png"
          alt={projectDetails.title}
          width={1920}
          height={594}
          quality={100}
          className="xs:w-full md:w-screen h-auto object-cover md:h-144 pointer-events-none select-none"
        />
      </div>

      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#269E94] mb-4">{projectDetails.title}</h1>
        <hr className="border-t-2 border-gray-600 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
           <div className="space-y-4">
              <p><span className="font-semibold text-[#269E94] mr-5">CATEGORÍA </span> {projectDetails.category}</p>
              <p><span className="font-semibold text-[#269E94] mr-20">AÑO </span> {projectDetails.year}</p>
              <p><span className="font-semibold text-[#269E94] mr-5">LENGUAJES</span> {projectDetails.languages}</p>
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
          src="/images/projects/copito-recicla/galeria.png"
          alt={`${projectDetails.title} - Imagen 2`}
          name="GALERIA"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
          src="/images/projects/copito-recicla/noticias.png"
          alt={`${projectDetails.title} - Imagen 3`}
          name="NOTICIAS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
          src="/images/projects/copito-recicla/sumador.png"
          alt={`${projectDetails.title} - Imagen 4`}
          name="SUMADOR"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
          src="/images/projects/copito-recicla/buscar.png"
          alt={`${projectDetails.title} - Imagen 5`}
          name="BUSCADOR"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
          src="/images/projects/copito-recicla/agrega.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="AGREGAR KILOGRAMOS"
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