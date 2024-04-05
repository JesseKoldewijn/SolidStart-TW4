import { SolidStartInlineConfig, defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

const config: Partial<SolidStartInlineConfig> = {
  server: {
    preset: "vercel",
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      resolve: {
        alias: {
          "~/": "/src",
        },
      },
    },
  },
};

export default defineConfig(config);
