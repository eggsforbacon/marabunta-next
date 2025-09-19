import {Strapi} from "@/types/strapi";

export const warehouseCategories = [
    "Dispositivos Electrónicos",
    "Oficina y Muebles",
    "Herramientas y Mantenimiento",
    "Cableado y Electricidad",
    "Infraestructura de Eventos",
    "Señalización",
    "Seguridad",
    "Catering",
    "Miscelánea",
] as const;

export namespace Warehouse {
    export type Category = typeof warehouseCategories[number];

    export type Element = {
        id: string;
        name: string;
        description?: string;
        color?: string;
        imageUrls?: [Object];
        category: Category;
    };

    export type Combo = {
        id: string;
        name: string;
        elements: Element[];
        gallery: [Object][];
    }
}