# Calendly setup — 1:1 Mentoring

Ryan’s Calendly is already set up. You just need the **booking page URL** and to add it to the site.

---

## What you need from Ryan (or his Calendly)

1. **Log into Calendly** (calendly.com) with his account.
2. Open the **event type** for **1:1 Veteran Transition Mentoring** (or whatever he named the 60‑minute mentoring event).
3. **Copy the booking link** — it looks like:
   - `https://calendly.com/ryan-buckingham/mentoring`  
   - or `https://calendly.com/your-username/30min`  
   Any variant is fine as long as it’s the direct “book this event” link.

---

## Add the link to this project

1. In the project root, open `.env` (or create it from `.env.example`).
2. Add:
   ```bash
   VITE_CALENDLY_MENTORING_LINK=https://calendly.com/username/event-type
   ```
   Paste Ryan’s actual link.
3. Save. **Do not commit `.env`** (it’s in `.gitignore`).
4. Restart the dev server:
   ```bash
   npm run dev
   ```

---

## Where it’s used

Once the env var is set, these buttons will open Ryan’s Calendly booking page (same tab):

- **Home (hero):** “Book a 1:1 Mentoring Session”
- **Home (mentoring section):** “Schedule a Session”
- **Mentoring page:** “Schedule Your Session”
- **About page:** “Book a Mentoring Session”

If the link isn’t set, those buttons go to the Mentoring page instead.

---

## Optional

- **Stripe:** If payment is collected for sessions, that’s configured in Calendly (Integrations → Stripe). No extra code on the site.
- **Google Meet:** If meeting links are sent with the invite, that’s in Calendly (Calendar connection / event type settings). No extra code on the site.
