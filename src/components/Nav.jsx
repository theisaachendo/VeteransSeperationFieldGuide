import { useState, useRef, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import ComingSoonModal from './ComingSoonModal'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/field-guide', label: 'Field Guide' },
  { to: '/mentoring', label: 'Mentoring' },
  { to: '/workshops', label: 'Workshops' },
  { href: 'https://ratemyvso.com', label: 'Rate My VSO', external: true, comingSoon: true },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)
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
    <header className="sticky top-0 z-[100] bg-[var(--color-navy)] text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="min-w-0 max-w-[calc(100%-3.5rem)] text-lg font-bold text-white no-underline transition opacity hover:opacity-90 break-words"
        >
          Veterans Separation Field Guide
        </Link>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex min-h-[48px] min-w-[48px] items-center justify-center rounded-lg border border-white/40 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] sm:hidden"
        >
          <span className="text-xl" aria-hidden>{open ? '✕' : '☰'}</span>
        </button>
        {/* Desktop nav */}
        <nav className="hidden gap-8 sm:flex sm:items-center">
          {navLinks.map((item) =>
            item.comingSoon ? (
              <button
                key={item.label}
                type="button"
                onClick={() => setShowComingSoon(true)}
                className="nav-link border-none bg-transparent p-0 font-medium text-white/90 transition hover:text-[var(--color-gold)]"
              >
                {item.label}
              </button>
            ) : item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link font-medium no-underline transition hover:text-[var(--color-gold)] ${location.pathname === item.to ? 'text-[var(--color-gold)]' : 'text-white/90'}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`nav-link font-medium no-underline transition hover:text-[var(--color-gold)] ${location.pathname === item.to ? 'text-[var(--color-gold)]' : 'text-white/90'}`}
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
            item.comingSoon ? (
              <button
                key={item.label}
                type="button"
                ref={(el) => (linksRef.current[i] = el)}
                onClick={() => {
                  setShowComingSoon(true)
                  setOpen(false)
                }}
                className="nav-link min-h-[48px] rounded-lg px-4 py-3 text-left font-medium text-white/90 transition hover:bg-white/10 hover:text-white flex items-center"
              >
                {item.label}
              </button>
            ) : item.external ? (
              <a
                key={item.label}
                ref={(el) => (linksRef.current[i] = el)}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link min-h-[48px] rounded-lg px-4 py-3 font-medium no-underline transition hover:bg-white/10 flex items-center ${location.pathname === item.to ? 'text-[var(--color-gold)]' : 'text-white/90 hover:text-white'}`}
              >
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
      <ComingSoonModal isOpen={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </header>
  )
}
