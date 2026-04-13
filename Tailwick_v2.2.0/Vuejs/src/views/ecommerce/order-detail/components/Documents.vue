<template>
  <div class="col-span-1">
    <div class="card mb-5">
      <div class="card-body">
        <h6 class="mb-3 card-title">Documents</h6>
        <div class="overflow-x-auto">
          <table class="w-full">
            <tbody>
              <tr>
                <td class="pe-3.5 py-2 text-default-500 text-sm">Invoice No.</td>
                <td class="ps-3.5 py-2 text-sm"><RouterLink to="/invoice/overview" class="text-primary">#TWI154203</RouterLink></td>
              </tr>
              <tr>
                <td class="pe-3.5 py-2 text-sm text-default-500">Shipping No</td>
                <td class="ps-3.5 py-2 text-sm"><RouterLink to="" class="text-primary">#TWS987102301</RouterLink></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between gap-3 mb-4">
          <h6 class="card-title">Logistics Details</h6>
          <RouterLink to="" class="underline text-primary">Track Order</RouterLink>
        </div>
        <div class="gap-4 flex">
          <img :src="delivery" alt="" class="h-10" />
          <div>
            <h6 class="mb-1 card-title">Express Delivery</h6>
            <p class="text-default-500 text-sm">ID: EDTW1400457854</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import delivery from '@/assets/images/brand/delivery-1.png'
import { RouterLink } from 'vue-router';
</script>
