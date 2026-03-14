export default function Home() {
  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '0.5rem' }}>
        Your Military Career Is Ending. Your Life Mission Isn’t.
      </h1>
      <p style={{ fontSize: '1.15rem', color: '#444', marginBottom: '2rem' }}>
        The step-by-step guide to understanding VA benefits, disability claims, education benefits, and life after the military.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
        <a
          href="#"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--color-gold)',
            color: 'var(--color-black)',
            fontWeight: 600,
            borderRadius: 6,
            textDecoration: 'none',
          }}
        >
          Get the Field Guide ($20)
        </a>
        <a
          href="#"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            border: '2px solid var(--color-navy)',
            color: 'var(--color-navy)',
            fontWeight: 600,
            borderRadius: 6,
            textDecoration: 'none',
          }}
        >
          Book a 1:1 Mentoring Session
        </a>
      </div>
      <p>Sections to come: Who this is for · Ryan’s story · Field Guide overview · Mentoring · Workshops · Email signup</p>
    </div>
  )
}
