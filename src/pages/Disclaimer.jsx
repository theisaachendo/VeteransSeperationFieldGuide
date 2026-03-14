export default function Disclaimer() {
  return (
    <div style={{ padding: '2rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>Disclaimer</h1>
      <p style={{ lineHeight: 1.7 }}>
        The information provided on this website is for educational purposes only. Ryan Buckingham is not an accredited VSO, claims agent, or attorney and does not prepare, file, or charge for VA disability claims. Veterans seeking assistance with filing claims should work with accredited representatives through VA.gov or recognized veteran service organizations.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <a href="https://www.va.gov/get-help-from-accredited-representative/" target="_blank" rel="noopener noreferrer">
          Find accredited representatives at VA.gov →
        </a>
      </p>
    </div>
  )
}
