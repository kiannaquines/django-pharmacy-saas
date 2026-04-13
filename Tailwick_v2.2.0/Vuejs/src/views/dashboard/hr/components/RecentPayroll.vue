<template>
  <div class="col-span-1">
    <div class="relative mb-5 bg-gradient-to-r to-primary/50 from-transparent rounded-md shadow-md">
      <div :style="{ background: `url(${dash})` }" class="absolute inset-0 bg-cover opacity-30"></div>
      <div class="relative card-body">
        <div class="flex gap-3 mb-4">
          <div class="bg-purple-500/10 rounded-full size-10">
            <img :src="avatar6" alt="" class="h-10 rounded-full" />
          </div>
          <div>
            <h6 class="mb-1 text-sm text-default-800">Nakisha Short</h6>
            <p class="text-default-600">Her Birthday Today</p>
          </div>
        </div>
        <button type="button" class="btn btn-sm bg-primary text-white">Wish Her</button>
      </div>
      <img :src="brithday" alt="" class="absolute bottom-0 right-0" />
    </div>
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Recent Payroll</h6>
        <div class="hs-dropdown relative inline-flex">
          <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
            <Icon icon="lucide:ellipsis-vertical" class="iconify size-4 text-default-500"></Icon>
          </button>
          <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 bg-card shadow-md rounded-lg z-30 mt-2 p-2" role="menu">
            <div class="text-sm">
              <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> Today </RouterLink>
              <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> Yesterday </RouterLink>
              <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" to=""> Thursday </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <simplebar class="h-60" data-simplebar>
        <div class="card-body">
          <div class="flex flex-col gap-3.5">
            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-right" class="text-danger size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Christopher Horn</h6>
              <h6 class="text-default-900">$145.32</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">Paid</span>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-left" class="text-success size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Richard Peters</h6>
              <h6 class="text-default-900">$4512.99</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning">Pending</span>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-left" class="text-success size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">James Perez</h6>
              <h6 class="text-default-900">$879.99</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">Paid</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-right" class="text-danger size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Myrtle Velez</h6>
              <h6 class="text-default-900">$978.14</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger">Cancelled</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-left" class="text-success size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Brad Castillo</h6>
              <h6 class="text-default-900">$412.59</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning">Pending</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <Icon icon="lucide:move-up-left" class="text-success size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Robert Jump</h6>
              <h6 class="text-default-900">$666.99</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">Paid</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-right" class="text-danger size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Myrtle Velez</h6>
              <h6 class="text-default-900">$978.14</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger">Cancelled</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3 text-sm">
              <Icon icon="lucide:move-up-right" class="text-danger size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Christopher Horn</h6>
              <h6 class="text-default-900">$145.32</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">Paid</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <Icon icon="lucide:move-down-left" class="text-success size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">Richard Peters</h6>
              <h6 class="text-default-900">$4512.99</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning">Pending</span>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <Icon icon="lucide:move-down-left" class="text-success size-4"></Icon>
              <h6 class="text-default-800 font-semibold grow">James Perez</h6>
              <h6 class="text-default-900">$879.99</h6>
              <div>
                <span class="py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue'
import dash from '@/assets/images/hr-dashboard.png'
import brithday from '@/assets/images/birthday.png'
import avatar6 from '@/assets/images/user/avatar-6.png'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>
