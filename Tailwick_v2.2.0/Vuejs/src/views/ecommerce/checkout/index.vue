<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Checkout" />
    <div class="flex gap-1.25 px-4 py-3 mb-5 text-teal-700 border border-teal-200 rounded-md bg-teal-50">
      <Icon icon="lucide:shopping-bag" class="size-4 text-teal-700"></Icon>&nbsp;
      <p class="text-13xl">The minimum order requirement is <b>$1,800</b>. To meet this threshold, please add additional products with a combined value of <b>$300</b>.</p>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      <div class="lg:col-span-2 col-span-1">
        <div class="flex justify-between gap-5 mb-5 items-center">
          <RouterLink to="" class="flex gap-1.25 text-sm items-center text-primary">
            <Icon icon="lucide:chevron-left" class="size-4"></Icon>
            Back to Cart
          </RouterLink>
          <button type="button" class="text-[13px] py-2 px-4 rounded bg-primary text-white transition-all duration-300 hover:bg-blue-600 inline-flex items-center">
            Place Order
            <Icon icon="lucide:move-right" class="size-4 ms-1"></Icon>
          </button>
        </div>
        <ShoppingInformation />
        <Delivery />
        <PaymentInformation />
      </div>
      <OrdersSummary />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import ShoppingInformation from './components/ShoppingInformation.vue'
import Delivery from './components/Delivery.vue'
import PaymentInformation from './components/PaymentInformation.vue'
import OrdersSummary from './components/OrdersSummary.vue'
import { RouterLink } from 'vue-router'
</script>
