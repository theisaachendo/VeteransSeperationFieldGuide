import { Link } from 'react-router-dom'
import { stripeMonthlySubscriptionLink, stripeFieldGuidePaymentLink } from '../config/stripe'
import { calendlyMentoringLink } from '../config/calendly'
import { membershipIncludes } from '../config/membershipIncludes'
import { discordInviteUrl, discordMemberQuote } from '../config/discord'
import DiscordIcon from '../components/DiscordIcon'

export default function Coaching() {
  const checkoutHref = stripeMonthlySubscriptionLink || stripeFieldGuidePaymentLink

  return (
    <div className="min-h-screen">
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Coaching & membership
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Start with a discovery call. Stay consistent with the monthly membership.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border-2 border-[var(--color-gold)]/40 bg-gradient-to-b from-[var(--color-navy)]/5 to-white p-8 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-navy-light)]">
              Featured
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-serif)] text-2xl font-bold text-[var(--color-navy)] sm:text-3xl">
              Monthly membership — $40/month
            </h2>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              Ryan Buckingham Coaching is built for people who want structure, not slogans. The
              membership keeps you in motion with weekly touchpoints, a clear plan, and a community
              so you are not doing this alone.
            </p>
            <h3 className="mt-8 font-[family-name:var(--font-serif)] text-lg font-bold text-[var(--color-navy)]">
              What&apos;s included
            </h3>
            <ul className="mt-3 space-y-2 text-neutral-600">
              {membershipIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-1" aria-hidden>
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
              className="mt-6 flex gap-4 rounded-xl border border-[#5865F2]/35 bg-gradient-to-br from-[#5865F2]/[0.07] to-transparent p-5 text-left transition-colors hover:border-[#5865F2]/55 hover:from-[#5865F2]/10"
            >
              <DiscordIcon className="h-11 w-11 shrink-0 text-[#5865F2]" title="" />
              <div>
                <p className="font-semibold text-[var(--color-navy)]">Rise with Ryan on Discord</p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{discordMemberQuote}</p>
              </div>
            </a>
            <p className="mt-4 rounded-xl bg-neutral-100 p-4 text-sm text-neutral-600">
              Billing is handled securely through Stripe. Ryan may share accountability details after
              signup.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              {checkoutHref ? (
                <a
                  href={checkoutHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--color-gold)] px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-md transition-colors hover:bg-[var(--color-gold-light)]"
                >
                  Subscribe — $40/month
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[var(--color-gold)] px-6 py-3.5 text-base font-semibold text-neutral-900 shadow-md transition-colors hover:bg-[var(--color-gold-light)]"
                >
                  Subscribe — $40/month
                </Link>
              )}
              {calendlyMentoringLink ? (
                <a
                  href={calendlyMentoringLink}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[var(--color-navy)] px-6 py-3.5 text-base font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-navy)] hover:text-white"
                >
                  Book discovery call first
                </a>
              ) : (
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-[var(--color-navy)] px-6 py-3.5 text-base font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-navy)] hover:text-white"
                >
                  Book discovery call first
                </Link>
              )}
              <a
                href={discordInviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border-2 border-[var(--color-navy)]/35 px-6 py-3.5 text-base font-semibold text-[var(--color-navy)] transition-colors hover:bg-[var(--color-navy)]/5"
              >
                <DiscordIcon className="h-5 w-5 text-[#5865F2]" title="" />
                Join Discord — Rise with Ryan
              </a>
            </div>
          </div>

          {!checkoutHref && (
            <p className="mt-8 text-neutral-600">
              Add{' '}
              <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
                VITE_STRIPE_MONTHLY_SUBSCRIPTION_LINK
              </code>{' '}
              to your <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">.env</code> with
              your Stripe Payment Link for the $40/month subscription so the buttons above go live.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
