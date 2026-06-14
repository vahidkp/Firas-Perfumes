---
name: deployment-vercel
description: "Use when preparing or configuring the FIRAS Perfume project for deployment to Vercel — environment variables, build settings, preview deployments. Trigger on 'deploy this', 'set up Vercel', or 'prepare for production'."
---

# Deployment — Vercel

## Overview
Prepares the Next.js project for deployment on Vercel, which provides native support for the App Router, image optimization, and preview deployments per branch/PR — well suited to this project's scale (3 pages, 12 products).

## Setup Steps

1. Push the project to a Git repository (GitHub/GitLab/Bitbucket)
2. Import the repository into Vercel (vercel.com → New Project)
3. Framework preset: Next.js (auto-detected)
4. Build command: `next build` (default)
5. Output: handled automatically by Vercel's Next.js runtime

## Environment Variables

For Phase 1 (no payment gateway, WhatsApp-based ordering), minimal env vars are needed:

| Variable | Purpose | Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Used for metadata/sitemap base URL | `https://firasperfume.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp order number used in mini-cart CTA | `97477833024` |

If Phase 2 adds Stripe/PayPal: add `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY` (or PayPal equivalents) as encrypted Vercel env vars, never committed to the repo.

## Domains
- Confirm production domain with client (placeholder used in SEO skill: `firasperfume.com`) and update `NEXT_PUBLIC_SITE_URL`, root metadata `metadataBase`, and sitemap accordingly
- Add the domain in Vercel project settings → Domains, and update DNS records as instructed

## Preview Deployments
- Every PR/branch automatically gets a preview URL — use this to review each page (Home, Shop, Product Detail) before merging to `main`/production

## Checklist
- [ ] Project builds successfully with `next build` locally before first deploy
- [ ] Environment variables configured in Vercel project settings (not hardcoded)
- [ ] Production domain connected and `NEXT_PUBLIC_SITE_URL`/metadata updated to match
- [ ] Preview deployment reviewed for all three pages on mobile and desktop before promoting to production
