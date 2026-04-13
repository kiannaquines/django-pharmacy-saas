<template>
  <div class="lg:col-span-5 col-span-1">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Location-Based Response Times</h6>
        <button type="button" class="btn btn-sm bg-primary/20 text-primary text-nowrap hover:bg-primary hover:text-white">
          View More
          <Icon icon="lucide:move-right" class="size-4"></Icon>
        </button>
      </div>

      <div class="card-body">
        <client-only>
          <VueApexCharts type="line" height="350" :options="responseTimesOptions" :series="responseTimesseries" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import VueApexCharts from 'vue3-apexcharts'
import { responseTimesOptions, responseTimesseries } from './data'
</script>
