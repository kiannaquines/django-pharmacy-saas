<template>
  <div class="col-span-1">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Order Statistics</h6>
        <RouterLink to="" class="btn btn-sm border-0 text-primary/90 hover:text-primary"
          >View All
          <Icon icon="lucide:move-right" class="ms-1 size-4"></Icon>
        </RouterLink>
      </div>
      <div class="card-body">
        <client-only>
          <VueApexCharts type="line" height="275" :options="chartOptions" :series="series" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { chartOptions, series } from './data'
import VueApexCharts from 'vue3-apexcharts'
import { RouterLink } from 'vue-router';
</script>
