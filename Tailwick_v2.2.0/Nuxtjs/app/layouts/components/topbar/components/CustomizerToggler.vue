<template>
  <div class="topbar-item">
    <button @click="customizer.toggleCustomizer" class="btn btn-icon size-8 hover:bg-default-150 rounded-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="theme-customization" data-hs-overlay="#theme-customization">
      <Icon icon="lucide:settings" class="size-4.5"></Icon>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLayout } from '~/stores/layout'
const { customizer } = useLayout()
</script>
