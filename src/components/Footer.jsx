export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '70px 24px',
      fontFamily: "'Space Mono', monospace",
      fontSize: '10px',
      color: 'rgba(224,224,224,0.2)',
      letterSpacing: '3px',
      borderTop: '1px solid rgba(0,240,255,0.06)',
    }}>
      <div style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '14px',
        letterSpacing: '6px',
        color: 'rgba(0,240,255,0.15)',
        marginBottom: '16px',
      }}>
        SIMULIVERSE
      </div>
      © 2026 SIMULIVERSE. BUILT IN THE SIMULATION.
    </footer>
  )
}
