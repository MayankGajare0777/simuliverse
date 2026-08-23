import { useLenis } from './hooks/useLenis'
import VantaBackground from './components/VantaBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Terminal from './components/Terminal'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <div className="crt" style={{ position: 'relative', minHeight: '100vh' }}>
      <VantaBackground />
      <Navbar />
      <Hero />
      <Features />
      <Terminal />
      <Stats />
      <Footer />
    </div>
  )
}
