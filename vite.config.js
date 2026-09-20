import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * GitHub Pages has no rewrite rules: a request for a deep link such as
 * /PlutosRevenge/fullview would return GitHub's own 404 page and the app would
 * never boot. Serving a copy of index.html as 404.html hands those requests to
 * the app with the requested path still intact, so the router (and, later, the
 * session guard) can decide what to do with them.
 *
 * This works at any hosting depth because Vite writes base-prefixed absolute
 * asset URLs into index.html, so no path rewriting or query encoding is needed.
 */
function spaDeepLinkFallback() {
  let outDir = 'dist';
  return {
    name: 'spa-deep-link-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const index = resolve(outDir, 'index.html');
      if (existsSync(index)) {
        copyFileSync(index, resolve(outDir, '404.html'));
      }
    },
  };
}

// The game is deployed to GitHub Pages at https://gokhanipek.github.io/PlutosRevenge/,
// so assets and routes live under a sub-path. `base` is the single source of truth:
// the router reads it back as `import.meta.env.BASE_URL` and uses it as its basename.
export default defineConfig({
  base: '/PlutosRevenge/',
  plugins: [react(), spaDeepLinkFallback()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
