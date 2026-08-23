import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from './ScrambleText'

gsap.registerPlugin(ScrollTrigger)

export default function ReelSection() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reel-container', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '800px',
        margin: '0 auto',
        padding: '100px 24px 40px',
      }}
    >
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px',
        letterSpacing: '4px',
        color: 'var(--cyan)',
        opacity: 0.55,
        textTransform: 'uppercase',
        marginBottom: '14px',
      }}>
        01 // ORIGIN
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(26px, 5vw, 52px)',
        fontWeight: 700,
        letterSpacing: '2px',
        marginBottom: '32px',
      }}>
        <ScrambleText text="Reference Data Stream" delay={0} />
      </h2>

      <div
        className="reel-container"
        style={{
          position: 'relative',
          border: '1px solid rgba(0,240,255,0.15)',
          background: 'rgba(0,240,255,0.02)',
          padding: '36px 28px',
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0,240,255,0.04), transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '3px',
          color: 'var(--magenta)',
          marginBottom: '20px',
          position: 'relative',
          zIndex: 2,
        }}>
          ◉ INSTAGRAM REEL — DcOs3VwRK0B
        </div>

        {/* Instagram Embed Placeholder */}
        <div style={{
          aspectRatio: '9/16',
          maxHeight: '520px',
          background: 'linear-gradient(180deg, rgba(0,240,255,0.04), rgba(255,0,110,0.04))',
          border: '1px dashed rgba(0,240,255,0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,240,255,0.015) 10px, rgba(0,240,255,0.015) 20px)',
          }} />
          <div style={{
            width: '64px',
            height: '64px',
            border: '2px solid var(--cyan)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--cyan)',
            fontSize: '24px',
            boxShadow: '0 0 30px rgba(0,240,255,0.15)',
            animation: 'pulse-glow 2s ease-in-out infinite',
            position: 'relative',
            zIndex: 2,
            cursor: 'pointer',
          }}>
            ▶
          </div>
          <div style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '11px',
            color: 'rgba(224,224,224,0.35)',
            letterSpacing: '2px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
            lineHeight: 1.8,
          }}>
            EMBED INSTAGRAM REEL HERE<br/>
            <span style={{ fontSize: '10px', opacity: 0.5 }}>Replace this div with Instagram embed code</span>
          </div>
        </div>

        <p style={{
          marginTop: '24px',
          fontSize: '13px',
          color: 'rgba(224,224,224,0.45)',
          lineHeight: 1.8,
          fontFamily: "'Space Mono', monospace",
          position: 'relative',
          zIndex: 2,
        }}>
          This is the reference. The visual language of the future. We built Simuliverse so anyone can create AI that feels like this — immersive, reactive, alive.
        </p>
      </div>
    </section>
  )
}
