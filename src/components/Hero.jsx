import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import GlitchText from './GlitchText'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const heroRef = useRef(null)
  const taglineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        opacity: 0,
        y: 60,
        duration: 1.4,
        ease: 'power3.out',
        delay: 0.8,
      })
      gsap.from('.hero-tagline', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 1.4,
      })
      gsap.from('.hero-cta', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1.8,
      })
      gsap.from('.scroll-hint', {
        opacity: 0,
        duration: 1,
        delay: 2.4,
      })

      // Typewriter
      const text = "Birth your AI in a world before it touches reality."
      const el = taglineRef.current
      let i = 0
      const type = () => {
        if (i <= text.length) {
          el.innerHTML = text.substring(0, i) + '<span style="display:inline-block;width:8px;height:14px;background:var(--cyan);margin-left:4px;animation:blink 1s step-end infinite;vertical-align:middle;"></span>'
          i++
          setTimeout(type, 30 + Math.random() * 40)
        } else {
          el.innerHTML = text + '<span style="display:inline-block;width:8px;height:14px;background:var(--cyan);margin-left:4px;animation:blink 1s step-end infinite;vertical-align:middle;"></span>'
        }
      }
      setTimeout(type, 1800)
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        zIndex: 10,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <div className="hero-title" style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(44px, 13vw, 160px)',
        fontWeight: 900,
        letterSpacing: '14px',
        color: 'var(--ghost)',
        lineHeight: 1.1,
        animation: 'float 6s ease-in-out infinite',
      }}>
        <GlitchText text="SIMULIVERSE" />
      </div>

      <div
        ref={taglineRef}
        className="hero-tagline"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 'clamp(11px, 1.4vw, 15px)',
          color: 'rgba(224,224,224,0.6)',
          marginTop: '28px',
          maxWidth: '580px',
          lineHeight: 1.9,
          letterSpacing: '1px',
          minHeight: '60px',
        }}
      />

      <div className="hero-cta" style={{ marginTop: '44px' }}>
        <MagneticButton onClick={() => document.getElementById('foundry')?.scrollIntoView({ behavior: 'smooth' })}>
          &gt; INITIATE_SIMULATION()
        </MagneticButton>
      </div>

      <div className="scroll-hint" style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: "'Space Mono', monospace",
        fontSize: '9px',
        letterSpacing: '4px',
        color: 'rgba(224,224,224,0.3)',
        textAlign: 'center',
      }}>
        SCROLL TO DESCEND
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--cyan), transparent)',
          margin: '12px auto 0',
          animation: 'scrollLine 2.5s ease-in-out infinite',
        }} />
        <style>{`
          @keyframes scrollLine {
            0% { transform: scaleY(0); transform-origin: top; }
            50% { transform: scaleY(1); }
            100% { transform: scaleY(0); transform-origin: bottom; }
          }
        `}</style>
      </div>
    </section>
  )
}
