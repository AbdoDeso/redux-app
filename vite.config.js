import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
        tailwindcss()
  ],
  base: '/redux-app/', // Replace with your exact GitHub repository name
})