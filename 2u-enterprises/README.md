# 2U Enterprises — We Come 2 U.

Multi-service, on-demand booking website. Eight service lines, one call to action across the whole site: **book this service.** Bookings are request-based and route out via **WhatsApp + email** — no backend, no database, no admin login. The team manages their own calendar.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4**. Deploys to **Vercel** as-is.

---

## One-time setup — read this first

This zip unzips to a **flat** project folder: `package.json`, `src/`, and `public/` are right at the top. Push that folder's **contents** to your GitHub repo root (not the folder inside another folder), or Vercel won't find the app.

**Quick check:** open your repo on GitHub. You should see `package.json`, `src`, `public`, `README.md` at the top level. If instead you see a single folder you have to click into first, move everything up one level (or set Vercel's *Root Directory* to that folder — Settings → General → Root Directory).

---

## The eight services

Car Wash 2 U · Move 2 U · Event Staff 2 U · Pet Care 2 U · Maintenance 2 U · H2O 2 U · Fruits 2 U · Firewood 2 U

Each has its own detail page (`/services/[slug]`) and its own pre-filled booking form. Every button points to `/book?service=<slug>`, which opens the form with that service already selected and its specific fields revealed.

## How booking works (no backend)

1. Customer fills the form at `/book`.
2. They tap **Send via WhatsApp** or **Send via Email**.
3. The form builds a formatted message with all their details and opens WhatsApp (`wa.me`) or their email app (`mailto:`) — pre-addressed to you.
4. They hit send. You confirm availability. Done.

Nothing is stored on a server. Photos are attached by the customer directly in WhatsApp/email (the form reminds them).

---

## 1. Set your business details

All contact info comes from environment variables — you never edit code. Copy `.env.example` to `.env.local` for local testing:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=27821234567      # digits only, country code, NO + or spaces
NEXT_PUBLIC_BOOKING_EMAIL=hello@yourdomain.co.za
NEXT_PUBLIC_CONTACT_PHONE=+27 82 123 4567
NEXT_PUBLIC_SITE_URL=https://your-site.vercel.app
```

> WhatsApp number **must** be digits only with country code — e.g. `082 123 4567` → `27821234567`.

If you skip this, the site still builds with safe placeholders until you fill them in.

## 2. Run locally (optional)

```bash
npm install
npm run dev        # http://localhost:3000
```

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "2U Enterprises website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 4. Deploy to Vercel

1. [vercel.com/new](https://vercel.com/new) → import the repo.
2. Framework preset: **Next.js** (auto-detected). No settings to change.
3. Add the four `NEXT_PUBLIC_*` env vars from step 1.
4. **Deploy.** Every `git push` after this auto-deploys.

---

## Images — how they work

Every image is a **local file** in `public/images/`, and every path is defined in **one file**: `src/data/images.ts`. Right now they're branded placeholders so the site looks complete.

```
public/images/
├── hero/       →  homepage slider (hero-main.jpg, hero-car-wash.jpg, hero-event-staff.jpg)
├── services/   →  one per service (car-wash.jpg, move.jpg, event-staff.jpg, …)
└── gallery/    →  Our Works (work-01.jpg … work-08.jpg)
```

**To use your real photos:** upload them to GitHub (any names you like) into the folders above, then tell me — I'll wire the filenames into `src/data/images.ts` for you. You don't rename anything. (You mentioned ~20 more images coming — send them and I'll map them in.)

If you'd rather do it yourself: replace a file with the exact same name, and it just appears. No code change needed.

---

## Editing content

Everything ships with hardcoded defaults in plain data files — no CMS needed.

| What | File |
|------|------|
| Services (copy, includes, pricing, booking fields) | `src/data/services.ts` |
| All image paths (one place) | `src/data/images.ts` |
| Gallery / Our Works | `src/data/gallery.ts` |
| Blog posts | `src/data/blog.ts` |
| Business name, tagline, blurb, socials | `src/lib/site.ts` |
| Brand colours (navy / gold / white) | `src/app/globals.css` (top `:root` block) |
| Hero slider text | `src/components/HeroSlider.tsx` |
| FAQ | `src/components/FaqAccordion.tsx` |

### Changing pricing
Each service has `pricing: "Quote on request"` in `src/data/services.ts`. Replace with real prices (e.g. `"From R250"`) any time.

---

## Notes

- **Next.js pinned to 15.5.24** — the current patched maintenance release, clear of the React Server Components security advisories. Your direct dependencies are clean. (`npm audit` may still show items *inside* Next's own bundled packages; those clear with each Next patch and aren't from your code.)
- **No `sharp`, no `clsx`, no external image domains** — removed to keep the build simple and avoid the install-script and remote-image errors that can trip up Vercel.
- **Admin portal** dropped by design (no backend). All content is code-edited.
- **PWA** enabled (installable, gold theme). Icons in `public/` are simple "2U" placeholders — replace `icon-192.png`, `icon-512.png`, and `src/app/favicon.ico` with your logo when ready.
- **Legal pages** (Terms, Privacy) are general templates — have them reviewed before relying on them.
- **SEO**: per-page metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt` all auto-generated.

---

*We Come 2 U.*
