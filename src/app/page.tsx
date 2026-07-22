import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import About from '@/components/About'
import Domains from '@/components/Domains'
import Fees from '@/components/Fees'
import Verbatim from '@/components/Verbatim'
import Resources from '@/components/Resources'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Domains />
        <Fees />
        <Verbatim />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
