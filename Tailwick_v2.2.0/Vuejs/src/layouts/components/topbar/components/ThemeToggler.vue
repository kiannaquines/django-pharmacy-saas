<template>
  <div class="topbar-item">
    <button @click="toggleTheme" class="btn btn-icon size-8 hover:bg-default-150 transition-[scale,background] rounded-full" id="light-dark-mode" type="button">
      <Icon icon="tabler:moon" class="iconify text-xl absolute dark:scale-0 dark:-rotate-90 scale-100 rotate-0 transition-all duration-200"></Icon>
      <Icon icon="tabler:sun" class="iconify text-xl absolute dark:scale-100 dark:rotate-0 scale-0 rotate-90 transition-all duration-200"></Icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useLayout } from '@/stores/layout'
import { Icon } from '@iconify/vue'

const { layout, setTheme } = useLayout()

const toggleTheme = () => {
  if (layout.theme === 'dark') {
    return setTheme('light')
  }
  return setTheme('dark')
}
</script>
