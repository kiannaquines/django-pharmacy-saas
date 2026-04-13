<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Add Leave (HR)" />
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <ApplyLeave />
      <LeaveInformation />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import ApplyLeave from './components/ApplyLeave.vue'
import LeaveInformation from './components/LeaveInformation.vue'

usePageTitle('Add Leave (HR)')
</script>
