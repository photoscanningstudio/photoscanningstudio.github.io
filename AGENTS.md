# AGENTS.md — Photo Scanning Studio

This file gives Codex the context it needs to work on this site effectively. Read it at the start of every session before making changes, recommendations, or commits.

---

## About the Owner & How to Work With Me

I'm Dan Herlehy — call me Father Dan. I'm a serial entrepreneur in the Wanakah / Hamburg / Buffalo, NY area, running multiple businesses in parallel. I treat AI as a capable business co-founder.

I'm strong on business, marketing, SEO, and strategy. I'm a novice with code. I rely on you for execution accuracy.

### Critical Interaction Rules — Always Apply

- **ONE step at a time.** Give me one action, wait for me to reply with `N`, `next`, or share output, then continue. No long checklists of future steps unless I explicitly ask for a full plan.
- **Full files only.** When editing a file, rewrite it top to bottom. Never give me snippets or partial patches.
- **Copy-paste-ready outputs.** All code, commands, and content should be ready to use as-is.
- **Read the current file first.** Never assume what's in the repo — inspect before editing.
- **Show changes before committing.** Display the diff or summary before anything is staged.
- **Never push to GitHub without explicit approval.**
- **Plain-English explanations** for technical concepts. No unexplained jargon.
- **Triple-check** code, SEO, schema, pricing, phone numbers, forms, and affiliate links — these are high-stakes.
- **Good / Better / Best framing** when presenting strategic options.
- **`XXXXXXXX` means redacted** — don't ask me to re-share it.
- **Tell me clearly if a restart, redeploy, or cache refresh is needed.**

### Git & Deployment Workflow — Never Deviate

- Always work directly on the main branch. Never create feature branches, worktrees, or side branches for any reason.
- After making file edits, DO NOT commit or push automatically. Stop and tell me the edits are saved locally and ready for preview.
- I preview changes by opening the edited file in my local browser (e.g., double-clicking index.html in File Explorer). The local file IS the preview — there is no staging environment.
- Only commit and push to GitHub after I explicitly say "push it," "looks good push to GitHub," or similar clear approval.
- If I say "revert" or the preview looks wrong, undo the local file edits before they're committed.
- Never push directly without my explicit go-ahead, even for tiny changes like typo fixes.
- Each push to main goes live on the website within 1–2 minutes via GitHub Pages — treat every push as a customer-facing release.

### Response Framing Modes

Pick the right one for the task: Business Operator, Implementation Planner, Technical Translator, Content Engineer, Automation Architect, SEO Strategist, CRO Specialist.

Tone: friendly, confident, professional, efficient, direct. No fluff.

---

## What This Site Is

**Photo Scanning Studio** (photoscanningstudio.com) is a local photo digitization service in the Hamburg / Buffalo, NY area, run by me out of my home office.

**Service area:**
- Local pickup/drop-off: Hamburg, Buffalo, Orchard Park, Erie County, WNY
- Mail-in service: nationwide

**Business positioning — the site should feel:** local, trustworthy, warm, personal, professional, simple, family-memory focused.

**Strongest trust message:** Dan personally handles your photos and understands these are irreplaceable family memories, not just files.

**Avoid:** generic corporate scanning company feel, cheesy 2010-era local business template aesthetic.

**Hosting & tech:**
- GitHub Pages, custom domain photoscanningstudio.com
- Static HTML/CSS/JS, no build step, no framework
- Edit `.html` / `.css` / `.js` files directly, push to `main` to deploy
- Cloudflare in front of the site — its bot protection sometimes blocks fetchers. If you can't read the live site, ask me to paste source directly.

---

## Customer Profile & Conversion Psychology

Typical customer is **not a tech person**. Common types:
- Older adults preserving family memories
- Adult children helping parents organize photos
- Families with boxes of inherited photos
- People preparing gifts for birthdays, anniversaries, memorials, holidays, reunions
- People worried photos may fade, flood, or get lost

**Emotional drivers (what they're actually buying):**
- Preserving family history before photos fade
- Protecting memories from fire, flooding, aging, disorganization
- Making old memories easy to share with kids and grandkids
- Creating meaningful family gifts
- Finally getting years of photo clutter handled

**When writing copy, focus on:** trust, care, simplicity, peace of mind, local service, family memories, easy next steps.

**Good CTA language:**
- "Text Dan a photo of your albums or boxes"
- "Ask what your project would cost"
- "Get a simple quote"
- "Schedule a local drop-off"
- "Preserve your family photos before they fade"
- "Turn boxes of photos into easy-to-share digital memories"

**Avoid:** "Buy now," "Limited time!!!", "Act fast," "Amazing deal," corporate sales copy, hypey claims.

---

## Services & Pricing — Source of Truth

Use this section as the working source of truth. If a price isn't documented here, **ask before publishing it. Do not invent pricing.**

| Service | Price / Notes |
|---|---|
| Photo prints (tiered) | 1–1000: $0.20 each · 1001–2000: $0.18 · 2001–3000: $0.15 · 3001+: $0.12. 600 DPI scan, free enhanced copy included. |
| Polaroids & large-format prints | No extra charge (priced as photo prints) |
| 35mm slides (cardboard or plastic mounted) | $0.35 each, flat |
| 35mm negatives (film strips only — NOT 120, 110, or sheet film) | $0.35 each, flat |
| Minimum order | $50 (any combination of photos, slides, negatives) |
| Slideshow service | Upsell offering — quoted individually |
| USB delivery | $20 |
| Cloud delivery | Free |
| Turnaround | 5–10 days, ~7 day average |

### Album Pricing Nuance
- Loose photos = fastest, most affordable, run through high-speed scanner
- Albums = more labor-intensive
- If photos are removable but customer wants them left in: I may charge an album-removal fee
- If photos are stuck and require flatbed + manual cropping: should cost more
- Extra-large albums may need custom pricing
- **Don't price normal and extra-large albums identically**

When writing album copy, explain this clearly without making it sound intimidating. Example tone: "Loose photos are the fastest and most affordable option. If your photos are in albums, I can help — album projects may take extra time depending on whether photos are removable or stuck to the pages."

---

## Strategic Goals

The site gets decent traffic but **conversion is weaker than it should be**. When suggesting changes, weigh against these goals.

### Primary Goal: Lead Capture
Most visitors aren't ready to buy on first visit. Top priority: capture **email and/or phone** so I can nurture over time. A captured lead beats a bouncing visitor.

Look for: lead magnets, email signup, exit-intent capture, "Send me a price guide," "Photo organization checklist," "Text Dan a photo for a quick estimate," seasonal reminder signup.

Lead capture should feel **helpful, not pushy or spammy**.

### Secondary Goal: Frictionless Contact
Make text/call easy. **Text preferred, calls welcome.**

**Phone (single source of truth): 716-713-6537**

### Anti-Goal: Walk-Ins
This business runs out of my home office. I'm not always here. Visitors must **not show up unannounced** — but communicate this professionally, not as a scary warning bar.

**Avoid harsh phrasing** like "NO WALK-INS" or "By appointment only!" in alert-bar styling.

**Better phrasing:** "Local drop-off and pickup available by appointment in the Hamburg/Buffalo area." Or: "For local customers, Dan offers convenient drop-off and pickup by appointment."

---

## Voice & Aesthetic

**Voice:** warm, personal, trustworthy, local, clear, reassuring, simple. Not corporate, not technical, not hypey.

**Local pride** — Buffalo / WNY references resonate (Bills, Crystal Beach, Niagara Falls, Allegany, Hamburg, Orchard Park, Erie County). Use naturally, don't overdo.

**Aesthetic should feel like:** a polished modern small business families can trust with irreplaceable memories. Clean, warm, professional, mobile-friendly, easy to scan.

**Avoid:** 2010 local business template, loud warning bars, badge clutter, competing CTAs, gimmicky mascot-first design.

**Imagery direction:** vintage photos, family memories, warm tones, organized photo boxes, generations/legacy.

**Trust signals to surface early:** Google reviews, real customer snippets, "Locally handled by Dan," service area mention. **Do not invent review counts, star ratings, or "X photos scanned" numbers — ask me if a number is needed and not documented.**

---

## Existing Technical Assets — Do Not Break

Flag clearly before any change that could affect these:

- Schema markup: `LocalBusiness`, `AggregateRating`, `OfferCatalog`
- SEO meta titles and descriptions
- Alt text on key images
- Internal links
- Real Google review snippets on testimonials page
- Pricing calculator with three inputs (photos, slides, negatives). Photo tiers: $0.20 → $0.18 → $0.15 → $0.12 at 1000 / 2000 / 3000 breakpoints. Slides and negatives flat $0.35. $50 minimum on combined subtotal.
- Affiliate links and IDs on DIY Tools / blog pages — preserve exactly
- Weekly SEO blog structure (`/blog/week-N.html`) and any rotation logic
- Contact / quote form behavior (see Live Form & Lead Capture Setup below)
- Email signup form behavior (see Live Form & Lead Capture Setup below)
- Google Analytics or other tracking scripts
- Google Maps integration, favicon, logo references
- Performance optimizations (lazy loading, preloads, etc.)

If a change might affect SEO, schema, tracking, affiliate links, or form behavior, **flag it before editing**.

---

## Live Form & Lead Capture Setup

The site has two Formspree-backed forms on the homepage:

**Contact form** (Formspree endpoint `movwkjde`)
- Fields: name, email, phone (optional), message
- AJAX submit via `fetch()`; on success, JS redirects visitor to `thank-you.html`
- **Why:** Formspree's free tier silently ignores `_next` and `_redirect` hidden fields. JS-redirect is the only working pattern. Don't add `_next`/`_redirect` back — they will be ignored and add noise.
- Failure fallback: inline red error message asking visitor to text 716-713-6537

**Email signup form** (Formspree endpoint `mwvynnkz`)
- Single field: email
- AJAX submit via `fetch()`; on success, the form swaps to an inline green "Thanks — you're on the list!" message (no navigation)
- `_next` field included as a fallback only — kicks in if JS fails (rare)
- Honeypot `_gotcha` field for basic spam protection
- Fires `generate_lead` Google Analytics event on success

**Lead magnet:** `5-tips-keep-old-photos-alive.pdf` is linked from `thank-you.html`. Regenerable locally via `_build_pdf.py` (gitignored — kept local, never pushed).

**Do not break:**
- Either Formspree endpoint (forms post directly to those IDs)
- The AJAX scripts that intercept submit and call `fetch()`
- The `_subject`, `_gotcha`, and existing `name=` attributes (Formspree depends on these)

---

## Active Improvement Areas

Reference these when relevant. Don't fix them in passing — wait for me to direct work on each.

1. **Hero section redesign** — multiple competing bars (phone, slideshow promo, appointment warning) before the actual hero. Cluttered, dated. Goal: clear headline, trust signal, simple CTA, text/call options, appointment language handled gracefully, mobile-first.
2. **Promote new slides + negatives services in content** — pricing, calculator, FAQ, schema, and chatbot are live (as of May 2026). Open work: write a blog post or two about slide/negative scanning for SEO, mention in any future email campaigns, and add a small visual / before-after to the homepage if good source material is available.
3. **Chatbot upgrade** — current "Ask me!" mascot is non-AI and weak. Strategic intent: smarter responses, clearer "click to ask" affordance, click/usage tracking, eventual AI backend. I run n8n locally via Cloudflare tunnel — that's available for backend logic. Staged approach: Good = better visual CTA + tracking. Better = guided FAQ bot. Best = AI-powered quote/help assistant via n8n. **Don't overbuild without asking. No expensive SaaS dependencies without approval.**
4. **Email list growth & nurture** — basic capture is now live (homepage banner + lead magnet PDF). Open work: add capture surfaces in more places (footer signup, exit-intent, blog-post inline CTAs), decide cadence and content for what gets sent (seasonal specials, photo tips, restoration before/afters), and eventually wire the list through n8n for automation.
5. **Conversion analysis** — diagnose where visitors drop off. Think like a local-service CRO expert, not just a developer.

---

## Tracking I Care About

When relevant, recommend tracking for: click-to-call, click-to-text, quote form starts, quote form submissions, calculator usage, chatbot clicks, lead magnet submissions, affiliate link clicks, blog-to-contact clicks.

Don't add tracking scripts blindly — explain what would be tracked and why first.

---

## Files to Know About

- `index.html` — homepage (cluttered hero lives here; both Formspree forms live here)
- `thank-you.html` — landing page after contact-form submission; serves the lead-magnet PDF
- `5-tips-keep-old-photos-alive.pdf` — the lead-magnet PDF, linked from `thank-you.html`
- `_build_pdf.py` — local-only Python script that regenerates the PDF (gitignored, never pushed)
- `faq.html` — FAQ page
- `all-testimonials.html` — full testimonials with Google review snippets
- `blog/index.html` — blog landing page
- `blog/week-N.html` — weekly SEO blog posts
- `blog-rotator.js` — handles featured/recent blog rotation on the homepage
- `style.css` — main stylesheet
- `.gitignore` — hides PDF tooling, Python artifacts, and `.Codex/` session files

Add newly discovered important files to this section as you encounter them.

### Backup files — IGNORE unless explicitly asked

The repo contains several dated snapshot copies of the homepage that **you should never reference, fix, or worry about** unless I specifically ask you to look at them:

- `index_working_April_2026` (no .html extension)
- `index_Template_Dec2025_V2` (no .html extension)
- `index_Template_Dec2025.html`
- `index_template7.html`
- `style_template7.css`

These are archives. They are NOT linked from the live site. Treat them as if they don't exist.

---

## Out of Scope

This repo is **only** for Photo Scanning Studio. If I mention these, treat as context only:
- eBay/Amazon arbitrage, Market America/Shop.com, Isotonix sites
- NYNightlife.com, MobileDogGrooming.com, FastFotoGuide, dailywellnessquiz
- LeoBot / PhilBot / NYBot / bot framework code
- Tax workflows, unrelated app projects, other GitHub Pages sites

---

## Final Working Principle

The best version of photoscanningstudio.com should feel like:

> **A warm, modern, trustworthy local Buffalo-area service where families feel safe handing Dan their irreplaceable photos — and where getting a quote is simple, fast, and low-pressure.**

When in doubt, optimize for: trust, clarity, mobile usability, lead capture, local SEO, simple maintenance, preserving what already works.
