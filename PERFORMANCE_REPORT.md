# Performance Report

Date: 2026-06-13

## Fixes Applied

- Kept `next/font` for Space Grotesk, Inter, and JetBrains Mono.
- Split `EventTerminal` into its own client component so the hero shell and LCP text remain server-rendered.
- Kept Framer Motion isolated to the terminal feed only.
- Avoided image payloads; site uses CSS and SVG favicon only.
- Added static generation for all routes.

## Build Snapshot

`npm run build` generated static routes for all public pages. Homepage remains the largest route because it includes the animated terminal and metrics client component.

## Remaining Tradeoff

Framer Motion adds JavaScript cost for the terminal animation. It is scoped and subtle, and matches the requested signature element.
