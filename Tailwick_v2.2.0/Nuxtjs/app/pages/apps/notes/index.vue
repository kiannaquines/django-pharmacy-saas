<template>
  <Vertical>
    <PageTitle title="Notes" subtitle="Menu" />
    <Note />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Note from './components/Notes.vue'

usePageTitle('Notes')
</script>
