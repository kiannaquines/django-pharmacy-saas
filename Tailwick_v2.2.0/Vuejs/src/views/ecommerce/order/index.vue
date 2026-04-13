<template>
  <Vertical>
    <PageTitle subtitle="Orders" title="Order Lists" />
    <Stat />
    <OrderTable />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import Stat from './components/Stat.vue'
import OrderTable from './components/OrderTable.vue'

</script>
