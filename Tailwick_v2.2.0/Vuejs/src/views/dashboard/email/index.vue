<template>
  <Vertical>
    <PageTitle title="Email Analytics" subtitle="Dashboards" />

    <EmailAnalyticsStats />
    <EmailHealthStats />
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mb-5">
      <EmailData />
      <EmailMarketing />
      <Experience />
    </div>

    <EmailPerformance />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import EmailAnalyticsStats from './components/EmailAnalyticsStats.vue'
import EmailHealthStats from './components/EmailHealthStats.vue'
import EmailData from './components/EmailData.vue'
import EmailMarketing from './components/EmailMarketing.vue'
import Experience from './components/Experience.vue'
import EmailPerformance from './components/EmailPerformance.vue'

</script>
