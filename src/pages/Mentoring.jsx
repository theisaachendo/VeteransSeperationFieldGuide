export default function Mentoring() {
  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>1:1 Veteran Transition Mentoring</h1>
      <p>60-minute sessions. VA benefits overview, disability claim strategy, education benefits, transition planning.</p>
      <ul style={{ marginTop: '1rem' }}>
        <li>VA benefits overview</li>
        <li>Disability claim strategy</li>
        <li>Education benefits guidance</li>
        <li>Transition planning</li>
      </ul>
      <a
        href="#"
        style={{
          display: 'inline-block',
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: 'var(--color-gold)',
          color: 'var(--color-black)',
          fontWeight: 600,
          borderRadius: 6,
          textDecoration: 'none',
        }}
      >
        Schedule Your Session
      </a>
    </div>
  )
}
