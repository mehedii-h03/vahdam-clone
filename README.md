# Tea & Wellness Demo

Frontend-only Next.js tea storefront demo with a homepage, local mock search, and a login UI. Authentication and commerce services remain deferred.

## Setup

Use Node.js 24 LTS (minimum 20.9) and npm. No environment variables or external services are required.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. The root route redirects to `/tea-shop`.

Let Next.js manage `NODE_ENV`; do not set a nonstandard value globally. If your
shell already overrides it, clear it before running scripts (PowerShell:
`Remove-Item Env:NODE_ENV -ErrorAction SilentlyContinue`). Production builds use
`NODE_ENV=production`.

## Scripts

- `npm run dev`: local development.
- `npm run lint`: ESLint, with zero warnings allowed.
- `npm run typecheck`: generate Next.js route types and run strict TypeScript.
- `npm run build`: production build.
- `npm start`: serve the production build.

## Project structure

- `app/`: App Router pages, root layout, global styles, visual tokens, internal design-system QA route, metadata endpoints, and icon.
- `app/(store)/`: reserved route group for future store pages; adds no URL segment.
- `app/tea-shop/`: storefront homepage.
- `app/account/login/`: frontend-only login demo.
- `components/layout/`, `components/ui/`, `components/store/`: shared layout and storefront components.
- `data/`: original static demo fixtures.
- `lib/`: site settings, fonts, JSON-LD helpers.
- `types/`: shared TypeScript contracts.
- `public/images/`: future original or appropriately licensed images.
- `docs/PROJECT.md`: single source of truth and chronological task history.

## Vercel deployment

Import this repository with Root Directory set to the repository root (leave it blank),
and production branch `main`. `vercel.json` explicitly selects Next.js, `npm ci`,
`npm run build`, and `.next` output. Do not select `public`, `dist`, or `app` as
the root directory or add a catch-all SPA rewrite. No environment variables are required.

After a push, verify the latest production deployment references that commit,
finishes successfully, and owns the production domain. A platform `NOT_FOUND`
requires checking the deployment build logs, root directory, and domain assignment;
it does not by itself identify which setting is wrong.

## Development rules

Read [docs/PROJECT.md](docs/PROJECT.md) before every implementation task and update it afterward. Follow the locked phases there.

Use Server Components by default; add client boundaries only for interaction. Render content images with `next/image`, meaningful alt text, explicit dimensions or a sized fill container, and responsive sizes. Use the Lora/Montserrat pairing configured with `next/font/google`; Next.js self-hosts the output. Cold builds need access to Google Fonts. Keep semantic landmarks, heading hierarchy, keyboard operation, focus visibility, and responsive behavior central to future work.

No UI library, CMS, database, authentication, payments, backend, or copied reference-brand assets. Keep runtime dependencies minimal. Phase 2 colors and typography are defined in `app/tokens.css` and documented in `docs/PROJECT.md`. Preview them at `/design-system` (internal QA, noindex, excluded from sitemap).

The demo is deliberately non-indexable. Before a real launch, replace the reserved `https://example.com` origin in `lib/site.ts`, review metadata and robots together, add route-specific canonical URLs, and supply genuine social assets. Add only implemented pages to `staticRoutes`. JSON-LD has no data and is not rendered; never invent claims, reviews, or business facts.

Run lint, typecheck, and build after changes. No Lighthouse score is claimed at this setup stage.
