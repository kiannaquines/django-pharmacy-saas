<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Overview" />

    <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-5">
      <SidebarProduct />
      <ProductDetails />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import Vertical from '~/layouts/vertical.vue'
import SidebarProduct from './components/SidebarProduct.vue'
import ProductDetails from './components/ProductDetails.vue'
import PageTitle from '~/components/PageTitle.vue'

usePageTitle('Overview')
</script>
