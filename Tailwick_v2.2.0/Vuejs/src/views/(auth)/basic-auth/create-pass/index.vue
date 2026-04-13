<template>
  <Auth>
    <div class="mt-8">
      <h4 class="mb-2 text-primary text-xl font-semibold">Set a New Password</h4>
      <p class="text-base/normal mb-8 text-default-500">Your new password should be distinct from any of your prior passwords</p>
    </div>
    <form action="/">
      <div class="text-start">
        <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Password</label>
        <input type="text" id="Email" class="form-input" placeholder="Password" style="padding: 0 12px" />
      </div>
      <div class="text-start mt-4">
        <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Confirm Password</label>
        <input type="text" id="Email" class="form-input" placeholder="Confirm Password" style="padding: 0 12px" />
      </div>
      <div class="flex items-center gap-2 mt-4">
        <input id="checkbox-1" type="checkbox" class="form-checkbox" />
        <label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label>
      </div>
      <div class="mt-8">
        <button type="button" class="btn bg-primary text-white w-full">Reset Password</button>
      </div>
      <div class="mt-4 text-center">
        <p class="text-base text-default-800">Hold on, I've got my password... <RouterLink to="/basic-auth/login" class="text-primary underline"> Click here </RouterLink></p>
      </div>
    </form>
  </Auth>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
