<template>
  <section class="relative lg:pt-44 lg:pb-36 md:pt-34 md:pb-20 pt-30 pb-16">
    <div class="absolute rotate-45 size-125 border border-dashed border-t-default-300 border-l-default-300 border-r-default-300/40 border-b-default-700 rounded-full end-40 -bottom-62.5 z-20 lg:block hidden"></div>
    <div class="absolute rotate-45 size-175 border border-dashed border-t-default-300 border-l-default-300 border-r-default-300/40 border-b-default-700 rounded-full end-16 -bottom-87.5 z-20 lg:block hidden"></div>
    <div class="container">
      <div class="grid lg:grid-cols-2">
        <div>
          <h1 class="mb-8 leading-relaxed md:text-5xl text-4xl font-semibold text-default-800">
            Effective Management of Large Projects at
            <span class="relative inline-block px-2 mx-2 before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-primary/10 before:rounded-md before:backdrop-blur-xl"> <span class="relative text-primary">Tailwick</span></span>
          </h1>
          <p class="mb-6 text-lg text-default-500">Effective professional services project management means having a firm grasp on the scope, budget, resources, personnel, and timeline dedicated to a project. An effective project manager is able to manage unplanned issues while keeping the ball rolling on company goals and tasks in progress.</p>
          <div class="flex items-center gap-2.5">
            <RouterLink to="">
              <button type="button" class="btn bg-primary text-white">
                <Icon icon="lucide:rocket" class="size-4"></Icon>
                Get Started
              </button>
            </RouterLink>
            <RouterLink to="">
              <button type="button" class="btn hover:bg-danger border border-dashed border-danger hover:text-white bg-transparent text-danger">
                <Icon icon="lucide:shopping-cart" class="size-4"></Icon>
                Buy Now
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router';
</script>
