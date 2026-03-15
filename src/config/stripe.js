/**
 * Stripe Payment Link for the Field Guide ($20).
 * Set in .env as VITE_STRIPE_FIELD_GUIDE_LINK (see STRIPE_SETUP.md).
 */
const raw = import.meta.env.VITE_STRIPE_FIELD_GUIDE_LINK
export const stripeFieldGuidePaymentLink =
  typeof raw === 'string' && raw.length > 0 ? raw : null
