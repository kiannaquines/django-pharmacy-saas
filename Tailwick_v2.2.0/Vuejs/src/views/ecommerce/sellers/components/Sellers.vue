<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
    <div class="card" v-for="(item, idx) in stores" :key="idx">
      <div class="card-body">
        <div class="flex justify-between gap-5 items-center mb-4">
          <Icon icon="lucide:heart" class="size-5" :class="item.heartStyle"></Icon>
          <div class="hs-dropdown relative inline-flex">
            <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
              <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
            </button>
            <div class="hs-dropdown-menu" role="menu">
              <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                <Icon icon="lucide:eye" class="size-3"></Icon>
                Overview
              </RouterLink>
              <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                <Icon icon="lucide:edit" class="size-3"></Icon>
                Edit
              </RouterLink>
              <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                <Icon icon="lucide:trash-2" class="size-3"></Icon>
                Delete
              </RouterLink>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
            <Icon :icon="item.iconClass" class="iconify-color size-10"></Icon>
          </div>
          <div class="mt-4 mb-6 text-center">
            <h6 class="text-base text-default-800 font-semibold">{{ item.name }}</h6>
            <p class="text-default-500 text-sm">{{ item.owner }}</p>
          </div>
          <div class="grid grid-cols-3">
            <div class="text-center p-2 text-sm">
              <h6 class="mb-1 text-default-800 font-semibold">{{ item.sales }}</h6>
              <p class="text-default-500">Sales</p>
            </div>
            <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
              <h6 class="mb-1 text-default-800 font-semibold">{{ item.products }}</h6>
              <p class="text-default-500">Product</p>
            </div>
            <div class="text-center p-2 text-sm">
              <h6 class="mb-1 text-default-800 font-semibold">{{ item.revenue }}</h6>
              <p class="text-default-500">Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

export type Store = {
  name: string
  owner: string
  iconClass: string
  sales: string
  products: number
  revenue: string
  heartStyle: string
}

const stores: Store[] = [
  {
    name: 'Themesdesign',
    owner: 'Paula Keenan',
    iconClass: 'logos:google-adwords',
    sales: '4.5k',
    products: 310,
    revenue: '$235.3k',
    heartStyle: 'text-warning fill-warning/10'
  },
  {
    name: 'Nazox Fashion',
    owner: 'Kara Miller',
    iconClass: 'logos:apple-app-store',
    sales: '2.3k',
    products: 67,
    revenue: '$235.3k',
    heartStyle: 'text-warning fill-warning/10'
  },
  {
    name: '4xM Infotech',
    owner: 'Daniel Miller',
    iconClass: 'logos:google-gmail',
    sales: '7.1k',
    products: 138,
    revenue: '$465.9k',
    heartStyle: 'text-default-500 fill-default-100'
  },
  {
    name: 'Extra Fashion',
    owner: 'Mark Walton',
    iconClass: 'logos:android-icon',
    sales: '1.9k',
    products: 49,
    revenue: '$198.3k',
    heartStyle: 'text-warning fill-warning/10'
  },
  {
    name: 'Nesta Technologies',
    owner: 'William Heineman',
    iconClass: 'logos:figma',
    sales: '4.8k',
    products: 172,
    revenue: '$746.1k',
    heartStyle: 'text-warning fill-warning/10'
  },
  {
    name: 'Digitech Galaxy',
    owner: 'David Biggs',
    iconClass: 'logos:meta-icon',
    sales: '9.2k',
    products: 674,
    revenue: '$14.4m',
    heartStyle: 'text-default-500 fill-default-100'
  },
  {
    name: 'Zoetic Fashion',
    owner: 'Jaqueline Hammes',
    iconClass: 'logos:google-icon',
    sales: '1.8k',
    products: 112,
    revenue: '$132.4k',
    heartStyle: 'text-default-500 fill-default-100'
  },
  {
    name: 'Force Medicines',
    owner: 'Ashley Uilson',
    iconClass: 'logos:telegram',
    sales: '4.1k',
    products: 243,
    revenue: '$861.7k',
    heartStyle: 'text-default-500 fill-default-100'
  }
]
</script>
