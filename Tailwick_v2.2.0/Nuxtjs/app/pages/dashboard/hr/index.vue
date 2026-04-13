<template>
  <Vertical>
    <PageTitle title="HR" subtitle="Dashboards" />
    <HRWelcome />
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <SummaryCards />
      <ApplicationReceived />
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <div class="lg:col-span-3 col-span-1">
        <EmployeePerformance />
        <div class="grid lg:grid-cols-3 col-span-1 gap-5">
          <TotalProjects />
          <UpcomingInterview />
          <RecentPayroll />
        </div>
      </div>
      <UpcomingScheduled />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import HRWelcome from './components/HRWelcome.vue'
import SummaryCards from './components/SummaryCards.vue'
import ApplicationReceived from './components/ApplicationReceived.vue'
import EmployeePerformance from './components/EmployeePerformance.vue'
import TotalProjects from './components/TotalProjects.vue'
import UpcomingInterview from './components/UpcomingInterview.vue'
import RecentPayroll from './components/RecentPayroll.vue'
import UpcomingScheduled from './components/UpcomingScheduled.vue'

usePageTitle('HR')
</script>
