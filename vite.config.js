import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "src/pages/home.html",
  },
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "src/pages/home.html"),
        about: resolve(__dirname, "src/pages/about.html"),
        locations: resolve(__dirname, "src/pages/locations.html"),
        careers: resolve(__dirname, "src/pages/careers.html"),
      },
    },
  },
});
