import { useRouter } from 'vue-router'

// Preline UI
import('preline/dist')

export default defineNuxtPlugin(() => {
  const router = useRouter()

  router.afterEach(async () => {
    setTimeout(() => window.HSStaticMethods.autoInit())
  })
})
