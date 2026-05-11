# Kyrillos — Portfolio & Blog

A production-grade personal portfolio built with **Next.js 16 App Router**, following Clean Architecture principles. Features a blog powered by MDX, project showcase, and a contact system — all with dark/light mode support.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | `16.2.4` |
| Runtime | React | `19.2.4` |
| Language | TypeScript | `^5` |
| Styling | Tailwind CSS | `^4` |
| Content | MDX (next-mdx-remote) | `^6.0.0` |
| Forms | React Hook Form + Zod | `^7` · `^4` |
| Email | Resend | `^6` |
| Icons | Lucide React | `^1.14.0` |
| Font | DM Sans · Lora · JetBrains Mono | — |

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---|---|---|
| `next` | `16.2.4` | Framework — App Router, Server Components, Server Actions |
| `react` / `react-dom` | `19.2.4` | UI runtime |
| `next-mdx-remote` | `^6.0.0` | MDX parsing & rendering for blog posts |
| `gray-matter` | `^4.0.3` | Frontmatter extraction from `.mdx` files |
| `reading-time` | `^1.5.0` | Estimated read time per blog post |
| `react-hook-form` | `^7.75.0` | Contact form state management |
| `@hookform/resolvers` | `^5.2.2` | Zod integration with React Hook Form |
| `zod` | `^4.4.3` | Schema validation — forms & Server Actions |
| `resend` | `^6.12.3` | Transactional email for contact form |
| `lucide-react` | `^1.14.0` | Icon library |
| `clsx` | `^2.1.1` | Conditional className utility |
| `tailwind-merge` | `^3.5.0` | Merge Tailwind classes without conflicts |

### Dev

| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | `^4` | Utility-first CSS framework |
| `@tailwindcss/postcss` | `^4` | PostCSS integration for Tailwind v4 |
| `@tailwindcss/typography` | `^0.5.19` | Prose styles for MDX blog content |
| `eslint` + `eslint-config-next` | `^9` · `16.2.4` | Linting |
| `typescript` | `^5` | Type checking |
| `@types/node` / `react` / `react-dom` | `^20` / `^19` / `^19` | Type definitions |

---

## Project Structure

```
KYRILLOS_PORTFOLIO/
├── public/                          # Static assets (images, CV, favicon)
├── .env.local                       # Environment variables (not committed)
│
└── src/
    │
    ├── app/                         # Next.js App Router — routing layer only
    │   ├── about/
    │   │   └── page.tsx
    │   ├── api/
    │   │   └── contact/
    │   │       └── route.ts         # POST handler — sends email via Resend
    │   ├── blog/
    │   │   ├── [slug]/
    │   │   │   └── page.tsx         # Dynamic blog post page
    │   │   ├── content/blog/        # MDX source files
    │   │   │   ├── arcgis-api-for-javascript.mdx
    │   │   │   ├── clean-architecture-react.mdx
    │   │   │   ├── gis-react-leaflet.mdx
    │   │   │   ├── leaflet-vs-openlayers.mdx
    │   │   │   ├── nextjs-architecture-patterns.mdx
    │   │   │   └── redux-vs-context.mdx
    │   │   └── page.tsx             # Blog listing page
    │   ├── contact/
    │   │   └── page.tsx
    │   ├── projects/
    │   │   └── page.tsx
    │   ├── not-found.tsx            # Custom 404 page
    │   ├── globals.css              # Global styles + CSS theme variables
    │   ├── layout.tsx               # Root layout (fonts, metadata, theme)
    │   └── page.tsx                 # Home — composes widgets
    │
    ├── entities/                    # Domain models — framework-agnostic
    │   ├── blog/
    │   │   ├── lib/                 # MDX parsing, slug resolution, read-time
    │   │   ├── model/               # BlogPost type & interfaces
    │   │   └── ui/                  # Blog-specific UI primitives
    │   └── project/
    │       ├── data/                # Static project data / seed
    │       ├── lib/                 # Project utilities
    │       ├── model/               # Project type & interfaces
    │       └── ui/                  # Project-specific UI primitives
    │
    ├── features/                    # Feature modules — business logic + UI
    │   ├── contact-form/            # Form component, validation, submit action
    │   ├── project-filter/          # Client-side filtering logic for projects
    │   └── theme-switcher/          # Dark / light mode toggle logic
    │
    ├── shared/                      # Cross-cutting concerns
    │   ├── config/                  # Constants & route definitions
    │   ├── hooks/                   # Shared custom hooks
    │   ├── lib/                     # Shared utilities (cn, formatDate…)
    │   ├── styles/                  # Shared style helpers / variants
    │   └── ui/                      # Pure reusable UI components (Button, Card…)
    │
    └── widgets/                     # Composed page sections (consume features + shared)
        ├── about-preview/
        ├── blog-list/
        ├── footer/
        ├── hero-section/
        ├── navbar/
        └── projects-grid/
```

---

## Architecture

This project follows **Clean Architecture** adapted for Next.js. Each layer depends only on the layer inside it — never outward.

```
┌──────────────────────────────────────────────┐
│             app/  (Routing Layer)            │
│  Pages & layouts only — no business logic    │
│  Composes from widgets, features & shared    │
├──────────────────────────────────────────────┤
│           widgets/  (Page Sections)          │
│  about-preview · blog-list · hero-section    │
│  footer · navbar · projects-grid             │
│  Composed UI — no direct data fetching       │
├──────────────────────────────────────────────┤
│          features/  (Feature Modules)        │
│  contact-form · project-filter               │
│  theme-switcher                              │
│  Business logic, hooks, Server Actions       │
├──────────────────────────────────────────────┤
│          entities/  (Domain Models)          │
│  blog · project                              │
│  Pure types, interfaces, lib utils           │
│  Zero Next.js / React imports                │
├──────────────────────────────────────────────┤
│           shared/  (Infrastructure)          │
│  config · hooks · lib · styles · ui          │
│  Reusable across all layers — no biz logic   │
└──────────────────────────────────────────────┘
```

### Rules

- `app/` page files stay **under 30 lines** — only imports and composition
- `entities/` must **never import** from `features/`, `widgets/`, or `app/`
- `shared/ui/` must be **purely presentational** — no business-logic hooks
- Data fetching lives in **async Server Components** or **Server Actions** only
- All personal data lives in `shared/config/constants.ts` — single source of truth
- Route strings live in `shared/config/routes.ts` — never hardcode paths in components

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Home — composed from widget sections |
| `/about` | `app/about/page.tsx` | Full about page |
| `/projects` | `app/projects/page.tsx` | Project showcase with filtering |
| `/blog` | `app/blog/page.tsx` | MDX blog post listing |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | Individual blog post |
| `/contact` | `app/contact/page.tsx` | Contact form |
| `*` | `app/not-found.tsx` | Custom 404 |

---

## Blog

Blog posts are `.mdx` files inside `src/app/blog/content/blog/`. Each post requires this frontmatter:

```mdx
---
title: "Your Post Title"
date: "2025-01-15"
readTime: "7 min read"
tags: ["Next.js", "Architecture"]
summary: "One sentence shown in the post listing."
---

Your content here...
```

The slug is derived from the filename — `nextjs-architecture-patterns.mdx` → `/blog/nextjs-architecture-patterns`. No registration needed.

---

## Configuration

All personal content is centralised — no hunting through components:

```
src/shared/config/constants.ts   ← PERSONAL_INFO · SKILLS · EXPERIENCE · EDUCATION
src/shared/config/routes.ts      ← All route strings (ROUTES.about, ROUTES.blog…)
```

---

## Theme

Supports **dark mode** (default) and **light mode** via the `html.light` class, toggled by `features/theme-switcher`.

| | Background | Accent | Text |
|---|---|---|---|
| Dark | `#030712` | Purple · Blue | `#f9fafb` |
| Light | `#f7f6f3` (warm off-white) | Indigo | `#18181b` |

CSS custom properties are defined in `globals.css` and consumed via Tailwind utilities + `html.light` scoped overrides.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Lint
npm run lint

# Production build
npm run build && npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create `.env.local` in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

---

## Deployment

Optimised for **Vercel** — connect the repository and deploy with zero configuration.

For other platforms: `npm run build`, then serve the `.next/` output directory.

---

*Built by Kyrillos — Front-End & GIS Developer*