<template>
  <div class="relative flex flex-row w-full overflow-hidden bg-gradient-to-r from-blue-900 h-screen to-blue-800 dark:to-blue-900 dark:from-blue-950">
    <div class="absolute inset-0 opacity-20">
      <img :src="modern" alt="" />
    </div>
    <div class="mx-4 m-4 w-160 py-14 px-10 bg-card flex justify-center rounded-md text-center relative z-10">
      <div class="flex flex-col h-full w-full">
        <div class="flex justify-end">
          <LanguageDropdown />
        </div>
        <div class="my-auto">
          <div class="mt-8">
            <h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4>
            <p class="text-base mb-8 text-default-500">Please enter the 4 digit code sent to tailwick@themesdesign.in</p>
          </div>
          <form action="/">
            <div class="grid grid-cols-4 gap-2">
              <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
              <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
              <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
              <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
            </div>
            <div class="mt-10">
              <button type="button" class="btn bg-primary text-white w-full">Confirm</button>
            </div>
          </form>
        </div>
        <div class="mt-5">
          <span class="font-base">
            <Icon icon="lucide:copywrite" class="iconify align-middle text-default-500"></Icon>
            2025 Tailwick. Crafted with
            <Icon icon="tabler:heart-filled" class="iconify align-middle text-danger"></Icon>
            by
            <RouterLink to="" class="text-mono hover:text-primary transition duration-200 underline">Themesdesign</RouterLink>
          </span>
        </div>
      </div>
    </div>
    <div class="relative z-10 flex items-center justify-center min-h-screen px-10 py-14 grow">
      <div>
        <RouterLink to="/">
          <img :src="logolight" alt="" class="h-7 mb-14 mx-auto block" />
        </RouterLink>
        <img :src="logomodern" alt="" class="mx-auto rounded-xl block object-cover w-md" />
        <div class="mt-10 tetx-center">
          <h3 class="mb-3 text-blue-50 text-2xl font-semibold text-center">Tools For Crafting Your Business's Brand Identity</h3>
          <p class="text-blue-300 text-base w-2xl text-center">Unlock the potential of our versatile branding tools, designed to empower your business in shaping a distinctive and impactful brand. Elevate your business's image and leave a lasting impression with our comprehensive branding solutions.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import logomodern from '@/assets/images/auth-modern.png'
import logolight from '@/assets/images/logo-light.png'
import modern from '@/assets/images/modern.svg'
import LanguageDropdown from '@/components/LanguageDropdown.vue'
import { RouterLink } from 'vue-router'
</script>
