/**
 * Calendly booking URL for 1:1 coaching discovery calls.
 * Set in .env as VITE_CALENDLY_MENTORING_LINK (see CALENDLY_SETUP.md).
 */
export const calendlyMentoringLink =
  typeof import.meta.env.VITE_CALENDLY_MENTORING_LINK === 'string' &&
  import.meta.env.VITE_CALENDLY_MENTORING_LINK.length > 0
    ? import.meta.env.VITE_CALENDLY_MENTORING_LINK
    : null

/**
 * Optional Calendly booking URL for group coaching sessions.
 * Set in .env as VITE_CALENDLY_WORKSHOPS_LINK. See CALENDLY_WORKSHOPS_SETUP.md.
 */
export const calendlyWorkshopsLink =
  typeof import.meta.env.VITE_CALENDLY_WORKSHOPS_LINK === 'string' &&
  import.meta.env.VITE_CALENDLY_WORKSHOPS_LINK.length > 0
    ? import.meta.env.VITE_CALENDLY_WORKSHOPS_LINK
    : null
