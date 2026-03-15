import { Link } from 'react-router-dom'
import { calendlyWorkshopsLink } from '../config/calendly'

export default function Workshops() {
  const topics = [
    'VA disability claims',
    'GI Bill education benefits',
    'Healthcare enrollment',
    'Transition timelines',
    'Resources many veterans miss',
  ]

  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Veteran Transition Workshops
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Group sessions hosted via Google Meet.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-lg text-neutral-600 leading-relaxed">
            Join workshops focused on the topics that matter most for your transition: understanding VA benefits, filing strategies, education benefits, and the timeline and resources you need to plan ahead.
          </p>
          <h2 className="mt-10 font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
            Topics we cover
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-600">
            {topics.map((topic) => (
              <li key={topic} className="flex items-start gap-2">
                <span className="text-[var(--color-gold)] mt-1" aria-hidden>✓</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
          {calendlyWorkshopsLink ? (
            <a
              href={calendlyWorkshopsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
            >
              Register for a Workshop
            </a>
          ) : (
            <Link
              to="/workshops"
              className="mt-10 inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
            >
              Register for a Workshop
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
