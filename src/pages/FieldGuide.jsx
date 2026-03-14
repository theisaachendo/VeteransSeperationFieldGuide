export default function FieldGuide() {
  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Field Guide</h1>
      <p>Product description, what veterans will learn, table of contents. $20 — automatic email delivery after purchase.</p>
      <p style={{ marginTop: '1.5rem' }}>
        <strong>Topics:</strong> VA disability claim strategy · GI Bill · Healthcare enrollment · Transition timeline (365 days before separation) · Key veteran resources
      </p>
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
        Get the Field Guide — $20
      </a>
    </div>
  )
}
