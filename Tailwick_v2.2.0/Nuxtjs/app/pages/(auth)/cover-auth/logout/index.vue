<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center">
    <div class="relative">
      <div class="bg-default-50 rounded-lg w-lg relative">
        <div class="text-center px-10 py-12">
          <LogoBox />
          <div class="mt-8 text-center">
            <div class="mb-4">
              <Icon icon="lucide:log-out" class="size-6 text-purple-500 mx-auto fill-purple-100"></Icon>
            </div>
            <h4 class="mb-2 text-primary text-xl font-semibold">You are Logged Out</h4>
            <p class="mb-8 text-base text-default-500">Thank you for using tailwick admin template</p>
          </div>
          <a href="/">
            <button class="btn bg-primary text-white w-full">Sign In</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LogoBox from '~/components/LogoBox.vue'
</script>
