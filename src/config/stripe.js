/**
 * Stripe Payment Link for $40/month coaching subscription (weekly accountability + community).
 * Set in .env as VITE_STRIPE_MONTHLY_SUBSCRIPTION_LINK.
 */
const rawMonthly = import.meta.env.VITE_STRIPE_MONTHLY_SUBSCRIPTION_LINK
export const stripeMonthlySubscriptionLink =
  typeof rawMonthly === 'string' && rawMonthly.length > 0 ? rawMonthly : null

/**
 * Optional one-time Stripe Payment Link (legacy or add-on offers).
 * Set in .env as VITE_STRIPE_FIELD_GUIDE_LINK (see STRIPE_SETUP.md).
 */
const raw = import.meta.env.VITE_STRIPE_FIELD_GUIDE_LINK
export const stripeFieldGuidePaymentLink =
  typeof raw === 'string' && raw.length > 0 ? raw : null
