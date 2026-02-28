import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // WebP only — AVIF doubles transformation count (one per format per image)
    formats: ['image/webp'],
    // Cache transformed images for 31 days — avoids re-transforming on cache expiry
    minimumCacheTTL: 2678400,
    // Lock to one quality level — prevents arbitrary q= params creating extra cache variants
    qualities: [75],
    // Trim to breakpoints actually used in the layout
    deviceSizes: [640, 1080, 1920],
    imageSizes: [48, 96, 256],
  },
}

export default nextConfig
