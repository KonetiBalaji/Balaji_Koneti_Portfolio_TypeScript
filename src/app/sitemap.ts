import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://balajikoneti.dev',
      lastModified: '2026-03-18',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
