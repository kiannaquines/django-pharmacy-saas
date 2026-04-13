<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Employee Salary" />
    <SalaryCard />
    <SalaryTable />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import SalaryCard from './components/SalaryCard.vue'
import SalaryTable from './components/SalaryTable.vue'

</script>
