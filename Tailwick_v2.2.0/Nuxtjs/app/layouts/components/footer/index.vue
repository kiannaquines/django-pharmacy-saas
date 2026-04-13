<template>
  <footer class="mt-auto footer flex items-center py-5 border-t border-default-200">
    <div class="lg:px-8 px-6 w-full flex md:justify-between justify-center gap-4">
      <div>
        {{ currentYear }}
        © {{ appName }}
      </div>
      <div class="md:flex hidden gap-2 item-center md:justify-end">
        Design &amp; Develop by<a href="https://themesdesign.in/" target="_blank" class="text-primary">{{ author }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { appName, author, currentYear } from '~/helpers'
</script>
