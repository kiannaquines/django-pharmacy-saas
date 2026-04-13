<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Top Selling Products</h6>
      <div class="hs-dropdown relative inline-flex">
        <button type="button" class="hs-dropdown-toggle bt size-7.5 text-sm font-semibold rounded-lg hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
          <Icon icon="lucide:ellipsis-vertical" class="iconify size-4 text-default-500"></Icon>
        </button>
        <div class="hs-dropdown-menu" role="menu">
          <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> 1 Weekly </RouterLink>
          <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> 1 Monthly </RouterLink>
          <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> 3 Monthly </RouterLink>
          <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> 6 Monthly </RouterLink>
          <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> This Yearly </RouterLink>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between" v-for="(item, idx) in products" :key="idx">
          <div class="flex items-center gap-3 whitespace-nowrap">
            <div class="flex items-center justify-center rounded-md size-10 bg-default-100">
              <img :src="item.image" alt="" class="h-6" />
            </div>
            <div>
              <h6 class="font-semibold text-default-800 md:w-full truncate w-43 mb-1 text-sm">{{ item.name }}</h6>
              <div class="flex items-center text-yellow-500 gap-0.5">
                <Icon v-for="n in 5" :key="n" :icon="n <= item.rating ? 'lucide:star' : 'lucide:star-half'" class="fill-yellow-500 size-3.5"></Icon>
                <Icon icon="lucide:star-half" class="fill-yellow-500 size-3.5"></Icon>
              </div>
            </div>
          </div>
          <div class="flex gap-1.5 items-center">
            <Icon icon="lucide:shopping-cart" class="size-4 text-default-500"></Icon>
            <h6 class="font-semibold text-default-800 text-sm">{{ item.sales }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { products } from './data'
import { RouterLink } from 'vue-router';
</script>
