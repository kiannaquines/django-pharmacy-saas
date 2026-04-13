<template>
  <div class="card mt-5">
    <div class="card-body">
      <div class="flex justify-between gap-5 items-center mb-4">
        <h6 class="card-title">Order Status</h6>
        <div class="flex items-center gap-3">
          <a href="#" class="text-danger underline text-sm">Cancelled Order</a>
          <a href="/invoice/overview" class="btn btn-sm bg-primary text-white">
            <Icon icon="lucide:download" class="size-4 me-1"></Icon>
            Invoice
          </a>
        </div>
      </div>
      <div>
        <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-primary before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
          <div class="flex justify-between">
            <div>
              <h6 class="mb-2 card-title">Order Placed</h6>
              <p class="text-default-500 text-sm">Your order has been successfully submitted.</p>
            </div>
            <p class="text-[13px] text-default-400">02 Nov, 2023</p>
          </div>
        </div>
        <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-primary before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
          <div class="flex justify-between">
            <div>
              <h6 class="mb-2 card-title">Order Processing</h6>
              <p class="text-default-500 text-sm">Once the order is received, it goes through the processing stage. During this time, the items are gathered, and the order is prepared for shipment.</p>
            </div>
            <p class="text-[13px] text-default-400">02 Nov, 2023</p>
          </div>
        </div>
        <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-primary before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
          <div class="flex justify-between">
            <div>
              <h6 class="mb-2 card-title">Shipped Order</h6>
              <p class="text-default-500 text-sm">The order is shipped out to the customer's designated delivery address.</p>
            </div>
            <p class="text-[13px] text-default-400">04 Nov, 2023</p>
          </div>
        </div>
        <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-primary before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
          <div class="flex justify-between">
            <div>
              <h6 class="mb-2 card-title">Out for Delivery</h6>
              <p class="text-default-500 text-sm">This status indicates that the order is currently out for delivery by the shipping or courier company.</p>
            </div>
            <p class="text-[13px] text-default-400">06 Nov, 2023</p>
          </div>
        </div>
        <div class="relative px-6 before:absolute before:start-0.75 before:border-primary before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
          <div class="flex justify-between">
            <div>
              <h6 class="mb-2 card-title">Delivered</h6>
              <p class="text-default-500 text-sm">Finally, when the order successfully reaches the customer's address and is handed over, the status changes to "Delivered."</p>
            </div>
            <p class="text-[13px] text-default-400">09 Nov, 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
