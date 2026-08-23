import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from './ScrambleText'

gsap.registerPlugin(ScrollTrigger)

export default function EarthOverlay() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.earth-label', {
        scrollTrigger: { trigger: '#cosmos-wrapper', start: '50% top', end: '68% top', scrub: true },
        y: 35, opacity: 0, ease: 'none',
      })
      gsap.from('.earth-sub', {
        scrollTrigger: { trigger: '#cosmos-wrapper', start: '55% top', end: '72% top', scrub: true },
        y: 25, opacity: 0, ease: 'none',
      })
      gsap.utils.toArray('.earth-data-line').forEach((line, i) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: '#cosmos-wrapper',
            start: `${60 + i * 5}% top`,
            end: `${72 + i * 5}% top`,
            scrub: true,
          },
          x: -18, opacity: 0, ease: 'none',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} style={{
      position: 'absolute', top: 0, left: 0,
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      pointerEvents: 'none', zIndex: 5,
    }}>
      <div style={{ textAlign: 'center' }}>
        <div className="earth-label" style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(16px, 3vw, 36px)',
          fontWeight: 700,
          letterSpacing: '10px',
          color: 'var(--ghost)',
          textShadow: '0 0 30px rgba(0,229,255,0.20), 0 0 80px rgba(0,229,255,0.06)',
          marginBottom: '14px',
        }}>
          <ScrambleText text="ENTERING THE SIMULATION" />
        </div>
        <div className="earth-sub" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(8px, 1vw, 11px)',
          letterSpacing: '5px',
          color: 'rgba(224,230,240,0.30)',
          textTransform: 'uppercase',
        }}>
          UNIVERSE OF SIMULATION // EARTH NODE_01
        </div>

        <div style={{
          marginTop: '36px',
          textAlign: 'left',
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '1px',
          lineHeight: 2.2,
          color: 'rgba(0,229,255,0.40)',
        }}>
          {[
            '> gravitational_constant: 6.67430e-11',
            '> atmospheric_density: 1.225 kg/m³',
            '> simulation_fidelity: 99.997%',
            '> active_agents: 8,192,000,000',
            '> render_mode: GHIBLI_SHADED',
          ].map((text, i) => (
            <div key={i} className="earth-data-line">{text}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
