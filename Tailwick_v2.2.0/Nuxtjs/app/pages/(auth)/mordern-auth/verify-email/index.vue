<template>
  <div class="relative flex flex-row w-full overflow-hidden bg-gradient-to-r from-blue-900 h-screen to-blue-800 dark:to-blue-900 dark:from-blue-950">
    <div class="absolute inset-0 opacity-20">
      <img :src="mordern" alt="svg image" />
    </div>
    <div class="mx-4 m-4 w-160 py-14 px-10 bg-card flex justify-center rounded-md text-center relative z-10">
      <div class="flex flex-col h-full w-full">
        <div class="flex justify-end">
          <LanguageDropdown />
        </div>
        <div class="my-auto">
          <div class="mt-8 text-center">
            <h4 class="mb-3 text-xl font-semibold text-primary">Verify Email</h4>
            <p class="text-base text-default-500 mb-4">
              Did you not receive an email? Please
              <a href="#" class="text-primary">try again</a>
            </p>
            <button type="button" class="btn btn-sm bg-primary text-white">Skip Now</button>
            <div class="pt-10 text-center">
              <img :src="email" alt="" class="block mx-auto w-1/2" />
            </div>
          </div>
        </div>
        <div class="mt-5">
          <span class="text-sm text-default-500">
            <Icon icon="lucide:copyright" class="iconify align-middle"></Icon>
            2025 Tailwick. Crafted with
            <Icon icon="tabler:heart-filled" class="iconify align-middle text-danger"></Icon>
            by
            <a href="https://themesdesign.in/" target="_blank" class="text-default-800 hover:text-primary transition duration-200 underline">Themesdesign</a>
          </span>
        </div>
      </div>
    </div>
    <div class="relative z-10 flex items-center justify-center min-h-screen px-10 py-14 flex-grow">
      <div>
        <a href="/" class="/">
          <img :src="logolight" alt="" class="h-7 mb-14 mx-auto block" />
        </a>
        <img :src="logomodern" alt="" class="mx-auto rounded-xl block object-cover w-md" />
        <div class="mt-10 text-center">
          <h3 class="mb-3 text-blue-50 text-2xl font-semibold text-center">Tools For Crafting Your Business's Brand Identity</h3>
          <p class="text-blue-300 text-base w-2xl text-center">Unlock the potential of our versatile branding tools, designed to empower your business in shaping a distinctive and impactful brand. Elevate your business's image and leave a lasting impression with our comprehensive branding solutions.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import email from '~/assets/images/auth-email.png'
import logomodern from '~/assets/images/auth-modern.png'
import logolight from '~/assets/images/logo-light.png'
import mordern from '~/assets/images/modern.svg'
import LanguageDropdown from '~/components/LanguageDropdown.vue'
</script>
