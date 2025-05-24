import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/uidk/',
  server: {
    allowedHosts: [
      '4e73-2402-e280-3e02-7d9-cdb6-89d2-61d3-7a6b.ngrok-free.app'
    ]
  },
  build: {
    outDir: 'docs',
  },

})
