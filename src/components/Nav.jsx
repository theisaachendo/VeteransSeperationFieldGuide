import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/field-guide', label: 'Field Guide' },
  { to: '/mentoring', label: 'Mentoring' },
  { to: '/workshops', label: 'Workshops' },
  { href: 'https://ratemyvso.com', label: 'Rate My VSO', external: true },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <Link to="/" style={logoStyle}>
          Veterans Separation Field Guide
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          style={menuButtonStyle}
        >
          {open ? '✕' : '☰'}
        </button>
        <nav style={{ ...navStyle, ...(open ? navOpenStyle : {}) }}>
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle(location.pathname === item.to)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                style={linkStyle(location.pathname === item.to)}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

const headerStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  backgroundColor: 'var(--color-navy)',
  color: 'var(--color-white)',
  boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
}

const containerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '1rem 1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '1rem',
}

const logoStyle = {
  color: 'var(--color-white)',
  fontWeight: 700,
  fontSize: '1.1rem',
  textDecoration: 'none',
}

const menuButtonStyle = {
  display: 'block',
  padding: '0.5rem',
  background: 'transparent',
  border: '1px solid rgba(255,255,255,0.4)',
  color: 'var(--color-white)',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: '1.25rem',
}

const navStyle = {
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
}

const navOpenStyle = {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: '0.5rem',
}

const linkStyle = (active) => ({
  color: active ? 'var(--color-gold)' : 'var(--color-white)',
  textDecoration: 'none',
  fontWeight: 500,
  opacity: active ? 1 : 0.9,
})
