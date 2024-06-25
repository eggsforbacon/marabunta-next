import {ProjectCardDirection, ProjectCardMetadata} from "@/types/work";
import React, {ReactNode} from "react";
import Image from "next/image";
import {Locale} from "@/_i18n.config";
import {getDictionary} from "@/lib/dictionary";

export const projects = async (lang: Locale): Promise<{
    direction: ProjectCardDirection;
    cardHeight?: string;
    cardWidth?: string;
    metadata: ProjectCardMetadata;
    cover: ReactNode;
}[]> => {
    const { work } = await getDictionary(lang);
    const p = work.projects;
    return [
        {
            direction: "right to left",
            metadata: {
                title: p[0].title,
                chips: [
                    {name: p[0].categories[0], category: "Communication", href: "/#social-marketing"},
                    {name: p[0].categories[1], category: "Events", href: "/#event-production"},
                    {name: p[0].categories[2], category: "Digital Media", href: "/#media-campaign"},
                    {name: p[0].categories[3], category: "Events", href: "/#pop-material"},
                    {name: p[0].categories[4], category: "Events", href: "/#media-production"},
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
                title: p[1].title,
                chips: [
                    {name: p[1].categories[0], category: "Communication", href: "/#social-marketing"},
                    {name: p[1].categories[1], category: "Events", href: "/#event-production"},
                    {name: p[1].categories[2], category: "Events", href: "/#media-production"},
                    {name: p[1].categories[3], category: "Digital Media", href: "/#media-campaign"},
                    {name: p[1].categories[4], category: "Events", href: "/#pop-material"},
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
                title: p[2].title,
                chips: [
                    {name: p[2].categories[0], category: "Digital Media", href: "/#digital-marketing"},
                    {name: p[2].categories[1], category: "Events", href: "/#event-production"},
                    {name: p[2].categories[2], category: "Digital Media", href: "/#web-design-dev"},
                    {name: p[2].categories[3], category: "Events", href: "/#media-production"},
                    {name: p[2].categories[4], category: "Digital Media", href: "/#media-campaign"},
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
                title: p[3].title,
                chips: [
                    {name: p[2].categories[0], category: "Events", href: "/#media-production"},
                    {name: p[2].categories[1], category: "Events", href: "/#event-production"},
                    {name: p[2].categories[2], category: "Digital Media", href: "/#media-campaign"},
                    {name: p[2].categories[3], category: "Events", href: "/#pop-material"},
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
                title: p[4].title,
                chips: [
                    {name: p[4].categories[0], category: "Communication", href: "/#communication-strategies"},
                    {name: p[4].categories[1], category: "Events", href: "/#media-production"},
                    {name: p[4].categories[2], category: "Digital Media", href: "/#media-campaign"},
                    {name: p[4].categories[3], category: "Events", href: "/#pop-material"},
                    {name: p[4].categories[4], category: "Digital Media", href: "/#brand-activation"},
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
                title: p[5].title,
                chips: [
                    {name: p[5].categories[0], category: "Events", href: "/#media-production"},
                    {name: p[5].categories[1], category: "Events", href: "/#event-production"},
                    {name: p[5].categories[2], category: "Digital Media", href: "/#media-campaign"},
                    {name: p[5].categories[3], category: "Events", href: "/#pop-material"},
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
                title: p[6].title,
                chips: [
                    {name: p[6].categories[0], category: "Communication", href: "/#communication-strategies"},
                    {name: p[6].categories[1], category: "Events", href: "/#media-production"},
                    {name: p[6].categories[2], category: "Events", href: "/#pop-material"},
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
                title: p[7].title,
                chips: [
                    {name: p[7].categories[0], category: "Events", href: "/#media-production"},
                    {name: p[7].categories[1], category: "Events", href: "/#pop-material"},
                    {name: p[7].categories[2], category: "Events", href: "/#event-production"},
                ],
            },
            cover: <Image src={"/images/projects/bio-expo-19/cover.png"}
                          alt={"Una ballena azul saliendo del océano hacia la izquierda de la pantalla, con el logotipo de la exposición en el fondo."}
                          width={1920} height={1080} loading={"lazy"} quality={100}
                          className={"text-off-white absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-full w-auto lg:h-auto lg:w-full max-w-none object-cover"}/>,
        },
    ];
};