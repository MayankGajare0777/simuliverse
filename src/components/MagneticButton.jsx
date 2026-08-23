import { useRef } from 'react'

export default function MagneticButton({ children, onClick, className = '' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0,0)'
  }

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '20px 52px',
        fontFamily: "'Space Mono', monospace",
        fontSize: '12px',
        letterSpacing: '3px',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: 'var(--void)',
        background: 'var(--cyan)',
        border: 'none',
        cursor: 'pointer',
        overflow: 'hidden',
        boxShadow: '0 0 30px rgba(0,240,255,0.35), inset 0 0 20px rgba(255,255,255,0.15)',
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        willChange: 'transform',
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          top: 0, left: '-100%',
          width: '100%', height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          transition: 'left 0.5s ease',
        }}
        className="magnetic-shine"
      />
      <style>{`
        .magnetic-btn:hover { box-shadow: 0 0 50px rgba(0,240,255,0.55), inset 0 0 30px rgba(255,255,255,0.25); }
        .magnetic-btn:hover .magnetic-shine { left: 100% !important; }
      `}</style>
    </button>
  )
}
