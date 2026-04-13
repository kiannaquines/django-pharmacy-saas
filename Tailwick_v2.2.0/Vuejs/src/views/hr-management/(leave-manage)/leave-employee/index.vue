<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Leave Manage (Employee)" />
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <StatCard />
    </div>
    <Table />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import StatCard from './components/StatCard.vue'
import Table from './components/Table.vue'

</script>
