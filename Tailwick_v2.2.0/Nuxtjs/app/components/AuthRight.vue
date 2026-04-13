<template>
  <div class="lg:col-span-7 bg-card/60 mx-2 my-2 shadow-[0_14px_15px_-3px_#f1f5f9,0_4px_6px_-4px_#f1f5f9] dark:shadow-none rounded-lg">
    <div class="pt-10 px-10 h-full">
      <div class="flex items-center justify-between gap-3">
        <div>
          <a href="/">
            <img :src="logodark" alt="logo dark" class="h-6 block dark:hidden" />
            <img :src="logolight" alt="logo light" class="h-6 hidden dark:block" />
          </a>
        </div>
        <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
          <button type="button" class="hs-dropdown-toggle py-2 px-4 bg-transparent border border-default-200 text-default-600 hover:border-primary rounded-md hover:text-primary font-medium text-sm gap-2 flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            <img :src="flagus" alt="" class="size-5 rounded-full" />
            English
          </button>
          <div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagus" alt="" class="size-4 rounded-full" />
              English
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagspain" alt="" class="size-4 rounded-full" />
              Spanish
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flaggermany" alt="" class="size-4 rounded-full" />
              German
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagfrench" alt="" class="size-4 rounded-full" />
              French
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagjapanese" alt="" class="size-4 rounded-full" />
              Japanese
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagitaly" alt="" class="size-4 rounded-full" />
              Italian
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagrussia" alt="" class="size-4 rounded-full" />
              Russian
            </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="">
              <img :src="flagarebian" alt="" class="size-4 rounded-full" />
              Arabic
            </a>
          </div>
        </div>
      </div>
      <div class="mt-auto">
        <img :src="boxed" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import boxed from '~/assets/images/boxed.png'
import logodark from '~/assets/images/logo-dark.png'
import logolight from '~/assets/images/logo-light.png'
import flagus from '~/assets/images/flags/us.jpg'
import flagspain from '~/assets/images/flags/spain.jpg'
import flaggermany from '~/assets/images/flags/germany.jpg'
import flagfrench from '~/assets/images/flags/french.jpg'
import flagjapanese from '~/assets/images/flags/japanese.svg'
import flagitaly from '~/assets/images/flags/italy.jpg'
import flagrussia from '~/assets/images/flags/russia.jpg'
import flagarebian from '~/assets/images/flags/arebian.svg'
</script>
