<template>
  <div class="relative flex flex-row w-full overflow-hidden bg-gradient-to-r from-blue-900 h-screen to-blue-800 dark:to-blue-900 dark:from-blue-950">
    <div class="absolute inset-0 opacity-20">
      <img :src="modern" alt="" />
    </div>
    <div class="mx-4 m-4 w-160 py-14 px-10 bg-card flex justify-center rounded-md text-center relative z-10">
      <div class="flex flex-col h-full w-full">
        <div class="flex justify-end">
          <LanguageDropdown />
        </div>
        <div class="my-21">
          <div class="mt-10">
            <div class="flex justify-center gap-x-3" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
              <button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-100 font-medium gap-2 flex items-center transition-all duration-300 active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabsForEmail" aria-controls="tabsForEmail" role="tab">
                <Icon icon="lucide:mail" class="size-4"></Icon>
                Email
              </button>
              <button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-100 font-medium gap-2 flex items-center transition-all duration-300" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabsForPhone" aria-controls="tabsForPhone" role="tab">
                <Icon icon="lucide:smartphone" class="size-4"></Icon>
                Phone
              </button>
            </div>
            <div class="mt-10 w-100 mx-auto">
              <div id="tabsForEmail" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                <form action="/" class="text-left w-full mt-10">
                  <div class="mb-4">
                    <label for="Username" class="block font-medium text-default-900 text-sm mb-2">Username/ Email ID</label>
                    <input type="text" id="Username" class="form-input" placeholder="Enter Username or email" />
                  </div>
                  <div class="mb-4">
                    <a href="/modern-auth/reset-pass" class="text-primary font-medium text-sm mb-2 float-end">Forgot Password ?</a>
                    <label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label>
                    <input type="text" id="Password" class="form-input" placeholder="Enter Password" />
                  </div>
                  <div class="flex items-center gap-2 mb-4">
                    <input id="checkbox-1" type="checkbox" class="form-checkbox" />
                    <label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label>
                  </div>
                  <div class="mt-10 text-center">
                    <button type="button" class="btn bg-primary text-white w-full">Sign In</button>
                  </div>
                  <div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                    <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card text-default-500 rounded-md">Sign In with</h4>
                  </div>
                  <div class="flex w-full justify-center items-center gap-2">
                    <a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                      <Icon icon="logos:google-icon" class="iconify-color"></Icon>
                      Use Google
                    </a>
                    <a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                      <Icon icon="logos:apple" class="iconify text-mono"></Icon>
                      Use Apple
                    </a>
                  </div>
                  <div class="mt-10 text-center">
                    <p class="text-base text-default-500">
                      Don't have an account ?
                      <a href="/modern-auth/register" class="font-semibold underline hover:text-primary transition duration-200"> SignUp</a>
                    </p>
                  </div>
                </form>
              </div>
              <div id="tabsForPhone" class="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                <form action="/" class="text-left w-full mt-10">
                  <div class="mb-4">
                    <label for="Phone Number" class="block font-medium text-default-900 text-sm mb-2">Phone Number</label>
                    <input type="text" id="Phone Number" class="form-input" placeholder="Enter Phone" />
                  </div>
                  <div class="mb-4">
                    <a href="/modern-auth/reset-pass" class="text-primary font-medium text-sm mb-2 float-end">Forgot Password ?</a>
                    <label for="Password" class="block font-medium text-default-900 text-sm mb-2">Password</label>
                    <input type="text" id="Password" class="form-input" placeholder="Enter Password" />
                  </div>
                  <div class="flex items-center gap-2 mb-4">
                    <input id="checkbox-1" type="checkbox" class="form-checkbox" />
                    <label class="text-default-900 text-sm font-medium" for="checkbox-1">Remember Me</label>
                  </div>
                  <div class="mt-10 text-center">
                    <button type="button" class="btn bg-primary text-white w-full">Sign In</button>
                  </div>
                  <div class="my-9 relative text-center before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                    <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium text-default-500 bg-card rounded-md">Sign In with</h4>
                  </div>
                  <div class="flex w-full justify-center items-center gap-2">
                    <a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                      <Icon icon="logos:google-icon" class="iconify-color"></Icon>
                      Use Google
                    </a>
                    <a href="#" class="btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                      <Icon icon="logos:apple" class="iconify text-mono"></Icon>
                      Use Apple
                    </a>
                  </div>
                  <div class="mt-10 text-center">
                    <p class="text-base text-default-500">
                      Don't have an account ?
                      <a href="/modern-auth/register" class="font-semibold underline hover:text-primary transition duration-200">SignUp</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <span class="text-sm text-default-500">
            <Icon icon="lucide:copyright" class="iconify align-middle"></Icon>
            2025 Tailwick. Crafted with
            <Icon icon="tabler:heart-filled" class="iconify align-middle text-danger"></Icon>
            by
            <a href="https://themesdesign.in/" target="_blank" class="text-default-800 hover:text-primary transition duration-200 underline">Themesdesign</a>
          </span>
        </div>
      </div>
    </div>
    <div class="relative z-10 flex items-center justify-center min-h-screen px-10 py-14 grow">
      <div>
        <a href="/">
          <img :src="logolight" alt="" class="h-7 mb-14 mx-auto block" />
        </a>
        <img :src="logomodern" alt="" class="mx-auto rounded-xl block object-cover w-md" />
        <div class="mt-10 text-center">
          <h3 class="mb-3 text-blue-50 text-2xl font-semibold text-center">Tools For Crafting Your Business's Brand Identity</h3>
          <p class="text-blue-300 text-base w-2xl text-center">Unlock the potential of our versatile branding tools, designed to empower your business in shaping a distinctive and impactful brand. Elevate your business's image and leave a lasting impression with our comprehensive branding solutions.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import logomodern from '~/assets/images/auth-modern.png'
import logolight from '~/assets/images/logo-light.png'
import modern from '~/assets/images/modern.svg'
import LanguageDropdown from '~/components/LanguageDropdown.vue'
</script>
