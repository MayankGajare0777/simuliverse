import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from './ScrambleText'

gsap.registerPlugin(ScrollTrigger)

const CARDS = [
  {
    icon: '◈',
    title: 'ARCHITECT',
    desc: 'Neural architecture search across 10,000 candidates. Predict training cost and accuracy before burning a single GPU hour.',
    color: 'var(--cyan)',
  },
  {
    icon: '◉',
    title: 'CRITIC',
    desc: '1,000 AI judge personas rate every response. No human labelers. No bias blindspots. Pure automated feedback at scale.',
    color: 'var(--magenta)',
  },
  {
    icon: '◆',
    title: 'ORACLE',
    desc: 'Predicts training trajectory from the first 1% of steps. Know when to stop, when to pivot, when your model is ready.',
    color: 'var(--amber)',
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.foundry-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' },
          y: 70, opacity: 0, duration: 0.9, delay: i * 0.12, ease: 'power3.out',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="foundry" ref={sectionRef} style={{
      position: 'relative', zIndex: 10,
      maxWidth: '1200px', margin: '0 auto',
      padding: '140px 24px',
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px', letterSpacing: '4px',
        color: 'var(--cyan)', opacity: 0.50,
        textTransform: 'uppercase', marginBottom: '14px',
      }}>
        02 // THE FOUNDRY
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(26px, 5vw, 52px)',
        fontWeight: 700, letterSpacing: '2px', marginBottom: '20px',
      }}>
        <ScrambleText text="Where AI Is Born" delay={0} />
      </h2>
      <p style={{
        fontSize: '15px', lineHeight: 1.8,
        color: 'rgba(224,230,240,0.50)',
        maxWidth: '640px', marginBottom: '60px',
      }}>
        Every agent that graduates from Simuliverse has survived a lifetime of adversarial testing before touching a real human. We do not guess. We simulate. We break. We harden.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {CARDS.map((c, i) => (
          <div key={c.title} className="foundry-card" style={{
            position: 'relative',
            background: 'rgba(4,4,10,0.70)',
            border: '1px solid rgba(0,229,255,0.07)',
            padding: '48px 36px',
            overflow: 'hidden',
            backdropFilter: 'blur(14px)',
            transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            cursor: 'default',
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = c.color
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = `0 24px 48px ${c.color}12, 0 0 0 1px ${c.color}18`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,229,255,0.07)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '20px', height: '20px',
              borderTop: `2px solid ${c.color}`,
              borderLeft: `2px solid ${c.color}`,
              opacity: 0.35,
            }} />
            <div style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '20px', height: '20px',
              borderBottom: `2px solid ${c.color}`,
              borderRight: `2px solid ${c.color}`,
              opacity: 0.35,
            }} />

            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '38px', color: c.color,
              marginBottom: '18px',
              textShadow: `0 0 20px ${c.color}55`,
            }}>{c.icon}</div>
            <h3 style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '14px', letterSpacing: '3px',
              fontWeight: 700, marginBottom: '14px',
              color: 'var(--ghost)',
            }}>{c.title}</h3>
            <p style={{
              fontSize: '13px', lineHeight: 1.8,
              color: 'rgba(224,230,240,0.45)',
            }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
