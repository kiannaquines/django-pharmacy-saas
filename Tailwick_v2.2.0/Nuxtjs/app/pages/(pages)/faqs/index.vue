<template>
  <Vertical>
    <PageTitle subtitle="Pages" title="FAQs" />
    <Hero />
    <h5 class="mb-5 underline text-lg font-semibold text-default-800">Popular Ask Questions</h5>
    <Faq />
    <h5 class="mb-5 underline text-lg font-semibold text-default-800">Products Video Tutorial</h5>
    <Video />
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import Vertical from '~/layouts/vertical.vue'
import Hero from './components/Hero.vue'
import Faq from './components/Faq.vue'
import Video from './components/Video.vue'

usePageTitle('Faqs')
</script>
