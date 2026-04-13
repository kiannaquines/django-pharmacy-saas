<template>
  <aside id="app-menu" class="app-menu">
    <a href="/" class="logo-box sticky top-0 flex min-h-topbar-height items-center justify-start px-6 backdrop-blur-xs">
      <div class="logo-light">
        <img :src="lightlogo" class="logo-lg h-6" alt="Light logo" />
        <img :src="logo" class="logo-sm h-6" alt="Small logo" />
      </div>
      <div class="logo-dark">
        <img :src="darklogo" class="logo-lg h-6" alt="Dark logo" />
        <img :src="logo" class="logo-sm h-6" alt="Small logo" />
      </div>
    </a>

    <div class="absolute top-0 end-5 flex h-topbar items-center justify">
      <button id="button-hover-toggle" class="" @click="toggleSidebar">
        <Icon icon="tabler:circle" class="iconify size-5" />
      </button>
    </div>

    <div class="relative min-h-0 flex-grow">
      <simplebar class="size-full" data-simplebar>
        <AppMenu />
      </simplebar>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import darklogo from '~/assets/images/logo-dark.png'
import lightlogo from '~/assets/images/logo-light.png'
import logo from '~/assets/images/logo-sm.png'
import { useLayout } from '~/stores/layout'
import AppMenu from './components/AppMenu.vue'

const { layout, setSideNavSize } = useLayout()

const toggleSidebar = () => {
  setSideNavSize(layout.sidenav.size === 'hover-active' ? 'hover' : 'hover-active')
}
</script>
