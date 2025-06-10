// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    preview: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        'ismola.dev',
        '.ismola.dev', // para subdominios
        // añade aquí cualquier otro host o subdominio que Cloudflare pueda usar
      ]
    },
    server: {
      allowedHosts: ['*']
    },
    plugins: [tailwindcss()]
  }
});