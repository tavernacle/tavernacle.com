# Tavernacle Docs

The site is live. This folder is intentionally small: a forward-looking improvement backlog plus a few operational references for external integrations that aren't self-evident from the code.

Canonical business facts (name, address, phone, hours, socials) live in [`app/lib/seo.ts`](../app/lib/seo.ts) — change them there, not here.

## Reference

- [DNS_CONFIGURATION.md](./DNS_CONFIGURATION.md) — SPF/DKIM/DMARC email-auth records
- [GOOGLE_CALENDAR_API_SETUP.md](./GOOGLE_CALENDAR_API_SETUP.md) — events integration + required env vars
- [EVENTS_CACHE.md](./EVENTS_CACHE.md) — events caching + Vercel cron revalidation

## Improvement backlog

Unchecked = candidate future work. Keep this list pruned; delete items once shipped rather than marking a wall of "done."

### Correctness / bugs

- [ ] Confirm `ads.txt` — it's a placeholder. Fill it in if running ads, otherwise remove it.

### Performance

- [ ] Re-measure Core Web Vitals (Lighthouse / PageSpeed). Prior audit showed FCP ~2.4s vs. the 1.8s target.
- [ ] Preload the LCP/hero image and confirm `tavernacle-stage.*` is sized/compressed appropriately.
- [ ] Audit the redirect chain (non-www → www) to ensure a single hop.
- [ ] Verify below-the-fold images lazy-load and that `<Image>` width/height match true aspect ratios.

### SEO / technical

- [ ] Verify Event schema is actually emitted on `/schedule` (generator exists in `seo.ts`).
- [ ] Confirm per-route Open Graph images resolve (homepage, shows, venues, etc.).
- [ ] Verify SPF/DKIM/DMARC records are live (see DNS_CONFIGURATION.md).
- [ ] Google Search Console: confirm ownership, sitemap submission, and monitor coverage/queries.

### Content

- [ ] Keep menu, performer roster, and venue capacities in sync with reality as they change.
- [ ] Add real customer photos to venue/shows pages as they become available.

### Marketing / ops (ongoing, off-site)

- [ ] Google Business Profile: keep hours/photos/posts current and respond to reviews.
- [ ] Maintain a steady review-collection habit (e.g. QR at tables).
- [ ] Keep NAP identical across Yelp, TripAdvisor, Apple Maps, and Facebook.
