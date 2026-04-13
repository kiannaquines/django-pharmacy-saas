<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Add New" />
    <div class="grid lg:grid-cols-12 grid-cols-1 gap-6">
      <CreateProduct />
      <ProductCard />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import CreateProduct from './components/CreateProduct.vue'
import ProductCard from './components/ProductCard.vue'

</script>
