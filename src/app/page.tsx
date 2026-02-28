// force-static: explicit guarantee — this page is always pre-rendered at build time
export const dynamic = 'force-static'

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import Reviews from '@/components/sections/Reviews'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Portfolio />
      <Process />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
