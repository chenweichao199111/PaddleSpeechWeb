import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: 
    { preprocessorOptions:
      { css: 
        { 
          charset: false 
        } 
      } 
    },
  build: {
      assetsInlineLimit: '2048' // 2kb
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://10.180.253.74:8010",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
