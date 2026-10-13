# Bhajan Kirtan Sonotek — Next.js

Mobile-first event enquiry website built with Next.js App Router and TypeScript.

## Local setup

Requirements: Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. To create and run a production build, use `npm run build` and `npm run start`.

## Configuration

- `NEXT_PUBLIC_BOOKING_PHONE`: public WhatsApp and phone contact in international digits-only format. The current default came from the pasted project brief; confirm it with Sonotek before publishing.
- `NEXT_PUBLIC_BOOKING_DISPLAY_PHONE`: formatted contact shown on the site; update it with the number.
- `NEXT_PUBLIC_SITE_URL`: canonical site origin, used for metadata, sitemap and robots.
- `RESEND_API_KEY`, `BOOKING_EMAIL`, `BOOKING_FROM_EMAIL`: optional server-side email enquiry delivery. Configure only with a verified sender and business-approved destination. Never expose the Resend key with a `NEXT_PUBLIC_` prefix.

Without Resend configuration, visitors can still prepare and send enquiries through WhatsApp or call the team. WhatsApp opens a prefilled message for the visitor to inspect and send; it is not sent automatically.

## Implemented

- Home, program catalogue and details, searchable/filterable video samples, about, FAQ, contact and booking routes.
- Accessible, mobile navigation and persistent bottom WhatsApp / booking actions.
- Two-step booking form with client/server checks, date and phone validation, consent, honeypot and WhatsApp / email handoff.
- Optional email route returns an enquiry reference after the email provider accepts delivery.
- Per-page metadata, sitemap and robots routes.

The app does not yet store enquiries in a database, provide an admin dashboard, check calendar availability, manage quotes/payments, or confirm bookings. Email-provider acceptance means the email was accepted for delivery, not that a booking is confirmed.

## Channel and product review

The public channel description names Shiva, Hanuman, Ram, Krishna, Mata, satsangi and Goga Ji devotional music. Indexed video descriptions include singer and production credits. The site uses those categories and a small selection of direct YouTube links; it does not copy or re-host videos. See [DESIGN-PLAN.md](./DESIGN-PLAN.md) for the content review, route plan, UI/UX behavior, booking journey and remaining production work.

No testimonials, live availability, service areas, prices, event duration or artist booking claims are invented. Add these only after Sonotek approves the details and media rights.
