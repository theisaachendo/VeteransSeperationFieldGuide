export default function Workshops() {
  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Workshops</h1>
      <p>Veteran transition workshops hosted via Google Meet.</p>
      <p><strong>Topics:</strong> VA disability claims · GI Bill · Healthcare enrollment · Transition timelines · Resources many veterans miss</p>
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
        Register for a Workshop
      </a>
    </div>
  )
}
