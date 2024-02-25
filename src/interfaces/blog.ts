import {Strapi} from "@/interfaces/strapi";

export namespace Blog {
    export type Category =
        "marabunta" |
        "design" |
        "strategy" |
        "production" |
        "diseño" |
        "estrategia" |
        "producción";

    export type Attributes = {
        date: string,
        title: string,
        slug: string,
        category: Category,
        featured: boolean,
        description: string,
        excerpt: string,
        body: { type: string, children?: any[], image?: Strapi.BodyImageAttributes }[],
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        locale: string,
        author: string,
        cover: Strapi.ImageAttributes,
        thumbnail: Strapi.ImageAttributes,
        localizations: [Object]
    }
}

