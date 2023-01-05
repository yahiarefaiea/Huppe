import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: "dist",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
        about: resolve(__dirname, "./about.html"),
        branding: resolve(__dirname, "./branding.html"),
        services: resolve(__dirname, "./services.html"),
        "contact-us": resolve(__dirname, "./contact-us.html"),
        "service-unique": resolve(__dirname, "./service-unique.html"),
      },
    },
  },
});
