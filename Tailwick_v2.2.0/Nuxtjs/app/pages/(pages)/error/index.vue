<template>
  <div class="bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center">
    <div class="relative">
      <div class="bg-default-50 rounded-lg w-lg relative">
        <div class="text-center px-10 py-12">
          <a href="/" class="flex justify-center">
            <img :src="logodark" alt="logo dark" class="h-6 block dark:hidden" />
            <img :src="logolight" alt="logo light" class="h-6 hidden dark:block" />
          </a>
          <div class="mt-10">
            <img :src="error" alt="" class="h-64 mx-auto" />
          </div>
          <div class="mt-8 text-center">
            <h4 class="mb-2 text-purple-500 dark:text-white text-xl font-semibold">OPPS, PAGE NOT FOUND</h4>
            <p class="mb-6 text-base text-default-500">It will be as straightforward as Occidental; in fact, it will be just like Occidental to an English speaker.</p>
            <a href="/">
              <button type="button" class="bg-primary text-white hover:bg-blue-600 rounded text-[13px] py-2 px-4 inline-flex items-center">
                <Icon icon="lucide:home" class="size-3 me-1"></Icon>
                Back to Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import authdark from '~/assets/images/auth-bg-dark.jpg'
import authbg from '~/assets/images/auth-bg.jpg'
import error from '~/assets/images/error-404.png'
import logodark from '~/assets/images/logo-dark.png'
import logolight from '~/assets/images/logo-light.png'

usePageTitle('Error')

const isDark = ref(false)

onMounted(() => {
  isDark.value = window.matchMedia('(data-theme: dark)').matches
})
</script>
