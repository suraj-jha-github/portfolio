import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap', '@gsap/react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  }
});
