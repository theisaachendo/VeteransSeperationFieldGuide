import { useState } from 'react'
import { Link } from 'react-router-dom'
import { stripeFieldGuidePaymentLink } from '../config/stripe'
import { calendlyMentoringLink, calendlyWorkshopsLink } from '../config/calendly'
import { formspreeNewsletterEndpoint } from '../config/formspree'

const fieldGuideCtaClass =
  'inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 shadow-lg hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors'

export default function Home() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  async function handleNewsletterSubmit(e) {
    e.preventDefault()
    if (!formspreeNewsletterEndpoint) {
      setNewsletterStatus('error')
      return
    }
    setNewsletterStatus('sending')
    try {
      const res = await fetch(formspreeNewsletterEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: newsletterEmail,
          _subject: 'Newsletter signup — Veterans Separation Field Guide',
        }),
      })
      if (res.ok) {
        setNewsletterStatus('success')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <img
          src="/assets/Rangers.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/75" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-28 text-white text-center flex flex-col items-center">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Your Military Career Is Ending.
            <br />
            <span className="text-[var(--color-gold)]">Your Life Mission Isn’t.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-200 max-w-2xl">
            The step-by-step guide to understanding VA benefits, disability claims, education benefits, and life after the military.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {stripeFieldGuidePaymentLink ? (
              <a
                href={stripeFieldGuidePaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className={fieldGuideCtaClass}
              >
                Get the Field Guide ($20)
              </a>
            ) : (
              <Link to="/field-guide" className={fieldGuideCtaClass}>
                Get the Field Guide ($20)
              </Link>
            )}
            {calendlyMentoringLink ? (
              <a
                href={calendlyMentoringLink}
                className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors"
              >
                Book a 1:1 Mentoring Session
              </a>
            ) : (
              <Link
                to="/mentoring"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors"
              >
                Book a 1:1 Mentoring Session
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="min-h-screen flex flex-col justify-center py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="py-4">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
                Who This Is For
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Transitioning service members and veterans who want to make the most of their earned benefits—VA disability, GI Bill, healthcare, and transition planning—without the overwhelm. If you’re leaving the military or already out and still figuring things out, this guide and mentoring are for you.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-2 ring-[var(--color-navy)]/10">
              <img
                src="/assets/salute2.jpg"
                alt="Military service member saluting — for transitioning service members and veterans"
                className="absolute inset-0 w-full h-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ryan's story + image */}
      <section className="min-h-screen flex flex-col justify-center py-20 sm:py-28 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="py-4">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
                Ryan’s Story
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Ryan Buckingham is a retired U.S. Coast Guard Senior Chief with over 20 years of service. After transitioning out, he saw that most service members leave without fully understanding the benefits they earned.
              </p>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed">
                He now focuses on educating veterans on VA benefits, transition planning, and building a strong life after military service—as a Veteran Benefits Educator, Realtor for military families, and creator of the Veterans Separation Field Guide.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center text-lg font-semibold text-[var(--color-navy)] hover:text-[var(--color-navy-light)] after:content-['→'] after:ml-1 transition-colors"
              >
                Learn more about Ryan
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-2 ring-[var(--color-navy)]/10">
              <img
                src="/assets/RyanMilitary.png"
                alt="Ryan Buckingham — U.S. Coast Guard veteran and transition mentor"
                className="absolute inset-0 w-full h-full object-cover object-[center_32%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Field Guide overview */}
      <section className="min-h-screen flex flex-col justify-center py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-block rounded-2xl bg-[var(--color-navy)]/5 border border-[var(--color-navy)]/10 px-8 py-12 sm:px-12 sm:py-16">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
              The Veterans Separation Field Guide
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              One clear, step-by-step resource: VA disability strategy, GI Bill, healthcare enrollment, your 365-day transition timeline, and key resources many veterans miss.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
            {stripeFieldGuidePaymentLink ? (
              <a
                href={stripeFieldGuidePaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2 transition-colors"
              >
                Get the Guide — $20
              </a>
            ) : (
              <Link
                to="/field-guide"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2 transition-colors"
              >
                Get the Guide — $20
              </Link>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring + Workshops with image */}
      <section className="min-h-screen flex flex-col justify-center py-20 sm:py-28 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] order-2 md:order-1 ring-2 ring-[var(--color-navy)]/10">
              <img
                src="/assets/Militarymentor.jpg"
                alt="Veteran transition support"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 py-4">
              <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold text-[var(--color-navy)]">
                1:1 Mentoring & Workshops
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Get personalized guidance in 60-minute mentoring sessions, or join workshops on VA disability claims, GI Bill, healthcare, and transition timelines—all via Google Meet.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {calendlyMentoringLink ? (
                  <a
                    href={calendlyMentoringLink}
                    className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] transition-colors"
                  >
                    Schedule a Session
                  </a>
                ) : (
                  <Link
                    to="/mentoring"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] transition-colors"
                  >
                    Schedule a Session
                  </Link>
                )}
                {calendlyWorkshopsLink ? (
                  <a
                    href={calendlyWorkshopsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                  >
                    Register for a Workshop
                  </a>
                ) : (
                  <Link
                    to="/workshops"
                    className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                  >
                    Register for a Workshop
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="py-16 sm:py-20 bg-[var(--color-navy)] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Stay in the Loop
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300">
            Get updates on workshops, new resources, and veteran transition tips.
          </p>
          {newsletterStatus === 'success' ? (
            <p className="mt-6 rounded-lg bg-white/10 px-4 py-3 text-white">
              You’re on the list. We’ll be in touch.
            </p>
          ) : (
            <form
              className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                name="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email"
                required
                disabled={newsletterStatus === 'sending'}
                className="flex-1 min-w-0 rounded-lg px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] disabled:opacity-60"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'sending' || !formspreeNewsletterEndpoint}
                className="rounded-lg px-6 py-3 font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'sending' ? 'Signing up…' : 'Sign up'}
              </button>
            </form>
          )}
          {newsletterStatus === 'error' && (
            <p className="mt-3 text-sm text-red-300">
              Something went wrong. Try again or use the Contact page.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
