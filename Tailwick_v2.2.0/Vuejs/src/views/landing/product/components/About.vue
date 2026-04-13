<template>
  <section id="About" class="relative lg:pb-28 md:pb-18 pb-12">
    <div class="absolute bottom-0 end-0 size-64 bg-primary/10 blur-3xl"></div>
    <div class="container">
      <div class="grid lg:grid-cols-2 items-center lg:gap-40 gap-5 mt-20">
        <div class="relative">
          <div class="relative before:absolute before:h-full before:w-full before:border-[15px] before:border-double before:border-green-500/10 lg:before:-top-16 lg:before:-end-16 md:before:-top-8 md:before:-end-1 before:-end-1.5 before:-top-8">
            <img :src="about" alt="" class="rounded-lg relative z-20" />
          </div>
        </div>
        <div class="lg:ms-auto">
          <p class="mb-2 text-purple-500 text-base">About Us</p>
          <h1 class="mb-3 leading-normal capitalize text-4xl font-semibold text-default-800">We Provide high Quality shoes</h1>
          <p class="mb-5 text-lg text-default-500">Look for a shoe with solid construction that will give your feet the support they need. Next, look for quality materials that will make your feet comfortable and keep them healthy.</p>
          <p class="mb-5 text-lg text-default-500">Low-quality shoes may skimp on stitching, or use low quality glue that's prone to coming apart. A higher-quality shoe will use advanced construction to ensure that the shoe holds up over time, and also eliminate any spots.</p>
          <button type="button" class="btn border-0 bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white">Explore Now <Icon icon="lucide:move-right" class="size-4"></Icon></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import about from '@/assets/images/landing/about.jpg'
</script>
