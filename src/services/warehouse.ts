import {Locale} from "@/_i18n.config";
import {options} from "@/services/common";
import {fetchURI} from "@/lib/api";
import {Strapi} from "@/types/strapi";
import {Warehouse} from "@/types/warehouse";

export async function getWarehouseCombos(lang?: Locale) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/combos?pagination[limit]=${process.env.NEXT_PUBLIC_STRAPI_LIMIT}&sort[0]=nombre&populate=*`;
    const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);
    const combos: Warehouse.Combo[] = [];
    if (data !== null) {
        for (let i = 0; i < data.length; i++) {
            const combo = data[i];
            const attributes: { [key: string]: any } = combo.attributes;
            const mapped = mapStrapiToWarehouseCombo(attributes, combo.id+"");
            combos.push(mapped);
        }
    }
    return {combos};
}

export async function getWarehouseElements(lang?: Locale, filters?: Warehouse.Category[] | "") {
    const generateFilterString = (filters: Warehouse.Category[]) => {
        let filterString = "";
        for (let i = 0; i < filters.length; i++) {
            const filter = filters[i];
            filterString += `filters[$or][${i}][categoria][$eq]=${filter}&`
        }
        return filterString;
    }
    const url = `${process.env.NEXT_PUBLIC_API_URL}/elementos?${filters?.length !== 0 && filters !== undefined ? `${generateFilterString(filters as Warehouse.Category[])}` : ""}pagination[limit]=${process.env.NEXT_PUBLIC_STRAPI_LIMIT}&sort[0]=nombre&populate=*`;
    const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);
    const elements: Warehouse.Element[] = []
    if (data !== null) {
        data.forEach((element) => {
            const attributes: { [key: string]: any } = element.attributes;
            elements.push(mapStrapiToWarehouse(attributes, element.id + ""));
        });
    }

    return {elements};
}

function mapStrapiToWarehouse(attributes: { [key: string]: any }, id: string): Warehouse.Element {
    return {
        id: id,
        name: attributes.nombre,
        category: attributes.categoria,
        color: attributes.color,
        description: attributes.descripcion,
        imageUrls: attributes.imagenes,
    }
}

function mapStrapiToWarehouseCombo(attributes: { [key: string]: any }, id: string): Warehouse.Combo {
    let elements : Warehouse.Element[] = [];
    for (let i = 0; i < attributes.elementos.length; i++){
        const element: any = attributes.elementos[i];
        elements.push({
            id: element.id,
            name: element.attributes.nombre,
            description: element.attributes.descripcion,
            color: element.attributes.color,
            category: element.attributes.category
        });
    }
    console.log(elements);
    return {
        id: id,
        name: attributes.nombre,
        elements: elements,
        gallery: attributes.gallery,
    };
}
