<template>
  <div class="col-span-1">
    <div class="card">
      <div class="card-body">
        <div class="flex justify-between">
          <h6 class="card-title">Application Received</h6>

          <div class="flex gap-2">
            <div class="btn size-7.5 bg-primary rounded text-white text-xs">All</div>
            <div class="btn size-7.5 bg-primary/20 hover:bg-primary hover:text-white rounded text-primary text-xs">1M</div>
            <div class="btn size-7.5 bg-primary/20 hover:bg-primary hover:text-white rounded text-primary text-xs">6M</div>
            <div class="btn size-7.5 bg-primary/20 hover:bg-primary hover:text-white rounded text-primary text-xs">1Y</div>
          </div>
        </div>

        <client-only>
          <VueApexCharts type="line" height="315" :options="applicationReceivedChartOptions" :series="applicationReceivedChartseries" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { applicationReceivedChartOptions, applicationReceivedChartseries } from './data'
</script>
