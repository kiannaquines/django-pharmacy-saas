import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  routeRules: {
    '/': { redirect: '/dashboard/ecommerce' }
  },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  css: ['~/assets/css/style.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['preline']
    }
  }
})
