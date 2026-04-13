<template>
  <div class="card">
    <div class="card-header">
      <div class="flex items-center gap-1.5">
        <h6 class="card-title">Satisfaction Level</h6>
        <div class="hs-tooltip [--placement:top]">
          <button type="button" class="hs-tooltip-toggle">
            <Icon icon="lucide:info" class="size-4 text-default-500 mt-2"></Icon>
            <span class="hs-tooltip-content max-w-80 hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip"> The 1-to-5 satisfaction scale is used for measuring customer satisfaction </span>
          </button>
        </div>
      </div>
      <div class="hs-dropdown relative inline-flex">
        <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
          <Icon icon="lucide:ellipsis-vertical" class="iconify size-4 text-default-500"></Icon>
        </button>
        <div class="hs-dropdown-menu" role="menu">
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 1 Weekly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 1 Monthly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 3 Monthly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> 6 Monthly </a>
          <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> This Yearly </a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <client-only>
        <VueApexCharts type="radialBar" height="445" :options="satisfactionRateOptions" :series="satisfactionRateseries" />
      </client-only>
      <p class="text-center text-15xl">Based on Likes 💖</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { satisfactionRateOptions, satisfactionRateseries } from './data'
import VueApexCharts from 'vue3-apexcharts'
</script>
