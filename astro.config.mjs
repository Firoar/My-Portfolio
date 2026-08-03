// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://iamchiranjivi.in',
  build: {
    // Three.js is lazy-loaded on demand; the resulting WebGL chunk is
    // intentionally larger than Vite's default 500 kB warn threshold.
    chunkSizeWarningLimit: 700,
  },
});
