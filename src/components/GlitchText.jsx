import { useRef, useEffect } from 'react'

export default function GlitchText({ text, as: Tag = 'div', className = '', style = {} }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const glitch = () => {
      el.classList.add('glitch-active')
      setTimeout(() => el.classList.remove('glitch-active'), 250)
    }

    const interval = setInterval(() => {
      if (Math.random() > 0.6) glitch()
    }, 3000 + Math.random() * 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Tag
      ref={ref}
      className={`glitch-text ${className}`}
      style={style}
      data-text={text}
    >
      {text}
      <style>{`
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          width: 100%; height: 100%;
          opacity: 0;
        }
        .glitch-text::before {
          color: var(--magenta);
          z-index: -1;
        }
        .glitch-text::after {
          color: var(--cyan);
          z-index: -2;
        }
        .glitch-active::before {
          animation: glitch1 0.25s cubic-bezier(0.25,0.46,0.45,0.94) both;
        }
        .glitch-active::after {
          animation: glitch2 0.25s cubic-bezier(0.25,0.46,0.45,0.94) both;
        }
        @keyframes glitch1 {
          0% { opacity: 0.8; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(-3px, 2px); }
          40% { opacity: 0.8; transform: translate(-3px, -2px); }
          60% { opacity: 0.8; transform: translate(3px, 2px); }
          80% { opacity: 0.8; transform: translate(3px, -2px); }
          100% { opacity: 0; transform: translate(0); }
        }
        @keyframes glitch2 {
          0% { opacity: 0.8; transform: translate(0); }
          20% { opacity: 0.8; transform: translate(3px, -2px); }
          40% { opacity: 0.8; transform: translate(3px, 2px); }
          60% { opacity: 0.8; transform: translate(-3px, -2px); }
          80% { opacity: 0.8; transform: translate(-3px, 2px); }
          100% { opacity: 0; transform: translate(0); }
        }
      `}</style>
    </Tag>
  )
}
