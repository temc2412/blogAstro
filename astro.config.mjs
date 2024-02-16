import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://temc2412-blogastro.netlify.app",
  integrations: [preact()]
});