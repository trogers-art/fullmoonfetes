import Marquee from '../components/Marquee.jsx'
import Hero from '../components/Hero.jsx'
import ServicesGrid from '../components/ServicesGrid.jsx'
import AboutStrip from '../components/AboutStrip.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesGrid />
      <AboutStrip />
    </>
  )
}
