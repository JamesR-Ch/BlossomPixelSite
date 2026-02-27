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
  metadataBase: new URL('https://www.blossompixel.xyz'),

  title: {
    default: 'Blossom Pixel | Photo Booth & Event Services Thailand',
    template: '%s | Blossom Pixel',
  },

  description:
    'Blossom Pixel — บริการ Photo Booth พรีเมียม พร้อมปรินต์ทันที สำหรับงานแต่งงานและอีเวนต์ในไทย ครบทั้ง 360 Video Booth, Video Blessing และ LINE Sticker ออกแบบเฟรมตามธีมงาน ทีมงานมืออาชีพดูแลตลอดงาน',

  keywords: [
    'Blossom Pixel',
    'photo booth',
    'photo booth thailand',
    'โฟโต้บูธ',
    'บูธถ่ายภาพ',
    'โฟโต้บูธงานแต่ง',
    'photo booth งานแต่ง',
    'photo booth งานแต่งงาน',
    'photo booth เช่า',
    'บูธงานแต่ง',
    '360 video booth',
    '360 video booth thailand',
    'video blessing',
    'video blessing งานแต่งงาน',
    'งานแต่งงาน',
    'wedding photo booth',
    'instant print photo booth',
    'sticker line งานแต่ง',
    'สติ๊กเกอร์ไลน์งานแต่ง',
    'event photo booth',
  ],

  authors: [{ name: 'Blossom Pixel', url: 'https://www.blossompixel.xyz' }],
  creator: 'Blossom Pixel',
  publisher: 'Blossom Pixel',
  category: 'photography',

  alternates: {
    canonical: 'https://www.blossompixel.xyz',
  },

  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    apple: '/icon.png',
    shortcut: '/icon.png',
  },

  openGraph: {
    title: 'Blossom Pixel | Photo Booth & Event Services Thailand',
    description:
      'Blossom Pixel — บริการ Photo Booth พรีเมียม พร้อมปรินต์ทันที สำหรับงานแต่งงานและอีเวนต์ในไทย ครบทั้ง 360 Video Booth, Video Blessing และ LINE Sticker',
    url: 'https://www.blossompixel.xyz',
    siteName: 'Blossom Pixel',
    locale: 'th_TH',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/images/logo/Branding and colors.jpg',
        width: 1200,
        height: 630,
        alt: 'Blossom Pixel — Photo Booth & Event Services Thailand',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Blossom Pixel | Photo Booth Thailand',
    description:
      'Premium Photo Booth with instant printing for weddings & events in Thailand. 360 Video Booth, Video Blessing & LINE Stickers.',
    images: ['/images/logo/Branding and colors.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
  description:
    'บริการ Photo Booth พรีเมียม พร้อมปรินต์ทันที สำหรับงานแต่งงานและอีเวนต์ในไทย ครบทั้ง 360 Video Booth, Video Blessing และ LINE Sticker ออกแบบเฟรมตามธีมงาน',
  url: 'https://www.blossompixel.xyz',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.blossompixel.xyz/icon.png',
    width: 512,
    height: 512,
  },
  image: 'https://www.blossompixel.xyz/images/logo/Branding%20and%20colors.jpg',
  priceRange: '฿฿',
  areaServed: {
    '@type': 'Country',
    name: 'Thailand',
  },
  knowsLanguage: ['th', 'en'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Event Photo & Video Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Photo Booth',
          description: 'Premium photo booth with instant printing and custom frame designs for weddings and events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '360 Video Booth',
          description: '360-degree slow-motion video booth experience for weddings and special events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Video Blessing',
          description: 'Capture heartfelt guest blessing messages through a charming vintage TV display',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'LINE Stickers',
          description: 'Custom LINE stickers created from pre-wedding or event photos with personalized themes',
        },
      },
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
    url: 'https://www.facebook.com/bblossompixel',
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
