<template>
  <Auth>
    <div class="mt-8 text-center">
      <div class="mb-4">
        <Icon icon="lucide:log-out" class="size-6 text-purple-500 fill-purple-100 mx-auto"></Icon>
      </div>
      <h4 class="mb-2 text-primary text-xl font-semibold">You are Logged Out</h4>
      <p class="mb-8 text-base text-default-500">Thank you for using tailwick admin template</p>
    </div>
    <a href="/">
      <button class="btn bg-primary text-white w-full">Sign In</button>
    </a>
  </Auth>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Auth from '~/layouts/auth.vue'
</script>
