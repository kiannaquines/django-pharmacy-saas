<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
          <div class="lg:col-span-5">
            <div class="text-center px-10 py-12">
              <div class="mt-8 text-center">
                <div class="mb-4">
                  <Icon icon="lucide:log-out" class="size-6 text-purple-500 fill-purple-100 mx-auto"></Icon>
                </div>
                <h4 class="mb-2 text-primary text-xl font-semibold">You are Logged Out</h4>
                <p class="mb-8 text-base text-default-500">Thank you for using tailwick admin template</p>
              </div>
              <RouterLink to="/boxed-auth/login">
                <button class="btn bg-primary text-white w-full">Sign In</button>
              </RouterLink>
            </div>
          </div>
          <AuthRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router';
import AuthRight from '@/components/AuthRight.vue'
</script>
