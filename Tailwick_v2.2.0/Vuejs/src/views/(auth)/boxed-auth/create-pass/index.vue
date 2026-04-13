<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
          <div class="lg:col-span-5">
            <div class="text-center px-10 py-12">
              <div class="mt-8">
                <h4 class="mb-2 text-primary text-xl font-semibold">Set a New Password</h4>
                <p class="text-base mb-8 text-default-500">Your new password should be distinct from any of your prior passwords</p>
              </div>
              <form action="/">
                <div class="text-start">
                  <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Password</label>
                  <input type="text" id="Email" class="form-input" placeholder="Password" />
                </div>
                <div class="text-start mt-4">
                  <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Confirm Password</label>
                  <input type="text" id="Email" class="form-input" placeholder="Confirm Password" />
                </div>
                <div class="flex items-center gap-2 mt-4">
                  <input id="checkbox-1" type="checkbox" class="form-checkbox" />
                  <label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label>
                </div>
                <div class="mt-8">
                  <button type="button" class="btn bg-primary text-white w-full">Reset Password</button>
                </div>
                <div class="mt-4 text-center">
                  <p class="text-base text-default-800">Hold on, I've got my password... <RouterLink to="/boxed-auth/login" class="text-primary underline"> Click here </RouterLink></p>
                </div>
              </form>
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
import { RouterLink } from 'vue-router';
</script>
