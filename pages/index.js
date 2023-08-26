import Image from 'next/image'
import Header from '@/sections/Header'
import ProductS from '@/sections/ProductS'
import AdvantageS from '@/sections/AdvantageS'
import MarketS from '@/sections/MarketS'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <main>
      <Header />
      <ProductS/>
      <AdvantageS />
      <MarketS/>
      <About/>
      <Contact />
      <Footer />
    </main>
  )
}
