<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Grid View" />
    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <Filter />
      <Product />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Filter from './components/Filter.vue'
import Product from './components/Product.vue'

usePageTitle('Grid View')
</script>
