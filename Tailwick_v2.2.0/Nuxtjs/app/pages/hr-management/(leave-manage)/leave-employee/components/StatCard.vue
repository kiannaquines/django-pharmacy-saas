<template>
  <div class="card">
    <div class="card-body">
      <div class="flex items-center gap-3">
        <div class="btn text-danger bg-danger/10 size-12">
          <Icon icon="lucide:file-bar-chart-2" class="size-6"></Icon>
        </div>
        <div>
          <h5 class="mb-1 text-heading font-semibold">
            <span class="counter-value text-base" data-target="23">23</span>
          </h5>
          <p class="text-default-500">Total Leave Balance</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="flex items-center gap-3">
        <div class="btn text-secondary bg-secondary/10 size-12">
          <Icon icon="lucide:stethoscope" class="size-6"></Icon>
        </div>
        <div>
          <h5 class="mb-1 text-base text-heading font-semibold">
            <span class="counter-value" data-target="4">4</span>
          </h5>
          <p class="text-default-500">Medical Leave</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="flex items-center gap-3">
        <div class="btn text-success bg-success/10 size-12">
          <Icon icon="lucide:calendar-days" class="size-6"></Icon>
        </div>
        <div>
          <h5 class="mb-1 text-base text-heading font-semibold">
            <span class="counter-value" data-target="12">12</span>
          </h5>
          <p class="text-default-500">Annual Leave</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <div class="flex items-center gap-3">
        <div class="btn text-info bg-info/10 size-12">
          <Icon icon="lucide:anchor" class="size-6"></Icon>
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
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
