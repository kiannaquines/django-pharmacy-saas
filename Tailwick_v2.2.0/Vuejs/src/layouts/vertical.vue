<template>
  <div class="wrapper">
    <MobileMenu v-if="layout.sidenav.size === 'offcanvas'" />
    <SideNav v-else-if="layout.sidenav.size !== 'hidden'" />
    <div class="page-content">
      <Topbar />
      <main :class="mainClass">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
  <client-only>
    <Customizer />
  </client-only>
</template>

<script setup lang="ts">
import Customizer from '@/layouts/components/customizer/index.vue'
import Footer from '@/layouts/components/footer/index.vue'
import MobileMenu from '@/layouts/components/mobile-menu/index.vue'
import SideNav from '@/layouts/components/sidenav/index.vue'
import Topbar from '@/layouts/components/topbar/index.vue'
import { useLayout } from '@/stores/layout'
import { onMounted } from 'vue'

defineProps<{ mainClass?: string }>()

const { layout, setSideNavSize } = useLayout()

onMounted(() => {
  const resize = () => {
    if (window.innerWidth <= 768) {
      setSideNavSize('offcanvas')
    } else if (window.innerWidth <= 1140) {
      setSideNavSize('default')
    } else {
      setSideNavSize('default')
    }
  }

  resize()
  window.addEventListener('resize', resize)
})
</script>
