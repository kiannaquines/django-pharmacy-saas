<template>
  <div class="col-span-1">
    <div class="sticky top-20">
      <div class="p-5 card mb-5">
        <h6 class="card-title mb-4">Order Summary</h6>
        <div class="overflow-x-auto">
          <table class="w-full">
            <tbody class="table-total">
              <tr class="text-sm">
                <td class="py-2 text-default-500">Sub Total</td>
                <td class="py-2 text-default-500 cart-subtotal">$932.16</td>
              </tr>
              <tr class="text-sm">
                <td class="py-2 text-default-500">Estimated Tax (18%)</td>
                <td class="py-2 text-default-500 cart-tax">$167.79</td>
              </tr>
              <tr class="text-sm">
                <td class="py-2 text-default-500">Item Discounts (12%)</td>
                <td class="py-2 text-default-500 cart-discount">-$111.86</td>
              </tr>
              <tr class="text-sm">
                <td class="py-2 text-default-500">Shipping Charge</td>
                <td class="py-2 text-default-500 cart-shipping">$0</td>
              </tr>
              <tr class="font-semibold text-sm text-default-800">
                <td class="pt-2">Total Amount (USD)</td>
                <td class="pt-2 cart-total">$988.09</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 mb-5">
        <button type="button" class="btn bg-danger/90 text-white transition-all duration-300 hover:bg-danger">Continue to Shopping</button>
        <button type="button" class="btn bg-primary/90 text-white transition-all duration-300 hover:bg-primary">Checkout</button>
      </div>
      <div class="p-5 card mb-5">
        <div class="flex items-center gap-5">
          <div class="btn bg-default-200 size-12">
            <Icon icon="lucide:truck" class="size-6 text-default-500 fill-default-200"></Icon>
          </div>
          <div>
            <h6 class="mb-1 text-default-800 font-semibold text-sm">Estimated Delivery</h6>
            <p class="text-default-500 text-sm">01 - 07 Dec, 2023</p>
          </div>
        </div>
      </div>
      <div class="p-5 card">
        <div class="flex items-center gap-5">
          <div class="btn bg-default-200 size-12">
            <Icon icon="lucide:container" class="size-6 text-default-500 fill-default-200"></Icon>
          </div>
          <div>
            <h6 class="mb-1 text-default-800 font-semibold text-sm">Free Shipping & Returns</h6>
            <p class="text-default-500 text-sm">On all orders over $200.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
