import { defineConfig } from 'astro/config';

// GitHub Pages publica este repo en appgestia.github.io/appgestia.landing/; la app sigue en la raíz.
export default defineConfig({
  site: 'https://appgestia.github.io',
  base: '/appgestia.landing',
  build: { inlineStylesheets: 'always' },
});
