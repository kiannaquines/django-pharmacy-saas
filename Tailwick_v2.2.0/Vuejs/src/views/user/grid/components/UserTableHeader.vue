<template>
  <div class="flex justify-between gap-3 flex-wrap items-center mb-5">
    <div class="relative">
      <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for name,email,phone number etc..." />
      <div class="absolute inset-y-0 start-4 flex items-center">
        <Icon icon="lucide:search" class="size-3.5 flex items-center text-default-500"></Icon>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <button type="button" class="btn btn-sm bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="addUserModal" data-hs-overlay="#addUserModal">
        <Icon icon="lucide:plus" class="size-4 ms-1"></Icon>
        Add User
      </button>
      <button type="button" class="btn size-7.5 bg-default-500 text-white hover:bg-default-600">
        <Icon icon="lucide:sliders-horizontal" class="size-4"></Icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
