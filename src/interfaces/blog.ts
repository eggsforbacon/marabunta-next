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

    export const EmptyImageAttributes : Strapi.ImageAttributes = {
        data: {
            id: 0,
            attributes: {
                name: "",
                alternativeText: null,
                caption: null,
                width: 0,
                height: 0,
                formats: {
                    thumbnail: {
                        name: "",
                        hash: "",
                        ext: "",
                        mime: "",
                        path: null,
                        width: 0,
                        height: 0,
                        size: 0,
                        url: ""
                    },
                    small: {
                        name: "",
                        hash: "",
                        ext: "",
                        mime: "",
                        path: null,
                        width: 0,
                        height: 0,
                        size: 0,
                        url: ""
                    },
                    medium: {
                        name: "",
                        hash: "",
                        ext: "",
                        mime: "",
                        path: null,
                        width: 0,
                        height: 0,
                        size: 0,
                        url: ""
                    },
                    large: {
                        name: "",
                        hash: "",
                        ext: "",
                        mime: "",
                        path: null,
                        width: 0,
                        height: 0,
                        size: 0,
                        url: ""
                    }
                },
                hash: "",
                ext: "",
                mime: "",
                size: 0,
                url: "/uploads/thumbnail_marabunta_texture_577967f127.webp",
                previewUrl: null,
                provider: "",
                provider_metadata: null,
                createdAt: "",
                updatedAt: ""
            }
        }
    }


    export const EmptyAttributes : Attributes = {
        date: "",
        title: "Not found",
        slug: "",
        category: "marabunta",
        featured: true,
        description: "",
        excerpt: "",
        body: [],
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        locale: "",
        author: "",
        cover: EmptyImageAttributes,
        thumbnail: EmptyImageAttributes,
        localizations: [Object]
    }
}

