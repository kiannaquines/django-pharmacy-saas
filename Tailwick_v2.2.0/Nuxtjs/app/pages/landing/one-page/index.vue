<template>
  <Header />
  <Hero />
  <Feature />
  <About />
  <Pricing />
  <Contact />
  <Footer />
</template>

<script setup lang="ts">
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Feature from './components/Feature.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Pricing from './components/Pricing.vue'

usePageTitle('One Page')
</script>
