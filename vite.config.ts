import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações para SEO e performance
    minify: "esbuild", // Usar esbuild que é mais rápido
    rollupOptions: {
      output: {
        // Melhor tree-shaking e chunking
        manualChunks: {
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          icons: ["lucide-react"],
          forms: ["react-hook-form", "@hookform/resolvers", "zod"],
        },
      },
    },
    // Compressão de assets
    assetsInlineLimit: 4096, // Inline pequenos assets como base64
    cssCodeSplit: true, // Split CSS por chunks
    sourcemap: false, // Remove sourcemaps em produção para melhor performance
  },
  // Otimizações de performance
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "lucide-react"],
  },
});
