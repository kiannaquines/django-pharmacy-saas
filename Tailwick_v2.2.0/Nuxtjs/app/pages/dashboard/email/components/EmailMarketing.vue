<template>
  <div class="col-span-1">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Email Marketing</h6>
        <div class="hs-dropdown relative inline-flex">
          <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
            <Icon icon="lucide:ellipsis" class="iconify size-4 text-default-600"></Icon>
          </button>
          <div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-custom-icon-trigger">
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> This Year </a>
            <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#"> Last Year </a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <client-only>
          <VueApexCharts type="radialBar" height="370" :options="emailMarketingChartOptions" :series="emailMarketingChartseries" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { emailMarketingChartOptions, emailMarketingChartseries } from './data'
</script>
