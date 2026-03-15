import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  // Load .env from same folder as this config file (project root)
  // Use 'VITE_' prefix so we get client-safe env vars from .env
  const env = loadEnv(mode, __dirname, 'VITE_')
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'import.meta.env.VITE_STRIPE_FIELD_GUIDE_LINK': JSON.stringify(env.VITE_STRIPE_FIELD_GUIDE_LINK || ''),
      'import.meta.env.VITE_CALENDLY_MENTORING_LINK': JSON.stringify(env.VITE_CALENDLY_MENTORING_LINK || ''),
      'import.meta.env.VITE_CALENDLY_WORKSHOPS_LINK': JSON.stringify(env.VITE_CALENDLY_WORKSHOPS_LINK || ''),
      'import.meta.env.VITE_FORMSPREE_CONTACT_ID': JSON.stringify(env.VITE_FORMSPREE_CONTACT_ID || ''),
      'import.meta.env.VITE_FORMSPREE_NEWSLETTER_ID': JSON.stringify(env.VITE_FORMSPREE_NEWSLETTER_ID || ''),
    },
  }
})
