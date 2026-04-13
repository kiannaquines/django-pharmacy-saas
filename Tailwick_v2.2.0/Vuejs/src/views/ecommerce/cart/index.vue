<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Shopping Cart" />
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <ShopingCart />
      <OrderSummary />
    </div>
    <div id="cart-item-delete-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="cart-item-delete-modal-label">
      <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
        <div class="w-full flex flex-col bg-card border border-default-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70 px-6 py-8 relative">
          <div class="absolute top-3 end-3">
            <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#cart-item-delete-modal">
              <span class="sr-only">Close</span>
              <Icon icon="lucide:x" class="size-5"></Icon>
            </button>
          </div>
          <h3 class="font-semibold text-base text-default-800 dark:text-white text-center">
            <img :src="deleteIcon" alt="" class="size-12 mx-auto" />
            <div class="mt-5 text-center">
              <h5 class="mb-1 text-lg font-semibold text-default-800">Are you sure?</h5>
              <p class="text-default-500 text-sm font-normal">Are you certain you want to delete this record?</p>
              <div class="mt-5 flex gap-2 md:justify-center">
                <button data-hs-overlay="#cart-item-delete-modal" class="py-2 px-4 text-[13px] rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-red-50" aria-label="Close">Cancel</button>
                <button class="btn bg-danger text-white">Yes,Delete It!</button>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import Vertical from '@/layouts/vertical.vue'
import ShopingCart from './components/ShopingCart.vue'
import OrderSummary from './components/OrderSummary.vue'
import { Icon } from '@iconify/vue'
import deleteIcon from '@/assets/images/delete.png'
</script>
