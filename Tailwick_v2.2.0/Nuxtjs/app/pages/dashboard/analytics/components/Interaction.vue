<template>
  <div class="lg:col-span-7 col-span-1">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Pages Interaction</h6>
        <button>
          <select class="bg-default-200 text-default-600 form-input form-input-sm">
            <option selected>This Yearly</option>
            <option>1 Weekly</option>
            <option>1 Monthly</option>
            <option>3 Monthly</option>
            <option>6 Monthly</option>
            <option>This Yearly</option>
          </select>
        </button>
      </div>
      <div class="card-body">
        <client-only>
          <VueApexCharts type="bar" height="350" :options="pagesInteractionOptions" :series="pagesInteractionseries" />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from 'vue3-apexcharts'
import { pagesInteractionOptions, pagesInteractionseries } from './data'
</script>
