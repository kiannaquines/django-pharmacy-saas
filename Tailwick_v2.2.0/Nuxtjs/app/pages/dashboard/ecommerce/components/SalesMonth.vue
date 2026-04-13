<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Sales This Month</h6>
      <div class="hs-dropdown relative inline-flex">
        <button type="button" class="hs-dropdown-toggle btn size-7.5 text-sm font-semibold rounded-lg hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
          <Icon icon="lucide:ellipsis-vertical" class="iconify size-4 text-default-500"></Icon>
        </button>
        <div class="hs-dropdown-menu" role="menu">
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 1 Weekly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 1 Monthly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 3 Monthly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> 6 Monthly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href=""> This Yearly </a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center rounded-md size-12 bg-success/10">
          <Icon icon="lucide:trending-up" class="size-6 text-success"></Icon>
        </div>
        <div class="text-sm">
          <p class="mb-1 text-default-500">Total Profit</p>
          <h5 class="font-semibold text-default-800">$<span data-target="746.84">746.84</span>k</h5>
        </div>
      </div>
      <client-only>
        <VueApexCharts type="line" height="275" :options="salesThisMonthChart" :series="salesThisMonthChartseries" />
      </client-only>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import VueApexCharts from 'vue3-apexcharts'
import { salesThisMonthChart, salesThisMonthChartseries } from './data'
</script>
