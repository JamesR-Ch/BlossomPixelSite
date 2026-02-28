import { MetadataRoute } from 'next'

// force-static: pre-rendered at build time, served as a plain file — zero ISR reads/writes
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.blossompixel.xyz/sitemap.xml',
    host: 'https://www.blossompixel.xyz',
  }
}
