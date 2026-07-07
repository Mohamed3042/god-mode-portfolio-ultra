// @ts-check
import { defineConfig } from 'astro/config';

// God Mode Portfolio ULTRA — deployed to GitHub Pages (project site).
// Live URL: https://mohamed3042.github.io/god-mode-portfolio-ultra/
// (account renamed from engineeringprojectswork-droid; old *.github.io URLs don't redirect)
export default defineConfig({
  site: 'https://mohamed3042.github.io',
  base: '/god-mode-portfolio-ultra',
  trailingSlash: 'ignore',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  devToolbar: { enabled: false },
});
