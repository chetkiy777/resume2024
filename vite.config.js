import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/chetkiy777/resume2024",
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    }),
  ],
})
