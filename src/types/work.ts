export type ServiceNames = "Social Marketing" | "Marketing Social" | "Communication Strategies" | "Estrategia Comunicativa" | "Event Production" | "Producción de Eventos" | "POP Material" | "Material POP" |
    "Media Production" | "Producción de Medios" | "Digital Marketing" | "Marketing Digital" | "Brand Activation" | "Activación de Marca" | "Media Campaign" | "Campaña de Medios" | "Web";

export type ServiceCategories = "Communication" | "Events" | "Digital Media";

export type ServiceChip = {
    name: ServiceNames,
    category: ServiceCategories,
    href : string,
}

export type ProjectCardDirection = "none" | "right to left" | "left to right" | "downwards" | "upwards";

export type ProjectCardMetadata = {
    title : string,
    chips : ServiceChip[]
}

export type ProjectAbout = {
    title : string,
    articles : string[]
}

