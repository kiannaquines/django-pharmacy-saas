<template>
  <header>
    <nav class="fixed inset-x-0 top-0 z-50 bg-card py-6 shadow flex justify-between items-center">
      <div class="container">
        <div class="grid lg:grid-cols-12 md:grid-cols-10 grid-cols-2 items-center">
          <div class="lg:col-span-2 md:col-span-2">
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
                <a href="#features" class="text-default-800 hover:text-primary transition duration-300">Our Features</a>
              </li>
              <li>
                <a href="#about" class="text-default-800 hover:text-primary transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#pricing" class="text-default-800 hover:text-primary transition duration-300">Pricing</a>
              </li>
              <li>
                <a href="#contact" class="text-default-800 hover:text-primary transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
          <div class="lg:col-span-2 md:col-span-2 flex items-center justify-end gap-2">
            <button class="btn size-9 bg-primary text-white md:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="navbarMenu" data-hs-overlay="#navbarMenu">
              <Icon icon="lucide:menu"></Icon>
            </button>

            <a href="#" class="flex justify-end">
              <button type="button" class="btn bg-primary text-white">
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
