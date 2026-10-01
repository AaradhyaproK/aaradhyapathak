# Aaradhya Pathak — Production Portfolio & Technical Blog

A high-performance personal portfolio, startup showcase, and SEO-first engineering blog built for **Aaradhya Pathak** using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Velite MDX**, and the **"Night Bento"** dark-only aesthetic.

---

## 🚀 Key Highlights & Architectural Features

- **Design System ("Night Bento")**:
  - Dark-only palette: Background `#0E0F0C`, Surface `#191B15`, Surface-2 `#23251D`, Border `#34362D`, Text `#F2F0E6`, Accent Lime `#C8F169`.
  - Huge tight display headings (`Bricolage Grotesque`), uppercase mono labels (`JetBrains Mono`).
  - Signature outline hero text, rotated circular badge (`All India #64 / NEC 2025 @ IIT Bombay`), `-2deg` pure CSS marquee ribbon.
  - Bento grid built around verified big numbers (3x faster, 50+ tools, 350+ lawyers, 4,000+ registrations, serving commercial enterprise clients).
- **SEO & Search Performance**:
  - 100% Static Site Generation (SSG) with `generateStaticParams`.
  - Server-rendered JSON-LD schema (`Person`, `WebSite`, `ProfilePage`, `BlogPosting`, `BreadcrumbList`, `FAQPage`).
  - Automated XML sitemap (`/sitemap.xml`) with accurate `lastModified` dates (excluding drafts).
  - Robots policy (`/robots.txt`) and full-content RSS 2.0 feed (`/rss.xml`).
  - Dynamic OpenGraph image generator using `next/og` (`/api/og`).
  - Noindex on sparse tag archives (<3 posts) to prevent thin content penalties.
- **Content Engine**:
  - Type-safe MDX parsing via **Velite** with strict Zod validation.
  - Build-time zero-runtime syntax highlighting via `rehype-pretty-code` and `shiki`.
  - Auto-generated Table of Contents with active IntersectionObserver scroll-spy.
  - MDX callout components: `<Tip>`, `<Warning>`, `<ProsCons>`, `<AffiliateBox>`.
- **AdSense & Monetization Ready**:
  - CLS-safe `<AdSlot>` component with reserved pre-allocated min-heights.
  - Google Consent Mode v2 compliant cookie preferences banner with footer settings modal trigger.
  - Dynamic `/ads.txt` route reading `NEXT_PUBLIC_ADSENSE_ID`.
  - Complete compliance pages: `/privacy-policy`, `/terms`, `/disclaimer`, `/affiliate-disclosure`.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 Server Components
- **Styling**: Tailwind CSS v4 (native `@theme` tokens)
- **Content**: Velite + Zod + MDX
- **Fonts**: `next/font/google` (`Bricolage Grotesque` & `JetBrains Mono`)
- **Package Manager**: `pnpm`
- **Testing**: `vitest` (unit tests) + Node smoke tests

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure Node.js 20+ and `pnpm` are installed:
```bash
node -v
pnpm -v
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in:
- `NEXT_PUBLIC_SITE_URL`: Your canonical domain URL.
- `NEXT_PUBLIC_ADSENSE_ID`: Your Google AdSense publisher ID (`ca-pub-XXXXXXXXXXXX`).

### 4. Run Development Server
```bash
pnpm dev
```
Visit `http://localhost:3000`. Velite will watch `/content/posts/` and auto-recompile MDX files.

---

## 📝 How to Add a New Blog Post

1. Create a new `.mdx` file in `/content/posts/your-post-slug.mdx`.
2. Add the required Zod-validated frontmatter:

```mdx
---
title: "Your Post Title Under 100 Characters"
description: "A concise, engaging description strictly between 120 and 160 characters long that provides clear search context."
slug: "your-post-slug"
date: "2026-10-01"
updated: "2026-10-01"
category: "AI & Full Stack"
tags:
  - "Next.js"
  - "Gemini API"
cover:
  image: "/images/blog/cover.webp"
  alt: "Descriptive cover image alt text"
author: "Aaradhya Pathak"
draft: false
affiliate: false
faq:
  - question: "Your frequently asked question?"
    answer: "Your concise answer."
---

## Introduction

Your MDX article content goes here...

<Tip>
Pro tip callout content goes here.
</Tip>

<Warning>
Warning callout content goes here.
</Warning>
```

3. Run `pnpm build` to validate schema and compile. If any required field is missing or the description length is outside 100-180 characters, Velite will report a strict type error.

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete production portfolio and blog"
   git push origin main
   ```
2. Import the repository in [Vercel Dashboard](https://vercel.com/new).
3. Set the Framework Preset to **Next.js**.
4. Configure Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://yourdomain.com`
   - `NEXT_PUBLIC_ADSENSE_ID`: `ca-pub-XXXXXXXXXXXXXXXX`
5. Click **Deploy**. Vercel will run `pnpm build` (`velite build && next build`) and generate all static pages.

---

## 🔍 Connecting Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your domain property (`yourdomain.com`).
3. Verify via DNS TXT record or HTML tag.
4. Navigate to **Sitemaps** in the left menu and submit:
   ```
   https://yourdomain.com/sitemap.xml
   ```
5. Google will index your verified static routes within 24-48 hours.

---

## 💰 Applying for Google AdSense

1. Confirm all four legal compliance pages are published and linked in the footer:
   - `/privacy-policy` (includes Google Consent Mode v2 disclosure)
   - `/terms`
   - `/disclaimer`
   - `/affiliate-disclosure`
2. Publish at least 10–15 in-depth technical articles in `/content/posts/` (ensure `draft: false`).
3. Sign up at [Google AdSense](https://www.google.com/adsense/start/).
4. Add your domain and place your publisher ID in `NEXT_PUBLIC_ADSENSE_ID` in your Vercel Environment Variables.
5. Verify `/ads.txt` is responding with:
   ```
   google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
   ```
6. Submit for review. Because this site meets Core Web Vitals targets, has zero layout shift (CLS), strict mobile responsiveness, and clean legal policies, approval is streamlined.

---

## 🧪 Testing & Validation

```bash
# Run unit tests
pnpm test

# Run full production build
pnpm build

# Run route smoke tests (while dev/prod server is running)
node scripts/smoke-test.mjs
```

---

## 📄 License
© 2026 Aaradhya Pathak. All rights reserved.
