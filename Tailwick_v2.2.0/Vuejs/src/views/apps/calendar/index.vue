<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Calendar" />
    <div class="grid lg:grid-cols-4 gap-5">
      <Calendar />
      <Event />
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import Calendar from './components/Calendar.vue'
import Event from './components/Event.vue'
</script>
