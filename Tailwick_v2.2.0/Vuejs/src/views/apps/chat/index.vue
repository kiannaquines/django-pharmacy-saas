<template>
  <Vertical>
    <div class="card overflow-hidden">
      <div class="flex">
        <SideBar />
        <Contact />
      </div>
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import Vertical from '@/layouts/vertical.vue'
import Contact from './components/Contact.vue'
import SideBar from './components/SideBar.vue'
</script>
