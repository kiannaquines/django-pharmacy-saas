<template>
  <RouterLink to="/" class="flex justify-center">
    <img :src="logodark" alt="logo dark" class="h-6 flex dark:hidden" />
    <img :src="logolight" alt="logo light" class="h-6 hidden dark:flex" />
  </RouterLink>
</template>

<script setup lang="ts">
import logodark from '@/assets/images/logo-dark.png'
import logolight from '@/assets/images/logo-light.png'
import { RouterLink } from 'vue-router'
</script>
