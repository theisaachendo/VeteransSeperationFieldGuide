export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="bg-[var(--color-navy)] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl font-bold">
            Contact
          </h1>
          <p className="mt-3 text-lg text-neutral-300">
            Reach out for questions about the Field Guide, mentoring, or workshops.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 shadow-sm">
            <p className="text-xl font-semibold text-[var(--color-navy)]">Ryan Buckingham</p>
            <p className="mt-1 text-sm text-neutral-500">Veteran | Realtor | Notary | VA Benefits Educator</p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:Ryan@veteranseparationfieldguide.com"
                className="block text-neutral-700 hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                Ryan@veteranseparationfieldguide.com
              </a>
              <a
                href="tel:757-355-3222"
                className="block text-neutral-700 hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                757-355-3222
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
              Send a message
            </h2>
            <form className="mt-4 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent resize-y"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
