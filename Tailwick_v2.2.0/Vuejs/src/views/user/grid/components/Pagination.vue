<template>
  <div class="flex flex-wrap md:justify-between justify-center items-centermd:gap-0 gap-4 my-5 text-default-500">
    <p class="text-default-500 text-sm">Showing <b>07</b> of <b>19</b> Results</p>
    <nav class="flex items-center gap-2" aria-label="Pagination">
      <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"><Icon icon="lucide:chevron-left" class="size-4 me-1"></Icon> Prev</button>
      <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button>
      <button type="button" class="btn size-7.5 bg-primary text-white">2</button>
      <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button>
      <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
        Next
        <Icon icon="lucide:chevron-right" class="size-4 ms-1"></Icon>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
