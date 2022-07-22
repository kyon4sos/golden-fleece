import { defineConfig } from 'vite'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import postcss from './postcss.config.js'
import * as path from 'path'
// import * as dotenv from 'dotenv'
// dotenv.config()
// console.log(import.meta)
console.log(process.env.NODE_ENV)
// https://vitejs.dev/config/

export default defineConfig({
  mode:"development",
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
        replacement: path.resolve(__dirname, "./src"),

      },
      // {
      //   find: "@blueprintjs",
      //   replacement: path.resolve(__dirname, "./node_modules/@blueprintjs")
      // }
    ]
  },
  build: {
    target: 'es2015',
    outDir: './dist/',
    cssCodeSplit: true
  }
})
