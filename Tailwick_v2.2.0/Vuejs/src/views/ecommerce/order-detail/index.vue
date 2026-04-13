<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Order Overview" />
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
      <Stat />
    </div>
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mb-5">
      <div class="lg:col-span-3 col-span-1">
        <OrderInfo />
        <OrderSummary />
        <OrderStatus />
      </div>
      <Documents />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import Vertical from '@/layouts/vertical.vue'
import Stat from './components/Stat.vue'
import OrderInfo from './components/OrderInfo.vue'
import OrderSummary from './components/OrderSummary.vue'
import OrderStatus from './components/OrderStatus.vue'
import Documents from './components/Documents.vue'
import PageTitle from '@/components/PageTitle.vue'

</script>
