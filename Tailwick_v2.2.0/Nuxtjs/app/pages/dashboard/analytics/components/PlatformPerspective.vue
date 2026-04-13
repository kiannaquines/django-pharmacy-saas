<template>
  <div class="lg:col-span-2 col-span-1">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Platform Perspective</h6>
        <div class="flex">
          <select class="form-input form-input-sm border-default-400 bg-transparent border-dashed">
            <option selected>This Yearly</option>
            <option>1 Weekly</option>
            <option>1 Monthly</option>
            <option>3 Monthly</option>
            <option>6 Monthly</option>
            <option>This Yearly</option>
          </select>
        </div>
      </div>
      <div class="card-body">
        <client-only>
          <VueApexCharts type="treemap" height="252" :options="chartOptions" :series="series" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { chartOptions, series } from './data'
</script>
