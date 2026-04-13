<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
    <div class="col-span-1">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3">
              <div class="btn size-12 text-15 bg-primary/10 text-primary">
                <Icon icon="lucide:boxes" class="size-6"></Icon>
              </div>
              <div>
                <h5 class="mb-1 text-base font-semibold text-default-800" data-target="15101">15,101</h5>
                <p class="text-default-500 text-sm">Total Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3">
              <div class="btn size-12 text-15 bg-secondary/10 text-secondary">
                <Icon icon="lucide:truck" class="size-6"></Icon>
              </div>
              <div>
                <h5 class="mb-1 text-base font-semibold text-default-800" data-target="9,543">9,543</h5>
                <p class="text-default-500 text-sm">Shipping Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3">
              <div class="btn size-12 text-15 bg-warning/15 text-warning">
                <Icon icon="lucide:loader" class="size-6"></Icon>
              </div>
              <div>
                <h5 class="mb-1 text-base font-semibold text-default-800" data-target="1,548">1,548</h5>
                <p class="text-default-500 text-sm">Pending Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3">
              <div class="btn size-12 text-15 bg-primary/10 text-primary">
                <Icon icon="lucide:package-plus" class="size-6"></Icon>
              </div>
              <div>
                <h5 class="mb-1 text-base font-semibold text-default-800" data-target="3,874">3,874</h5>
                <p class="text-default-500 text-sm">New Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3">
              <div class="btn size-12 text-15 bg-success/10 text-success">
                <Icon icon="lucide:package-check" class="size-6"></Icon>
              </div>
              <div>
                <h5 class="mb-1 text-base font-semibold text-default-800" data-target="30,914">30,914</h5>
                <p class="text-default-500 text-sm">Delivered Orders</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div class="flex items-center gap-3">
              <div class="btn size-12 text-15 bg-danger/10 text-danger">
                <Icon icon="lucide:package-x" class="size-6"></Icon>
              </div>
              <div>
                <h5 class="mb-1 text-base font-semibold text-default-800" data-target="3,863">3,863</h5>
                <p class="text-default-500 text-sm">Cancelled Orders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-2 col-span-1">
      <div class="card">
        <div class="card-header">
          <h6 class="car-title">Orders Overview</h6>
        </div>
        <div class="card-body">
          <client-only>
            <VueApexCharts type="bar" height="190" :options="chartOptions" :series="series" />
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import VueApexCharts from 'vue3-apexcharts'
import { chartOptions, series } from './data'
</script>
