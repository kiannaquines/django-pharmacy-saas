<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between mb-3">
          <p class="text-default-500">Delivered Rate</p>
          <div class="hs-tooltip [--placement:top]">
            <button type="button" class="hs-tooltip-toggle">
              <Icon icon="lucide:info" class="size-4 text-default-500 mt-2"></Icon>
              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip">Taking the number of delivered emails and dividing it by the total number of emails sent </span>
            </button>
          </div>
        </div>
        <h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="100">100</span>%</h5>
        <client-only>
          <VueApexCharts class="w-87 h-20" type="bar" height="80" :series="deliveredRateseries" :options="deliveredRateChartOptions" />
        </client-only>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between mb-3">
          <p class="text-default-500">Hard Bounce Rate</p>
          <div class="hs-tooltip [--placement:top]">
            <button type="button" class="hs-tooltip-toggle">
              <Icon icon="lucide:info" class="size-4 text-default-500 mt-2"></Icon>
              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xl" role="tooltip"> Taking the number of delivered emails and dividing it by the total number of emails sent </span>
            </button>
          </div>
        </div>
        <h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="89">89</span>%</h5>
        <client-only>
          <VueApexCharts class="w-87 h-20" type="bar" height="80" :series="hardBounceRateseries" :options="hardBounceRateChartOptions" />
        </client-only>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between mb-3">
          <p class="text-default-500">Unsubscribed Rate</p>
          <div class="hs-tooltip [--placement:top]">
            <button type="button" class="hs-tooltip-toggle">
              <Icon icon="lucide:info" class="size-4 text-default-500 mt-2"></Icon>
              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip"> Taking the number of delivered emails and dividing it by the total number of emails sent </span>
            </button>
          </div>
        </div>
        <h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="33">33</span>%</h5>
        <client-only>
          <VueApexCharts class="w-87 h-20" type="bar" height="80" :series="unsubscribedRateseries" :options="unsubscribedRateChartOptions" />
        </client-only>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between mb-3">
          <p class="text-default-500">Spam Report Rate</p>
          <div class="hs-tooltip [--placement:top]">
            <button type="button" class="hs-tooltip-toggle">
              <Icon icon="lucide:info" class="size-4 text-default-500 mt-2"></Icon>
              <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-30 py-1 px-2 bg-default-900 text-xs font-medium text-default-100 rounded-md shadow-2xs" role="tooltip"> Taking the number of delivered emails and dividing it by the total number of emails sent </span>
            </button>
          </div>
        </div>
        <h5 class="mb-4 text-default-800 text-lg font-semibold"><span class="" data-target="11.8">11.8</span>%</h5>
        <client-only>
          <VueApexCharts class="w-87 h-20" type="bar" height="80" :series="spanReportRateseries" :options="spanReportRateChartOptions" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { deliveredRateChartOptions, deliveredRateseries, hardBounceRateChartOptions, hardBounceRateseries, spanReportRateChartOptions, spanReportRateseries, unsubscribedRateChartOptions, unsubscribedRateseries } from './data'
import VueApexCharts from 'vue3-apexcharts'
</script>
