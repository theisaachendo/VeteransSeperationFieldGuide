import { useState } from 'react'
import { Link } from 'react-router-dom'
import { stripeMonthlySubscriptionLink, stripeFieldGuidePaymentLink } from '../config/stripe'
import { calendlyMentoringLink } from '../config/calendly'
import { formspreeNewsletterEndpoint } from '../config/formspree'
import { membershipIncludes } from '../config/membershipIncludes'
import { discordInviteUrl, discordMemberQuote } from '../config/discord'
import DiscordIcon from '../components/DiscordIcon'

const primaryCtaClass =
  'inline-flex items-center justify-center min-h-[48px] rounded-xl px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 shadow-[0_10px_24px_rgba(0,0,0,0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-all duration-200'

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
          _subject: 'Newsletter signup — Ryan Buckingham Coaching',
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
    <div className="min-h-screen overflow-x-hidden">
      <section className="bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-navy)] to-[var(--color-navy-light)] text-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold-light)]">
            Ryan Buckingham Coaching
          </p>
          <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Build the life you know you are capable of.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-200 sm:text-xl">
            This is high-accountability coaching for men who are ready to level up mindset,
            health, finances, and direction. No fluff. Real structure and weekly execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
            {calendlyMentoringLink ? (
              <a href={calendlyMentoringLink} className={primaryCtaClass}>
                Book a Discovery Call
              </a>
            ) : (
              <Link to="/coaching" className={primaryCtaClass}>
                Book a Discovery Call
              </Link>
            )}
            {stripeMonthlySubscriptionLink ? (
              <a
                href={stripeMonthlySubscriptionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] rounded-xl border-2 border-white/80 px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Join — $40/month
              </a>
            ) : stripeFieldGuidePaymentLink ? (
              <a
                href={stripeFieldGuidePaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] rounded-xl border-2 border-white/80 px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Join — $40/month
              </a>
            ) : (
              <Link
                to="/coaching"
                className="inline-flex items-center justify-center min-h-[48px] rounded-xl border-2 border-white/80 px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10"
              >
                See membership details
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-gradient-to-b from-neutral-50 to-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 rounded-2xl border border-[var(--color-navy)]/15 bg-white p-8 shadow-[0_12px_35px_rgba(10,26,48,0.08)] md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-navy-light)]">
                Monthly membership
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-serif)] text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
                $40/month — stay accountable every week
              </h2>
              <ul className="mt-5 space-y-2 text-neutral-600">
                {membershipIncludes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--color-gold)] shrink-0" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex gap-4 rounded-xl border border-[#5865F2]/35 bg-gradient-to-br from-[#5865F2]/[0.07] to-transparent p-4 text-left transition-colors hover:border-[#5865F2]/55 hover:from-[#5865F2]/10"
              >
                <DiscordIcon className="h-10 w-10 shrink-0 text-[#5865F2]" title="" />
                <p className="text-sm leading-relaxed text-neutral-700">
                  <span className="sr-only">Discord — </span>
                  {discordMemberQuote}
                </p>
              </a>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              {stripeMonthlySubscriptionLink ? (
                <a
                  href={stripeMonthlySubscriptionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryCtaClass}
                >
                  Subscribe — $40/month
                </a>
              ) : stripeFieldGuidePaymentLink ? (
                <a
                  href={stripeFieldGuidePaymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryCtaClass}
                >
                  Subscribe — $40/month
                </a>
              ) : (
                <Link to="/coaching" className={primaryCtaClass}>
                  Subscribe — $40/month
                </Link>
              )}
              <Link
                to="/coaching"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[var(--color-navy)] px-6 py-3.5 text-center text-base font-semibold text-[var(--color-navy)] transition-all duration-200 hover:bg-[var(--color-navy)] hover:text-white"
              >
                Full details
              </Link>
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-navy)]/30 px-6 py-3.5 text-center text-base font-semibold text-[var(--color-navy)] transition-all duration-200 hover:border-[var(--color-navy)] hover:bg-[var(--color-navy)]/5 md:w-auto"
              >
                <DiscordIcon className="h-5 w-5 text-[#5865F2]" title="" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            What We Focus On
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              'Identity and confidence after hard life transitions',
              'Weekly accountability for habits and execution',
              'Performance coaching for career, business, and family leadership',
              'Practical frameworks for clarity, momentum, and purpose',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-neutral-50 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                <p className="font-medium text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-neutral-100 to-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
              Meet Ryan Buckingham
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Ryan coaches from lived experience. He helps clients rebuild confidence, create
              discipline, and take action in the areas that matter most.
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              If you want a coach who will challenge you, keep you accountable, and help you
              execute at a higher level every week, this is for you.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-navy-light)]"
            >
              Read Ryan&apos;s story →
            </Link>
          </div>
          <div className="rounded-2xl border border-[var(--color-navy)]/10 bg-white p-8 shadow-[0_12px_35px_rgba(10,26,48,0.12)]">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-navy-light)]">
              Client Promise
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-serif)] text-2xl font-bold text-[var(--color-navy)]">
              Clear plan. Real accountability. Tangible progress.
            </h3>
            <p className="mt-4 text-neutral-600">
              Membership includes weekly accountability, a living action plan, and community support
              so you leave each week knowing exactly what to execute.
            </p>
            <Link
              to="/coaching"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--color-navy)] px-5 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-navy-light)]"
            >
              See coaching structure
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            Social Proof
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            These are placeholders for real client stories and screenshots from coaching wins.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              '“Ryan helped me stop overthinking and start executing weekly.”',
              '“I walked in stuck and left with a clear path for the next 90 days.”',
              '“The accountability alone changed my routine and confidence.”',
            ].map((quote) => (
              <article key={quote} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-neutral-700">{quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-neutral-100 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold text-[var(--color-navy)] sm:text-4xl">
            Ready to Start?
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Book a discovery call and we will map the best coaching path for your goals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            {calendlyMentoringLink ? (
              <a href={calendlyMentoringLink} className={primaryCtaClass}>
                Book Discovery Call
              </a>
            ) : (
              <Link to="/contact" className={primaryCtaClass}>
                Book Discovery Call
              </Link>
            )}
            {(stripeMonthlySubscriptionLink || stripeFieldGuidePaymentLink) && (
              <a
                href={stripeMonthlySubscriptionLink || stripeFieldGuidePaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[var(--color-navy)] bg-white px-6 py-3.5 font-semibold text-[var(--color-navy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-50"
              >
                Subscribe — $40/month
              </a>
            )}
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[var(--color-navy)] px-6 py-3.5 font-semibold text-[var(--color-navy)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-navy)] hover:text-white"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)] py-16 text-white sm:py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Weekly Coaching Insights
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300">
            Get mindset and execution tips sent directly to your inbox.
          </p>
          {newsletterStatus === 'success' ? (
            <p className="mt-6 rounded-lg bg-white/10 px-4 py-3 text-white">
              You are in. Watch your inbox for the next coaching insight.
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
                className="flex-1 min-w-0 min-h-[48px] rounded-lg px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] disabled:opacity-60"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'sending' || !formspreeNewsletterEndpoint}
                className="min-h-[48px] rounded-lg px-6 py-3 font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'sending' ? 'Signing up...' : 'Join the list'}
              </button>
            </form>
          )}
          {newsletterStatus === 'error' && (
            <p className="mt-3 text-sm text-red-300">
              Something went wrong. Try again or use the Contact page.
            </p>
          )}
          {import.meta.env.DEV && !formspreeNewsletterEndpoint && (
            <p className="mt-5 text-sm text-amber-200/90">
              Dev: add{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">VITE_FORMSPREE_NEWSLETTER_ID</code> to{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">.env</code> (Formspree form ID) and restart the dev server.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
