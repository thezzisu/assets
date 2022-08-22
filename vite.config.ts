import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { join } from 'path'
import markdown from './build/markdown'

export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    quasar({
      sassVariables: 'src/quasar-variables.sass'
    }),
    markdown()
  ],
  resolve: {
    alias: {
      src: join(__dirname, 'src'),
      app: __dirname
    }
  }
})
