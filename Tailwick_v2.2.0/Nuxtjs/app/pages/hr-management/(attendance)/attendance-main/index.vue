<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Main Attendance" />
    <Stat />
    <Table />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Stat from './components/Stat.vue'
import Table from './components/Table.vue'

usePageTitle('Main Attendance')
</script>
