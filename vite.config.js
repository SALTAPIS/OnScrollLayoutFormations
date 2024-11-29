import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        v2: resolve(__dirname, 'v2/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    rewrites: [
      {
        source: '/v2',
        destination: '/v2/index.html'
      },
      {
        source: '/v2/',
        destination: '/v2/index.html'
      }
    ]
  },
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  },
  optimizeDeps: {
    include: ['gsap/all']
  }
}) 