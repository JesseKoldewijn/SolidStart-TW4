import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
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
});
