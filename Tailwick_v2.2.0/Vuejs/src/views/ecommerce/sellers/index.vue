<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Sellers" />
    <div class="flex justify-between gap-3 flex-wrap items-center mb-5">
      <div class="relative">
        <input type="email" class="ps-11 form-input" placeholder="Search for..." />
        <div class="absolute inset-y-0 start-0 flex items-center ps-3">
          <Icon icon="lucide:search" class="size-4 flex items-center text-default-500"></Icon>
        </div>
      </div>
      <button type="button" class="btn bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="ecommerce-sellers-add" data-hs-overlay="#ecommerce-sellers-add">
        <Icon icon="lucide:plus" class="size-4 ms-1"></Icon>
        Add Seller
      </button>
    </div>
    <Sellers />
    <Pagination />
  </Vertical>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Vertical from '@/layouts/vertical.vue'
import Sellers from './components/Sellers.vue'
import Pagination from './components/Pagination.vue'
import PageTitle from '@/components/PageTitle.vue'

</script>
