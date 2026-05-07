/**
 * Coach contact details — Contact page and anywhere else we surface direct reach-out.
 * WhatsApp uses the same mobile number in international format (US +1).
 */
export const coachEmail = 'RyanBuckingham.coach@gmail.com'

/** Lowercase mailto for broad client compatibility */
export const coachEmailMailto = `mailto:${coachEmail.toLowerCase()}`

/** Display string includes US country code */
export const coachPhoneDisplayUsa = '+1 (757) 355-3222'

const coachPhoneE164Digits = '17573553222'

export const coachPhoneTel = `tel:+${coachPhoneE164Digits}`

/** Opens WhatsApp chat with the coach line */
export const coachWhatsAppUrl = `https://wa.me/${coachPhoneE164Digits}`
