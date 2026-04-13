<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Attendance" />
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <Profile />
      <Table />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Profile from './components/Profile.vue'
import Table from './components/Table.vue'

usePageTitle('Attendance')
</script>
