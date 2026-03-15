# Calendly setup — Workshops

Workshops are **group sessions** (e.g. VA disability, GI Bill, transition timelines) hosted via Google Meet. Ryan sets up **when** they happen in Calendly; the site then links to that booking page so visitors can register.

---

## What Ryan does in Calendly

1. **Log into Calendly** (calendly.com) with his account.

2. **Create a new event type** for workshops:
   - Click **Event Types** → **+ New Event Type**.
   - Name it something like **“Veteran Transition Workshop”** (or one event type per topic if he prefers).
   - **Duration:** e.g. 60 or 90 minutes.
   - **Scheduling:** Set the dates/times when workshops are available (e.g. “Every first Tuesday at 6pm” or specific one-off dates).
   - **Location:** Add **Google Meet** (same as mentoring — Calendly can create the meeting link when someone books).
   - **Optional:** Collect payment (Stripe), limit number of attendees, add a short description.

3. **Copy the booking link** for that event type, e.g.:
   - `https://calendly.com/ryan-veteranseparationfieldguide/workshop`
   - or `https://calendly.com/username/veteran-transition-workshop`

---

## Add the link to this project

1. Open `.env` in the project root.
2. Add:
   ```bash
   VITE_CALENDLY_WORKSHOPS_LINK=https://calendly.com/username/event-type
   ```
   Use the actual workshop event-type URL from Calendly.
3. Save. **Do not commit `.env`**.
4. Restart the dev server: `npm run dev`.

---

## Where it’s used on the site

- **Workshops page:** “Register for a Workshop” → opens the Calendly workshop booking page (new tab).
- **Home (mentoring/workshops section):** “Register for a Workshop” → same link.

If the link isn’t set, those buttons go to the Workshops page only (no booking).

---

## Summary

| Step | Who | What |
|------|-----|------|
| 1 | Ryan | Create a Calendly event type for workshops (title, duration, schedule, Google Meet). |
| 2 | Ryan | Copy that event type’s booking URL. |
| 3 | You | Add `VITE_CALENDLY_WORKSHOPS_LINK=<url>` to `.env` and restart the dev server. |

After that, “Register for a Workshop” will send visitors to Calendly to pick a time and register.
