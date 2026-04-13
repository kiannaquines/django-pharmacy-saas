<template>
  <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
    <button type="button" class="hs-dropdown-toggle py-2 px-4 bg-transparent border border-default-200 text-default-600 hover:border-primary rounded-md hover:text-primary font-medium text-sm gap-2 flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      <img :src="us" alt="" class="size-5 rounded-full" />
      English
    </button>

    <div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="us" alt="" class="size-4 rounded-full" />
        English
      </a>
      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="spain" alt="" class="size-4 rounded-full" />
        Spanish
      </a>
      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="germany" alt="" class="size-4 rounded-full" />
        German
      </a>
      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="french" alt="" class="size-4 rounded-full" />
        French
      </a>

      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="japanese" alt="" class="size-4 rounded-full" />
        Japanese
      </a>

      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="italy" alt="" class="size-4 rounded-full" />
        Italian
      </a>

      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="russia" alt="" class="size-4 rounded-full" />
        Russian
      </a>

      <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
        <img :src="arebian" alt="" class="size-4 rounded-full" />
        Arabic
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import us from '~/assets/images/flags/us.jpg'
import spain from '~/assets/images/flags/spain.jpg'
import germany from '~/assets/images/flags/germany.jpg'
import french from '~/assets/images/flags/french.jpg'
import japanese from '~/assets/images/flags/japanese.svg'
import italy from '~/assets/images/flags/italy.jpg'
import russia from '~/assets/images/flags/russia.jpg'
import arebian from '~/assets/images/flags/arebian.svg'
</script>
