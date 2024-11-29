import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 5173,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        original: resolve(__dirname, 'original/index.html'),
        v2: resolve(__dirname, 'v2/index.html'),
        v3: resolve(__dirname, 'v3/index.html')
      }
    }
  },
  optimizeDeps: {
    exclude: ['lenis.min.js']
  },
  css: {
    devSourcemap: false
  },
  resolve: {
    alias: {
      '@img': resolve(__dirname, 'img'),
      '@': resolve(__dirname, '.')
    }
  },
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.webp'],
  publicDir: 'public',
  base: '/',
  experimental: {
    renderBuiltUrl(filename) {
      if (filename.startsWith('img/')) {
        return '/' + filename
      }
      return filename
    }
  }
}) 