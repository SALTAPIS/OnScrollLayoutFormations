import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true
  },
  optimizeDeps: {
    include: ['gsap/all']
  }
}) 