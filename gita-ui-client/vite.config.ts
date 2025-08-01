import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // important for Electron to find index.html
  build: {
    outDir: 'dist/renderer',
    emptyOutDir: true,
  },
})
