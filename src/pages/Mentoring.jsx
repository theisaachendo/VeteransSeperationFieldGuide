import { Link } from 'react-router-dom'

export default function Mentoring() {
  const includes = [
    'VA benefits overview',
    'Disability claim strategy',
    'Education benefits guidance',
    'Transition planning',
  ]

  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            1:1 Veteran Transition Mentoring
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            60-minute sessions. Personalized guidance for your transition.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-neutral-600 leading-relaxed">
            Book a one-on-one session with Ryan to go over your situation: VA benefits, disability claims, education benefits, and a transition plan that fits your timeline.
          </p>
          <h2 className="mt-10 font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
            Each session includes
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-600">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--color-gold)] mt-1" aria-hidden>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 p-6 rounded-xl bg-neutral-100 border border-neutral-200">
            <p className="text-neutral-600">
              Sessions are held via <strong className="text-neutral-900">Google Meet</strong>. After you book, you’ll get a confirmation and meeting link. Payment is handled through the booking flow.
            </p>
          </div>
          <Link
            to="#"
            className="mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
          >
            Schedule Your Session
          </Link>
        </div>
      </section>
    </div>
  )
}
