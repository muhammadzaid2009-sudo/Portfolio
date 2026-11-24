# improve.md: Portfolio upgrade brief for the agent

You are upgrading the personal security portfolio of **Muhammad Zaid** (first-year CS student, cybersecurity, SOC L1 intern).
Live site: https://muhammad-zaid-portfolio-one.vercel.app/
Repo: https://github.com/muhammadzaid2009-sudo/Portfolio

**Goal:** make the site look and feel like it was designed and built by a professional UI/UX developer: modern, polished, fast, responsive, accessible, and credible to recruiters and security hiring managers.

Read this whole file first, then work through the phases in order. Commit after each phase with a clear message.

---

## 0. Ground rules (do not break these)

1. **Stay honest.** Never invent metrics, employers, certifications, projects, testimonials, dates, or ratings. Only use facts already in the repo or provided by the owner. If something is missing, leave a clearly marked item in `TODO-FOR-OWNER.md`, never on the live page.
2. **Keep the privacy rules.** No client names, internal systems, or real employer telemetry. The hero alert stays labelled as synthetic sample data. All offensive-security content refers to authorized labs only.
3. **Keep it a fast static site.** No backend, no trackers, no analytics, no third-party widgets that can break. Vanilla HTML/CSS/JS is preferred. A tiny build step is acceptable only if it clearly helps (and the README must document it). No heavy frameworks.
4. **Keep the existing concept:** the "case file / analyst workbench" identity (slate paper background, navy ink, one cobalt accent, amber/red only for genuine severity cues, mono type only for log-style content). Elevate it. Do not replace it with a generic template or a "hacker terminal" cliché.
5. **No regressions:** skip link, semantic landmarks, focus outlines, dark mode, print stylesheet and `prefers-reduced-motion` support must all keep working.
6. The site must still be usable with JavaScript disabled (animations are progressive enhancement).

---

## Phase 1: Content cleanup (do this first; highest impact, lowest effort)

Remove everything that reads like developer notes or placeholders on the live page:

- [ ] Delete the visible `[Add a featured project TODO]` under Python Projects.
- [ ] Delete the visible `[confirm depth]` next to "Hands-on" in Skills.
- [ ] Fix the Writing section: remove the empty "Recent article titles and dates" placeholder row. Replace it with a plain description of the Medium profile, or real article titles if the owner supplies them.
- [ ] Remove the meta-notes written for the developer, e.g. "The repository README lists walkthrough titles but no publication dates. I've kept this overview undated instead of guessing." and "The repository README does not yet describe individual projects."
- [ ] Python Projects card: either write a proper README in that repo and describe one real project, or remove the card from the page. Do not advertise an undocumented repo.
- [ ] Experience date: change "Present / 10/24/2026" to an unambiguous format such as **"Oct 2026 – Present"**.
- [ ] Make all dates consistent (e.g. "Nov 2026") across Experience and Certifications.
- [ ] Link "TryHackMe top 1% / 250+ labs / 140+ day streak" to the public TryHackMe profile so the claims are verifiable.
- [ ] Soften or remove "OSEP-style red-team preparation" under Planned next (too large a claim for a first-year student). Prefer something like "Active Directory attack and defense labs".
- [ ] Add a short **downloadable CV/resume (PDF)** button in the hero and contact section (create a `TODO-FOR-OWNER.md` entry asking the owner to supply the PDF if it isn't in the repo).

## Phase 2: Show real proof of work (the biggest credibility gain)

The projects section currently says "early experiments" and shows no output. Add evidence:

- [ ] **Featured case study (on-site):** a sanitized Wazuh/SOC investigation, using only synthetic or lab data (e.g. path-traversal requests, 404/5xx bursts, Shellshock rule 31168 scenario). Structure: *Alert → Triage → Evidence → Conclusion → What I'd do next*. Include a styled log excerpt block (mono type, severity chip) and a short timeline graphic.
- [ ] **Featured write-up preview:** pick one TryHackMe write-up from the Write-Ups repo and show a summary card on the site (approach, key finding, lesson) with a link to the full write-up.
- [ ] **Tool demo:** pick one script from Scripts-and-Tools and show a code snippet plus sample input/output, or a short screenshot.
- [ ] Give each project card: a clear one-line outcome, tech chips, status chip (Ongoing / Experimental / Published), and links (repo / live / write-up).
- [ ] Store project data in **one source of truth**. Currently `content/*.json` exists but the page ignores it, and `index.html` is hardcoded, so they can drift apart. Either (a) render the page sections from the JSON with a small vanilla JS loader that has a static HTML fallback, or (b) delete the unused JSON. Pick one and document it in the README.

---

## Phase 3: Visual design system (make it look professionally designed)

Establish a real design system in `styles.css` using CSS custom properties, and apply it consistently.

**Design tokens**
- [ ] Type scale (fluid, using `clamp()`), e.g. 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64–80px for the hero.
- [ ] Spacing scale on a 4/8px grid (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).
- [ ] Radius, border, and shadow tokens (subtle, layered shadows, not harsh drop shadows).
- [ ] Color tokens for light and dark, including surface, surface-raised, border, text-primary, text-muted, accent, accent-hover, success/warn/danger.
- [ ] Verify WCAG AA contrast (4.5:1 body, 3:1 large text/UI) in both themes.

**Typography**
- [ ] **Minimum text size 12px for UI labels and 14–16px for body copy.** Currently a lot of text is 8–11px (eyebrows, notes, credential links, footer, diagram labels), which is too small. Fix all of it.
- [ ] Choose a distinctive but performant font pairing. Prefer self-hosted variable fonts (e.g. Inter / Geist / Manrope for UI, JetBrains Mono / Geist Mono for log content) with `font-display: swap`, `preload`, and subsetting. No render-blocking third-party font requests.
- [ ] Better hierarchy: tighter heading letter-spacing, comfortable line-height (1.5–1.7 body, 1.05–1.2 headings), consistent measure (60–75ch for paragraphs).

**Layout and polish**
- [ ] Consistent section rhythm: generous vertical padding, aligned grid, clear section dividers.
- [ ] Refine the left identity rail on desktop: active-section highlighting (scroll-spy), progress indicator, smooth hover states.
- [ ] Upgrade cards: consistent heights, hover lift, border highlight, focus-visible states, subtle depth.
- [ ] Upgrade the hero: stronger composition, a more refined synthetic alert panel (animated severity chip, typed/streamed log lines that are clearly sample data), subtle background texture or grid in the case-file style (CSS only, very light).
- [ ] Add small, consistent iconography (inline SVG, one icon family, same stroke width) for links, status, and sections.
- [ ] Polish buttons and links: clear primary/secondary/tertiary styles, hover/active/focus/disabled states, consistent external-link arrow behaviour.
- [ ] Add a refined footer with quick links, "last updated" date, and a back-to-top button.
- [ ] Create a custom 404 page (`404.html`) in the same style.

---

## Phase 4: UX improvements

- [ ] **Clear call to action hierarchy:** one primary CTA in the hero ("View my work" or "Download CV"), one secondary ("Get in touch"). Repeat a CTA at the end of the page.
- [ ] **Scannable in 10 seconds:** within the first screen a visitor should see name, role, focus, a proof point (SOC intern / THM top 1%), and CTAs.
- [ ] **Sticky/compact navigation** on mobile with an accessible menu (button with `aria-expanded`, focus trap not required, Esc to close, 44px touch targets).
- [ ] **Scroll-spy** active state for nav links; smooth scrolling with `scroll-margin-top` so headings are not hidden under sticky UI.
- [ ] **Theme toggle** (light / dark / system) with the choice remembered in `localStorage` (wrap in try/catch) and no flash of wrong theme on load.
- [ ] **Copy-to-clipboard** button for the email address, with an accessible confirmation ("Copied").
- [ ] **Project filtering/tags** (optional, only if there are 5+ items): filter by Blue team / Red team / Python / Writing, keyboard accessible.
- [ ] External links open in a new tab with `rel="noopener noreferrer"` and show a visually-hidden "(opens in new tab)" for screen readers.
- [ ] Improve the Certifications section: consistent logos/marks, clear issuer, date, verify link, and a "Verified" cue that is only shown where there is a real verification URL.
- [ ] Add a lightweight **contact options** block (email, LinkedIn, GitHub) with clear labels. No contact form or backend is needed.

---

## Phase 5: Animations and motion (tasteful, purposeful, performant)

Motion should support the "analyst workbench" theme: precise, quick, and never distracting.

- [ ] **Entrance animations:** sections and cards fade/slide up slightly (8–16px) when they enter the viewport, using `IntersectionObserver` and CSS transitions. Stagger children by 40–80ms. Animate each element once.
- [ ] **Hero:** a short load sequence: headline reveal, the synthetic alert panel "arrives" with a severity pulse, and the log lines appear in sequence. Total under ~1.2s, and never blocking content.
- [ ] **Micro-interactions:** button hover/press states, card hover lift (translateY(-2px) plus a border/shadow shift), link underline slide, nav indicator that slides between items.
- [ ] **Home lab diagram:** animate the flow (Kali → targets → Wazuh → write-up) with a subtle moving dash or pulse along the connector lines, and highlight each node in sequence on scroll-in. Keep the text alternative.
- [ ] **Skills chips:** a quick staggered reveal on scroll.
- [ ] **Scroll progress bar** (thin, accent color) at the top of the page, optional.
- [ ] **Performance rules:** animate only `transform` and `opacity`. Use `will-change` sparingly. No layout-thrashing scroll handlers (use `IntersectionObserver` or `requestAnimationFrame` throttling). Keep animations at 60fps on a mid-range phone.
- [ ] **Accessibility:** wrap all non-essential motion in `@media (prefers-reduced-motion: no-preference)`. Under `reduce`, show final states instantly with no movement. No auto-playing motion longer than 5 seconds without a way to pause. No flashing.
- [ ] If JS fails, content must still be fully visible (use a `.js` class on `<html>` to enable the hidden-until-revealed initial states, so no-JS visitors never see invisible content).

---

## Phase 6: Responsiveness

Design mobile-first and verify at **320, 360, 390, 414, 768, 820, 1024, 1280, 1440, 1920, and 2560px** widths, in portrait and landscape.

- [ ] Fluid layout using CSS Grid/Flexbox, `clamp()` for type and spacing, `min()/max()` for container widths. No fixed-pixel layouts that overflow.
- [ ] **No horizontal scroll** at any width (test with long emails, long URLs, and the code/log blocks).
- [ ] Desktop: left rail plus content. Tablet: compact top bar. Mobile: sticky top bar with menu, full-width sections.
- [ ] **The home lab diagram must be readable on phones:** the current SVG uses 8–9px text on a 920-wide `viewBox`, which is illegible when scaled down. Either (a) redesign it as a vertical stacked flow on narrow screens (separate mobile SVG or HTML/CSS version), or (b) wrap in a horizontally scrollable container with a visible scroll hint and larger text. The text alternative stays.
- [ ] Touch targets at least 44×44px, with adequate spacing between tappable links.
- [ ] Use `dvh`/`svh` units carefully for the hero so mobile browser bars don't cause jumps.
- [ ] Images: `width`/`height` attributes set to prevent layout shift, `loading="lazy"` below the fold, modern formats (WebP/AVIF) with fallbacks where raster images are used.
- [ ] Respect `safe-area-inset` on notched phones.
- [ ] Ensure the dark theme and print stylesheet still look right at all sizes.

---

## Phase 7: SEO, sharing and metadata (currently pointing at the wrong URL)

- [ ] Set `<link rel="canonical">`, `og:url`, sitemap `<loc>`, and the `Sitemap:` line in `robots.txt` to the **Vercel primary URL** (`https://muhammad-zaid-portfolio-one.vercel.app/`). They currently point to the GitHub Pages mirror, which tells search engines the mirror is the real site. If the mirror stays, it should canonical to Vercel.
- [ ] **Replace the SVG OG image with a PNG (or JPG), 1200×630.** LinkedIn, X and Facebook generally don't render SVG previews. Use an absolute URL on the Vercel domain. Add `og:image:width`, `og:image:height`, `og:image:alt`, `og:url`, `og:site_name`, and `twitter:image:alt`.
- [ ] Add JSON-LD structured data (`Person` schema: name, jobTitle, url, sameAs links to GitHub, LinkedIn, TryHackMe, Medium).
- [ ] Add PNG favicons plus `apple-touch-icon` and a `site.webmanifest`, alongside the existing SVG favicon.
- [ ] Add a `vercel.json` with sensible security and caching headers (`Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, long-cache for hashed/static assets). This is a security portfolio, so it should visibly practise good security hygiene.
- [ ] Remove unnecessary `aria-live="polite"` from the static hero alert (it isn't dynamic).

---

## Phase 8: Performance and accessibility targets

Run Lighthouse (mobile) and aim for **95+ in Performance, Accessibility, Best Practices, and SEO**.

- [ ] LCP under 2.5s, CLS under 0.1, INP under 200ms.
- [ ] Inline critical CSS or keep CSS small. Minify CSS/JS for production. No unused CSS.
- [ ] Self-host and subset fonts. Preload the primary font only.
- [ ] Run an axe or WAVE pass: fix all errors. Verify full keyboard navigation (logical tab order, visible focus, no traps), correct heading order (one `h1`), meaningful `alt` text, and proper `aria-label`s on icon-only links.
- [ ] Test with a screen reader (VoiceOver or NVDA) at least on the hero, nav, and one project card.

---

## Phase 9: Repo and documentation hygiene

- [ ] README: remove every `<!-- CONFIRM -->` and `<!-- TODO -->` comment. Make it accurate. It claims "vanilla JavaScript" but the page has none, and the project tree is a stub, so update both to match reality once the new code exists.
- [ ] Add a real **desktop and mobile screenshot** (`docs/screenshot-desktop.png`, `docs/screenshot-mobile.png`) and enable it in the README.
- [ ] Choose and add a license (e.g. MIT for code; all rights reserved for personal content and certificates), and document it.
- [ ] Update the project structure in the README to the real file tree, and document how content is edited (JSON vs HTML), how to run locally, and how deployment works.
- [ ] Update `CHANGELOG.md` with one entry per phase.
- [ ] Add a minimal GitHub Actions workflow (or documented npm script) for HTML validation, link checking, and a Lighthouse check, if it can be done without adding heavy dependencies.
- [ ] Keep `.gitignore` as is (it already excludes `/portfolio.md` and secrets).

---

## Definition of done

- No placeholder, TODO or developer-note text is visible anywhere on the live site.
- The site looks cohesive and professionally designed at every width from 320px to 2560px, in light and dark.
- Animations are smooth, subtle and fully disabled under `prefers-reduced-motion`.
- At least one real case study and one real write-up/tool sample are shown on the site.
- Canonical URL, sitemap, robots, and OG image all point to the Vercel site, and the social preview renders correctly on LinkedIn.
- Lighthouse mobile scores are 95+ across the board, and axe reports no errors.
- README, CHANGELOG, and screenshots are accurate and up to date.

## Final report

When finished, summarize: what changed per phase, before/after Lighthouse scores, anything you could not do (and why), and the list of items in `TODO-FOR-OWNER.md` that need input from Muhammad (CV PDF, article titles, project descriptions, case-study details).
