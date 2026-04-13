<template>
  <div class="bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center">
    <div class="relative">
      <div class="bg-default-100 rounded-lg w-lg relative">
        <div class="text-center px-10 py-12">
          <RouterLink to="/" class="flex justify-center">
            <img :src="logodark" alt="logo dark" class="h-6 block dark:hidden" />
            <img :src="logolight" alt="logo light" class="h-6 hidden dark:block" />
          </RouterLink>
          <div class="mt-10">
            <img :src="maintenance" alt="" class="h-72 mx-auto" />
          </div>
          <div class="mt-8 text-center">
            <h4 class="mb-2 text-purple-500 text-xl font-semibold dark:text-white">Currently in Maintenance Mode !!!</h4>
            <p class="mb-6 text-base text-default-500">Website is Under Construction. Please check back later!</p>
            <RouterLink to="/">
              <button type="button" class="btn bg-primary text-white">
                <Icon icon="lucide:home" class="size-3.5"></Icon>
                Back to Home
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import logodark from '@/assets/images/logo-dark.png'
import logolight from '@/assets/images/logo-light.png'
import maintenance from '@/assets/images/maintenance.png'
</script>
