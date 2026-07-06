import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/**
 * Build-time drop-in asset resolver. Returns the first candidate that actually
 * exists in /public (as a root-relative path), else null. Lets real photos / hero
 * art / 3D models drop in later with NO markup changes — just add the file + redeploy.
 *   firstPublicAsset(['assets/portrait.webp','assets/portrait.jpg'])
 */
export function firstPublicAsset(candidates: string[]): string | null {
  for (const rel of candidates) {
    const clean = rel.replace(/^\/+/, '');
    try {
      const p = fileURLToPath(new URL(`../../public/${clean}`, import.meta.url));
      if (existsSync(p)) return '/' + clean;
    } catch { /* ignore */ }
  }
  return null;
}

export const PORTRAIT_CANDIDATES = ['assets/portrait.webp', 'assets/portrait.jpg', 'assets/portrait.png'];
export function heroArtCandidates(theme: string): string[] {
  return [`assets/hero/${theme}.webp`, `assets/hero/${theme}.jpg`, `assets/hero/${theme}.png`];
}
