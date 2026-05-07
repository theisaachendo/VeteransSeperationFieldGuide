import { Link } from 'react-router-dom'
import { calendlyMentoringLink } from '../config/calendly'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            About Ryan
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Coach. Mentor. Accountability partner.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] max-h-[480px] md:max-h-none">
              <img
                src="/assets/RyanRealestate.png"
                alt="Ryan Buckingham coaching portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="prose prose-lg max-w-none text-neutral-600">
                <p className="leading-relaxed">
                  Ryan Buckingham is a life coach focused on helping men rebuild confidence,
                  discipline, and direction after difficult transitions.
                </p>
                <p className="mt-4 leading-relaxed">
                  His coaching is rooted in lived experience. Ryan has rebuilt through personal
                  and professional adversity, and now guides clients through the same process with
                  structure and accountability.
                </p>
                <p className="mt-4 leading-relaxed">
                  He believes growth requires ownership, clear standards, and weekly execution,
                  not motivation spikes.
                </p>
                <p className="mt-4 leading-relaxed">
                  Coaching with Ryan combines honest conversations, practical strategy, and
                  measurable action so clients can create momentum in real life.
                </p>
                <p className="mt-4 leading-relaxed">
                  Areas commonly covered include mindset, routines, confidence, relationships,
                  leadership, health habits, and business or career direction.
                </p>
                <p className="mt-4 leading-relaxed">
                  If you are ready to stop drifting and start executing with intent, Ryan can help
                  you build a clear path and follow through on it.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3 text-base font-semibold bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2 transition-colors"
                >
                  Get in Touch
                </Link>
                {calendlyMentoringLink ? (
                  <a
                    href={calendlyMentoringLink}
                    className="inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3 text-base font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                  >
                    Book a Discovery Call
                  </a>
                ) : (
                  <Link
                    to="/coaching"
                    className="inline-flex items-center justify-center min-h-[48px] rounded-lg px-6 py-3 text-base font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                  >
                    Book a Discovery Call
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
