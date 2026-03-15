import { Link } from 'react-router-dom'
import { stripeFieldGuidePaymentLink } from '../config/stripe'

export default function FieldGuide() {
  const topics = [
    'VA disability claim strategy',
    'GI Bill education benefits',
    'Healthcare enrollment',
    'Transition timeline (365 days before separation)',
    'Key veteran resources',
  ]

  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            The Veterans Separation Field Guide
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            One clear resource. Automatic email delivery after purchase.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-neutral-600 leading-relaxed">
            The Field Guide walks you through what you need to know before and after separation: how to approach VA disability claims, use your GI Bill, enroll in healthcare, and plan your transition so you don’t miss critical benefits.
          </p>
          <h2 className="mt-10 font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
            What you’ll learn
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-600">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2">
                <span className="text-[var(--color-gold)] mt-1" aria-hidden>✓</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 p-6 rounded-xl bg-neutral-100 border border-neutral-200">
            <p className="text-neutral-600">
              <strong className="text-neutral-900">$20</strong> — one-time. You’ll receive the PDF by email right after checkout.
            </p>
          </div>
          {stripeFieldGuidePaymentLink ? (
            <a
              href={stripeFieldGuidePaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
            >
              Get the Field Guide — $20
            </a>
          ) : (
            <Link
              to="/field-guide"
              className="mt-8 inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
            >
              Get the Field Guide — $20
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
