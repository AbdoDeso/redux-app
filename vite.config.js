import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/redux-app/', // MUST be '/' for Vercel/Netlify. Remove any '/mobile-store-app/' setting.
})