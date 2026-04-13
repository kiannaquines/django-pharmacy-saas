<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-info bg-info/10 size-12">
            <Icon icon="lucide:users-2" class="size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="43">43</span>
            </h5>
            <p class="text-default-500">Total Employee</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-danger bg-danger/10 size-12">
            <Icon icon="lucide:user-x" class="size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="6">6</span>
            </h5>
            <p class="text-default-500">Absent Employee (Today)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-success bg-success/10 size-12">
            <Icon icon="lucide:user-check" class="size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="32">32</span>
            </h5>
            <p class="text-default-500">Present Employee (Today)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="flex items-center gap-3">
          <div class="btn text-primary bg-primary/10 size-12">
            <Icon icon="lucide:briefcase" class="size-6"></Icon>
          </div>
          <div>
            <h5 class="mb-1 text-base text-heading font-semibold">
              <span class="counter-value" data-target="22">22</span>
            </h5>
            <p class="text-default-500">Working Days (Current Month)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
