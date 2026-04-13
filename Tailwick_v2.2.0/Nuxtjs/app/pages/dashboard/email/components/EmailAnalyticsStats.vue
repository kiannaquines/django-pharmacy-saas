<template>
  <div class="mb-5">
    <div class="card">
      <div class="card-body">
        <div class="grid grid-cols-1 gap-5 divide-y md:divide-x md:divide-y-0 md:grid-cols-2 lg:grid-cols-4 divide-default-200">
          <div class="py-5 md:pe-5 pe-0 md:border-e md:border-b-0 border-b border-default-200">
            <div class="grid grid-cols-3 mb-4">
              <div class="text-default-500 text-sm w-36 shrink-0">
                <div class="flex items-center gap-1.5 mb-6">
                  <Icon icon="lucide:rocket" class="size-4"></Icon>
                  <p class="uppercase">sent</p>
                </div>
                <h5 class="text-default-800 text-lg font-semibold"><span class="counter-value" data-target="1452">1,452</span></h5>
              </div>
              <div class="col-span-2">
                <client-only>
                  <VueApexCharts type="line" height="80" :series="sentEmailseries" :options="sendEmailChartOptions" />
                </client-only>
              </div>
            </div>
            <span class="text-default-500">238 Emails (Monthly)</span>
          </div>
          <div class="md:p-5 px-0 py-5 md:border-e md:border-b-0 border-b border-default-200">
            <div class="grid grid-cols-3 mb-4">
              <div class="text-default-500 text-sm w-36 shrink-0">
                <div class="flex items-center gap-1.5 mb-6">
                  <Icon icon="lucide:mouse-pointer-click" class="size-4"></Icon>
                  <p class="uppercase">Open Rate</p>
                </div>
                <h5 class="text-default-800 text-lg font-semibold"><span data-target="92.74">92.74</span>%</h5>
              </div>
              <div class="col-span-2">
                <client-only>
                  <VueApexCharts type="line" height="80" :series="openRateseries" :options="openRateChartOptions" />
                </client-only>
              </div>
            </div>
            <span class="text-default-500">60 Opened (Monthly)</span>
          </div>
          <div class="md:p-5 px-0 py-5 md:border-e md:border-b-0 border-b border-default-200">
            <div class="grid grid-cols-3 mb-4">
              <div class="text-default-500 text-sm w-36 shrink-0">
                <div class="flex items-center gap-1.5 mb-6">
                  <Icon icon="lucide:square-mouse-pointer" class="size-4"></Icon>
                  <p class="uppercase">Open Rate</p>
                </div>
                <h5 class="text-default-800 text-lg font-semibold"><span data-target="3.79">3.79</span>%</h5>
              </div>
              <div class="col-span-2">
                <client-only>
                  <VueApexCharts type="line" height="80" :series="clickRateseries" :options="clickRateChartOptions" />
                </client-only>
              </div>
            </div>
            <span class="text-default-500">29 Clicks (Monthly)</span>
          </div>
          <div class="py-5 md:ps-5 ps-0">
            <div class="grid grid-cols-3 mb-4">
              <div class="text-default-500 text-sm w-36 shrink-0">
                <div class="flex items-center gap-1.5 mb-6">
                  <Icon icon="lucide:goal" class="size-4"></Icon>
                  <p class="uppercase">Clicks Through</p>
                </div>
                <h5 class="text-default-800 text-lg font-semibold"><span data-target="4.06">4.06</span>%</h5>
              </div>
              <div class="col-span-2">
                <client-only>
                  <VueApexCharts type="line" height="80" :series="clickThroughseries" :options="clickThroughChartOptions" />
                </client-only>
                <div id="clickThrough"></div>
              </div>
            </div>
            <span class="text-default-500">29 Click Through (Monthly)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import VueApexCharts from 'vue3-apexcharts'
import { clickRateChartOptions, clickRateseries, clickThroughChartOptions, clickThroughseries, openRateChartOptions, openRateseries, sendEmailChartOptions, sentEmailseries } from './data'
</script>
