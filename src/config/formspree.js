/**
 * Formspree endpoint for the contact form.
 * Set in .env as VITE_FORMSPREE_CONTACT_ID (form ID only, e.g. myyyyzzz)
 * or full URL (https://formspree.io/f/myyyyzzz). See CONTACT_FORM_SETUP.md.
 */
const raw = import.meta.env.VITE_FORMSPREE_CONTACT_ID
const trimmed = typeof raw === 'string' ? raw.trim() : ''
export const formspreeContactEndpoint =
  trimmed.length === 0
    ? null
    : trimmed.startsWith('http')
      ? trimmed
      : `https://formspree.io/f/${trimmed}`

/**
 * Formspree endpoint for the "Stay in the Loop" newsletter signup on the home page.
 * Set in .env as VITE_FORMSPREE_NEWSLETTER_ID (form ID only). See NEWSLETTER_SIGNUP_SETUP.md.
 */
const rawNewsletter = import.meta.env.VITE_FORMSPREE_NEWSLETTER_ID
const trimmedNewsletter = typeof rawNewsletter === 'string' ? rawNewsletter.trim() : ''
export const formspreeNewsletterEndpoint =
  trimmedNewsletter.length === 0
    ? null
    : trimmedNewsletter.startsWith('http')
      ? trimmedNewsletter
      : `https://formspree.io/f/${trimmedNewsletter}`
