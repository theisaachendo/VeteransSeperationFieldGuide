# Contact form setup (Formspree)

The contact form sends messages to Ryan’s email via [Formspree](https://formspree.io). Free tier: 50 submissions/month.

---

## Step 1 — Create a Formspree form

1. Go to [formspree.io](https://formspree.io) and sign up or log in.
2. Click **+ New form**.
3. Name it (e.g. “Veterans Separation Field Guide – Contact”).
4. Under **Email**, set the address where submissions should go (e.g. Ryan@veteranseparationfieldguide.com).
5. Save. Formspree will show your form’s **endpoint URL**, e.g.:
   - `https://formspree.io/f/myyyyzzz`  
   The **form ID** is the last part: `myyyyzzz`.

---

## Step 2 — Add the form ID to this project

1. Open `.env` in the project root.
2. Add (use your real form ID):
   ```bash
   VITE_FORMSPREE_CONTACT_ID=myyyyzzz
   ```
   Or use the full URL and we’ll accept that too:
   ```bash
   VITE_FORMSPREE_CONTACT_ID=https://formspree.io/f/myyyyzzz
   ```
3. Save. Restart the dev server (`npm run dev`).

---

## Step 3 — Test

1. Open the **Contact** page on the site.
2. Fill in Name, Email, Message and click **Send message**.
3. You should see a success message and receive the submission at the email you set in Formspree.

---

## Optional

- In Formspree: **Settings** → turn on reCAPTCHA or use their built-in spam filter.
- **Redirect after submit:** You can set a custom thank-you page URL in Formspree, or we keep the in-page success message (no redirect).
