// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://ismola.dev/",
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true, // Permite conexiones externas
      allowedHosts: ['ismola.dev'], // Permite ismola.dev en modo dev
    },
    preview: {
      allowedHosts: ['ismola.dev'],
    },
  },
  security: {
    checkOrigin: false,
  },

});