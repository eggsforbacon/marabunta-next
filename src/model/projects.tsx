import {ProjectCardDirection, ProjectCardMetadata} from "@/types/work";
import React, {ReactNode} from "react";
import Image from "next/image";

export const projects: {
    direction: ProjectCardDirection,
    cardHeight?: string,
    cardWidth?: string,
    metadata: ProjectCardMetadata,
    cover: ReactNode
}[] = [
    {
        direction: "right to left",
        metadata: {
            title: "Cali, Volvamos a Sonreír",
            chips: [
                {name: "Social Marketing", category: "Communication", href: "/#social-marketing"},
                {name: "Event Production", category: "Events", href: "/#event-production"},
                {name: "Media Campaign", category: "Digital Media", href: "/#media-campaign"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
                {name: "Media Production", category: "Events", href: "/#media-production"},
            ],
        },
        cover: <Image src={"/images/projects/placeholder-image.svg"}
                      alt={"A placeholder image"} quality={100}
                      width={1920} height={1080} loading={"lazy"}
                      className={"object-cover h-full w-full"}/>,
    },
    {
        direction: "downwards",
        metadata: {
            title: "La Fiesta de mi Pueblo, lo que Somos",
            chips: [
                {name: "Social Marketing", category: "Communication", href: "/#social-marketing"},
                {name: "Event Production", category: "Events", href: "/#event-production"},
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "Media Campaign", category: "Digital Media", href: "/#media-campaign"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
            ],
        },
        cover: <Image src={"/images/projects/placeholder-image.svg"}
                      alt={"A placeholder image"} quality={100}
                      width={1920} height={1080} loading={"lazy"}
                      className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-full w-auto xl:h-auto xl:w-full max-w-none object-cover"}/>,
    },
    {
        direction: "left to right",
        metadata: {
            title: "Clinicannabis",
            chips: [
                {name: "Digital Marketing", category: "Digital Media", href: "/#digital-marketing"},
                {name: "Event Production", category: "Events", href: "/#event-production"},
                {name: "Web", category: "Digital Media", href: "/#web-design-dev"},
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "Media Campaign", category: "Digital Media", href: "/#media-campaign"},
            ],
        },
        cover: <Image src={"/images/projects/clinicannabis/cover.png"}
                      alt={"Una tarjeta con textura porosa y de color blanco que lee 'Clinicannabis. Centro de Medicina Ancestral de Orígenes' bajo el logotipo de Clinicannabis, todo en un tono verde azulado. La tarjeta está inclinada hacia la izquierda con un ángulo agudo, sobre un folio verde con una textura similar al fommy, del mismo color que la inscripción de la tarjeta y con la misma inclinación."}
                      width={1920} height={1080} loading={"lazy"} quality={100}
                      className={"absolute text-off-white h-full aspect-video object-cover"}/>,
    },
    {
        direction: "upwards",
        metadata: {
            title: "Juegos Panamericanos Junior 2021",
            chips: [
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "Event Production", category: "Events", href: "/#event-production"},
                {name: "Media Campaign", category: "Digital Media", href: "/#media-campaign"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
            ],
        },
        cover: <video loop muted autoPlay playsInline height={1080} width={1920}
                      className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-full w-auto lg:h-auto lg:w-full max-w-none object-cover"}>
            <source src={"/videos/projects/juegos-panamericanos-21/cover.webm"}/>
        </video>
    },
    {
        direction: "left to right",
        metadata: {
            title: "Rebranding Fondo Mixto",
            chips: [
                {name: "Communication Strategies", category: "Communication", href: "/#communication-strategies"},
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "Media Campaign", category: "Digital Media", href: "/#media-campaign"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
                {name: "Brand Activation", category: "Digital Media", href: "/#brand-activation"},
            ],
        },
        cover: <Image src={"/images/projects/fondo-mixto/cover.png"}
                      alt={"Un fondo azul en una textura ligeramente granulada, dando la apariencia de porosidad, hace de fondo para el nuevo logo del Fondo Mixto, en color gris con una textura metálica. Toda la escena parece estar iluminada desde arriba a la izquierda."}
                      width={1920} height={1080} loading={"lazy"} quality={100}
                      className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-full w-auto max-w-none object-cover"}/>,
    },
    {
        direction: "right to left",
        metadata: {
            title: "Fiesta de mi Pueblo",
            chips: [
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "Event Production", category: "Events", href: "/#event-production"},
                {name: "Media Campaign", category: "Digital Media", href: "/#media-campaign"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
            ],
        },
        cover: <video loop muted autoPlay playsInline height={1080} width={1920}
                      className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-auto h-full object-cover"}>
            <source src={"/videos/projects/fiesta-de-mi-pueblo-21/cover.webm"}/>
        </video>
    },
    {
        direction: "upwards",
        metadata: {
            title: "Promotores Ambientales",
            chips: [
                {name: "Communication Strategies", category: "Communication", href: "/#communication-strategies"},
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
            ],
        },
        cover: <Image src={"/images/projects/promotores-ambientales/cover.png"}
                      alt={"Una cama de hojas verdes grandes hace de fondo para el logotipo de 'Promotores Ambientales', en blanco."}
                      width={1920} height={1080} loading={"lazy"} quality={100}
                      className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-full w-auto lg:h-auto lg:w-full max-w-none object-cover"}/>,
    },
    {
        direction: "downwards",
        metadata: {
            title: "Bio Expo 2019",
            chips: [
                {name: "Media Production", category: "Events", href: "/#media-production"},
                {name: "POP Material", category: "Events", href: "/#pop-material"},
                {name: "Event Production", category: "Events", href: "/#event-production"},
            ],
        },
        cover: <Image src={"/images/projects/bio-expo-19/cover.png"}
                      alt={"Una ballena azul saliendo del océano hacia la izquierda de la pantalla, con el logotipo de la exposición en el fondo."}
                      width={1920} height={1080} loading={"lazy"} quality={100}
                      className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-full w-auto lg:h-auto lg:w-full max-w-none object-cover"}/>,
    },
];