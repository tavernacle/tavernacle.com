# Tavernacle Social Club Website

The official website for The Tavernacle Social Club — a dueling piano bar and live music venue in downtown Salt Lake City. Built with Next.js (App Router) and deployed on Vercel.

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:3333
npm run build    # production build
npm start        # serve the production build
npm run lint     # eslint
```

The exact toolchain and versions live in [`package.json`](package.json) — treat it as the source of truth rather than duplicating version numbers here.

## Project layout

```
app/
  layout.tsx           # Root layout, global metadata + structured data
  page.tsx             # Homepage
  <route>/page.tsx     # about, contact, faq, menu, schedule, shows, venues, privacy, terms
  api/events/          # Google Calendar events (route.ts + revalidate/)
  components/          # Shared UI (Header, Footer, Calendar, ...)
  lib/
    seo.ts             # Site config + JSON-LD schema generators
    venue-images.ts    # Venue image manifest
  sitemap.ts           # Generated /sitemap.xml
public/                # Static assets (images, robots.txt, ads.txt)
scripts/               # Build/maintenance scripts (e.g. image optimization)
```

## Single source of truth

To avoid drift, canonical business details are defined once and reused everywhere:

- **Business info** (name, phone, address, hours, social links, rating) — [`app/lib/seo.ts`](app/lib/seo.ts) (`siteConfig`). Update it there; pages and structured data read from it.
- **Events** — pulled live from Google Calendar via `app/api/events`.

Avoid hardcoding phone numbers, hours, or capacities into individual pages or this README.

## Environment variables

None are required for local development. The following are read at runtime (set them in Vercel or `.env.local` as needed):

| Variable | Used by | Notes |
| --- | --- | --- |
| `GOOGLE_CALENDAR_API_KEY` | `app/api/events` | Required to fetch live events |
| `GOOGLE_CALENDAR_ID` | `app/api/events` | Optional; falls back to the default calendar |
| `DISABLE_CACHE` | `app/api/events` | Set to `true` to bypass the events cache |
| `CRON_SECRET` | `app/api/events/revalidate` | Authorizes cache revalidation requests |
| `NEXT_PUBLIC_GA_ID` | `app/layout.tsx` | Enables Google Analytics when set |
| `VERCEL_PROJECT_PRODUCTION_URL` | `layout.tsx`, `sitemap.ts` | Provided automatically by Vercel |

## Deployment

Hosted on Vercel — pushes to the production branch deploy automatically. The production URL and analytics are configured in the Vercel project.

## License

Copyright © The Tavernacle Social Club. All rights reserved. Private commercial project.
