<template>
  <section id="Features" class="relative lg:pb-28 pb-10">
    <div class="absolute top-0 start-0 size-64 bg-purple-500/10 blur-3xl"></div>
    <div>
      <div class="container">
        <div class="grid lg:grid-cols-2 items-center">
          <div class="lg:w-lg">
            <h1 class="mb-3 leading-normal capitalize text-4xl font-semibold text-default-800">Explore our flagship product and discover its unique features</h1>
            <p class="mb-5 text-lg text-default-500">Whatever your running gait, a good pair of running shoes will provide flexibility, durability, and support.</p>
            <ul class="flex flex-col gap-y-2 mb-6 list-disc list-inside text-sm text-default-800">
              <li>Matches Your Foot Shape & Type</li>
              <li>Easy to Wear</li>
              <li>Heels That You Can Wear</li>
              <li>Good Quality & Condition</li>
              <li>Segments of Solid Rubber</li>
            </ul>
            <RouterLink to="" class="btn text-primary text-base">Shopping Now<Icon icon="lucide:move-right" class="size-4"></Icon></RouterLink>
          </div>
          <div class="relative lg:mt-0 mt-6">
            <div class="absolute start-0 bg-center bg-cover lg:bottom-40 bottom-20 w-52 h-96 bg-[url('../images/cta-2.png')] rounded-md md:block hidden" data-aos="fade-left" data-aos-delay="400">
              <div class="absolute inset-0 bg-gradient-to-b from-purple-500/30 to-accent from-30%"></div>
            </div>
            <div class="md:ms-20">
              <img :src="cta" alt="" class="w-lg relative inline-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import cta from '@/assets/images/landing/cta.png'
import { RouterLink } from 'vue-router';
</script>
