import React from "react";
import Navbar from "@/components/ui/Navbar";
import { Locale } from "@/_i18n.config";
import Image from "next/image";
import { ProjectAbout } from "@/types/work";
import { getLanguage } from "@/dictionaries";
import ImageWithOverlay from "@/components/ui/ImageWithOverlay"; // Importamos el componente

export default async function Rhpositivo({ params: { lang } }: { params: { lang: Locale } }) {
  const { nav, work } = getLanguage(lang);
  const about: ProjectAbout = work.projects.panamericanos.about;
  const subtitle: string | undefined = work.projects.panamericanos.subtitle;

  // Datos específicos del proyecto
  const projectDetails = {
    title: "FUNDACIÓN RHPOSITIVO",
    description: "RH Positivo es una fundación con 18 años de experiencia, dedicada al desarrollo integral del ser humano en Colombia, a través de procesos de formación y proyectos que transforman vidas. Promovemos el bienestar, la sana convivencia y el cuidado de la naturaleza mediante iniciativas que generan un impacto positivo en comunidades y empresas.",
    category: "Desarrollo web, Diseño UX/UI",
    year: "2024",
    languages: "React, TypeScript, TailwindCSS, Next.js",
    link: "https://www.rhpositivo.org",
  };

  return (
    <main className="flex flex-col font-thin bg-gray-900 text-white min-h-screen">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang} />
      
      {/* Contenedor para centrar y aplicar bordes redondeados solo en la parte inferior */}
      <div className="max-w-7xl mx-auto pt-28 overflow-hidden rounded-b-3xl">
        <Image
          src="/images/projects/rhpositivo/home.png"
          alt={projectDetails.title}
          width={1920}
          height={594}
          quality={100}
           className="xs:w-full md:w-screen h-auto object-cover md:h-144 pointer-events-none select-none"
        />
      </div>

      {/* Sección de información del proyecto */}
      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#3b6ad0] mb-4">{projectDetails.title}</h1>
        <hr className="border-t-2 border-gray-600 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div className="space-y-4">
              <p><span className="font-semibold text-[#3b6ad0] mr-5">CATEGORÍA </span> {projectDetails.category}</p>
              <p><span className="font-semibold text-[#3b6ad0] mr-20">AÑO </span> {projectDetails.year}</p>
              <p><span className="font-semibold text-[#3b6ad0] mr-5">LENGUAJES</span> {projectDetails.languages}</p>
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
          src="/images/projects/rhpositivo/home-2.png"
          alt={`${projectDetails.title} - Imagen 2`}
          name="PAGINA PRINCIPAL"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/home-3.png"
          alt={`${projectDetails.title} - Imagen 3`}
          name="PAGINA PRINCIPAL"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/home-4.png"
          alt={`${projectDetails.title} - Imagen 4`}
          name="PAGINA PRINCIPAL"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/home-5.png"
          alt={`${projectDetails.title} - Imagen 5`}
          name="PAGINA PRINCIPAL"
        />
        <hr className="border-t-2 border-gray-600 mx-60 my-8" />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="NOSOTROS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us.png"
          alt={`${projectDetails.title} - Imagen 7`}
          name="NOSOTROS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us-2.png"
          alt={`${projectDetails.title} - Imagen 8`}
          name="NOSOTROS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us-3.png"
          alt={`${projectDetails.title} - Imagen 9`}
          name="NOSOTROS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us-4.png"
          alt={`${projectDetails.title} - Imagen 10`}
          name="NOSOTROS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us-5.png"
          alt={`${projectDetails.title} - Imagen 11`}
          name="NOSOTROS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/us-6.png"
          alt={`${projectDetails.title} - Imagen 12`}
          name="NOSOTROS"
        />
        <hr className="border-t-2 border-gray-600 mx-60 my-8" />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/programa.png"
          alt={`${projectDetails.title} - Imagen 13`}
          name="PROGRAMAS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/programa-2.png"
          alt={`${projectDetails.title} - Imagen 14`}
          name="PROGRAMAS"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/programa-3.png"
          alt={`${projectDetails.title} - Imagen 15`}
          name="PROGRAMAS"
        />
        <hr className="border-t-2 border-gray-600 mx-60 my-8" />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/lineas.png"
          alt={`${projectDetails.title} - Imagen 16`}
          name="LINEAS DE ATENCION"
        />
        <hr className="border-t-2 border-gray-600 mx-60 my-8" />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/prensa.png"
          alt={`${projectDetails.title} - Imagen 17`}
          name="SALA DE PRENSA"
        />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/prensa-2.png"
          alt={`${projectDetails.title} - Imagen 18`}
          name="SALA DE PRENSA"
        />
        <hr className="border-t-2 border-gray-600 mx-60 my-8" />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/blog.png"
          alt={`${projectDetails.title} - Imagen 19`}
          name="BLOG"
        />
        <hr className="border-t-2 border-gray-600 mx-60 my-8" />
        <ImageWithOverlay
          src="/images/projects/rhpositivo/contact.png"
          alt={`${projectDetails.title} - Imagen 20`}
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