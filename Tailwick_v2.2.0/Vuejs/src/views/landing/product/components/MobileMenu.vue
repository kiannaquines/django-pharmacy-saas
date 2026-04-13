<template>
  <div class="hs-overlay hs-overlay-open:translate-y-0 -translate-y-full fixed top-0 inset-x-0 transition-all duration-300 transform max-h-64 p-5 size-full z-80 card border-b border-default-100 hidden" role="dialog" tabindex="-1" aria-labelledby="navbarMenu-label" id="navbarMenu">
    <div class="flex items-center justify-between">
      <RouterLink to="">
        <img :src="logodark" alt="logo dark" class="h-6 block dark:hidden" />
        <img :src="logolight" alt="logo light" class="h-6 hidden dark:block" />
      </RouterLink>
      <button aria-label="Close" data-hs-overlay="#navbarMenu" class="inline-flex justify-end items-center gap-x-2 rounded-full">
        <Icon icon="lucide:x" class="size-4"></Icon>
      </button>
    </div>
    <div class="pt-8">
      <ul class="flex flex-col gap-y-4 lg:gap-8 md:gap-6 font-semibold text-sm">
        <li>
          <a href="#home" class="text-default-800 hover:text-primary transition duration-300">Home</a>
        </li>
        <li>
          <a href="#product" class="text-default-800 hover:text-primary transition duration-300">Our Products</a>
        </li>
        <li>
          <a href="#Features" class="text-default-800 hover:text-primary transition duration-300">Features</a>
        </li>
        <li>
          <a href="#About" class="text-default-800 hover:text-primary transition duration-300">About Us</a>
        </li>
        <li>
          <a href="#Feedback" class="text-default-800 hover:text-primary transition duration-300">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router';
import logodark from '@/assets/images/logo-dark.png'
import logolight from '@/assets/images/logo-light.png'
</script>
