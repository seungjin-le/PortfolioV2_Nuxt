import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/css/index.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vite: {
    plugins: [tailwindcss() as unknown as Plugin],
  },
})
