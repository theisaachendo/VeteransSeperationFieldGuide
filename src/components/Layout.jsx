import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import { ryanBrokerageLandingUrl } from '../config/brokerage'

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <div
        className="border-b border-[var(--color-gold)]/25 bg-[var(--color-navy)] px-4 py-2.5 text-center text-sm text-white/95 sm:px-6"
        role="region"
        aria-label="Real estate"
      >
        <p className="mx-auto max-w-4xl leading-relaxed">
          Looking for a Veteran Hampton Roads Realtor?{' '}
          <a
            href={ryanBrokerageLandingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--color-gold-light)] underline decoration-[var(--color-gold)]/70 underline-offset-2 transition hover:text-[var(--color-gold)]"
          >
            Click here
          </a>
        </p>
      </div>
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
