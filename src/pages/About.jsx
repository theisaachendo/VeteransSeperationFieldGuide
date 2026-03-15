import { Link } from 'react-router-dom'
import { calendlyMentoringLink } from '../config/calendly'

export default function About() {
  const roles = [
    'Veteran Benefits Educator',
    'Realtor helping military families',
    'Creator of the Veterans Separation Field Guide',
  ]

  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            About Ryan
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Veteran · Realtor · Notary · VA Benefits Educator
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] max-h-[480px] md:max-h-none">
              <img
                src="/assets/RyanRealestate.png"
                alt="Ryan Buckingham — Realtor and VA benefits educator"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="prose prose-lg max-w-none text-neutral-600">
                <p className="leading-relaxed">
                  Ryan Buckingham is a retired U.S. Coast Guard Senior Chief with over 20 years of service.
                </p>
                <p className="mt-4 leading-relaxed">
                  After transitioning out of the military, he realized that although many resources exist for veterans, most service members leave the military without fully understanding the benefits they earned.
                </p>
                <p className="mt-4 leading-relaxed">
                  Ryan now focuses on educating veterans on VA benefits, transition planning, and building a strong life after military service.
                </p>
              </div>
              <h2 className="mt-10 font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
                What he does today
              </h2>
              <ul className="mt-3 space-y-2 text-neutral-600">
                {roles.map((role) => (
                  <li key={role} className="flex items-start gap-2">
                    <span className="text-[var(--color-gold)] mt-1" aria-hidden>✓</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2 transition-colors"
                >
                  Get in Touch
                </Link>
                {calendlyMentoringLink ? (
                  <a
                    href={calendlyMentoringLink}
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                  >
                    Book a Mentoring Session
                  </a>
                ) : (
                  <Link
                    to="/mentoring"
                    className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                  >
                    Book a Mentoring Session
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
