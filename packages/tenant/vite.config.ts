import { defineConfig } from 'vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import postcss from './postcss.config.js'
import * as path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    PkgConfig(),
    OptimizationPersist(),
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
    postcss,
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
