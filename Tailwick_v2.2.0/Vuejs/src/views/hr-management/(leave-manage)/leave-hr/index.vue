<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Leave Manage (HR)" />
    <Stat />
    <LeaveTable />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import Stat from './components/Stat.vue'
import LeaveTable from './components/LeaveTable.vue'

</script>
