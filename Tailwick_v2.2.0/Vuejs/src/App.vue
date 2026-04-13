<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLayout } from './stores/layout'

const { init } = useLayout()

onMounted(() => {
  init()
})
</script>
