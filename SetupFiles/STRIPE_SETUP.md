# Stripe setup — step by step

Use this with Ryan’s Stripe account to get the Field Guide ($20) selling on the site.

---

## What we’re using

- **Stripe Payment Links** for the Field Guide. No backend required: you create a link in the Stripe Dashboard and we put it on the “Get the Field Guide” buttons. When someone clicks, they go to Stripe’s hosted checkout, pay $20, and Stripe handles the rest.
- **Later:** You can add a webhook or Zapier to send the PDF by email after payment. For now, you can send the PDF manually from the Stripe customer email or use Stripe’s receipt/confirmation.

---

## Step 1 — Log into Stripe

- Go to [dashboard.stripe.com](https://dashboard.stripe.com) and log in with Ryan’s account.
- Switch to **Test mode** (toggle in the sidebar) while we’re building. Switch to **Live** when you’re ready to take real payments.

---

## Step 2 — Create the product (if it doesn’t exist)

1. In the sidebar: **Product catalog** → **Products**.
2. Click **+ Add product**.
3. Fill in:
   - **Name:** `Veterans Separation Field Guide`
   - **Description:** (optional) e.g. “Step-by-step guide to VA benefits, disability claims, GI Bill, and transition planning.”
   - **Image:** (optional) Field Guide cover image.
4. Under **Pricing:**
   - **One time**
   - **Price:** `$20.00` USD (or your currency).
5. Click **Save product**.

---

## Step 3 — Create a Payment Link

1. In the sidebar: **Payment links** (under “More” or “Payments”).
2. Click **+ New**.
3. **Product:** Select “Veterans Separation Field Guide” (the $20 product).
4. **Quantity:** Allow 1 (default).
5. **After payment:**
   - **Confirmation page:** You can leave the default or add a custom message, e.g. “Check your email for the Field Guide PDF.”
   - **Redirect (optional):** If you want customers sent back to your site after payment, add your site URL (e.g. `https://veteranseparationfieldguide.com/thank-you`). You can add a simple thank-you page later.
6. Click **Create link**.
7. **Copy the link** — it looks like:  
   `https://buy.stripe.com/xxxxx` (test) or similar for live.

That link is what we use on the site. **Do not share the link publicly until you’re on Live mode and ready to sell.**

---

## Step 4 — Add the link to this project

1. In the project root, copy the example env file:
   ```bash
   cp .env.example .env
   ```
2. Open `.env` and set:
   ```bash
   VITE_STRIPE_FIELD_GUIDE_LINK=https://buy.stripe.com/xxxxx
   ```
   Use the **test** Payment Link URL while developing, then replace with the **live** link when you go live.
3. Save the file. **Do not commit `.env`** (it’s in `.gitignore`).

---

## Step 5 — Run the site and test

1. Restart the dev server so it picks up the new env:
   ```bash
   npm run dev
   ```
2. Click “Get the Field Guide ($20)” on the home page or Field Guide page. You should be taken to Stripe Checkout.
3. In test mode, use Stripe’s test card: `4242 4242 4242 4242`, any future expiry, any CVC, any ZIP.

---

## Optional — API keys (for later)

If you later add a **backend** (e.g. Netlify Function) to create Checkout Sessions or handle webhooks (e.g. send the PDF automatically), you’ll need:

- **Publishable key:** Dashboard → **Developers** → **API keys** → “Publishable key” (starts with `pk_test_` or `pk_live_`).
- **Secret key:** Same page → “Secret key” (starts with `sk_test_` or `sk_live_`).  
  **Never put the secret key in the front-end or in git.** Use server-side env vars only (e.g. Netlify “Environment variables”).

For the current setup (Payment Link only), you only need the **Payment Link URL** in `VITE_STRIPE_FIELD_GUIDE_LINK`.

---

## Checklist

- [ ] Product “Veterans Separation Field Guide” created in Stripe ($20 one-time).
- [ ] Payment Link created and URL copied.
- [ ] `.env` created from `.env.example` with `VITE_STRIPE_FIELD_GUIDE_LINK` set.
- [ ] Dev server restarted; “Get the Field Guide” opens Stripe Checkout.
- [ ] Test payment completed with test card in Test mode.
- [ ] When ready for production: create a **live** Payment Link, update `.env` (and Netlify env if deployed), switch Stripe to Live.
