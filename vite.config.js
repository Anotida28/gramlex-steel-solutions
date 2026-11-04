import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";
import { imagetools } from "vite-imagetools";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => ({
  // VITE_BASE_PATH env var controls the base path.
  // Railway: leave unset (defaults to "/").
  // GitHub Pages: set VITE_BASE_PATH=/gramlex-steel-solutions/ in the build command.
  base: process.env.VITE_BASE_PATH ?? "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    imagetools({
      // Strip EXIF/metadata and use sensible quality defaults for photos
      defaultDirectives: () => new URLSearchParams({ quality: "72" }),
    }),
    mode === "development" && componentTagger(),
    // Generate bundle visualization on production build
    mode === "production" &&
      visualizer({
        filename: "stats.html",
        open: false,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    include: ["src/**/*.{test,spec}.{js,jsx}"],
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/test/"],
    },
  },
}));
