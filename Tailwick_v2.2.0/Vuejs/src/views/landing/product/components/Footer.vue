<template>
  <footer class="relative md:pt-20 pt-12 md:pb-0 border-t border-default-200">
    <div class="absolute -top-16 start-0 size-64 bg-purple-500/10 blur-3xl"></div>
    <div class="container">
      <div class="grid grid-cols-12 md:gap-12 gap-6">
        <div class="lg:col-span-4 col-span-12">
          <div class="mb-5">
            <RouterLink to="">
              <img :src="logodark" alt="logo dark" class="h-7 block dark:hidden" />
              <img :src="logolight" alt="logo light" class="h-7 hidden dark:block" />
            </RouterLink>
          </div>
          <p class="mb-5 text-sm text-default-500">Premium Multipurpose Admin & Dashboard Template You can build any type of web application like eCommerce, CRM, CMS, Project management apps, Admin Panels, etc using Tailwick.</p>
          <div class="flex flex-wrap gap-3 md:mt-0 mt-5">
            <button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">
              <Icon icon="lucide:facebook" class="size-4"></Icon>
            </button>
            <button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">
              <Icon icon="lucide:linkedin" class="size-4"></Icon>
            </button>
            <button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">
              <Icon icon="lucide:instagram" class="size-4"></Icon>
            </button>
            <button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">
              <Icon icon="lucide:twitter" class="size-4"></Icon>
            </button>
            <button type="button" class="size-10 border btn border-default-200 bg-transparent rounded-full text-default-500 hover:text-primary">
              <Icon icon="lucide:youtube" class="size-4"></Icon>
            </button>
          </div>
        </div>

        <div class="lg:col-span-3 md:col-span-4 col-span-12">
          <h5 class="mb-4 font-medium text-lg text-default-700">Dashboards</h5>
          <ul class="flex flex-col gap-y-3 text-sm">
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear text-default-600 hover:text-default-900 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Analytics</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">CRM</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Ecommerce</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Email</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">HR</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Social Media</RouterLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3 md:col-span-4 col-span-12">
          <h5 class="mb-4 font-medium text-lg text-default-700">About Us</h5>
          <ul class="flex flex-col gap-y-3 text-sm">
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">News</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Service</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Our Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Support 24/7</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">FAQ's</RouterLink>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-2 md:col-span-4 col-span-12">
          <h5 class="mb-4 font-medium text-lg text-default-700">Get Help</h5>
          <ul class="flex flex-col gap-y-3 text-sm">
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">About Us</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Contact Us</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Payment Policy</RouterLink>
            </li>
            <li>
              <RouterLink to="" class="relative inline-block transition-all duration-200 ease-linear hover:text-default-900 text-default-600 before:absolute before:border-b before:border-default-200 before:inset-x-0 before:bottom-0 before:w-0 hover:before:w-full before:transition-all before:duration-300 before:ease-linear">Return Policy</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:py-10 py-6 mt-12 text-center text-default-500 text-base border-t border-default-200">
      <p>{{ currentYear }} © Tailwick. Design & Develop by <RouterLink to="https://themesdesign.in/" target="_blank" class="underline text-default-800 font-bold transition-all hover:text-primary">Themesdesign</RouterLink></p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { currentYear } from '@/helpers'
import logodark from '@/assets/images/logo-dark.png'
import logolight from '@/assets/images/logo-light.png'
import { RouterLink } from 'vue-router'
</script>
