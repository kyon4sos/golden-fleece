import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import * as path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src/")
      }
    ]
  },
  build: {
    target: 'es2015',
    outDir: './dist/',
    cssCodeSplit: true
  }
})
