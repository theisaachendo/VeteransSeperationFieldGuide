import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex flex-col justify-end overflow-hidden">
        <img
          src="/assets/Rangers.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/75" aria-hidden />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-16 pt-24 sm:pb-20 sm:pt-28 text-white">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Your Military Career Is Ending.
            <br />
            <span className="text-[var(--color-gold)]">Your Life Mission Isn’t.</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-neutral-200 max-w-2xl">
            The step-by-step guide to understanding VA benefits, disability claims, education benefits, and life after the military.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/field-guide"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 shadow-lg hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors"
            >
              Get the Field Guide ($20)
            </Link>
            <Link
              to="/mentoring"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-transparent border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors"
            >
              Book a 1:1 Mentoring Session
            </Link>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
                Who This Is For
              </h2>
              <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
                Transitioning service members and veterans who want to make the most of their earned benefits—VA disability, GI Bill, healthcare, and transition planning—without the overwhelm. If you’re leaving the military or already out and still figuring things out, this guide and mentoring are for you.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
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
      <section className="py-16 sm:py-20 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
                Ryan’s Story
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Ryan Buckingham is a retired U.S. Coast Guard Senior Chief with over 20 years of service. After transitioning out, he saw that most service members leave without fully understanding the benefits they earned.
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                He now focuses on educating veterans on VA benefits, transition planning, and building a strong life after military service—as a Veteran Benefits Educator, Realtor for military families, and creator of the Veterans Separation Field Guide.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center font-semibold text-[var(--color-navy)] hover:text-[var(--color-navy-light)] after:content-['→'] after:ml-1"
              >
                Learn more about Ryan
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
            The Veterans Separation Field Guide
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            One clear, step-by-step resource: VA disability strategy, GI Bill, healthcare enrollment, your 365-day transition timeline, and key resources many veterans miss.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/field-guide"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:ring-offset-2 transition-colors"
            >
              Get the Guide — $20
            </Link>
          </div>
        </div>
      </section>

      {/* Mentoring + Workshops with image */}
      <section className="py-16 sm:py-20 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] order-2 md:order-1">
              <img
                src="/assets/Militarymentor.jpg"
                alt="Veteran transition support"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold text-[var(--color-navy)]">
                1:1 Mentoring & Workshops
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                Get personalized guidance in 60-minute mentoring sessions, or join workshops on VA disability claims, GI Bill, healthcare, and transition timelines—all via Google Meet.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/mentoring"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] transition-colors"
                >
                  Schedule a Session
                </Link>
                <Link
                  to="/workshops"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white transition-colors"
                >
                  Register for a Workshop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="py-16 sm:py-20 bg-[var(--color-navy)] text-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-bold">
            Stay in the Loop
          </h2>
          <p className="mt-3 text-neutral-300">
            Get updates on workshops, new resources, and veteran transition tips.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 min-w-0 rounded-lg px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded-lg px-6 py-3 font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-navy)] transition-colors"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
