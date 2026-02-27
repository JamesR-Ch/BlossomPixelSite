import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import PageLoader from '@/components/PageLoader'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-thai',
  subsets: ['thai'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://blossompixel.com'),
  title: 'Blossom Pixel | Photo Booth & Event Services Thailand',
  icons: {
    icon: '/images/logo/logo and favicon.png',
    apple: '/images/logo/logo and favicon.png',
  },
  description: 'Blossom Pixel — บริการ Photo Booth พรีเมียม พร้อมปรินต์ทันที สำหรับงานแต่งงานและงานพิเศษในไทย ครบทั้ง 360 Video, Video Blessing และ LINE Sticker.',
  keywords: [
    'Blossom Pixel',
    'Photo Booth',
    'photo booth thailand',
    'โฟโต้บูธ',
    'บูธถ่ายภาพ',
    'photo booth งานแต่ง',
    '360 video booth',
    'video blessing',
    'งานแต่งงาน',
    'wedding photo booth',
    'instant print photo booth',
  ],
  authors: [{ name: 'Blossom Pixel' }],
  openGraph: {
    title: 'Blossom Pixel | Photo Booth & Event Services Thailand',
    description: 'Blossom Pixel — premium Photo Booth with instant printing for weddings and special events in Thailand.',
    url: 'https://blossompixel.com',
    siteName: 'Blossom Pixel',
    locale: 'th_TH',
    type: 'website',
    images: [{ url: '/images/logo/Branding and colors.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blossom Pixel | Photo Booth Thailand',
    description: 'Premium Photo Booth with instant printing for weddings and special events.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#A67C52',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Blossom Pixel',
  description: 'บริการ Photo Booth พรีเมียม พร้อมปรินต์ทันที สำหรับงานแต่งงานและงานพิเศษ ครบทั้ง 360 Video Booth, Video Blessing และ LINE Sticker.',
  url: 'https://blossompixel.com',
  logo: 'https://blossompixel.com/images/logo/logo and favicon.png',
  image: 'https://blossompixel.com/images/logo/Branding and colors.jpg',
  priceRange: '฿฿',
  areaServed: 'Thailand',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Event Photo Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Photo Booth' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '360 Video Booth' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Blessing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LINE Stickers' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/bblossompixel',
    'https://www.instagram.com/blossom.pixel',
    'https://www.tiktok.com/@blossom.pixel',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'blossom.pixel.th@gmail.com',
    availableLanguage: ['Thai', 'English'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${playfair.variable} ${inter.variable} ${notoSansThai.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-cream">
        <LanguageProvider>
          <PageLoader />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
