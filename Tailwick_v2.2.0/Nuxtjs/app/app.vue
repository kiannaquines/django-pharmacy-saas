<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '~/assets/css/style.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { appDescription, appFavicon, appTitle, author } from './helpers'
import { useLayout } from '~/stores/layout'

const { init } = useLayout()

onMounted(() => {
  init()
})

useHead({
  title: appTitle,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'author', content: author },
    { name: 'description', content: appDescription }
  ],
  link: [{ rel: 'shortcut icon', href: appFavicon }]
})
</script>
