import { SolidStartInlineConfig, defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

const isLocalPreview = process.env.LOCAL_PREVIEW === "true";

const config: SolidStartInlineConfig = {
  server: {
    preset: !isLocalPreview ? "vercel" : undefined,
    prerender: {
      crawlLinks: true,
      ignore: ["/api/*"],
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
