<template>
  <Vertical>
    <PageTitle subtitle="Pages" title="Pricing" />
    <Pricing />
    <h5 class="mt-2 mb-4 underline text-lg font-semibold text-default-700">Horizontal Pricing</h5>
    <HorizontalPricing />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Pricing from './components/Pricing.vue'
import HorizontalPricing from './components/HorizontalPricing.vue'

usePageTitle('Pricing')
</script>
