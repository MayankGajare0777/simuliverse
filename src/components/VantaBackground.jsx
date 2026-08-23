import { useRef, useEffect } from 'react'

export default function VantaBackground() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const init = async () => {
      const THREE = await import('three')
      const VANTA = await import('vanta/dist/vanta.net.min')

      vantaEffect.current = VANTA.default({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x00f0ff,
        backgroundColor: 0x020204,
        points: 12.00,
        maxDistance: 25.00,
        spacing: 18.00,
        showDots: true,
      })
    }

    init()
    cleanup = () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }

    return () => cleanup()
  }, [])

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
    />
  )
}
