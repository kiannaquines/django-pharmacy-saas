<template>
  <div class="bg-cover bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
          <div class="lg:col-span-5">
            <div class="text-center px-10 py-12">
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
                  <p class="text-base text-default-800">Wait, I remember my password... <a href="/boxed-auth/login" class="text-primary underline"> Click here </a></p>
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
import AuthRight from '~/components/AuthRight.vue'
</script>
