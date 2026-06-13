# SEO Report

Date: 2026-06-13

## Implemented

- Central Metadata API helper in `src/lib/seo.ts`.
- Page metadata for:
  - `/`
  - `/docs`
  - `/docs/architecture`
  - `/docs/events`
  - `/docs/risks`
  - `/contracts`
- Canonical URLs with `NEXT_PUBLIC_SITE_URL` fallback.
- OpenGraph metadata.
- Twitter card metadata.
- JSON-LD:
  - Homepage: `Organization`, `WebSite`
  - Docs pages: `TechArticle`
  - Contracts page: `SoftwareApplication`
- `src/app/sitemap.ts`
- `src/app/robots.ts`

## Notes

Production should set `NEXT_PUBLIC_SITE_URL` to the deployed Vercel domain or custom domain so canonical URLs are final.
