<template>
  <Header />
  <Hero />
  <Product />
  <Feature />
  <About />
  <Feedback />
  <CTA />
  <Footer />
</template>

<script setup lang="ts">
import About from './components/About.vue'
import CTA from './components/CTA.vue'
import Feature from './components/Feature.vue'
import Feedback from './components/Feedback.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Product from './components/Product.vue'

usePageTitle('Product')

useHead({
  bodyAttrs: {
    class: 'bg-card'
  }
})
</script>
