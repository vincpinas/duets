import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "/duets",
    port: 3000
  },
  build: {
    emptyOutDir: true,
    outDir: "../duets"
  },
  plugins: [react()],
  base: './',
})
