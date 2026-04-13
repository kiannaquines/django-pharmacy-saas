<template>
  <div class="col-span-1">
    <div class="card mb-5">
      <div class="card-header">
        <h6 class="card-title">Traffic Resources</h6>
        <a href="" class="btn btn-sm border-0 text-primary/90 hover:text-primary"
          >View Status
          <Icon icon="lucide:move-right" class="ms-1 size-4"></Icon>
        </a>
      </div>
      <div class="card-body">
        <div class="grid md:grid-cols-12 grid-cols-1">
          <div class="rounded-md md:col-span-7 col-span-1">
            <client-only>
              <VueApexCharts type="radialBar" height="222" :options="initTrafficResources" dir="rtl" :series="initTrafficResourceseries" />
            </client-only>
          </div>
          <div class="md:col-span-5 col-span-1">
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-2">
                <div class="bg-green-500 size-3" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%)"></div>
                <p class="text-green-500">Search Engine (22%)</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="bg-purple-500 size-3" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%)"></div>
                <p class="text-purple-500">Referral (34%)</p>
              </div>
              <div class="flex items-center gap-2">
                <div class="bg-sky-500 size-3" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%)"></div>
                <p class="text-sky-500">Direct (44%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center justify-between mb-2">
          <h5 class="text-lg text-default-900 font-semibold">
            <span data-target="1596">1,596</span>
          </h5>
          <span class="px-2.5 py-0.5 text-xs rounded border bg-transparent border-danger/50 text-danger flex items-center gap-1">
            <Icon icon="lucide:trending-down" class="size-3"></Icon>
            6.8%
          </span>
        </div>
        <h6 class="font-semibold text-default-900">Monthly Orders Goal (20000+)</h6>
        <div>
          <div class="flex items-center justify-between mt-5 mb-2">
            <p class="text-default-500 text-sm">Total Orders</p>
            <h6 class="mb-0 text-primary">85%</h6>
          </div>
          <div class="w-full bg-default-200 rounded-full h-2.54">
            <div class="bg-primary h-2.5 rounded-full" style="width: 85%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { initTrafficResources, initTrafficResourceseries } from './data'
import VueApexCharts from 'vue3-apexcharts'
</script>
