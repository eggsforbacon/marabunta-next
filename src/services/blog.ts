import {Strapi} from "@/types/strapi";
import {fetchURI} from "@/lib/api";
import {Month} from "@/types/common";
import {Locale} from "@/i18n.config";
import {Blog} from "@/types/blog";
import {normalizeLocale, options} from "@/services/common";

export async function getBlogs(locale?: Locale, filter?: Blog.Category | ""): Promise<{ blogs: Blog.Attributes[] }> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&${filter !== "" && filter !== undefined && `filters[categoria][$eq]=${filter}&`}sort=fecha%3Adesc&populate=*`;
  const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);

  const blogs: Blog.Attributes [] = [];

  if (data !== null) data.forEach((blog) => {
    const attributes: { [key: string]: any; } = blog.attributes;
    blogs.push({...mapStrapiToBlog(attributes), featured: false});
  });

  return {blogs};
}

export async function getMonthlyFeatured(month: Month, locale?: Locale): Promise<{ featuredArray: Blog.Attributes[] }> {
  const normalizedMonth = `${month}`.padStart(2, '0');
  const url = `${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[featured][$eq]=true&filters[fecha][$contains]=-${normalizedMonth}-&sort=fecha%3Adesc&populate=*`;
  const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);
  const featuredArray: Blog.Attributes[] = [];

  if (data !== null) {
    data.forEach((feat) => {
      const attributes: { [key: string]: any } = feat.attributes;
      featuredArray.push({...mapStrapiToBlog(attributes), featured: true});
    });
  }
  return {featuredArray}
}

export async function getSingleBlog(slug: string, lang : Locale): Promise<{ post: Blog.Attributes }> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/notas?${lang === "es" ? "locale=es-CO&" : `locale=${lang}&`}populate=*`;
  const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);

  let singlePost;
  if (data !== null) {
    for (const feat of data) {
      const attributes: { [key: string]: any } = feat.attributes;
      if (attributes.slug === slug) {
        singlePost = attributes;
        break;
      }
    }
  }
  let post;

  try {
    post = mapStrapiToBlog(singlePost!);
  } catch (e) {
    post = Blog.EmptyAttributes;
  }

  return {post}
}

export async function getRecommendedBlogs(slug: string): Promise<{ recommendedBlogs: Blog.Attributes[] }> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/notas?locale=es-CO&populate=*`;
  const {data} = await fetchURI<Strapi.MultipleResponse>(url, options);

  let randomSorted;
  const recommendedBlogs: Blog.Attributes[] = [];
  if (data !== null) {
    randomSorted = data.sort(() => 0.5 - Math.random());
    for (const blog of randomSorted) {
      recommendedBlogs.push(mapStrapiToBlog(blog.attributes));
    }
    for (const blog of randomSorted) {
      recommendedBlogs.push(mapStrapiToBlog(blog.attributes));
    }
  }

  return {recommendedBlogs}
}

export async function searchByTitle(query: string, locale?: Locale) {
  const {data: result} = await fetchURI<Strapi.MultipleResponse>(`${process.env.NEXT_PUBLIC_API_URL}/notas?locale=${normalizeLocale(locale ?? "es")}&filters[titulo][$contains]=${query}&sort=fecha%3Adesc&populate=*`, options);
  return {result}
}

function mapStrapiToBlog(attributes: { [key: string]: any }): Blog.Attributes {
  return {
    date: attributes.fecha,
    title: attributes.titulo,
    slug: attributes.slug,
    category: attributes.categoria,
    featured: attributes.featured,
    description: attributes.descripcion,
    excerpt: attributes.resumen,
    body: attributes.cuerpo,
    createdAt: attributes.createdAt,
    updatedAt: attributes.updatedAt,
    publishedAt: attributes.publishedAt,
    locale: attributes.locale,
    author: attributes.autor,
    cover: attributes.cover as Strapi.ImageAttributes,
    thumbnail: attributes.thumbnail as Strapi.ImageAttributes,
    localizations: [{}] as [Object]
  }
}

export function shareToTwitter(slug: string, shareText: string) {
  return `https://twitter.com/intent/share?text=${shareText}%0A%0Ahttps%3A//marabunta.co/blog/${slug}`;
}