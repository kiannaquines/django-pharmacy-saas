<template>
  <div class="bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-lg relative">
        <div class="text-center px-10 py-12">
          <LogoBox />
          <div class="mt-8 text-center">
            <h4 class="mb-3 text-xl font-semibold text-primary">Verify Email</h4>
            <p class="text-base text-default-500 mb-4">Did you not receive an email? Please <RouterLink to="" class="text-primary"> try again</RouterLink></p>
            <button type="button" class="btn btn-sm bg-primary text-white">Skip Now</button>
            <div class="pt-10 text-center">
              <img :src="email" alt="" class="block w-2/3 mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import email from '@/assets/images/auth-email.png'
import LogoBox from '@/components/LogoBox.vue'
import { RouterLink } from 'vue-router';
</script>
