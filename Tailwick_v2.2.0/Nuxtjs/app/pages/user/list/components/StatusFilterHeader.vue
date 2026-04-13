<template>
  <div class="card-header">
    <div class="md:flex items-center md:space-y-0 space-y-4 gap-3">
      <div class="relative">
        <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for name,email" />
        <div class="absolute inset-y-0 start-0 flex items-center ps-3">
          <Icon icon="lucide:search" class="size-3.5 flex items-center text-default-500 fill-default-100"></Icon>
        </div>
      </div>
      <select class="form-input form-input-sm">
        <option selected>select status</option>
        <option>Hidden</option>
        <option>Rejected</option>
        <option>Verified</option>
        <option>Waiting</option>
      </select>
    </div>
    <div class="flex gap-2 items-center flex-wrap">
      <button type="button" class="btn btn-sm bg-transparent border border-dashed border-primary text-primary hover:bg-primary/10">
        <Icon icon="lucide:download" class="size-4"></Icon>
        Import
      </button>
      <button type="button" class="btn btn-sm size-7.5 bg-default-100 text-default-500 hover:bg-default-1500 hover:text-white">
        <Icon icon="lucide:sliders-horizontal" class="size-4"></Icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
