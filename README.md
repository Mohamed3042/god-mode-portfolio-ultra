# God Mode Portfolio â€” ULTRA Â· Mohamed Mahmoud

One portfolio that fully transforms into **seven distinct brand-styled worlds** â€” Razer, Disney+,
Call of Duty, Netflix, Spotify, Apple and Samsung â€” plus a neutral **Hub**. **ULTRA** edition:
rebuilt for an **identical, great experience on phone and desktop**, with a full-screen identity
picker, keyboard + swipe switching, a cinematic accent-aware backdrop, themed switch transitions,
and default-muted sound. Same real story, seven completely different bodies.

> **A design tribute / style study â€” not affiliated with these brands.**
> Every wordmark is an original **MOHAMED** mark drawn in each brand's *aesthetic* â€” no lifted logos.

**Live:** https://mohamed3042.github.io/god-mode-portfolio-ultra/

## The seven identities

| Route | Framing | Signature motion |
|---|---|---|
| `/` | **God Mode** hub | Character-select of the seven identities + hero number |
| `/razer` | **Mohamed // Loadout** | Chroma RGB sweep Â· scanline boot Â· grid parallax Â· border-trace Â· count-up Â· glitch |
| `/disney` | **Mohamed Originals** | Castle + gold arc-sweep + fireworks boot Â· starfield parallax Â· shimmer-swipe reveals |
| `/cod` | **Operator: Mohamed** | "DEPLOYINGâ€¦" bar + coordinate typing Â· radar + blips Â· tracers Â· rain Â· target-lock Â· screen-shake |
| `/netflix` | **Now Watching: Mohamed** | "Who's watching?" profile gate â†’ zoom Â· Ken Burns billboard Â· rows Â· Top-10 |
| `/spotify` | **This Is Mohamed** | Pinned now-playing bar Â· equalizer Â· morphing blob Â· text-sheen Â· color-bleed |
| `/apple` | **Think Different** | Spotlight boot Â· floating orbs Â· gradient-sheen headline Â· glass cards Â· titanium operator card Â· bento builds |
| `/samsung` | **Mohamed Ultra** | Power-on sweep boot Â· cosmic ring Â· orbiting particles Â· starfield Â· spec-sheet rows Â· glowing model cards |

## What "ULTRA" adds over the base build

- **Phone/PC parity** â€” mobile breakpoints on every theme, all hover-only content revealed on touch,
  â‰¥44px tap targets, safe-area insets, no horizontal overflow, anchor offsets under the fixed nav.
- **Command-palette switcher** â€” a persistent top bar (inline pills on desktop) + a full-screen
  **â—ˆ Worlds** identity picker that works identically on touch and mouse. Press **G** to open,
  **â† â†’** to switch, or **swipe** on mobile.
- **Cinematic layer** â€” a shared accent-aware **aurora backdrop** that re-tints per theme, a themed
  **switch-wipe** transition, staggered reveals, and richer per-theme depth.
- **Sound** â€” default-muted WebAudio SFX behind a toggle (never autoplays).
- **Performance** â€” all decorative animation pauses when the tab is hidden; heavy FX are throttled or
  dropped on phones; canvas loops terminate; fonts load non-blocking. Full `prefers-reduced-motion` +
  no-JS fallbacks.
- **Drop-in asset slots** â€” add `public/assets/portrait.{webp,jpg,png}` (and per-theme hero art) and it
  appears automatically on the next deploy, no code changes.

## Stack & architecture

- **Astro 5 + TypeScript** â€” static output, one content model â†’ seven skins.
- **CSS-custom-property theme engine** â€” `[data-theme="â€¦"]` swaps a full token set. See `src/styles/global.css`.
- **Vanilla JS / Canvas / CSS motion** â€” no heavy animation library â†’ tiny bundle, high Lighthouse.

### Key files
- `src/data/profile.ts` â€” the single source of truth (all real content).
- `src/lib/themes.ts` Â· `src/lib/wordmarks.ts` Â· `src/lib/blurbs.ts` Â· `src/lib/assets.ts`
- `src/layouts/Base.astro` â€” shell, aurora, cursor, sound, switch-wipe, reveal/count-up, boot.
- `src/components/GmSwitcher.astro` â€” top bar + â—ˆ Worlds picker.
- `src/components/{Hub,Netflix,Spotify,Razer,Cod,Disney,Apple,Samsung}.astro` â€” the bespoke worlds.

## Content & truthfulness guardrails

All numbers are Mohamed's real, verified data â€” never inflated:
- Hero: **1,000,000+** followers grown Â· **$0.84** per lead Â· **1** person.
- **45 active leads** (lead generation â†’ **0 closed sales**; deals are closed downstream).
- 1M+ follower growth and 2025 ad figures are **self-reported** â†’ rendered with an asterisk.
- Shipped software is **spec-driven / AI-assisted** â€” Mohamed architects and directs the build.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/god-mode-portfolio-ultra/
npm run build    # â†’ dist/
npm run preview
```

## Deploy

Pushes to `main` build and publish to **GitHub Pages** via `.github/workflows/deploy.yml`
(`withastro/action` â†’ `actions/deploy-pages`). `site` + `base` are set in `astro.config.mjs`.
