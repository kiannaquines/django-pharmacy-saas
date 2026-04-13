<template>
  <div class="bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')] min-h-screen flex justify-center items-center">
    <div class="relative">
      <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
        <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
          <div class="lg:col-span-5">
            <div>
              <div class="flex justify-center gap-x-3" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                <button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-200 font-medium gap-2 flex items-center transition-all duration-300 active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabsForEmail" aria-controls="tabsForEmail" role="tab">
                  <Icon icon="lucide:mail" class="size-4"></Icon>
                  Email
                </button>
                <button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-200 font-medium gap-2 flex items-center transition-all duration-300" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabsForPhone" aria-controls="tabsForPhone" role="tab">
                  <Icon icon="lucide:smartphone" class="size-4"></Icon>
                  Phone
                </button>
              </div>
              <div class="mt-10 w-110 mx-auto">
                <div id="tabsForEmail" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                  <form action="/" class="text-left w-full mt-10">
                    <div class="mb-4">
                      <label for="email" class="block font-medium text-default-900 text-sm mb-2">Email ID</label>
                      <input type="text" id="email" class="form-input" placeholder="Enter Username or email" />
                    </div>
                    <div class="mb-4">
                      <label for="Username" class="block font-medium text-default-900 text-sm mb-2">Username</label>
                      <input type="text" id="Username" class="form-input" placeholder="Enter Username" />
                    </div>
                    <div class="mb-4">
                      <label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label>
                      <input type="text" id="Password" class="form-input" placeholder="Enter Password" />
                    </div>
                    <p class="italic text-sm font-medium text-default-500">By registering you agree to the Tailwick <RouterLink to="" class="underline">Terms of Use</RouterLink></p>
                    <div class="mt-10 text-center">
                      <button type="button" class="btn bg-primary text-white w-full">Sign In</button>
                    </div>
                    <div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                      <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create account with</h4>
                    </div>
                    <div class="flex w-full justify-center items-center gap-2">
                      <RouterLink to="" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                        <Icon icon="logos:google-icon" class="iconify-color"></Icon>
                        Use Google
                      </RouterLink>
                      <RouterLink to="" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                        <Icon icon="logos:apple" class="iconify"></Icon>
                        Use Apple
                      </RouterLink>
                    </div>
                    <div class="mt-10 text-center">
                      <p class="text-base text-default-500">
                        Already have an account ?
                        <RouterLink to="/boxed-auth/login" class="font-semibold underline hover:text-primary transition duration-200">Login</RouterLink>
                      </p>
                    </div>
                  </form>
                </div>
                <div id="tabsForPhone" class="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                  <form action="/" class="text-left w-full mt-10">
                    <div class="mb-4">
                      <label for="Phone Number" class="block font-medium text-default-900 text-sm mb-2">Phone Number</label>
                      <input type="text" id="Phone Number" class="form-input" placeholder="Enter phone" />
                    </div>
                    <div class="mb-4">
                      <label for="Username" class="block font-medium text-default-900 text-sm mb-2">Username</label>
                      <input type="text" id="Username" class="form-input" placeholder="Enter Username" />
                    </div>
                    <div class="mb-4">
                      <label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label>
                      <input type="text" id="Password" class="form-input" placeholder="Enter Password" />
                    </div>
                    <p class="italic text-sm font-medium text-default-500">By registering you agree to the Tailwick <RouterLink to="" class="underline">Terms of Use</RouterLink></p>
                    <div class="mt-10 text-center">
                      <button type="button" class="btn bg-primary text-white w-full">Sign In</button>
                    </div>
                    <div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                      <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create account with</h4>
                    </div>
                    <div class="flex w-full justify-center items-center gap-2">
                      <RouterLink to="" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                        <Icon icon="logos:google-icon" class="iconify-color"></Icon>
                        Use Google
                      </RouterLink>
                      <RouterLink to="" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                        <Icon icon="logos:apple" class="iconify"></Icon>
                        Use Apple
                      </RouterLink>
                    </div>
                    <div class="mt-10 text-center">
                      <p class="text-base text-default-500">
                        Already have an account ?
                        <RouterLink to="/basic-auth/login" class="font-semibold underline hover:text-primary transition duration-200">Login</RouterLink>
                      </p>
                    </div>
                  </form>
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
import { Icon } from '@iconify/vue'
import AuthRight from '@/components/AuthRight.vue'
import { RouterLink } from 'vue-router'
</script>
