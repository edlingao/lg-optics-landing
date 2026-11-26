# L&G OPTICS

Spanish-language landing site for L&G OPTICS in Nueva Antequera, Puebla. Built with Next.js App Router, React and Tailwind. Production: https://www.lg-optics.com.

## Development and checks

Use npm and the committed `package-lock.json` (Vercel runs `npm ci`).

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run typecheck
```

`npm test` verifies the phone-first contact contract, invalid requests and honest delivery failure handling without sending email. A successful provider response means the business notification was accepted for delivery, not that a message was read or an appointment was booked.

## Configuration

Store local secrets in ignored `.env.local`; configure production values in the existing Vercel project. Never commit secrets.

- `SENDGRID_API_KEY`: server-only SendGrid credential.
- `ADMIN_EMAIL`: inbox receiving inquiries.
- `FROM_EMAIL`: verified SendGrid sender; retains the existing `info@lg-optics.com` default if omitted. The API key and recipient are required. Missing configuration or rejected delivery returns an honest 503 and the UI retains the inquiry with a WhatsApp alternative.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: optional GA4 ID (`G-…`). Analytics only loads after consent. Without it, no analytics script or consent banner appears. Disable Enhanced Measurement's automatic form, outbound-click and history page-view tracking in GA4 to avoid duplicate events or sending unsanitized URLs. Verify DebugView before counting conversions.
- `TYPESAFE_API_KEY`: local audit tooling only. The website does not use or expose it.

Business name, phone, hours, address, existing Maps place reference and social profiles are centralized in `src/lib/business.ts`. Catalog, exams and packages have separate typed data files. Verify business claims, current availability and prices with the owner before adding new facts.

## Growth features

- **Hours**: `business.schedule` drives the "Abierto ahora / Cerrado" label, the schema and appointment validation. Change it together with `business.hours`.
- **Appointment requests**: the contact form takes a preferred day and time and can be sent by email ("Pedir que me llamen") or as a prefilled WhatsApp chat. `/contacto?servicio=examen` preselects the service.
- **Lead source**: links tagged with `?utm_source=` (`google`, `instagram`, `facebook`, `tiktok`, `whatsapp`, `qr`, `volante`) add "(Los encontré por …)" to WhatsApp messages and a line to the inquiry email. Use e.g. `https://www.lg-optics.com/?utm_source=instagram` in the Instagram bio.
- **Short links** for print and QR codes: `/opinion` (Google reviews, from `business.reviewUrl`; people are redirected to Google at once, while chat apps building a link preview get the share title, text and image from `src/app/opinion/route.ts` and `opengraph-image.tsx`), `/whatsapp`, `/llegar` (directions). `/paquetes`, `/precios` and `/citas` are aliases.
- **Promotions**: add a dated entry to `src/lib/promotions.ts`; the banner appears and expires by itself. Publish only owner-approved offers with their real conditions.

## SEO and release

Canonical pages are `/`, `/productos`, `/examenes-de-vista`, `/pricing`, `/contacto`, `/ubicacion` and `/nosotros`. `/privacidad` is linked but noindex. Metadata routes generate robots, sitemap and a working social image. Old equivalent routes redirect permanently; component-only URLs return 404.

The baseline audit and implementation plan are in `reports/seo-audit-2026-10-05/`. Reports, skills and local environment files are excluded from Vercel uploads by `.vercelignore`. Consult `prompts/SEO.md` for follow-up work requiring account access or verified business facts.

Deploy to the existing Vercel project, retaining the previous production deployment as the rollback target. After deployment, verify HTTP status, redirects, canonicals, JSON-LD, sitemap, social image, responsive layout and contact errors against the production domain. Do not submit test inquiries to the business without explicit authorization. Monitor real indexing in Search Console and real leads separately from Lighthouse scores.
