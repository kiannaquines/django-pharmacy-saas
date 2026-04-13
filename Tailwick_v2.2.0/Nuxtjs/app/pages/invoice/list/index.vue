<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="List View" />

    <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
      <InvoiceList />
      <InvoiceForm />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import InvoiceList from './components/InvoiceList.vue'
import InvoiceForm from './components/InvoiceForm.vue'

usePageTitle('List View')
</script>
