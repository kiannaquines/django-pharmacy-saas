<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] h-screen w-full flex justify-center items-center">
    <div class="relative">
      <div class="bg-default-50 rounded-lg w-lg relative">
        <div class="text-center px-10 py-12">
          <LogoBox />
          <div class="mt-8">
            <h4 class="mb-2 text-primary text-xl font-semibold">Forgot Password?</h4>
            <p class="text-base mb-8 text-default-500">Reset your Tailwick password</p>
          </div>
          <div class="p-3 mb-6 text-warning rounded-md bg-warning/15">Provide your email address, and instructions will be sent to you</div>
          <form action="/">
            <div class="text-start">
              <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Email</label>
              <input type="text" id="Email" class="form-input" placeholder="Enter Email" />
            </div>
            <div class="mt-8">
              <button type="button" class="btn bg-primary text-white w-full">Send Reset Link</button>
            </div>
            <div class="mt-4 text-center">
              <p class="text-base text-default-800">Wait, I remember my password... <RouterLink to="/cover-auth/login" class="text-primary underline"> Click here </RouterLink></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoBox from '@/components/LogoBox.vue'
import { RouterLink } from 'vue-router';
</script>
