import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from './ScrambleText'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { target: 10000, label: 'Synthetic Personas', suffix: '+' },
  { target: 1000000, label: 'Adversarial Tests', suffix: '+' },
  { target: 99.7, label: 'Failure Detection %', suffix: '%', decimal: 1 },
  { target: 80, label: '% Cost Reduction', suffix: '%' },
]

function ScrambleNumber({ target, decimal, suffix }) {
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || triggered.current) return

    const chars = '0123456789'
    const dur = 2200
    let raf

    const trig = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        const start = performance.now()
        const tStr = decimal ? target.toFixed(1) : target.toLocaleString()

        const update = (now) => {
          const p = Math.min((now - start) / dur, 1)
          let disp = ''
          for (let i = 0; i < tStr.length; i++) {
            if (tStr[i] === '.' || tStr[i] === ',') {
              disp += tStr[i]
            } else if (Math.random() > p) {
              disp += chars[Math.floor(Math.random() * chars.length)]
            } else {
              disp += tStr[i]
            }
          }
          el.textContent = disp + suffix
          if (p < 1) raf = requestAnimationFrame(update)
          else el.textContent = (decimal ? target.toFixed(1) : target.toLocaleString()) + suffix
        }
        raf = requestAnimationFrame(update)
      },
      once: true,
    })

    return () => {
      trig.kill()
      cancelAnimationFrame(raf)
    }
  }, [target, decimal, suffix])

  return <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>0{suffix}</span>
}

export default function Stats() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.stat-item').forEach((stat, i) => {
        gsap.from(stat, {
          scrollTrigger: { trigger: stat, start: 'top 90%' },
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="metrics"
      ref={sectionRef}
      style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 24px',
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
        04 // METRICS
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(26px, 5vw, 52px)',
        fontWeight: 700,
        letterSpacing: '2px',
        marginBottom: '20px',
      }}>
        <ScrambleText text="By The Numbers" delay={0} />
      </h2>
      <p style={{
        fontSize: '15px',
        lineHeight: 1.8,
        color: 'rgba(224,224,224,0.55)',
        maxWidth: '640px',
        marginBottom: '60px',
      }}>
        Our simulation engine has tested, broken, and graduated AI agents at a scale no manual QA team can match.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '28px',
      }}>
        {STATS.map((s) => (
          <div
            key={s.label}
            className="stat-item"
            style={{
              textAlign: 'center',
              padding: '40px 20px',
              border: '1px solid rgba(0,240,255,0.06)',
              background: 'rgba(0,240,255,0.01)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
              opacity: 0.5,
            }} />
            <div style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900,
              color: 'var(--cyan)',
              textShadow: '0 0 20px rgba(0,240,255,0.35)',
              letterSpacing: '2px',
            }}>
              <ScrambleNumber target={s.target} decimal={s.decimal} suffix={s.suffix} />
            </div>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              letterSpacing: '2px',
              color: 'rgba(224,224,224,0.4)',
              marginTop: '10px',
              textTransform: 'uppercase',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
