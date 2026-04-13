<template>
  <Auth>
    <div class="mt-8 text-center">
      <h4 class="mb-2.5 text-xl font-semibold text-primary">Welcome Back !</h4>
      <p class="text-base text-default-500">Sign in to continue to Tailwick.</p>
    </div>
    <form action="/" class="text-left w-full mt-10">
      <div class="mb-4">
        <label for="email" class="block font-medium text-default-900 text-sm mb-2">Username/ Email ID</label>
        <input type="text" id="email" class="form-input" placeholder="Enter Username or email" style="padding: 0 12px" />
      </div>
      <div class="mb-4">
        <RouterLink to="/basic-auth/reset-pass" class="text-primary font-medium text-sm mb-2 float-end">Forgot Password ?</RouterLink>
        <label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label>
        <input type="text" id="Password" class="form-input" placeholder="Enter Password" style="padding: 0 12px" />
      </div>
      <div class="flex items-center gap-2 mb-4">
        <input id="checkbox-1" type="checkbox" class="form-checkbox" />
        <label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label>
      </div>
      <div class="mt-10 text-center">
        <button type="submit" class="btn bg-primary text-white w-full">Sign In</button>
      </div>
      <div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
        <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium text-default-600 bg-card">Sign In With</h4>
      </div>
      <div class="flex w-full justify-center items-center gap-2">
        <RouterLink to="" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
          <Icon icon="logos:google-icon" class="iconify-color"></Icon>
          Use Google
        </RouterLink>
        <RouterLink to="" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
          <Icon icon="logos:apple" class="iconify text-mono"></Icon>
          Use Apple
        </RouterLink>
      </div>
      <div class="mt-10 text-center">
        <p class="text-base text-default-500">
          Don't have an Account ?
          <RouterLink to="/basic-auth/register" class="font-semibold underline hover:text-primary transition duration-200">SignUp</RouterLink>
        </p>
      </div>
    </form>
  </Auth>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import Auth from '@/layouts/auth.vue'
</script>
