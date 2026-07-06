# God Mode Portfolio — ULTRA · Mohamed Mahmoud

One portfolio that fully transforms into **seven distinct brand-styled worlds** — Razer, Disney+,
Call of Duty, Netflix, Spotify, Apple and Samsung — plus a neutral **Hub**. **ULTRA** edition:
rebuilt for an **identical, great experience on phone and desktop**, with a full-screen identity
picker, keyboard + swipe switching, a cinematic accent-aware backdrop, themed switch transitions,
and default-muted sound. Same real story, seven completely different bodies.

> **A design tribute / style study — not affiliated with these brands.**
> Every wordmark is an original **MOHAMED** mark drawn in each brand's *aesthetic* — no lifted logos.

**Live:** https://engineeringprojectswork-droid.github.io/god-mode-portfolio-ultra/

## The seven identities

| Route | Framing | Signature motion |
|---|---|---|
| `/` | **God Mode** hub | Character-select of the seven identities + hero number |
| `/razer` | **Mohamed // Loadout** | Chroma RGB sweep · scanline boot · grid parallax · border-trace · count-up · glitch |
| `/disney` | **Mohamed Originals** | Castle + gold arc-sweep + fireworks boot · starfield parallax · shimmer-swipe reveals |
| `/cod` | **Operator: Mohamed** | "DEPLOYING…" bar + coordinate typing · radar + blips · tracers · rain · target-lock · screen-shake |
| `/netflix` | **Now Watching: Mohamed** | "Who's watching?" profile gate → zoom · Ken Burns billboard · rows · Top-10 |
| `/spotify` | **This Is Mohamed** | Pinned now-playing bar · equalizer · morphing blob · text-sheen · color-bleed |
| `/apple` | **Think Different** | Spotlight boot · floating orbs · gradient-sheen headline · glass cards · titanium operator card · bento builds |
| `/samsung` | **Mohamed Ultra** | Power-on sweep boot · cosmic ring · orbiting particles · starfield · spec-sheet rows · glowing model cards |

## What "ULTRA" adds over the base build

- **Phone/PC parity** — mobile breakpoints on every theme, all hover-only content revealed on touch,
  ≥44px tap targets, safe-area insets, no horizontal overflow, anchor offsets under the fixed nav.
- **Command-palette switcher** — a persistent top bar (inline pills on desktop) + a full-screen
  **◈ Worlds** identity picker that works identically on touch and mouse. Press **G** to open,
  **← →** to switch, or **swipe** on mobile.
- **Cinematic layer** — a shared accent-aware **aurora backdrop** that re-tints per theme, a themed
  **switch-wipe** transition, staggered reveals, and richer per-theme depth.
- **Sound** — default-muted WebAudio SFX behind a toggle (never autoplays).
- **Performance** — all decorative animation pauses when the tab is hidden; heavy FX are throttled or
  dropped on phones; canvas loops terminate; fonts load non-blocking. Full `prefers-reduced-motion` +
  no-JS fallbacks.
- **Drop-in asset slots** — add `public/assets/portrait.{webp,jpg,png}` (and per-theme hero art) and it
  appears automatically on the next deploy, no code changes.

## Stack & architecture

- **Astro 5 + TypeScript** — static output, one content model → seven skins.
- **CSS-custom-property theme engine** — `[data-theme="…"]` swaps a full token set. See `src/styles/global.css`.
- **Vanilla JS / Canvas / CSS motion** — no heavy animation library → tiny bundle, high Lighthouse.

### Key files
- `src/data/profile.ts` — the single source of truth (all real content).
- `src/lib/themes.ts` · `src/lib/wordmarks.ts` · `src/lib/blurbs.ts` · `src/lib/assets.ts`
- `src/layouts/Base.astro` — shell, aurora, cursor, sound, switch-wipe, reveal/count-up, boot.
- `src/components/GmSwitcher.astro` — top bar + ◈ Worlds picker.
- `src/components/{Hub,Netflix,Spotify,Razer,Cod,Disney,Apple,Samsung}.astro` — the bespoke worlds.

## Content & truthfulness guardrails

All numbers are Mohamed's real, verified data — never inflated:
- Hero: **1,000,000+** followers grown · **$0.84** per lead · **1** person.
- **45 active leads** (lead generation → **0 closed sales**; deals are closed downstream).
- 1M+ follower growth and 2025 ad figures are **self-reported** → rendered with an asterisk.
- Shipped software is **spec-driven / AI-assisted** — Mohamed architects and directs the build.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/god-mode-portfolio-ultra/
npm run build    # → dist/
npm run preview
```

## Deploy

Pushes to `main` build and publish to **GitHub Pages** via `.github/workflows/deploy.yml`
(`withastro/action` → `actions/deploy-pages`). `site` + `base` are set in `astro.config.mjs`.
