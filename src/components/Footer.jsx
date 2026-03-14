import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linksStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/field-guide" style={linkStyle}>Field Guide</Link>
          <Link to="/mentoring" style={linkStyle}>Mentoring</Link>
          <Link to="/workshops" style={linkStyle}>Workshops</Link>
          <a href="https://ratemyvso.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Rate My VSO
          </a>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/disclaimer" style={linkStyle}>Disclaimer</Link>
        </div>
        <p style={verifyStyle}>
          Verify accredited representatives:{' '}
          <a
            href="https://www.va.gov/get-help-from-accredited-representative/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            VA.gov
          </a>
        </p>
        <p style={copyStyle}>© {new Date().getFullYear()} Veterans Separation Field Guide</p>
      </div>
    </footer>
  )
}

const footerStyle = {
  marginTop: 'auto',
  backgroundColor: 'var(--color-navy)',
  color: 'var(--color-white)',
  padding: '2rem 1.5rem',
}

const containerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  textAlign: 'center',
}

const linksStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '1rem',
}

const linkStyle = {
  color: 'rgba(255,255,255,0.9)',
  textDecoration: 'none',
}

const verifyStyle = {
  fontSize: '0.9rem',
  margin: '0 0 0.5rem',
  opacity: 0.9,
}

const copyStyle = {
  fontSize: '0.85rem',
  margin: 0,
  opacity: 0.7,
}
