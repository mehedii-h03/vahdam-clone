# Project source of truth

Read this document before every future implementation task. After every completed task, append a concise chronological entry covering changes, routes, components, decisions, status, and the next recommended task. Keep this document authoritative.

## Scope and rules

Frontend-only visual and interaction demo for a future premium tea/wellness brand. The reference site is inspiration only; do not copy its name, logo, text, product imagery, or assets. No final brand identity has been chosen.

Next.js App Router, strict TypeScript, Tailwind CSS. Server Components by default; Client Components only where interaction requires them. Runtime dependencies are Next.js, React, and React DOM only. No UI library, CMS, database, auth, payments, or backend.

Use next/image for all future content images with alt text and stable dimensions; use next/font for optimized self-hosted fonts (Google pairing selected in Phase 2). Prioritize semantic HTML, keyboard access, visible focus, responsiveness, restrained JavaScript, and excellent performance. No performance scores are promised without measurement.

## Locked implementation order

Phase 1 — project setup, architecture, SEO foundation, and documentation
Phase 2 — design tokens: colors, typography, spacing, breakpoints, shadows, and container sizes
Phase 3 — reusable UI and layout components
Phase 4 — build the site section by section, starting with the header and homepage
Phase 5 — product listing, product detail, cart drawer, and responsive polish
Phase 6 — final SEO, accessibility, performance, and cross-device QA

Do not skip ahead. Phase 1 includes no storefront sections or product pages.

## Architecture and conventions

- app/layout.tsx owns document language, font loading, and shared metadata. Each page owns one main landmark and its heading hierarchy.
- app/page.tsx is a minimal setup message, not the implemented homepage.
- app/(store)/ is a reserved URL-transparent group. Do not add a second root page inside it.
- app/tea-shop/ now contains only the homepage introduction: announcement, header, and hero.
- Future URLs: lowercase kebab-case, /tea-shop for catalog, /tea-shop/[slug] for products. Avoid duplicate paths across groups; no trailing slash.
- components/ui holds primitives; components/layout holds shared shell elements; components/store holds commerce presentation and interactions. Only homepage-required layout/menu components have been extracted.
- data holds future original fixtures; types holds shared contracts; lib holds utilities; public/images holds future assets.
- app/tokens.css is the visual token source of truth, wired through Tailwind v4 @theme. app/globals.css contains base styles and typography/container utilities. Exact Phase 2 values are recorded below.
- lib/fonts.ts loads Lora and Montserrat via next/font/google, self-hosted at build time. The Phase 1 Inter placeholder is removed.
- app/icon.svg is an original geometric placeholder served as the favicon/app icon using Next.js conventions. No brand mark or product imagery is included.

## SEO state

Root metadata has a title template, neutral description, placeholder metadataBase, Open Graph, Twitter, and noindex/nofollow. The demo stays non-indexable; robots.txt disallows crawling. These are demo defaults, not access controls.

lib/site.ts centralizes the reserved https://example.com origin and static page routes. Sitemap includes / and /tea-shop; internal /design-system remains excluded. No fabricated last-modified dates, reviews, offers, business identity, or social accounts. Organization and Product helpers in lib/json-ld.ts accept typed caller data and safely serialize it; they are unused and contain no seeded entities. Product rich-result fields are intentionally deferred.

Before genuine publication: replace the origin, review indexing settings together, add per-page canonicals and real social imagery, and supply only verified schema data. Keep staticRoutes synchronized with implemented pages.

## Task history

### 2026-09-07 — Phase 1 foundation

- Built: Next.js 16.3.4 (npm latest at setup), React 19.2.8, Tailwind 4, strict TypeScript, ESLint, npm lockfile, local-font plumbing, token slots, metadata, schema utilities, directory skeleton, README, and development instructions.
- Routes: / (setup placeholder), /robots.txt, /sitemap.xml, /icon.svg. Framework supplies the default not-found response. No /tea-shop route or product pages yet.
- Components: root layout and setup page only; no reusable UI/layout/store components.
- Decisions: frontend-only, no new runtime libraries, no copied assets, no final colors or typography, no JSON-LD output, no indexing, no unimplemented sitemap entries.
- Validation: lint and strict typecheck passed; production build passed and prerendered all routes. Initial build failed under the host's nonstandard NODE_ENV; rerunning with NODE_ENV=production resolved it. README documents clearing inherited overrides. Explicit Turbopack root prevents unrelated ancestor lockfile discovery. npm audit reported zero vulnerabilities. No Lighthouse or cross-device QA claimed at this phase.
- Status: Phase 1 complete. Storefront UI and final design decisions remain deferred.
- Output verification: generated HTML/CSS and metadata endpoints confirm semantic landmarks, social metadata, local font emission, placeholder icon, blocked indexing, only / in the sitemap, and no rendered JSON-LD entities.
- Next recommended task: Phase 2 — define and approve design tokens before any reusable components or sections.

### 2026-09-07 — Phase 2 visual design system

- Built: semantic Tailwind v4 CSS tokens, global typography/focus foundations, Google Font pairing, and a responsive internal specimen route. No storefront sections, product UI, or shared components.
- Reference analysis: inspected https://www.vahdam.global/ at desktop and 390px mobile. White/cream surfaces, deep green rectangular actions, muted gold accents, fine borders, flat image-led cards, large editorial headings and compact sans UI. Mobile condenses navigation and presents two compact product columns. Our interpretation uses original tones and an openly available font pairing; no assets or proprietary fonts were copied.
- Fonts: Lora variable normal (headings/display) + Montserrat variable normal (body/UI), next/font/google in lib/fonts.ts. Latin subset preloads, automatic metric-adjusted fallbacks, display optional to avoid late font-swap movement. Fonts are downloaded at build time and served locally; builds need Google Fonts network access on a cold cache. Optional may retain fallback for a slow first visit. Supersedes Phase 1's local-font-only placeholder decision at the user's request.
- Palette (exact values, app/tokens.css):
  - background: #FCFAF5
  - surface: #FFFFFF
  - foreground: #202B25
  - muted: #62685E
  - primary: #064B35
  - secondary: #75652F
  - neutral: #F1EADB
  - border: #D9D5C9
  - border-strong: #858779
  - hover: #033D2B
  - focus: #176B91
  - success: #276443
  - error: #A3332B
  - on-primary: #FFFFFF
  - on-secondary: #FFFFFF
  - success-surface: #EDF4EE
  - error-surface: #FCF0ED
- Typography: display 44–88px/1.08/400; h1 36–64px/1.12/400; h2 30–48px/1.18/400; h3 22–30px/1.3/500; body-large 18–20px/1.65/400; body 16px/1.65/400; small 14px/1.5/400; label 14px/1.4/600; button 14px/1.2/600; overline 12px/1.5/600. Fluid display through body-large use clamp with rem bounds; tracking is defined alongside each size. Heading utilities pair font-heading with text-h1 etc.; type-overline includes uppercase.
- Layout: 4px base spacing, preferred steps 0/1/2/3/4/6/8/10/12/16/20/24/32 (0–128px). Gutters 16–48px; sections 48–96px. Reading/content/wide containers 672/1200/1440px. Breakpoints sm/md/lg/xl/2xl = 640/768/1024/1280/1536px.
- Detail: radii 0/2/4/8px/full; border weights 1/2px; decorative border versus contrast-qualified border-strong for controls. Shadows none, soft 0 2px 8px at 6%, raised 0 8px 24px at 10%, overlay 0 16px 48px at 16% (foreground RGB). Motion 150/250/400ms; standard cubic-bezier(.2,0,0,1), enter (0,0,.2,1), exit (.4,0,1,1). Reduced motion sets durations to zero.
- Accessibility: 48px controls; focus-visible 3px blue outline with 3px white separation; persistent labels and text error/success cues. Calculated contrast: dark/page 14.04:1, muted/page 5.50:1, muted/neutral 4.79:1, white/primary 10.17:1, white/olive 5.74:1, success/tint 6.28:1, error/tint 6.14:1, control border/white 3.66:1. Decorative borders must not be the sole control boundary.
- Routes: added /design-system with explicit noindex/nofollow; intentionally excluded from the public sitemap. / remains a setup placeholder. Internal means QA-only, not access-restricted.
- Files: app/tokens.css, app/globals.css, app/layout.tsx, lib/fonts.ts, app/design-system/page.tsx, app/design-system/page.module.css, lib/site.ts (sitemap comment), README.md, docs/PROJECT.md. Removed obsolete app/fonts/placeholder-sans.ttf and OFL.txt.
- Components: QA-local native button/input/card specimens only; reusable shared components remain Phase 3. No new dependencies.
- Validation: lint, strict typecheck, and production build passed. Browser QA passed at 1280px desktop and 390px mobile; overflow checks passed at 320/390/768/1280px. Input editing and Tab focus verified (3px focus outline). Generated output confirms font-display optional, size-adjust fallbacks, reduced-motion CSS, noindex metadata, and sitemap exclusion. No Lighthouse score or universal zero-CLS guarantee is claimed.
- Status: Phase 2 complete. Ready for reusable shared components; no storefront UI implemented.
- Next recommended task: Phase 3 — reusable shared components.

### 2026-09-07 — Homepage introduction (priority override)

- Scope: the user explicitly superseded the locked phase sequence, then narrowed the urgent homepage task to announcement bar, header/navigation, and hero only at /tea-shop. All sections below the hero and image generation/selection are deferred.
- Built: original Morrow Tea House placeholder wordmark and copy; slim green announcement bar; centered desktop header with left Shop menu and right currency/utility icons; centered editorial hero with CTA and a reserved full-bleed media layer. Uses approved colors and Lora/Montserrat. The supplied screenshot shows only the header; hero proportions are an interpretation, not a claimed exact match to unseen content.
- Responsive: verified desktop at 1440px and mobile at 390px. Mobile simplifies utilities and stacks hero text. Native modal menu supports focus containment, close button, Escape, backdrop dismissal, focus restoration, and scroll locking; 48px menu trigger. Hero CTA opens the same navigation pattern.
- Routes: created /tea-shop with route-specific metadata and canonical; added it to the static sitemap list. / and /design-system remain unchanged. No collection, product, account, search, checkout, or other pages.
- Components/files: components/layout/tea-header.tsx, tea-menu.tsx, tea-menu.module.css; app/tea-shop/page.tsx and page.module.css; lib/site.ts; docs/PROJECT.md. No new dependencies or shared-library work.
- Decisions: unavailable utility buttons are explicitly disabled and labeled coming soon; unbuilt destinations are noninteractive menu text. No fabricated trust metrics, real commerce, backend, or copied branding/assets. No image files added or rendered; a token-based CSS background temporarily occupies the hero image area. Use next/image when the user supplies/approves imagery.
- Validation: lint, typecheck, and production build passed before final polish; desktop/mobile browser inspection confirmed one hero section and no horizontal overflow, drawer opening, Escape close, and restored trigger focus. Final lint, typecheck, and production build also passed after polish.
- Status: introduction implemented; imagery and all below-hero sections remain unbuilt.
- Next recommended task: approve the introduction and choose the hero asset, then build the next homepage section only when requested.

### 2026-09-07 — Desktop SHOP mega-menu

- Built: desktop-only full-width white panel directly below the existing header, with thin top border, airy three-column layout, uppercase category tabs, accent-selected category, vertical divider, sentence-case child links, and a tall original illustrated garden promo with accent CTA overlay.
- Components/files: added components/layout/header-shop-menu.tsx and header-shop-menu.module.css; changed only the menu import/render in tea-header.tsx; added public/images/garden-menu-placeholder.svg rendered with next/image; updated this document. Closed header CSS, logo positioning, height, utility alignment, hero, routes, and existing menu styles remain unchanged.
- Interaction: Shop toggles hamburger/X and aria-expanded; Escape closes and restores trigger focus; outside click and focus leaving the menu dismiss it. Vertical tabs support ArrowUp/Down, Home/End and normal Tab navigation. Closed content is inert and hidden. Token-driven opacity/translation transitions apply in both directions and respect reduced motion.
- Decisions: desktop starts at 1024px; below that, the existing modal drawer is reused. Desktop panel is absolutely positioned, with no body scroll locking or layout reflow. Categories and promo use placeholder #main-content destinations until real collection work is authorized; no new routes or product sections. Original vector image is a replaceable placeholder, not reference photography.
- Validation: lint, typecheck, and build passed. Browser QA at 1440px confirmed exact unchanged header (100px high), logo and main bounds before/after open. Toggle, outside click, Escape/focus restoration and arrow-key category changes passed. At 390px, original mobile drawer opens/closes with no horizontal overflow.
- Status: desktop mega-menu complete; homepage remains introduction-only.
- Next recommended task: review desktop menu and provide mobile reference or final promo imagery when ready.

### 2026-09-07 — Closed header reference refinement

- Scope: closed header only, superseding the prior active SHOP integration. The existing mega-menu files remain untouched but are no longer mounted in the header. SHOP is a clickable visual placeholder and opens nothing; the hero's existing CTA behavior is unchanged.
- Changed components/layout/tea-header.tsx and added tea-header.module.css. Header styling is isolated from page/hero styles; announcement bar, hero markup/styles, global tokens, routes, and other sections were not modified.
- Visuals: desktop height reduced from 100px to 72px; 6.25vw editorial side gutters (32–128px bounds); centered 32px Lora Morrow wordmark with 14px italic tagline; 20px serif SHOP label; thin 1–1.1px SVG strokes; Bangladesh round flag, BDT ৳ label and chevron, search/account/bag controls. Removed disabled presentation in favor of keyboard-focusable visual placeholders with hover/pressed feedback and clear preview labels.
- Header-local semantic color variables: sky #DCE9F6, deeper sky #B9D8EE, cloud #EEF2F9, gold #A27B2E, flag green #008B61 and red #EF3340. These reference-specific treatments do not change the approved global palette. Existing primary green, fonts, spacing, focus and motion tokens are reused. CSS gradients provide original cloud-like color treatment; all icons/flag are inline SVG, with no imported brand assets or dependencies.
- Mobile: 68px header, centered 24px wordmark and 12px tagline, left hamburger, right flag and bag. SHOP text, currency text/chevron, search and account hide at 640px to maintain fit. No menu expansion added on mobile.
- Validation: compared header screenshot at 1920px; measured logo center 959.99px and header height 72px. Clicking SHOP opens no dialog/expanded panel. Mobile screenshot inspected at 390px (logo center 194.99px); no overflow at 320px or 390px. Lint, typecheck and production build passed.
- Status: closed header refinement complete; no additional homepage sections or open-menu work performed.
- Next recommended task: approve this closed header before explicitly re-enabling or revising menu behavior.

### 2026-09-07 — SHOP mega-menu restored

- Restored the existing desktop `HeaderShopMenu` to the refined closed header. The open SHOP state again shows the previously built full-width category panel, active-category children, divider, and original garden promo card.
- Preserved the refined sky-blue closed header styling by routing the restored trigger through its existing header-local gold icon and typography styles. The trigger changes to an X when open; desktop dismissal, keyboard tab navigation, Escape, outside-click behavior, and the existing compact mobile drawer remain in the reusable menu component.
- Changed: `components/layout/tea-header.tsx`, `components/layout/header-shop-menu.tsx`, and `components/layout/tea-header.module.css`. No routes, hero sections, palette tokens, or unrelated styling changed.
- Validation: lint and strict typecheck passed.
- Status: closed header and desktop SHOP mega-menu are both available again.

### 2026-09-08 — Shop by Category section

- Built the homepage section directly after the existing hero at `/tea-shop#shop-by-category`: warm cream full-width surface, centered uppercase eyebrow, gold Lora heading, and three equal category cards.
- Added `data/categories.ts` for the three original category labels and `components/store/category-card.tsx` with its scoped styles. Cards are keyboard-focusable links with a small upward/scale hover movement and visible focus treatment.
- The visual placeholders intentionally use solid forest green / warm beige arched panels and a small “Image coming soon” label. No generated image was copied into the workspace or rendered; no final assets were added, per the updated request. The original request to use `next/image` is deferred until final imagery is supplied/approved.
- Layout: desktop and tablet retain the balanced three-card grid; mobile becomes one full-size arch per row with no horizontal overflow. The arch has a fully rounded top and flat base; labels use uppercase Montserrat tracking.
- Changed only: `app/tea-shop/page.tsx`, `app/tea-shop/page.module.css`, `data/categories.ts`, `components/store/category-card.tsx`, and `components/store/category-card.module.css`, plus this document. Header, mega-menu, hero, routes, and later sections remain unchanged.
- Validation: visual QA at 1440px and 390px; lint, strict typecheck, and production build passed.
- Status: category section complete with intentionally temporary image placeholders.
- Next recommended task: build the featured products section after this category section, keeping final images deferred until the homepage layout is complete.

### 2026-09-08 — Shop by Product section

- Built the next homepage section at `/tea-shop#shop-by-product`: a white, editorial product carousel with the “Discover your favorite” eyebrow, gold Lora title, collection tabs, carousel controls, product details, a View All affordance, and a small local cart preview.
- Added `data/products.ts` with two original static collections (`Best Sellers` and `Website Exclusive`). Every product deliberately has `image: null` as the one replacement point for later image work. No product images, generated assets, imports, downloads, or image-generation calls were made.
- Added `components/store/product-carousel.tsx` and scoped carousel styles for tab switching, arrow scrolling, scroll snap, responsive touch scrolling, and local add-to-cart counting. Added `components/store/product-card.tsx` and scoped card styles for an image-free tea-pouch-shaped neutral placeholder, rating, pricing, sale state, and available/unavailable button states.
- Layout: desktop exposes four complete cards with the start of a fifth through a clipped, horizontally scrollable rail. Tablet and mobile use swipe/scroll with 1–2 readable cards and hide desktop arrows. The section uses existing font, color, focus, spacing, and motion tokens.
- Changed only: `app/tea-shop/page.tsx`, `data/products.ts`, `components/store/product-card.tsx`, `components/store/product-card.module.css`, `components/store/product-carousel.tsx`, `components/store/product-carousel.module.css`, and this document. Existing header, mega-menu, hero, category section, routes, and all later sections are unchanged.
- Validation: lint, strict typecheck, and production build passed.
- Status: Shop by Product is complete as an image-free layout and interaction prototype.
- Next recommended task: build the next requested homepage section, continuing to defer final imagery until the user approves an image pass.

### 2026-09-08 — Trusted by Tea Lovers testimonial section

- Built the next requested homepage section at `/tea-shop#testimonials`: a full-width warm cream testimonial composition with the `Loved by our community` eyebrow, gold Lora heading, three equal testimonial columns, and an inset divider.
- Added `data/testimonials.ts` as the single source for the three original reviewer names, short placeholder testimonials, ratings, visual tones, and replacement-ready `image: null` fields.
- Added reusable `components/store/testimonial-card.tsx` with scoped styling for a tall arched, flat-bottom portrait placeholder, gold star row, quote, and uppercase reviewer name. Added `components/store/testimonial-section.tsx` and its scoped layout styles for the responsive section.
- Portraits are token-adjacent solid gradients labelled `Portrait coming soon`; no images, assets, image downloads, imports, or generation were used. No real people, celebrity names, images, quotes, or endorsements are included.
- Layout: at desktop, the cards form a balanced three-column row; at mobile, cards stack within a readable 336px max column with comfortable spacing. Existing header, hero, category section, product carousel, routes, and all unrelated styling remain unchanged.
- Changed only: `app/tea-shop/page.tsx`, `data/testimonials.ts`, `components/store/testimonial-card.tsx`, `components/store/testimonial-card.module.css`, `components/store/testimonial-section.tsx`, `components/store/testimonial-section.module.css`, and this document.
- Validation: lint, strict typecheck, and production build passed.
- Status: testimonial section is complete as an image-free placeholder layout.
- Next recommended task: build only the next user-requested homepage section, retaining the deferred final-image approach.

### 2026-09-08 — Impact and values section

- Built the next requested homepage section at `/tea-shop#impact`: a warm cream, two-column impact layout bounded by inset top and bottom dividers.
- Added `data/impact-points.ts` as the single source for original impact-point titles, descriptions, icon identifiers, and the four text-only future partner-mark labels.
- Added `components/store/impact-section.tsx` and its scoped styles. The component includes a large sky-neutral CSS arch labelled `Image coming soon`, an editorial two-line heading, three stacked impact points with lightweight inline SVG line icons, and four outlined certification placeholders.
- No photo, logo, certification mark, remote URL, generated asset, downloaded asset, or imported image was used. The large visual is an empty CSS placeholder and all final partner content remains deferred.
- Layout: desktop uses a balanced wide two-column composition; at tablet/mobile the placeholder leads and content stacks below with readable point spacing and a four-column compact mark row. Existing homepage sections and routes are unchanged.
- Changed only: `app/tea-shop/page.tsx`, `data/impact-points.ts`, `components/store/impact-section.tsx`, `components/store/impact-section.module.css`, and this document.
- Validation: lint, strict typecheck, and production build passed.
- Status: impact section complete as an asset-free structural prototype.
- Next recommended task: build only the next requested homepage section, retaining the deferred final-image and brand-mark approach.

### 2026-09-08 — Video review section

- Built the next requested homepage section at `/tea-shop#video-reviews`: a warm cream community-review composition with a centered eyebrow, gold Lora title, and three equal 9:16 review cards.
- Added `data/video-reviews.ts` as the single source for original titles, reviewer names, quotes, placeholder tones, and replacement-ready `videoSrc: null` values.
- Added reusable `components/store/video-review-card.tsx` and scoped styles for neutral vertical video placeholders, centered translucent inline-SVG play controls, and the review title/name/quote hierarchy. Added `components/store/video-review-section.tsx` and its scoped responsive layout styles.
- Every placeholder is an empty CSS block labelled `Video coming soon`. No videos, images, remote URLs, image assets, imported assets, downloads, or image/video generation were used. The native buttons are keyboard accessible and provide future-playback affordances without attempting playback now.
- Layout: desktop presents a balanced three-card row with refined gaps; mobile stacks full-size cards in a 320px content column without text clipping or horizontal overflow. Existing homepage sections and routes remain unchanged.
- Changed only: `app/tea-shop/page.tsx`, `data/video-reviews.ts`, `components/store/video-review-card.tsx`, `components/store/video-review-card.module.css`, `components/store/video-review-section.tsx`, `components/store/video-review-section.module.css`, and this document.
- Validation: lint, strict typecheck, and production build passed.
- Status: video-review section is complete as an asset-free, future-playback placeholder layout.
- Next recommended task: build only the next requested homepage section, retaining the deferred asset approach.

### 2026-09-08 — Trust marquee and homepage footer

- Completed the requested homepage closing section: `/tea-shop` now ends with a continuous, original trust marquee and a large responsive footer. This completes the currently requested homepage section sequence.
- Added `components/layout/trust-marquee.tsx` with a dark forest-green seamless text loop using only non-verifiable brand-value statements. The loop pauses when reduced motion is preferred.
- Added `components/layout/footer.tsx`, scoped footer styles, and client-only `components/layout/newsletter-form.tsx` with local email-format validation and an accessible success/error message. No API, backend, or external integration is used.
- Footer contains four navigation groups, newsletter form, a CSS-gradient paper/map-like texture, an empty CSS decorative-art zone labelled `Decorative art coming soon`, legal placeholder links, and keyboard-accessible inline-SVG Instagram, Facebook, X, YouTube, and LinkedIn controls.
- No artwork, image, illustration, logo, video, remote URL, download, import, or generated asset was added. The texture and decorative zone are CSS only.
- Responsive behavior: navigation becomes two stacked-column groups on mobile, newsletter controls stay usable, social links center, and the decorative zone contracts without overflow. Existing homepage sections were not modified.
- Changed only: `app/tea-shop/page.tsx`, `components/layout/trust-marquee.tsx`, `components/layout/trust-marquee.module.css`, `components/layout/footer.tsx`, `components/layout/footer.module.css`, `components/layout/newsletter-form.tsx`, `components/layout/newsletter-form.module.css`, and this document.
- Validation: lint, strict typecheck, and production build passed.
- Status: the requested homepage sections are complete as a frontend-only, asset-deferred prototype. Final imagery, decorative artwork, partner marks, verified editorial content, and live newsletter delivery remain intentionally deferred.
- Next recommended task: review the assembled homepage at desktop and mobile, then supply/approve one coordinated final asset and content pass.

### 2026-09-08 — Homepage search drawer

- Built the header-triggered search drawer as a fixed, right-side modal at `/tea-shop`. It overlays the page within a 16px desktop inset, dims every homepage layer including the header, and does not reflow the underlying page.
- Added `components/layout/search-drawer.tsx` and scoped drawer styles. The client component provides an empty input state, cancellable 280ms mock loading skeleton, case-insensitive static product filtering, product/suggestions/collections/pages tabs, no-results states, Clear, X, backdrop, and Escape dismissal.
- Search product rows reuse `data/products.ts` pricing and names, mapping its `image: null` into a search-local `imageSrc: null` field for the future thumbnail handoff. Each search thumbnail is an intentionally neutral CSS placeholder; no image asset, remote URL, image import, generated content, or download was introduced. Product result links target the existing `/tea-shop#shop-by-product` route; the sole page entry targets `/tea-shop`.
- Updated the header’s former search placeholder to mount the new accessible trigger. Search uses `role="dialog"`, `aria-modal`, input autofocus, Tab containment, focus restoration, viewport-safe scroll locking with scrollbar compensation, and reduced-motion-safe skeleton behavior. Opening search dispatches a local overlay event so the existing SHOP mega-menu and mobile tea menu close first; no cart overlay currently exists.
- Mobile uses a 8px panel inset, smaller internal padding, horizontally scrollable result tabs, and compact result skeletons/rows without page overflow. The input and tab row remain outside the results scroller.
- Changed only: `components/layout/search-drawer.tsx`, `components/layout/search-drawer.module.css`, `components/layout/tea-header.tsx`, `components/layout/header-shop-menu.tsx`, `components/layout/tea-menu.tsx`, and this document. Homepage sections, routes, product data, and image assets remain unchanged.
- Validation: browser structure review confirmed the header trigger and modal semantics; lint, strict typecheck, and production build passed. Assets and backend search remain explicitly deferred.
- Status: search is a frontend-only mock interaction using local product data. Final product thumbnails, live search/indexing, routes, and cart integration are deferred.
- Next recommended task: conduct a user-guided visual and interaction pass at the intended desktop/mobile viewport sizes before connecting final assets or backend search.

### 2026-09-08 — Login page

- Added the frontend-only `/account/login` route with page metadata title `Login` and explicit `noindex, nofollow` robots settings. The route is intentionally excluded from the public sitemap because it is a non-indexable demo account page.
- Reused `TeaHeader` and `Footer` without copying their markup. `TeaHeader` now supports a plain white, no-announcement variant for account pages while retaining its original homepage default. The existing desktop account icon now links to `/account/login`.
- Added server-rendered login page structure and client-only `components/layout/login-form.tsx` with scoped styles: narrow 440px form, gold Lora heading, two pale-cream 60px fields, forgot-password action, 62px gold Login button, sign-up action, and normal-flow footer spacing.
- The form uses labelled email/password inputs with `email` and `current-password` autocomplete, required/email-format validation, input-linked inline errors, keyboard-visible focus, and a local-only `Login is not connected yet.` result for valid input. Password recovery and Sign Up are accessible buttons that report `Coming soon`; no additional routes, authentication API, package, redirect, password storage, or logging exists.
- No images, logos, remote URLs, downloaded assets, generated content, or new dependencies were added. Mobile uses 24px side padding and reduced vertical spacing without overflow.
- Changed only: `app/account/login/page.tsx`, `app/account/login/page.module.css`, `components/layout/login-form.tsx`, `components/layout/login-form.module.css`, `components/layout/tea-header.tsx`, `components/layout/tea-header.module.css`, and this document.
- Validation: browser structure review confirmed the white shared header, account link, labelled controls, footer flow, and keyboard-accessible actions; lint, strict typecheck, and production build passed.
- Status: login visual/UI demo complete. Authentication, account registration, password recovery, account data, and final content remain deferred.
- Next recommended task: implement only a user-requested account flow after backend/auth requirements and final route content are approved.

### 2026-09-08 — Homepage header scroll-state refinement

- Updated the homepage header to remove the extra green announcement bar from its default presentation, matching the supplied header reference’s single, airy masthead composition more closely.
- `TeaHeader` is now a small client boundary only for scroll state: it remains sky/cloud-toned at the top of `/tea-shop`, becomes sticky at the viewport top, and transitions to a white background with a subtle lower divider after the page scrolls more than 12px. The plain account-page header remains white and unaffected.
- Preserved the existing original Morrow wordmark, original copy, CSS-only hero surface, controls, dropdown/menu behavior, and all completed homepage sections. The reference’s VAHDAM name, product photography, customer/media claims, and visual assets remain unimplemented because this project explicitly prohibits copying them and final assets are still deferred.
- Changed only: `components/layout/tea-header.tsx`, `components/layout/tea-header.module.css`, and this document.
- Validation: lint, strict typecheck, and production build passed.
- Status: permitted header behavior and visual proportions are refined; exact reference-brand imagery and identity are intentionally outside scope.
- Next recommended task: provide approved original hero imagery and final Morrow brand content for a coordinated visual-polish pass.

### 2026-09-08 — Vercel deployment configuration

- Added root `vercel.json` explicitly selecting the Next.js framework, `npm ci`, `npm run build`, and `.next` output to override potentially incorrect dashboard build settings. No SPA catch-all rewrite was added; Next.js retains its route handling.
- Changed `/` from the obsolete setup placeholder to a redirect to `/tea-shop`. Existing homepage/account components and other routes are unchanged.
- Updated README project status and documented repository-root deployment, production branch `main`, and deployment/domain troubleshooting.
- Validation: lint and strict typecheck passed. Production build passed with `NODE_ENV=production`; the inherited nonstandard local value caused the first build to fail. All implemented routes were generated.
- Status: repository configuration is ready; the observed public Vercel platform `NOT_FOUND` does not identify a unique cause. Authenticated Vercel settings/build logs are not available in this session, so root-directory and domain/deployment assignments remain unverified. Assets and backend integrations remain deferred.
- Next task: verify the new production deployment and its domain; if the platform 404 persists, inspect Vercel root directory, build logs, commit, and production domain assignment.

### 2026-09-08 — Repair clean-install dependency lock

- Reproduced `npm ci` EUSAGE locally: transitive WASM resolver dependencies were missing/inconsistent in the lockfile despite matching top-level package declarations. Regenerated `package-lock.json` with npm; no application dependencies or UI/routes changed.
- Validation: isolated fresh install succeeded (437 packages, lifecycle scripts disabled); lint, typecheck, and production build passed. Existing Windows dev-server native module locks prevented in-place clean replacement, so validation used a temporary directory and local dependencies were restored.
- Status: clean-install fix prepared for Vercel; live deployment success remains unverified. Next task: deploy the updated main commit and inspect its build outcome. Assets and backend work remain deferred.
