<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
          <div class="lg:col-span-5">
            <div class="text-center px-10 py-12">
              <div class="mt-8">
                <h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4>
                <p class="text-base mb-8 text-default-500">Did you not receive an email? Please <RouterLink to="" class="text-primary"> try again</RouterLink></p>
                <button type="button" class="btn bg-primary text-white w-full">Skip Now</button>
                <div class="pt-10 text-center">
                  <img :src="email" alt="" class="block w-2/3 mx-auto" />
                </div>
              </div>
            </div>
          </div>
          <AuthRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthRight from '@/components/AuthRight.vue'
import email from '@/assets/images/auth-email.png'
import { RouterLink } from 'vue-router';
</script>
