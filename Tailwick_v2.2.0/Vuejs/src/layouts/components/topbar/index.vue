<template>
  <div class="app-header min-h-topbar-height flex items-center sticky top-0 z-30 bg-(--topbar-background) border-b border-default-200">
    <div class="w-full flex items-center justify-between px-6">
      <div class="flex items-center gap-5">
        <button id="button-toggle-menu" class="hs-overlay btn btn-icon size-8 hover:bg-default-150 rounded" @click="toggleSideNav">
          <Icon icon="lucide:align-left" class="iconify text-xl" />
        </button>
        <div class="lg:flex hidden items-center relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Icon icon="tabler:search" class="iconify text-base" />
          </div>
          <input type="search" id="topbar-search" class="form-input px-12 text-sm rounded border-transparent focus:border-transparent w-60" placeholder="Search something..." />
          <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-4">
            <span class="ms-auto font-medium">⌘ K</span>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <LanguageDropdown />

        <ThemeToggler />

        <NotificationDropdown />

        <CustomizerToggler />

        <UserProfile />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import CustomizerToggler from './components/CustomizerToggler.vue'
import LanguageDropdown from './components/LanguageDropdown.vue'
import NotificationDropdown from './components/NotificationDropdown.vue'
import ThemeToggler from './components/ThemeToggler.vue'
import UserProfile from './components/UserProfile.vue'
import { useLayout } from '@/stores/layout'

const { layout, setSideNavSize, toggleMobileMenu } = useLayout()

const toggleSideNav = () => {
  const html = document.documentElement
  const currentSize = html.getAttribute('data-sidenav-size')

  if (currentSize === 'offcanvas') {
    toggleMobileMenu()
  } else if (layout.sidenav.size === 'md') {
    setSideNavSize(currentSize === 'md' ? 'sm' : 'md', false)
  } else {
    setSideNavSize(currentSize === 'default' ? 'sm' : 'default')
  }
}
</script>
