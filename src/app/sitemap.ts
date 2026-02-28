import { MetadataRoute } from 'next'

// force-static: pre-rendered at build time, served as a plain file — zero ISR reads/writes
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.blossompixel.xyz',
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
