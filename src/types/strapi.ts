export namespace Strapi {
    type ImageFields = {
        name: string,
        hash: string,
        ext: string,
        mime: string,
        path: null | string,
        width: number,
        height: number,
        size: number,
        url: string
    }

    export type BodyImageAttributes = {
        name: string,
        alternativeText: null | string,
        caption: null | string,
        width: number,
        height: number,
        formats: {
            thumbnail: ImageFields,
            small: ImageFields,
            medium: ImageFields,
            large: ImageFields
        },
        hash: string,
        ext: string,
        mime: string,
        size: number,
        url: string,
        previewUrl: null | string,
        provider: string,
        provider_metadata: null,
        createdAt: string,
        updatedAt: string
    }

    export type ImageAttributes = {
        data: {
            id: number,
            attributes: BodyImageAttributes
        }
    }

    export type ImageArrayData = {
        data: {
            id: number,
            attributes: BodyImageAttributes
        }[]
    }

    export type Post = {
        id: number,
        attributes: [Object]
    }

    export type SingleResponse = {
        data: Post,
        meta: {}
    }

    export type MultipleResponse = {
        data: Post[] | null,
        meta?: { pagination: { start: number, limit: number, total: number } }
        error?: {
            status: number,
            name : string,
            message : string,
            details: {}
        }
    }
}


