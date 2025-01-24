import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import awsAmplify from 'astro-aws-amplify';
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://ismola.dev/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://ismola.dev/sitemap-index.xml",
        "https://ismola.dev/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: awsAmplify(),

  vite: {
    assetsInclude: "**/*.riv",
  },
});
