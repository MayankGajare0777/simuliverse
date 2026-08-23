import { useLenis } from './hooks/useLenis'
import CosmosScene from './components/CosmosScene'
import Navbar from './components/Navbar'
import HeroOverlay from './components/HeroOverlay'
import EarthOverlay from './components/EarthOverlay'
import Features from './components/Features'
import Terminal from './components/Terminal'
import Stats from './components/Stats'
import Footer from './components/Footer'

export default function App() {
  useLenis()

  return (
    <div className="crt cosmos-theme" style={{ position: 'relative', minHeight: '100vh' }}>
      <CosmosScene />
      <Navbar />

      {/* Pinned cosmos experience: Solar System → Earth */}
      <div id="cosmos-wrapper" style={{ position: 'relative', zIndex: 5, height: '100vh' }}>
        <HeroOverlay />
        <EarthOverlay />
      </div>

      {/* Content scrolls over the Earth background */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(2,2,4,0.82) 6%, var(--void) 18%)',
      }}>
        <Features />
        <Terminal />
        <Stats />
        <Footer />
      </div>
    </div>
  )
}
