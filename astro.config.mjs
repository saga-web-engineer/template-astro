// @ts-check
import { defineConfig } from "astro/config";

import { siteUrl } from "./site-setting";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "src/styles/tool" as *;`,
        },
      },
    },
  },
  // compressHTML: false,
  // prefetch: {
  //   prefetchAll: true
  // }
});