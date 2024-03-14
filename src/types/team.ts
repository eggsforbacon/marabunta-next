import {Strapi} from "@/types/strapi";

export namespace Team {
    export type Area =
        "diseño" |
        "comunicaciones" |
        "digital" |
        "producción" |
        "técnica" |
        "administrativa" |
        "financiera" |
        "management" |
        "dirección" |
        "administrative" |
        "design" |
        "communications" |
        "production" |
        "technical" |
        "finances";

    export type Attributes = {
        name: string,
        lastName: string,
        position: string,
        area: Area,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        locale: string,
        index: number,
        memoji: Strapi.ImageAttributes | { data: null },
        localizations: [Object]
    }
}