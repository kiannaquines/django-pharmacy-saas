<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Add New" />
    <div class="lg:flex justify-between items-center mb-5">
      <div>
        <h6 class="mb-1 card-title">New Invoice</h6>
      </div>
      <div class="flex flex-wrap items-center md:justify-end gap-2 md:mt-0 mt-4">
        <button class="bg-default-200 text-default-500 text-nowrap btn border-0 hover:bg-default-300"><Icon icon="lucide:eye" class="size-4 me-1"></Icon>Preview</button>
        <button class="bg-info/90 text-white btn text-nowrap border-0 hover:bg-info" onclick="window.print()">Save Draft</button>
        <button class="btn bg-primary text-white text-nowrap border-0"><Icon icon="lucide:save" class="size-4 text-white me-1"></Icon>Save & Download</button>
      </div>
    </div>
    <CreateForm />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import CreateForm from './components/CreateForm.vue'
import { Icon } from '@iconify/vue'

</script>
