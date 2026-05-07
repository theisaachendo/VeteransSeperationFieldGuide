import { Link } from 'react-router-dom'
import bayAreaSoftwareLogo from '../../assets/Bay Area Software-2/icononly_transparent_nobuffer.png'
import { discordInviteUrl } from '../config/discord'
import DiscordIcon from './DiscordIcon'

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={linksStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/coaching" style={linkStyle}>Coaching</Link>
          <Link to="/results" style={linkStyle}>Results</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/disclaimer" style={linkStyle}>Disclaimer</Link>
          <a
            href={discordInviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkStyle, gap: '0.35rem' }}
          >
            <DiscordIcon className="h-[1.05rem] w-[1.05rem] shrink-0" title="" />
            Discord
          </a>
        </div>
        <p style={verifyStyle}>Helping you build momentum, discipline, and purpose.</p>
        <p style={copyStyle}>© {new Date().getFullYear()} Ryan Buckingham Coaching</p>
        <a
          href="https://bayareasoftware.com"
          target="_blank"
          rel="noopener noreferrer"
          style={builtByStyle}
          aria-label="Website built by Bay Area Software"
        >
          <span style={builtByLabelStyle}>Website built by</span>
          <img
            src={bayAreaSoftwareLogo}
            alt="Bay Area Software"
            style={builtByLogoStyle}
          />
        </a>
      </div>
    </footer>
  )
}

const footerStyle = {
  marginTop: 'auto',
  background: 'linear-gradient(145deg, var(--color-navy) 0%, var(--color-navy-light) 100%)',
  color: 'var(--color-white)',
  padding: '2rem 1rem 2.25rem',
  borderTop: '1px solid rgba(255,255,255,0.1)',
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
  gap: '0.65rem 1rem',
  marginBottom: '1.25rem',
}

const linkStyle = {
  color: 'rgba(255,255,255,0.9)',
  textDecoration: 'none',
  padding: '0.5rem 0.6rem',
  minHeight: 44,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  transition: 'background-color 0.2s, color 0.2s',
}

const verifyStyle = {
  fontSize: '0.95rem',
  margin: '0 0 0.5rem',
  opacity: 0.92,
}

const copyStyle = {
  fontSize: '0.85rem',
  margin: 0,
  opacity: 0.7,
}

const builtByStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginTop: '1rem',
  paddingTop: '1rem',
  borderTop: '1px solid rgba(255,255,255,0.15)',
  color: 'rgba(255,255,255,0.6)',
  textDecoration: 'none',
  fontSize: '0.75rem',
  transition: 'color 0.2s, opacity 0.2s',
}

const builtByLabelStyle = {
  opacity: 0.9,
}

const builtByLogoStyle = {
  height: 22,
  width: 'auto',
  display: 'block',
  opacity: 0.85,
}
