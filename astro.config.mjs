import sitemap from "@astrojs/sitemap";
// @ts-check
import { defineConfig } from "astro/config";

import { SITE_URL } from "./site-settings";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
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
