
import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Locale } from "@/_i18n.config";
import Image from "next/image";
import { ProjectAbout } from "@/types/work";
import { getLanguage } from "@/dictionaries";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay"; // Importamos el componente

export default async function Solarmarias({ params: { lang } }: { params: { lang: Locale } }) {
  const { nav, work } = getLanguage(lang);
  const about: ProjectAbout = work.projects.panamericanos.about;
  const subtitle: string | undefined = work.projects.panamericanos.subtitle;

  // Datos específicos del proyecto
  const projectDetails = {
    title: "SOLAR LAS MARIAS",
    description: "Solar Las Marías es un proyecto dedicado a la implementación de energía solar en el Valle del Cauca, con el objetivo de reducir la dependencia de fuentes de energía no renovables y apoyar a comunidades y empresas en su transición hacia un futuro más sostenible. ¡Transformamos el acceso a la energía limpia!",
    category: "Desarrollo web, Diseño UX/UI",
    year: "2024",
    languages: "React, TypeScript, TailwindCSS, Next.js",
    link: "https://www.solarlasmarias.com",
  };

  return (
    <main className="flex flex-col font-thin bg-gray-900 text-white min-h-screen">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang} />
      
      {/* Contenedor para centrar y aplicar bordes redondeados solo en la parte inferior */}
      <div className="max-w-7xl mx-auto pt-28 overflow-hidden rounded-b-3xl">
        <Image
          src="/images/projects/solarmarias/home.png"
          alt={projectDetails.title}
          width={1920}
          height={594}
          quality={100}
          className="xs:w-full md:w-screen h-auto object-cover md:h-144 pointer-events-none select-none"
        />
      </div>

      {/* Sección de información del proyecto */}
      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#e9c43b] mb-4">{projectDetails.title}</h1>
        <hr className="border-t-2 border-gray-600 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div className="space-y-4">
              <p><span className="font-semibold text-[#e9c43b] mr-5">CATEGORÍA </span> {projectDetails.category}</p>
              <p><span className="font-semibold text-[#e9c43b] mr-20">AÑO </span> {projectDetails.year}</p>
              <p><span className="font-semibold text-[#e9c43b] mr-5">LENGUAJES</span> {projectDetails.languages}</p>
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

      {/* Imágenes adicionales con overlay */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
           src="/images/projects/solarmarias/meet.png"
          alt={`${projectDetails.title} - Imagen 2`}
          name="QUIENES SOMOS"
        />
        
        <ImageWithOverlay
           src="/images/projects/solarmarias/meet-2.png"
          alt={`${projectDetails.title} - Imagen 3`}
          name="QUIENES SOMOS"
        />
        <ImageWithOverlay
           src="/images/projects/solarmarias/meet-3.png"
          alt={`${projectDetails.title} - Imagen 4`}
          name="QUIENES SOMOS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
           src="/images/projects/solarmarias/news.png"
          alt={`${projectDetails.title} - Imagen 5`}
          name="NOTICIAS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
           src="/images/projects/solarmarias/galery.png"
          alt={`${projectDetails.title} - Imagen 5`}
          name="GALERIA"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
           src="/images/projects/solarmarias/contact.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="PAGINA DE CONTACTO"
        />
         
      </div>
        {/* Botón al final de la página */}
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