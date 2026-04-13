<template>
  <Vertical>
    <PageTitle title="Analytics" subtitle="Dashboards" />
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      <Stat />
      <PlatformPerspective />
    </div>

    <div class="grid lg:grid-cols-12 grid-cols-1 gap-5 mb-5">
      <Location />
      <Interaction />
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      <UserDevice />
      <SatisfactionLevel />
      <DailyVisit />
    </div>

    <div class="grid grid-cols-1 gap-5 mb-5">
      <ProductsStatistics />
    </div>

    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <AnalyticsReports />
      <StatusofMonth />
      <Subscription />
      <Traffic />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Stat from './components/Stat.vue'
import PlatformPerspective from './components/PlatformPerspective.vue'
import Location from './components/Location.vue'
import Interaction from './components/Interaction.vue'
import UserDevice from './components/UserDevice.vue'
import SatisfactionLevel from './components/SatisfactionLevel.vue'
import DailyVisit from './components/DailyVisit.vue'
import ProductsStatistics from './components/ProductsStatistics.vue'
import AnalyticsReports from './components/AnalyticsReports.vue'
import StatusofMonth from './components/StatusofMonth.vue'
import Subscription from './components/Subscription.vue'
import Traffic from './components/Traffic.vue'

usePageTitle('Analytics')
</script>
