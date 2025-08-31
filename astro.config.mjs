// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'ap73mka.github.io',
  base: '/museum-web',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});
