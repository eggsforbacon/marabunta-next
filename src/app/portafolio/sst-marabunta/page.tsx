
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
    title: "SST Marabunta",
    description: "SST Marabunta es un portal dedicado al bienestar, la seguridad y la salud en el trabajo. Su propósito es promover una cultura preventiva y responsable dentro de la organización, brindando información, recursos y herramientas que permitan proteger la integridad física y mental de cada colaborador. Este espacio fomenta la conciencia, la formación y la participación activa en temas de seguridad laboral, contribuyendo al desarrollo de entornos de trabajo seguros y saludables.",
    category: "Desarrollo web, Diseño UX/UI",
    year: "2025",
    languages: "React, TypeScript, TailwindCSS, Next.js",
    link: "https://sst.marabunta.co/",
  };

  return (
    <main className="flex flex-col font-thin bg-gray-900 text-white min-h-screen">
      <Navbar current={"/portafolio"} withBorder s={nav} lang={lang} />
      
      <div className="max-w-7xl mx-auto pt-28 overflow-hidden rounded-b-3xl">
        <Image
         src="/images/projects/sst-marabunta/home.png"
          alt={projectDetails.title}
          width={1920}
          height={594}
          quality={100}
         className="xs:w-full md:w-screen h-auto object-cover md:h-144 pointer-events-none select-none"
        />
      </div>

      <section className="container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#129cbf] mb-4">{projectDetails.title}</h1>
        <hr className="border-t-2 border-gray-600 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <div className="space-y-4">
              <p><span className="font-semibold text-[#129cbf] mr-5">CATEGORÍA </span> {projectDetails.category}</p>
              <p><span className="font-semibold text-[#129cbf] mr-20">AÑO </span> {projectDetails.year}</p>
              <p><span className="font-semibold text-[#129cbf] mr-5">LENGUAJES</span> {projectDetails.languages}</p>
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
           src="/images/projects/sst-marabunta/protocolos-1.png"
          alt={`${projectDetails.title} - Imagen 1`}
          name="PROTOCOLOS"
        />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/protocolos-2.png"
          alt={`${projectDetails.title} - Imagen 2`}
          name="PROTOCOLOS"
        />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/protocolos-3.png"
          alt={`${projectDetails.title} - Imagen 3`}
          name="PROTOCOLOS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/mapa-1.png"
          alt={`${projectDetails.title} - Imagen 4`}
          name="MAPA"
        />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/mapa-2.png"
          alt={`${projectDetails.title} - Imagen 5`}
          name="MAPA"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/sst-marabunta/comites-1.png"
          alt={`${projectDetails.title} - Imagen 6`}
          name="COMITÉS"
        />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/comites-2.png"
          alt={`${projectDetails.title} - Imagen 7`}
          name="COMITÉS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/sst-marabunta/calendario-1.png"
          alt={`${projectDetails.title} - Imagen 8`}
          name="CALENDARIO"
        />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/calendario-2.png"
          alt={`${projectDetails.title} - Imagen 9`}
          name="CALENDARIO"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/sst-marabunta/saludable-1.png"
          alt={`${projectDetails.title} - Imagen 10`}
          name="VIDA SALUDABLE"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/sst-marabunta/estres-1.png"
          alt={`${projectDetails.title} - Imagen 11`}
          name="MANEJO DE ESTRÉS"
        />
        <hr className="  border-t-2 border-gray-600 mx-60 my-8 " />
         <ImageWithOverlay
           src="/images/projects/sst-marabunta/pausa-1.png"
          alt={`${projectDetails.title} - Imagen 12`}
          name="PAUSA ACTIVA"
        />
        <ImageWithOverlay
           src="/images/projects/sst-marabunta/pausa-2.png"
          alt={`${projectDetails.title} - Imagen 13`}
          name="PAUSA ACTIVA"
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