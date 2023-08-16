import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import KumaUI from '@kuma-ui/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), KumaUI()],
  server: {
    hmr: {
      host: 'localhost'
    },
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components')
    }
  }
})
