# Stay in the Loop — newsletter signup setup

The **“Stay in the Loop”** section on the home page collects email addresses so you can send updates (workshops, new resources, transition tips). Right now it’s wired to **Formspree** so every signup is sent to your email and stored in Formspree. You can export the list or later move it to Mailchimp/ConvertKit for actual newsletters.

---

## What it does

- Visitor enters email and clicks **Sign up**.
- The form submits to Formspree; you get an email (and see the submission in your Formspree dashboard).
- They see: **“You’re on the list. We’ll be in touch.”**
- No newsletter sending is built in — Formspree only **collects** addresses. To send campaigns later, export from Formspree or use a second form that adds subscribers to Mailchimp/ConvertKit.

---

## Step 1 — Create a second Formspree form (newsletter)

1. Go to [formspree.io](https://formspree.io) and log in (same account as your contact form is fine).
2. Click **+ New form**.
3. Name it something like **“Newsletter signup”**.
4. Under **Email notifications**, set the address where you want to receive each signup (e.g. your main email).
5. (Optional) Under **Settings**, you can add a field label so submissions show “Newsletter signup” in the subject.
6. Save. Copy the form **endpoint**:
   - Either the form ID (e.g. `xyzzzzzz`),
   - Or the full URL: `https://formspree.io/f/xyzzzzzz`.

---

## Step 2 — Add it to this project

1. Open `.env` in the project root.
2. Add (use your form ID or full URL):

   ```bash
   VITE_FORMSPREE_NEWSLETTER_ID=xyzzzzzz
   ```

   Or:

   ```bash
   VITE_FORMSPREE_NEWSLETTER_ID=https://formspree.io/f/xyzzzzzz
   ```

3. Save. **Do not commit `.env`** (it’s in `.gitignore`).
4. Restart the dev server: `npm run dev`.

---

## Step 3 — Test

1. Open the home page and scroll to **“Stay in the Loop”**.
2. Enter an email and click **Sign up**.
3. You should see **“You’re on the list. We’ll be in touch.”**
4. Check your email and the Formspree dashboard for the new submission.

---

## Later: real newsletters (Mailchimp / ConvertKit)

When you’re ready to **send** campaigns (not just collect emails), you can:

- **Export** signups from Formspree and import into [Mailchimp](https://mailchimp.com) or [ConvertKit](https://convertkit.com), then send from there.
- Or **replace** this form with a Mailchimp/ConvertKit signup form (embed or their hosted page) so new signups go straight into a list. That would mean changing the “Stay in the Loop” block to use their form URL or API instead of Formspree.

For now, Formspree gives you a working signup and a list you can export.
