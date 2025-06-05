// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://ismola.dev/",
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['ismola.dev'],
    },
  },
  security: {
    checkOrigin: true,
  },

});