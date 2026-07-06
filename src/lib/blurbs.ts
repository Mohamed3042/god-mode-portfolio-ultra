import type { ThemeId } from './themes';

/** One-line "feel" for each identity — used by the Hub and the switcher picker. */
export const BLURBS: Record<ThemeId, string> = {
  hub: 'The neutral God Mode landing — choose an identity.',
  razer: 'Neon cyberpunk gaming HUD — RGB chroma, overclocked precision.',
  disney: 'Royal starfield — gold shimmer, fireworks, premium Originals.',
  cod: 'Tactical ops — deploy bars, radar sweep, dog-tag missions.',
  netflix: 'Cinematic billboard — profile gate, content rows, Top 10.',
  spotify: 'Artist page — now-playing bar, equalizer, top tracks.',
  apple: 'Pure-black keynote — billboard headline, glass tiles, titanium card.',
  samsung: 'Galaxy-black — cosmic ring, orbiting particles, starfield.',
};
