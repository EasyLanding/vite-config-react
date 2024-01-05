import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'analytics/dist',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          vendor: ['lodash']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lodash']
  },
  plugins: [react()]
})
