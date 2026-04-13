<template>
  <Vertical>
    <PageTitle subtitle="Users" title="List View" />
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Users List</h6>
        <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:plus" class="size-4 me-1"></Icon>Add user</button>
      </div>
      <StatusFilterHeader />
      <UserTable />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import StatusFilterHeader from './components/StatusFilterHeader.vue'
import UserTable from './components/UserTable.vue'
import { Icon } from '@iconify/vue'

usePageTitle('List View')
</script>
