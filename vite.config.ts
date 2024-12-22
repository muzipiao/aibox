import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import path from 'path'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/aibox/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    vueDevTools(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/i18n/locales/**')]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
