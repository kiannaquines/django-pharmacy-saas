<template>
  <div class="relative flex flex-row w-full overflow-hidden bg-gradient-to-r from-blue-900 h-screen to-blue-800 dark:to-blue-900 dark:from-blue-95">
    <div class="absolute inset-0 opacity-20">
      <img :src="mordern" alt="" />
    </div>
    <div class="mx-4 m-4 w-160 py-14 px-10 bg-card flex justify-center rounded-md text-center relative z-10">
      <div class="flex flex-col h-full">
        <div class="flex justify-end">
          <LanguageDropdown />
        </div>
        <div class="my-auto">
          <div class="mt-8">
            <h4 class="mb-2 text-primary text-xl font-semibold">Forgot Password?</h4>
            <p class="text-base mb-8 text-default-500">Reset your Tailwick password</p>
          </div>
          <div class="p-3 mb-6 text-warning rounded-md bg-warning/15">Provide your email address, and instructions will be sent to you</div>
          <form action="/" class="mx-auto">
            <div class="text-start">
              <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Email</label>
              <input type="text" id="Email" class="form-input" placeholder="Enter Email" />
            </div>
            <div class="mt-8">
              <button type="button" class="btn bg-primary text-white w-full">Send Reset Link</button>
            </div>
            <div class="mt-4 text-center">
              <p class="text-base text-default-800">Wait, I remember my password... <a href="/modern-auth/login" class="text-primary underline"> Click here </a></p>
            </div>
          </form>
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
    <div class="relative z-10 flex items-center justify-center min-h-screen px-10 py-14 grow">
      <div>
        <a href="/">
          <img :src="logolight" alt="" class="h-7 mb-14 mx-auto block" />
        </a>
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
import logolight from '~/assets/images/logo-light.png'
import logomodern from '~/assets/images/auth-modern.png'
import LanguageDropdown from '~/components/LanguageDropdown.vue'
import { Icon } from '@iconify/vue'
import mordern from '~/assets/images/modern.svg'
</script>
