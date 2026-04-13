<template>
  <div class="card">
    <div class="card-body">
      <div class="flex justify-between">
        <div>
          <h6 class="mb-4 card-title">Shipping Details</h6>
          <h6 class="mb-1 text-default-800 font-semibold text-sm">Pauline Hylton</h6>
          <p class="mb-1 text-default-500 text-sm">1235 Crossing Meadows Dr, Onalaska</p>
          <p class="text-default-500 text-sm">West Virginia, USA</p>
        </div>
        <div class="btn bg-secondary/10 text-secondary size-12 float-end">
          <Icon icon="lucide:truck" class="text-2xl"></Icon>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="flex justify-between">
        <div>
          <h6 class="mb-4 card-title">Billing Details</h6>
          <h6 class="mb-1 text-default-800 font-semibold text-sm">Pauline Hylton</h6>
          <p class="mb-1 text-default-500 text-sm">1235 Crossing Meadows Dr, Onalaska</p>
          <p class="text-default-500 text-sm">West Virginia, USA</p>
        </div>
        <div class="btn bg-danger/10 text-danger size-12 float-end">
          <Icon icon="lucide:credit-card" class="text-2xl"></Icon>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="flex justify-between">
        <div>
          <h6 class="mb-4 card-title">Payment Details</h6>
          <h6 class="mb-1 text-default-800 font-semibold text-sm">ID: #TSD456DF41SD5</h6>
          <p class="mb-1 text-default-500 text-sm">Payment Method: <b>Credit Card</b></p>
          <p class="mb-1 text-default-500 text-sm">Card Number: <b>xxxx xxxx xxxx 1501</b></p>
        </div>
        <div class="btn bg-info/10 text-info size-12 float-end">
          <Icon icon="lucide:circle-dollar-sign" class="text-2xl"></Icon>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="flex justify-between">
        <div>
          <h6 class="mb-4 card-title">Customer Info</h6>
          <h6 class="mb-1 text-default-800 font-semibold text-sm">Pauline Hylton</h6>
          <p class="mb-1 text-default-500 text-sm">pauline@tailwick.com</p>
          <p class="text-default-500 text-sm">+(78) 120 4843 4714</p>
        </div>
        <div class="btn bg-warning/20 text-info size-12 float-end">
          <img :src="avatar4" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import avatar4 from '@/assets/images/user/avatar-4.png'
</script>
