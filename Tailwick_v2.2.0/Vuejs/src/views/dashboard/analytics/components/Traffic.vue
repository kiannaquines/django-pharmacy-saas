<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Traffic Source</h6>
      <RouterLink to="" class="text-primary underline">See More</RouterLink>
    </div>
    <div class="card-body">
      <div class="flex flex-col gap-5">
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 text-sm">
            <h6 class="text-default-900">Google</h6>
            <span class="text-default-500">54,963</span>
          </div>
          <div class="w-full h-3.5 rounded bg-default-200">
            <div class="h-3.5 rounded bg-primary" style="width: 89%"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 text-sm">
            <h6 class="text-default-900">Meta</h6>
            <span class="text-default-500">30,478</span>
          </div>
          <div class="w-full h-3.5 rounded bg-default-200">
            <div class="h-3.5 rounded bg-sky-500" style="width: 55%"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 text-sm">
            <h6 class="text-default-900">Social Media</h6>
            <span class="text-default-500">54,963</span>
          </div>
          <div class="w-full h-3.5 rounded bg-default-200">
            <div class="h-3.5 rounded bg-warning" style="width: 81%"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 text-sm">
            <h6 class="text-default-900">Direct Message</h6>
            <span class="text-default-500">54,963</span>
          </div>
          <div class="w-full h-3.5 rounded bg-default-200">
            <div class="h-3.5 rounded bg-success" style="width: 63%"></div>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between gap-4 mb-2 text-sm">
            <h6 class="text-default-900">Others</h6>
            <span class="text-default-500">54,963</span>
          </div>
          <div class="w-full h-3.5 rounded bg-default-200">
            <div class="h-3.5 rounded bg-default-600" style="width: 25%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
