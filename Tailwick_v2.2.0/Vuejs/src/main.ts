import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/assets/css/style.css'
import 'preline/dist'

import { createHead } from '@vueuse/head'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersistedState)

app.use(pinia)
app.use(router)
app.use(createHead())

router.afterEach(() => {
  setTimeout(() => {
    if (window.HSStaticMethods?.autoInit) {
      window.HSStaticMethods.autoInit()
    }
  }, 0)
})

app.mount('#app')