<template>
  <Vertical>
    <PageTitle title="Ecommerce" subtitle="Dashboards" />
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      <div class="lg:col-span-2 col-span-1">
        <WelcomeCard />
        <Stats />
      </div>
      <OrderStat />
    </div>

    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      <SalesRevenue />
      <TrafficResources />
    </div>

    <ProductOrder />

    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <CustomerService />
      <SalesMonth />
      <SellingProduct />
      <Audience />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import Audience from './components/Audience.vue'
import CustomerService from './components/CustomerService.vue'
import OrderStat from './components/OrderStat.vue'
import ProductOrder from './components/ProductOrder.vue'
import SalesMonth from './components/SalesMonth.vue'
import SalesRevenue from './components/SalesRevenue .vue'
import SellingProduct from './components/SellingProduct.vue'
import Stats from './components/Stats.vue'
import TrafficResources from './components/TrafficResources.vue'
import WelcomeCard from './components/WelcomeCard.vue'
</script>
