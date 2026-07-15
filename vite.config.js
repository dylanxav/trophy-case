import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// On GitHub Pages "project" sites the app is served from /<repo>/, so the
// deploy workflow passes VITE_BASE=/<repo>/. Locally it defaults to '/'.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})