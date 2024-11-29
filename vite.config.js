import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        original: resolve(__dirname, 'original/index.html'),
        v2: resolve(__dirname, 'v2/index.html'),
        v3: resolve(__dirname, 'v3/index.html'),
      },
    },
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    open: true,
    cors: true,
    hmr: {
      port: 8080,
      clientPort: 8080,
      host: 'localhost'
    },
    watch: {
      usePolling: true
    },
    headers: {
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
    open: true
  },
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
    },
  }
}) 