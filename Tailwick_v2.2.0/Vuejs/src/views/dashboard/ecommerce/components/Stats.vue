<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-center mx-auto rounded-full size-14 bg-primary/10">
          <Icon icon="lucide:wallet-2" class="size-6 text-primary"></Icon>
        </div>
        <h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg">$ <span data-target="236.18">236.18</span>k</h5>
        <p class="text-center text-sm text-default-500">Total Revenue</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-center mx-auto rounded-full size-14 bg-info/10">
          <Icon icon="lucide:package" class="size-6 text-info"></Icon>
        </div>
        <h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg">
          <span data-target="13,461">13,461</span>
        </h5>
        <p class="text-center text-sm text-default-500">Total Orders</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-center mx-auto rounded-full size-14 bg-success/10">
          <Icon icon="lucide:truck" class="size-6 text-success"></Icon>
        </div>
        <h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg">
          <span data-target="17,150">17,150</span>
        </h5>
        <p class="text-center text-sm text-default-500">Delivered</p>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-center mx-auto rounded-full size-14 bg-danger/10">
          <Icon icon="lucide:package-x" class="size-6 text-danger"></Icon>
        </div>
        <h5 class="mt-4 text-center mb-2 text-default-800 font-semibold text-lg">
          <span data-target="3,519">3,519</span>
        </h5>
        <p class="text-center text-sm text-default-500">Cancelled</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
