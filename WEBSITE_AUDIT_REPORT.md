# Website Audit Report

Date: 2026-06-13

| Issue | Severity | File | Fix Applied |
|---|---|---|---|
| Hero was fully client-rendered due animated terminal | Medium | `src/components/sections/Hero.tsx`, `src/components/sections/EventTerminal.tsx` | Split animated terminal into a focused client component so hero copy renders server-side. |
| Mojibake separator characters appeared in visible text | Low | `Hero.tsx`, `LiveMetrics.tsx` | Replaced with normal `·` separators. |
| Scrollable leaderboard lacked a region label | Low | `LiveMetrics.tsx` | Added `role="region"`, `aria-label`, and keyboard focus. |
| Old language could sound broader than deployed protocol | High | README, docs, llms | Replaced with creator-accepted submission and event-derived reputation language. |
| Missing deployment/discovery assets | Medium | `public/` | Added manifest, favicon, and `llms.txt`. |

Routes audited: `/`, `/docs`, `/docs/architecture`, `/docs/events`, `/docs/risks`, `/contracts`.

No broken internal links were found in source. External links are static explorer/GitHub/application URLs.
