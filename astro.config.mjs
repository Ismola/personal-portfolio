// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://ismola.dev",
  base: "/",
  vite: {
    preview: {
      // Permite cualquier host en preview
      allowedHosts: true
    },
    server: {
      allowedHosts: true
    },
    plugins: [tailwindcss()]
  }
});