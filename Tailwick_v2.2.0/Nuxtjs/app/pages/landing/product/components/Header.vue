<template>
  <header>
    <nav class="fixed inset-x-0 top-0 z-50 bg-card py-6 border-b border-default-150 flex justify-between items-center">
      <div class="container">
        <div class="grid lg:grid-cols-12 md:grid-cols-10 grid-cols-3 items-center">
          <div class="lg:col-span-2 md:col-span-2 col-span-1">
            <a href="/">
              <img :src="logodark" alt="logo dark" class="h-6 block dark:hidden" />
              <img :src="logolight" alt="logo light" class="h-6 hidden dark:block" />
            </a>
          </div>
          <div class="lg:col-span-8 md:col-span-6 md:block hidden">
            <ul class="flex items-center justify-center lg:gap-8 md:gap-6 font-medium text-sm">
              <li>
                <a href="#home" class="text-default-800 hover:text-primary transition duration-300">Home</a>
              </li>
              <li>
                <a href="#product" class="text-default-800 hover:text-primary transition duration-300">Our Products </a>
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
          <div class="lg:col-span-2 md:col-span-2 col-span-2 flex items-center justify-end gap-4">
            <button class="flex justify-center items-center size-9 bg-primary/90 hover:bg-primary text-white rounded md:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="navbarMenu" data-hs-overlay="#navbarMenu">
              <Icon icon="lucide:menu"></Icon>
            </button>
            <button type="button">
              <Icon icon="lucide:shopping-bag" class="size-4 text-default-500 hover:text-primary transition-all"></Icon>
            </button>
            <a href="#" class="flex justify-end">
              <button class="btn border-0 bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white">
                Sign In
                <Icon icon="lucide:log-in" class="size-4"></Icon>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <MobileMenu />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import logodark from '~/assets/images/logo-dark.png'
import logolight from '~/assets/images/logo-light.png'
import MobileMenu from './MobileMenu.vue'
</script>
