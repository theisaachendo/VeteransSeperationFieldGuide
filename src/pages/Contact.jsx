import { useState } from 'react'
import { formspreeContactEndpoint } from '../config/formspree'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formspreeContactEndpoint) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(formspreeContactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email, // so Ryan can "Reply" to the submitter
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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

      <section className="py-12 sm:py-16 bg-white overflow-x-hidden">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 shadow-sm">
            <p className="text-xl font-semibold text-[var(--color-navy)]">Ryan Buckingham</p>
            <p className="mt-1 text-sm text-neutral-500">Veteran | Realtor | Notary | VA Benefits Educator</p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:Ryan@veteranseparationfieldguide.com"
                className="block min-h-[44px] py-2 text-base text-neutral-700 hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                Ryan@veteranseparationfieldguide.com
              </a>
              <a
                href="tel:757-355-3222"
                className="block min-h-[44px] py-2 text-base text-neutral-700 hover:text-[var(--color-navy)] font-medium transition-colors"
              >
                757-355-3222
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-[family-name:var(--font-serif)] text-xl font-bold text-[var(--color-navy)]">
              Send a message
            </h2>

            {!formspreeContactEndpoint ? (
              <p className="mt-4 text-neutral-600">
                Contact form is not configured yet. Add <code className="text-sm bg-neutral-100 px-1 rounded">VITE_FORMSPREE_CONTACT_ID</code> to your <code className="text-sm bg-neutral-100 px-1 rounded">.env</code> (see CONTACT_FORM_SETUP.md).
              </p>
            ) : (
              <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full min-h-[48px] rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full min-h-[48px] rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'sending'}
                    className="w-full min-h-[120px] rounded-lg border border-neutral-300 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-navy)] focus:border-transparent resize-y disabled:opacity-60 disabled:cursor-not-allowed"
                    placeholder="How can we help?"
                  />
                </div>

                {status === 'success' && (
                  <p className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200">
                    Thanks! Your message was sent. We&apos;ll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200">
                    Something went wrong. Please try again or email Ryan directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold bg-[var(--color-gold)] text-neutral-900 hover:bg-[var(--color-gold-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
