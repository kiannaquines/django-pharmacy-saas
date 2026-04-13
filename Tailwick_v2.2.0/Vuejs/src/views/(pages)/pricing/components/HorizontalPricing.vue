<template>
  <div class="grid lg:grid-cols-2 gap-5">
    <div class="card">
      <div class="card-body">
        <h5 class="text-lg mb-2 font-semibold text-default-800">Personal Plan</h5>
        <div class="grid lg:grid-cols-3 gap-5">
          <div class="lg:col-span-2">
            <p class="relative before:content-[''] before:absolute before:border-b before:border-default-200 before:bottom-2 before:start-0 before:end-0">
              <span class="pe-2 bg-card relative text-default-500 text-sm">Everything Includes</span>
            </p>
            <div class="grid md:grid-cols-2 md:gap-5">
              <div>
                <ul class="mt-5 flex flex-col gap-3 text-sm">
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>3</b> Projects</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>299</b> Customers</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900">Scalable Bandwidth</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>0</b>No Team Account</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="mt-5 flex flex-col gap-3 text-sm">
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>3</b> Projects</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>299</b> Customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lg:col-sapn-1">
            <div class="p-5 bg-primary/10 rounded-lg">
              <div class="text-white">
                <p class="text-primary text-sm mb-4">Per Month</p>
                <p class="text-primary text-2xl font-bold mb-4">$29.99</p>
                <button type="button" class="py-1.5 px-4 w-full bg-blue-600 rounded-md">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="text-lg mb-2 font-semibold text-default-800">Enterprise Plan</h5>
        <div class="grid lg:grid-cols-3 gap-5">
          <div class="lg:col-span-2">
            <p class="relative before:content-[''] before:absolute before:border-b before:border-default-200 before:bottom-2 before:end-0 before:start-0">
              <span class="pe-2 bg-card relative text-default-500 text-sm">Everything Includes</span>
            </p>

            <div class="grid md:grid-cols-2 md:gap-5">
              <div>
                <ul class="mt-5 flex flex-col gap-3 text-sm">
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>3</b> Projects</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>299</b> Customers</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900">Scalable Bandwidth</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>0</b>No Team Account</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul class="mt-5 flex flex-col gap-3 text-sm">
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>3</b> Projects</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>299</b> Customers</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900">Scalable Bandwidth</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <Icon icon="lucide:check-square" class="size-4 text-success"></Icon>
                    <span class="text-default-900"><b>0</b>No Team Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="lg:col-sapn-1">
            <div class="p-5 bg-purple-500/20 rounded-lg">
              <div class="kt-card-content">
                <p class="text-sm mb-4 text-purple-600">Per Month</p>
                <p class="text-2xl font-bold mb-4 text-default-800">$49.99</p>
                <button type="button" class="py-1.5 px-4 w-full rounded-md bg-purple-600 text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
