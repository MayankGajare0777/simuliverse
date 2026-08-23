import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrambleText from './ScrambleText'

gsap.registerPlugin(ScrollTrigger)

const LINES = [
  '[00:00:01] Initializing simulation environment...',
  '[00:00:02] Loading 10,000 synthetic personas...',
  '[00:00:03] Personas loaded: angry_customer_v2.1, confused_elder_v1.4',
  '[00:00:04] Spawning adversarial red-team agents...',
  '[00:00:05] Red team deployed: 50 jailbreak strategies active',
  '[00:00:06] Agent_7B_customer_service: first contact established',
  '[00:00:07] Agent_7B: hallucination detected on query #342',
  '[00:00:08] Agent_7B: policy violation — unauthorized refund promise',
  '[00:00:09] Critic scoring: empathy 3/10, compliance 2/10',
  '[00:00:10] Agent_7B: FAILED — graduation denied',
  '[00:00:11] Patching system prompt... guardrail layer v2 added',
  '[00:00:12] Agent_7B_v2: re-entering simulation',
  '[00:00:15] Agent_7B_v2: 1,000 conversations completed',
  '[00:00:18] Agent_7B_v2: 9,847 conversations completed',
  '[00:00:20] Critic scoring: empathy 9/10, compliance 10/10',
  '[00:00:21] Agent_7B_v2: PASSED — graduation certificate issued',
  '[00:00:22] Exporting weights to production cluster...',
  '[00:00:23] Deployment complete. Zero real-world failures.',
]

export default function Terminal() {
  const sectionRef = useRef(null)
  const termRef = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: termRef.current,
        start: 'top 82%',
        onEnter: () => {
          if (started.current) return
          started.current = true
          let i = 0
          const add = () => {
            if (i >= LINES.length) return
            const div = document.createElement('div')
            div.textContent = LINES[i]
            div.style.color = '#00ff41'
            div.style.opacity = '0'
            div.style.transform = 'translateX(-8px)'
            div.style.transition = 'all 0.3s ease'
            div.style.marginBottom = '4px'
            termRef.current.appendChild(div)
            requestAnimationFrame(() => {
              div.style.opacity = '0.8'
              div.style.transform = 'translateX(0)'
            })
            termRef.current.scrollTop = termRef.current.scrollHeight
            i++
            setTimeout(add, 160 + Math.random() * 280)
          }
          add()
        },
        once: true,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="terminal" ref={sectionRef} style={{
      position: 'relative', zIndex: 10,
      maxWidth: '1200px', margin: '0 auto',
      padding: '100px 24px',
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px', letterSpacing: '4px',
        color: 'var(--cyan)', opacity: 0.50,
        textTransform: 'uppercase', marginBottom: '14px',
      }}>
        03 // LIVE SIMULATION LOG
      </div>
      <h2 style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: 'clamp(26px, 5vw, 52px)',
        fontWeight: 700, letterSpacing: '2px', marginBottom: '32px',
      }}>
        <ScrambleText text="Terminal Output" delay={0} />
      </h2>

      <div style={{
        background: 'rgba(2,2,6,0.60)',
        border: '1px solid rgba(0,229,255,0.10)',
        borderRadius: '3px',
        padding: '28px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px', lineHeight: 2,
        position: 'relative', overflow: 'hidden',
        boxShadow: '0 0 40px rgba(0,229,255,0.03)',
        maxHeight: '420px', overflowY: 'auto',
      }}>
        <div style={{
          color: 'var(--cyan)',
          marginBottom: '16px', paddingBottom: '10px',
          borderBottom: '1px solid rgba(0,229,255,0.10)',
          fontSize: '11px', letterSpacing: '1px',
        }}>
          simuliverse@foundry:~$ ./init_simulation.sh --agents=10000 --mode=adversarial
        </div>
        <div ref={termRef} />
      </div>
    </section>
  )
}
