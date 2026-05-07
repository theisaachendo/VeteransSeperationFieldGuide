# Website Development Deliverables  
**Combined quotation** — Quote 1 (March 2025) + Quote 2 (May 2026)

---

**To:** Ryan Buckingham  
**From:** Isaac Henderson · Bay Area Software  
**Date:** May 2026 *(combined document; Quote 1 dated March 2025)*  
**Project:** VeteransSeparationFieldGuide.com → Ryan Buckingham Coaching *(same codebase, repositioned)*

---

## Investment summary

| Quote | Scope | Amount (USD) |
|-------|--------|--------------|
| **Quote 1** (March 2025) | Veterans Separation Field Guide — primary website build | **$350** |
| **Quote 2** (May 2026) | Ryan Buckingham Coaching — redesign, new Stripe ($40/mo) & Calendly | **$150** |
| | **Total (both quotes)** | **$500** |

*Combined professional fees for Quote 1 + Quote 2 total **$500** ($350 + $150).*

---

# Part A — Veterans Separation Field Guide  
*As quoted March 2025 · VeteransSeparationFieldGuide.com (primary site)*  

*This section documents the original scope and pricing. The **live site today** follows Part B (Ryan Buckingham Coaching): routes, navigation, copy, Stripe subscription, and Calendly discovery booking.*

## 1. Tech Stack (Summary)

| Layer | Technology | Purpose |
|-------|------------|--------|
| **Frontend** | React + Vite | Fast, modern UI; easy to maintain and scale |
| **Hosting** | Netlify | Reliable hosting, simple deploys, optional serverless |
| **Payments** | Stripe | Field Guide ($20) + mentoring session payments (your existing account) |
| **Scheduling** | Calendly | 1:1 mentoring booking (your existing account) |
| **Email** | Mailchimp or ConvertKit | Newsletter, delivery emails, list building (you choose) |
| **Meetings** | Google Meet | Mentoring & workshops (you connect to Calendly) |
| **Domain / DNS** | GoDaddy | Existing registrar; DNS pointed at Netlify |

All integrations use your existing Stripe and Calendly setups. No Squarespace or WordPress — custom build only.

## 2. Pages (Summary)

| Page | Summary |
|------|--------|
| **Home** | Hero (“Your Military Career Is Ending. Your Life Mission Isn’t.”), who it’s for, your story, Field Guide + mentoring CTAs, workshop promo, email signup |
| **Field Guide** | Product description, what they learn, table of contents, $20 buy button → Stripe → PDF delivery by email |
| **Mentoring** | 1:1 session overview (60 min), what’s included, “Schedule Your Session” → Calendly (+ Stripe) |
| **Workshops** | Workshop topics and value, “Register for a Workshop” CTA (Google Meet) |
| **About** | Your bio (Coast Guard, 20+ years), mission, roles (Educator, Realtor, Field Guide creator) |
| **Contact** | Simple contact form + your contact info (email, phone, tagline) |
| **Disclaimer** | Legal disclaimer (educational only; not a VSO/attorney; direct to VA accredited reps) |

**Navigation:** Home · Field Guide · Mentoring · Workshops · Rate My VSO (outbound link to RateMyVSO.com) · Contact  

VA verification link (accredited reps) in footer or relevant section; email capture for newsletter/announcements.

## 3. Out of Scope (Quote 1)

- **RateMyVSO.com** — Separate platform (reviews, directory, etc.); can be quoted as Phase 2.
- **Content creation** — You provide copy, photos, and Field Guide PDF; implementation and layout are in scope.
- **Ongoing hosting/domain** — Your existing GoDaddy/Netlify (or similar) costs; not included in dev fee.

## 4. Cost of Development (Quote 1)

| Item | Description | Amount |
|------|-------------|--------|
| Discovery & scope | Aligning on structure, pages, and integrations (already done) | $0 |
| Design | Layout, navigation, branding (navy, black, white, gold), responsive | $150 |
| Build – core site | React + Vite build: Home, About, Field Guide, Mentoring, Workshops, Contact, Disclaimer | $100 |
| Integrations | Stripe checkout + PDF delivery; Calendly embed/link; email capture (Mailchimp or ConvertKit); VA link | $100 |
| Content & QA | Dropping in your copy/images, testing flows, mobile check | $0 |
| Launch | DNS, go-live, basic handoff | $0 |
| | **Total (primary site)** | **$350** |

## 5. What You Provide (Quote 1)

- Field Guide PDF and cover image  
- Professional photos and any workshop imagery  
- Final website copy (or we use the README as a draft)  
- Access to GoDaddy (DNS), Stripe, Calendly, and chosen email tool  
- Brand colors and any logo assets  

## 6. Next Steps (Quote 1)

1. Approve quote and confirm payment terms.  
2. You provide assets and access (GoDaddy, Stripe, Calendly, email).  
3. Kick off design, then build and integrations.  
4. Content load, QA, and launch.  

---

# Part B — Ryan Buckingham Coaching  
*May 2026 · Site redesign & new Stripe / Calendly integrations*

## 1. Tech Stack (Summary)

| Layer | Technology | Purpose |
|-------|------------|--------|
| **Frontend** | React + Vite | Fast, modern UI; easy to maintain and scale |
| **Hosting** | Netlify | Reliable hosting, simple deploys |
| **Payments** | Stripe | **$40/month** coaching membership via Payment Link (`VITE_STRIPE_MONTHLY_SUBSCRIPTION_LINK`); optional fallback one-time link if configured |
| **Scheduling** | Calendly | **Discovery call** — wired via `VITE_CALENDLY_MENTORING_LINK` (e.g. 30 min booking URL) |
| **Contact / newsletter** | **Formspree** | Contact form and “Weekly Coaching Insights” signup on Home (`VITE_FORMSPREE_CONTACT_ID`, `VITE_FORMSPREE_NEWSLETTER_ID`) |
| **Email marketing** | Mailchimp or ConvertKit | Optional; not required for core flows above |
| **Meetings** | Google Meet | Connected through Calendly |
| **Domain / DNS** | GoDaddy (or current registrar) | DNS pointed at Netlify |

## 2. Pages & navigation (current site — matches codebase)

**Routes:** `/` (Home), `/about`, `/coaching`, `/results`, `/contact`, `/disclaimer`

| Page | Route | Summary (as implemented) |
|------|-------|---------------------------|
| **Home** | `/` | Branded hero (**Ryan Buckingham Coaching**), headline & positioning; primary CTAs **Book a Discovery Call** (Calendly) and **Join — $40/month** (Stripe subscription Payment Link); **monthly membership** section ($40/mo: weekly check-ins, forward plan, guidance, community); focus pillars; **Meet Ryan** + client-promise card; social proof placeholders; **Ready to Start** CTAs; **Weekly Coaching Insights** email capture (Formspree) |
| **About** | `/about` | Coaching-focused bio and narrative; CTAs to contact / discovery call |
| **Coaching** | `/coaching` | Membership offering: **$40/month** package details, what’s included, **Subscribe** (Stripe) + **Book discovery call** (Calendly); onboarding note for community access after Stripe |
| **Results** | `/results` | Client outcomes / testimonial placeholders; CTA to discovery or contact |
| **Contact** | `/contact` | Contact form (Formspree), coach title line, email and phone |
| **Disclaimer** | `/disclaimer` | Coaching disclaimer (educational; not therapy, legal, or financial advice) |

**Primary navigation:** Home · About · Coaching · Results · **Discord** (community — external) · Contact · Disclaimer  

**Footer:** Home · About · Coaching · Results · Contact · Disclaimer — tagline *© Ryan Buckingham Coaching*; Bay Area Software attribution link.

**Legacy URLs (redirects):** `/field-guide` and `/mentoring` → **`/coaching`** · `/workshops` → **`/results`**

## 3. Out of Scope (Quote 2)

- **Community platform build** — Circle, Discord, custom portal unless separately quoted; on-site messaging in scope.
- **Copywriting** — Final marketing copy from you where possible; layout in scope.
- **Ongoing Stripe/Calendly/hosting/domain fees** — Your accounts.
- **Separate products** (e.g. RateMyVSO) — Not included.

## 4. Cost of Development (Quote 2)

| Item | Description | Amount |
|------|-------------|--------|
| Design & UX | Visual refresh, layout, responsive behavior, nav/footer rebrand | $45 |
| Build — coaching site | Routes/pages, legacy URL redirects, CTAs and membership messaging | $45 |
| Stripe — subscription integration | $40/mo recurring product & Payment Link; wire to site; test/live guidance | $30 |
| Calendly — scheduling integration | New discovery URL site-wide; env + hosting configuration | $15 |
| QA & handoff | Checkout + booking checks, mobile pass, Netlify/env notes | $15 |
| | **Total (this phase)** | **$150** |

## 5. What You Provide (Quote 2)

- Stripe Dashboard access for **$40/month** recurring price and **Payment Link**  
- Final Calendly booking URL(s)  
- Formspree (or equivalent) endpoints for **contact** and **newsletter** if not already configured (`VITE_FORMSPREE_CONTACT_ID`, `VITE_FORMSPREE_NEWSLETTER_ID`)  
- Hero copy, testimonials when ready, photos  
- Netlify (or host) access for production **environment variables**  
- Domain/DNS access if needed  

## 6. Next Steps (Quote 2)

1. Approve this quote and confirm payment terms.  
2. Confirm Stripe Payment Link and Calendly URLs for production.  
3. Set env vars locally and on Netlify.  
4. Final content pass, QA, and launch.  

---

## Combined investment

| Quote | Description | Amount |
|-------|-------------|--------|
| Quote 1 | Veterans Separation Field Guide — primary site (March 2025) | $350 |
| Quote 2 | Ryan Buckingham Coaching — redesign & integrations (May 2026) | $150 |
| | **Grand total** | **$500** |

---

*Thank you for the opportunity to work on the Veterans Separation Field Guide and to extend the project into Ryan Buckingham Coaching. Looking forward to getting this live for you.*
