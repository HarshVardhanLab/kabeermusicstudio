# Bhajan Kirtan Sonotek — channel review and website plan

## Channel/content review

The public channel description presents Bhajan Kirtan Sonotek as a Hindi devotional catalogue with Shiva, Hanuman, Ram, Krishna, Mata, satsangi and Goga Ji traditions. Indexed video descriptions show named singers and production credits. The visible examples include individual devotional songs such as “Balaji Jaungi” (Riya Brajwasi), “Shiv Shankar Kailashi” (Anjali Jain), and a multipart narrative devotional video, “Shiv Avtari Guru Gorakhnath Ji,” credited to a larger cast and music/production team.

This public footprint suggests three useful content dimensions for discovery: devotional tradition, performance/video, and credited singer. The website uses category-led browsing and links directly to source videos. It does not infer that artists or event formats are available to book just because they appear on the channel. Prices, duration, equipment, service area, live artist roster, testimonials, and terms remain unpublished until the business confirms them.

This review uses the channel description and representative indexed video metadata. It is not a frame-by-frame review of the full video archive; YouTube’s public listing is large and changes over time. The curated sample is intentionally small and each card links to the official source.

## Product goals

1. Let a mobile visitor understand the devotional identity and event enquiry path in the first screen.
2. Help the visitor begin from a gathering type or devotional style.
3. Show real channel work for trust, without re-hosting videos or inventing booking availability.
4. Make it simple to share event needs through WhatsApp, phone, or a configured email enquiry.
5. State clearly that a submitted enquiry is not a confirmed booking.

## Routes and screens

### Implemented public routes

| Route | Screen purpose |
| --- | --- |
| `/` | Mobile-first home: devotional hero, program discovery, video samples, booking steps, FAQs and enquiry CTA. |
| `/programs` | Program idea catalogue, explicit availability caveat, enquiry CTA. |
| `/programs/[slug]` | Individual program explanation and enquiry handoff with the selected format prefilled. |
| `/videos` | Curated, category-filterable and searchable YouTube performance list. |
| `/about` | Channel catalogue overview and what is / is not established by the public content. |
| `/faq` | Accordion answers about enquiries, availability and performer requests. |
| `/contact` | WhatsApp, phone and YouTube contact choices. |
| `/book` | Two-step event enquiry, WhatsApp handoff and optional configured email delivery. |
| `/book/success` | Confirmation of email handoff with a reference; it explicitly says this is not a confirmed booking. |
| `/api/enquiries` | Server-side validation and optional Resend email notification. |

### Recommended follow-on routes

Add `/artists` and `/artists/[slug]` only after artist bios, portraits, permissions and booking availability are approved. Add `/service-areas` only for confirmed locations. Add `/gallery` only with event images the business has rights to publish. Add privacy, terms and cancellation pages after the business approves those policies. Add `/admin/*` only with real authentication, database persistence, authorization and audit logging; a decorative dashboard would not be a booking system.

## Mobile-first layout and interaction

- Start with a compact header and clear “Plan your event” action; mobile navigation opens as a short, touch-friendly list.
- Keep the hero headline, one-sentence explanation and primary enquiry action visible without a dense video collage.
- Use two-column event cards on phone and a four-column grid on wide screens.
- Curate a small video selection, use YouTube thumbnails, and open original videos on YouTube so the page remains light.
- Keep a bottom WhatsApp + enquiry bar on phones. It sits above the safe area and does not cover the form because the booking screen keeps enough bottom spacing.
- Use clear field labels, large input targets, a two-step form, back navigation, inline validation and an explicit privacy consent checkbox.
- Keep artist availability, pricing, event length, logistics and booking status subject to team confirmation.

## Booking flow

1. Visitor chooses a program or starts the form directly.
2. Step one collects program, future date, optional time and venue type, and city.
3. Step two collects name, mobile, optional audience/budget/details and consent to share the enquiry.
4. WhatsApp builds a URL-encoded summary. The visitor reviews the message and sends it from WhatsApp; no message is sent automatically by the website.
5. If Resend is configured, “Send enquiry by email” validates the same fields server-side and emails a reference to the configured business inbox. The page reports success only after the email provider accepts it.
6. The team checks date, artist, location and event details. Only the team’s explicit reply and agreed terms confirm a booking.

Email requires `RESEND_API_KEY`, `BOOKING_EMAIL` and a verified `BOOKING_FROM_EMAIL`. The WhatsApp contact comes from the user-provided project brief and must be confirmed with Sonotek before launch. Email enquiries are delivered to the configured mailbox; this version does not maintain a customer database, calendar or admin dashboard.

## Visual system and motion

- Warm ivory canvas, deep maroon and ink text, muted saffron/terracotta accents, and quiet devotional motifs.
- Display headings use a literary serif; UI and metadata use a clean sans-serif; Hindi category labels use a Devanagari font.
- Gentle hero entrance, small card hover lift, button press states, smooth disclosure expansion, and responsive mobile menu.
- All motion respects `prefers-reduced-motion`. There is no autoplay audio or urgency language.

## Accessibility, SEO and performance

- Semantic landmarks, skip link, visible keyboard focus, labeled form controls, native disclosure elements and `aria-pressed` on video filters.
- Metadata per page, optional canonical host via `NEXT_PUBLIC_SITE_URL`, generated sitemap and robots route.
- Client JavaScript is limited to mobile menu, video filtering and the interactive booking flow; static pages render through the App Router.
- Video cards link out rather than loading a wall of iframes. Thumbnails load from YouTube’s image host.

## Production work still needed

- Confirm business contact details, service scope, artist roster, content permissions, response expectations, legal terms and actual booking confirmation process.
- Add durable enquiry storage, rate limiting and duplicate protection, admin authentication, enquiry status management, scheduling conflict checks, quote/payment records, notification retries and backups.
- Configure the provider credentials and domain, then run install, build and mobile viewport checks before deployment.
