import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://marabunta.co/',
      lastModified: new Date(),
      priority: 1
    },
    {
      url: 'https://marabunta.co/equipo',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://marabunta.co/portafolio',
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: 'https://marabunta.co/blog',
      lastModified: new Date(),
      priority: 0.8
    }
  ]
}