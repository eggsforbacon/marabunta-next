import {normalizeLocale, options} from "@/services/common";
import {Locale} from "@/i18n.config";
import {fetchURI} from "@/lib/api";
import {Strapi} from "@/types/strapi";
import {Team} from "@/types/team";

export async function getTeam(lang?: Locale, filter?: Team.Area | "") {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/ants?locale=${normalizeLocale(lang ?? "es")}&${filter !== "" && filter !== undefined ? `filters[area][$eq]=${filter}&` : ""}pagination[limit]=${process.env.NEXT_PUBLIC_STRAPI_LIMIT}&sort[0]=nombre&sort[1]=index&populate=*`;
  const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);
  const ants: Team.Attributes[] = []
  if (data !== null) {
    data.forEach((ant) => {
      const attributes: { [key: string]: any } = ant.attributes;
      ants.push(mapStrapiToAnt(attributes));
    });
  }

  return {ants};
}

function mapStrapiToAnt(attributes: { [key: string]: any }): Team.Attributes {
  return {
    name: attributes.nombre,
    lastName: attributes.apellido,
    position: attributes.cargo,
    area: attributes.area,
    index: attributes.index,
    createdAt: attributes.createdAt,
    publishedAt: attributes.publishedAt,
    updatedAt: attributes.updatedAt,
    locale: attributes.locale,
    memoji: attributes.memoji,
    localizations: attributes.localizations,
  }
}