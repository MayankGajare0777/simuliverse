import { useRef, useEffect } from 'react'

const CHARS = '!<>-_\/[]{}—=+*^?#________'

export default function ScrambleText({ text, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const final = text
    let frame = 0
    const totalFrames = 40
    let raf

    const update = () => {
      let output = ''
      const progress = frame / totalFrames
      for (let i = 0; i < final.length; i++) {
        if (final[i] === ' ') {
          output += ' '
        } else if (i / final.length < progress) {
          output += final[i]
        } else {
          output += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      el.textContent = output
      frame++
      if (frame <= totalFrames) {
        raf = requestAnimationFrame(update)
      } else {
        el.textContent = final
      }
    }

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(update)
    }, delay)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [text, delay])

  return <span ref={ref} className={className}>{text}</span>
}
