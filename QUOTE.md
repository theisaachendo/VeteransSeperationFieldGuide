# Website Development Deliverables
**Veterans Separation Field Guide**

---

**To:** Ryan Buckingham  
**From:** Isaac Henderson  
**Date:** March 2025  
**Project:** VeteransSeparationFieldGuide.com (primary site)

---

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

---

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

**Navigation:** Home · Field Guide · Mentoring · Workshops · **Rate My VSO** (outbound link to RateMyVSO.com) · Contact  

**Other:** VA verification link (accredited reps) in footer or relevant section; email capture for newsletter/announcements.

---

## 3. Out of Scope (This Quote)

- **RateMyVSO.com** — Separate platform (reviews, directory, etc.); can be quoted as Phase 2.
- **Content creation** — You provide copy, photos, and Field Guide PDF; implementation and layout are in scope.
- **Ongoing hosting/domain** — Your existing GoDaddy/Netlify (or similar) costs; not included in dev fee.

---

## 4. Cost of Development

| Item | Description | Amount |
|------|-------------|--------|
| **Discovery & scope** | Aligning on structure, pages, and integrations (already done) | $0|
| **Design** | Layout, navigation, branding (navy, black, white, gold), responsive | $150 |
| **Build – core site** | React + Vite build: Home, About, Field Guide, Mentoring, Workshops, Contact, Disclaimer | $100|
| **Integrations** | Stripe checkout + PDF delivery; Calendly embed/link; email capture (Mailchimp or ConvertKit); VA link | $100 |
| **Content & QA** | Dropping in your copy/images, testing flows, mobile check | $0 |
| **Launch** | DNS, go-live, basic handoff | $0|
| | | |
| | **Total (primary site)** | **$350** |


---

## 5. What You Provide

- Field Guide PDF and cover image  
- Professional photos and any workshop imagery  
- Final website copy (or we use the README as a draft)  
- Access to GoDaddy (DNS), Stripe, Calendly, and chosen email tool  
- Brand colors and any logo assets  

---

## 6. Next Steps

1. Approve quote and confirm payment terms.  
2. You provide assets and access (GoDaddy, Stripe, Calendly, email).  
3. Kick off design, then build and integrations.  
4. Content load, QA, and launch.  

---

*Thank you for the opportunity to work on the Veterans Separation Field Guide. Looking forward to getting this live for you.*
