<template>
  <div class="card mt-5">
    <div class="card-body">
      <div class="flex justify-between gap-5 items-center">
        <h6 class="mb-4 card-title">Orders Summary</h6>
        <RouterLink to="" class="text-danger text-sm underline">Cancelled Order</RouterLink>
      </div>

      <div>
        <div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200">
          <div class="flex items-center gap-3">
            <div class="btn rounded-md size-12 bg-default-100">
              <img :src="img08" alt="" class="h-8" />
            </div>

            <div>
              <h6 class="mb-1 card-title">
                <RouterLink to="/ecommerce/product-detail" class="transition-all duration-300 ease-linear hover:text-primary">Roar Twill Blue Baseball Cap</RouterLink>
              </h6>
              <p class="text-default-500 text-sm">$149.99 x 02</p>
            </div>
          </div>
          <span class="text-sm">$299.98</span>
        </div>

        <div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200">
          <div class="flex items-center gap-3">
            <div class="btn rounded-md size-12 bg-default-100">
              <img :src="img04" alt="" class="h-8" />
            </div>

            <div>
              <h6 class="mb-1 card-title"><RouterLink to="/ecommerce/product-detail" class="transition-all duration-300 ease-linear hover:text-primary">Mesh Ergonomic Green Chair</RouterLink></h6>
              <p class="text-default-500 text-sm">$362.21 x 1</p>
            </div>
          </div>
          <span class="text-sm">$362.21</span>
        </div>

        <div class="flex justify-between items-center gap-5 py-4 border-b border-dashed border-default-200">
          <div class="flex items-center gap-3">
            <div class="btn rounded-md size-12 bg-default-100">
              <img :src="img01" alt="" class="h-8" />
            </div>

            <div>
              <h6 class="mb-1 card-title"><RouterLink to="/ecommerce/product-detail" class="transition-all duration-300 ease-linear hover:text-primary">Smartest Printed T-shirt</RouterLink></h6>
              <p class="text-default-500 text-sm">$89.99 x 03</p>
            </div>
          </div>
          <span class="text-sm">$269.97</span>
        </div>

        <div class="flex justify-between items-center gap-5 py-3 text-sm">
          <span class="text-default-500">Sub Total </span>
          <span class="text-default-800">$932.16</span>
        </div>

        <div class="flex justify-between items-center gap-5 py-3 text-sm">
          <span class="text-default-500">Estimated Tax (18%) </span>
          <span class="text-default-800">$167.79</span>
        </div>

        <div class="flex justify-between items-center gap-5 py-3 text-sm">
          <span class="text-default-500">Item Discounts (12%)</span>
          <span class="text-default-800">-$111.86</span>
        </div>

        <div class="flex justify-between items-center gap-5 py-3 text-sm">
          <span class="text-default-500">Shipping Charge </span>
          <span class="text-default-800">$0</span>
        </div>

        <div class="flex justify-between items-center gap-5 pt-4 font-semibold text-sm">
          <span class="text-default-500">Total Amount (USD) </span>
          <span class="text-default-800">$988.09</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import img01 from '@/assets/images/product/img-01.png'
import img04 from '@/assets/images/product/img-04.png'
import img08 from '@/assets/images/product/img-08.png'
</script>
