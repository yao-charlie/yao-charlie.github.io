import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://yao-charlie.github.io',
  output: 'static',
  outDir: './build',
  build: {
    assets: 'astro'
  }
});