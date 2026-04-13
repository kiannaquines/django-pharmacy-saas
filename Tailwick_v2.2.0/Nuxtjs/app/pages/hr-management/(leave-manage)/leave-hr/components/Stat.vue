<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-primary bg-primary/10 size-12">
            <Icon icon="lucide:file-bar-chart-2" class="iconify size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="18">18</span>/
              <span class="counter-value" data-target="60">60</span>
            </h5>
            <p class="text-default-500">Today/Presents Leave</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-success bg-success/10 size-12">
            <Icon icon="lucide:calendar-check" class="iconify size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="5">5</span>
            </h5>
            <p class="text-default-500">Today Leaves</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-secondary bg-secondary/10 size-12">
            <Icon icon="lucide:codepen" class="iconify size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="0">0</span>
            </h5>
            <p class="text-default-500">Unplanned Leaves</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-warning bg-warning/10 size-12">
            <Icon icon="lucide:loader" class="iconify size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="11">11</span>
            </h5>
            <p class="text-default-500">Remaining Leave</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
