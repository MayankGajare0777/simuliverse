import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlitchText from './GlitchText'
import MagneticButton from './MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function HeroOverlay() {
  const taglineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title-v2', {
        opacity: 0, y: 50, duration: 1.5, ease: 'power3.out', delay: 0.5,
      })
      gsap.from('.hero-tagline-v2', {
        opacity: 0, y: 25, duration: 1, ease: 'power3.out', delay: 1.4,
      })
      gsap.from('.hero-cta-v2', {
        opacity: 0, y: 20, duration: 1, ease: 'power3.out', delay: 2.0,
      })
      gsap.from('.scroll-hint-v2', {
        opacity: 0, duration: 1.2, delay: 2.8,
      })

      // Fade out on scroll
      gsap.to('.hero-content-v2', {
        scrollTrigger: {
          trigger: '#cosmos-wrapper',
          start: '8% top',
          end: '28% top',
          scrub: true,
        },
        opacity: 0, y: -30, ease: 'none',
      })

      // Typewriter
      const text = 'Birth your AI in a world before it touches reality.'
      const el = taglineRef.current
      let i = 0
      const type = () => {
        if (i <= text.length) {
          el.innerHTML = text.substring(0, i) + '<span class="cursor-blink">|</span>'
          i++
          setTimeout(type, 26 + Math.random() * 30)
        } else {
          el.innerHTML = text + '<span class="cursor-blink">|</span>'
        }
      }
      setTimeout(type, 2000)
    })
    return () => ctx.revert()
  }, [])

  return (
    <section style={{
      position: 'relative', zIndex: 5,
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '0 24px',
      pointerEvents: 'none',
    }}>
      <div className="hero-content-v2" style={{ pointerEvents: 'auto' }}>
        <div className="hero-title-v2" style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(38px, 11vw, 140px)',
          fontWeight: 900,
          letterSpacing: '14px',
          color: 'var(--ghost)',
          lineHeight: 1.05,
          textShadow: '0 0 50px rgba(0,229,255,0.12), 0 0 120px rgba(0,229,255,0.04)',
        }}>
          <GlitchText text="SIMULIVERSE" />
        </div>

        <div ref={taglineRef} className="hero-tagline-v2" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(10px, 1.2vw, 13px)',
          color: 'rgba(224,230,240,0.50)',
          marginTop: '28px',
          maxWidth: '520px',
          lineHeight: 1.9,
          letterSpacing: '1px',
          minHeight: '55px',
        }} />

        <div className="hero-cta-v2" style={{ marginTop: '44px' }}>
          <MagneticButton onClick={() => document.getElementById('foundry')?.scrollIntoView({ behavior: 'smooth' })}>
            &gt; INITIATE_SIMULATION()
          </MagneticButton>
        </div>
      </div>

      <div className="scroll-hint-v2" style={{
        position: 'absolute', bottom: '36px', left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px', letterSpacing: '5px',
        color: 'rgba(224,230,240,0.22)',
        textAlign: 'center',
      }}>
        SCROLL TO DESCEND
        <div style={{
          width: '1px', height: '36px',
          background: 'linear-gradient(to bottom, var(--cyan), transparent)',
          margin: '12px auto 0',
          animation: 'scrollLine 2.5s ease-in-out infinite',
        }} />
      </div>
    </section>
  )
}
