export type ServiceNames = "Social Marketing" | "Communication Strategies" | "Event Production" | "POP Material" |
    "Media Production" | "Digital Marketing" | "Brand Activation" | "Media Campaign" | "Web";

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

