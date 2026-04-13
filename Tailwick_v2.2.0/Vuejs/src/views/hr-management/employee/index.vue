<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Employee List" />
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Employee (12)</h6>
        <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:plus" class="size-4 me-1"></Icon>Add Employee</button>
      </div>
      <EmployeeList />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import EmployeeList from './components/EmployeeList.vue'

</script>
