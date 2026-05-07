import { Link } from 'react-router-dom'
import { calendlyMentoringLink } from '../config/calendly'

export default function Results() {
  const wins = [
    'Move from overwhelm to a repeatable weekly routine',
    'Build confidence in decision-making and leadership',
    'Improve consistency in fitness, business, and family commitments',
    'Create clear momentum after a career or identity shift',
  ]

  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Client Results
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Transformations from consistency, ownership, and coaching.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-neutral-600 leading-relaxed">
            The clients who get the best outcomes do not chase shortcuts. They commit to process,
            action, and weekly accountability. This page highlights the type of outcomes coaching is
            built to produce.
          </p>
          <h2 className="mt-10 font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
            What people are achieving
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-600">
            {wins.map((win) => (
              <li key={win} className="flex items-start gap-2">
                <span className="text-[var(--color-gold)] mt-1" aria-hidden>✓</span>
                <span>{win}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-neutral-600">
            Replace this section with direct testimonials, screenshots, and before/after metrics as
            new coaching client stories come in.
          </p>
          {calendlyMentoringLink ? (
            <a
              href={calendlyMentoringLink}
              className="mt-10 inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
            >
              Start Your Transformation
            </a>
          ) : (
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
            >
              Start Your Transformation
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
