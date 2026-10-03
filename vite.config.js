// Source - https://stackoverflow.com/a/78743333
// Posted by Hasan Uddin, modified by community. See post 'Timeline' for change history
// Retrieved 2026-10-03, License - CC BY-SA 4.0

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //base:"/Educa/",
  plugins: [react()],
})
