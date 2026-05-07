import { useState, useRef, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { discordInviteUrl } from '../config/discord'
import DiscordIcon from './DiscordIcon'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/coaching', label: 'Coaching' },
  { to: '/results', label: 'Results' },
  { href: discordInviteUrl, label: 'Discord', external: true },
  { to: '/contact', label: 'Contact' },
  { to: '/disclaimer', label: 'Disclaimer' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)
  const linksRef = useRef([])

  useLayoutEffect(() => {
    if (!menuRef.current) return
    const links = linksRef.current.filter(Boolean)
    if (open) {
      gsap.set(menuRef.current, { height: 'auto', overflow: 'hidden' })
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.35, ease: 'power3.out' }
      )
      gsap.fromTo(
        links,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.04, delay: 0.08, ease: 'power3.out' }
      )
    } else {
      gsap.to(links, { opacity: 0, y: -8, duration: 0.2, stagger: 0.02, ease: 'power2.in' })
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        delay: 0.12,
        ease: 'power2.in',
        onComplete: () => {
          if (menuRef.current) gsap.set(menuRef.current, { overflow: 'hidden' })
        },
      })
    }
  }, [open])

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-[var(--color-navy)]/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="min-w-0 max-w-[calc(100%-3.5rem)] text-lg font-bold text-white no-underline transition hover:text-[var(--color-gold-light)] break-words"
        >
          Ryan Buckingham Coaching
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl border border-white/40 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] sm:hidden"
        >
          <span className="text-xl" aria-hidden>{open ? '✕' : '☰'}</span>
        </button>
        {/* Desktop nav */}
        <nav className="hidden gap-7 sm:flex sm:items-center">
          {navLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-medium no-underline transition hover:text-[var(--color-gold)] ${location.pathname === item.to ? 'bg-white/10 text-[var(--color-gold)]' : 'text-white/90'}`}
              >
                {item.label === 'Discord' ? (
                  <DiscordIcon className="h-4 w-4 shrink-0 opacity-90" title="" />
                ) : null}
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-link rounded-md px-2 py-1 font-medium no-underline transition hover:text-[var(--color-gold)] ${location.pathname === item.to ? 'bg-white/10 text-[var(--color-gold)]' : 'text-white/90'}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
      {/* Mobile nav (animated panel) */}
      <div
        ref={menuRef}
        className="overflow-hidden border-t border-white/10 sm:hidden"
        style={{ height: 0 }}
      >
        <nav className="flex flex-col gap-2 px-4 pb-4 pt-3">
          {navLinks.map((item, i) =>
            item.external ? (
              <a
                key={item.label}
                ref={(el) => (linksRef.current[i] = el)}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className={`nav-link min-h-[48px] rounded-lg px-4 py-3 font-medium no-underline transition hover:bg-white/10 flex items-center gap-2 ${location.pathname === item.to ? 'text-[var(--color-gold)]' : 'text-white/90 hover:text-white'}`}
              >
                {item.label === 'Discord' ? (
                  <DiscordIcon className="h-5 w-5 shrink-0 opacity-90" title="" />
                ) : null}
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                ref={(el) => (linksRef.current[i] = el)}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`nav-link min-h-[48px] rounded-lg px-4 py-3 font-medium no-underline transition hover:bg-white/10 flex items-center ${location.pathname === item.to ? 'text-[var(--color-gold)]' : 'text-white/90 hover:text-white'}`}
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
