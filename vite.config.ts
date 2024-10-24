import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  build: {
    chunkSizeWarningLimit: 1700,
    outDir: "build",
    minify: "esbuild",
    manifest: true,
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const HugeLibraries = ["three"]; // modify as required based on libraries in use
          if (
            HugeLibraries.some((libName) =>
              id.includes(`node_modules/${libName}`),
            )
          ) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
});
