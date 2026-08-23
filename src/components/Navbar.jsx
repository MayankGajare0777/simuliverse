import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    gsap.from(nav, { y: -80, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })

    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        background: scrolled ? 'rgba(2,2,4,0.7)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,240,255,0.08)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '18px',
        fontWeight: 700,
        letterSpacing: '4px',
        color: 'var(--cyan)',
        textShadow: '0 0 12px rgba(0,240,255,0.4)',
      }}>
        SIMULIVERSE
      </div>
      <div className="hide-mobile" style={{
        display: 'flex',
        gap: '32px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '11px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
      }}>
        {['Foundry', 'Terminal', 'Metrics'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: 'rgba(224,224,224,0.55)',
              textDecoration: 'none',
              transition: 'color 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--cyan)'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(224,224,224,0.55)'}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  )
}
