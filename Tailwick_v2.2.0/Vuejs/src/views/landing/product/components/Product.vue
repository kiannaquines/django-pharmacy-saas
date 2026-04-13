<template>
  <section id="product" class="relative lg:py-32 py-20">
    <div class="container">
      <div class="lg:w-3xl mx-auto text-center">
        <h1 class="leading-normal capitalize text-4xl font-semibold text-default-800">Our Latest Product</h1>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        <div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md">
          <div class="card-body">
            <img :src="img16" alt="" class="mx-auto h-52" />
            <div class="mt-3">
              <p class="mb-3 flex items-center gap-1"><Icon icon="lucide:star" class="text-amber-500 size-4"></Icon> (4.8)</p>
              <h5 class="text-lg font-semibold text-default-800">
                <RouterLink to="">Green Sneakers Skate</RouterLink>
              </h5>
              <div class="flex justify-between items-center mt-3">
                <h6 class="text-base font-semibold text-default-800">$299.99</h6>
                <div>
                  <button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md">
          <div class="card-body">
            <img :src="img17" alt="" class="mx-auto h-52" />
            <div class="mt-3">
              <p class="mb-3 flex items-center gap-1"><Icon icon="lucide:star" class="text-amber-500 size-4"></Icon> (4.4)</p>
              <h5 class="text-lg font-semibold text-default-800">
                <RouterLink to="">Nike Running Shoes</RouterLink>
              </h5>
              <div class="flex justify-between items-center mt-3">
                <h6 class="text-base font-semibold text-default-800">$129.49</h6>
                <div>
                  <button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md">
          <div class="card-body">
            <img :src="img18" alt="" class="mx-auto h-52" />
            <div class="mt-3">
              <p class="mb-3 flex items-center gap-1"><Icon icon="lucide:star" class="text-amber-500 size-4"></Icon> (4.9)</p>
              <h5 class="text-lg font-semibold text-default-800">
                <RouterLink to="">Nike Air Max Sneakers Shoe</RouterLink>
              </h5>
              <div class="flex justify-between items-center mt-3">
                <h6 class="text-base font-semibold text-default-800">$149.99</h6>
                <div>
                  <button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-gradient-to-b from-default-100 to-default-50/40 shadow-none rounded-md">
          <div class="card-body">
            <img :src="img19" alt="" class="mx-auto h-52" />
            <div class="mt-3">
              <p class="mb-3 flex items-center gap-1"><Icon icon="lucide:star" class="text-amber-500 size-4"></Icon> (4.6)</p>
              <h5 class="text-lg font-semibold text-default-800">
                <RouterLink to="">Dunk Sneakers Skate shoe</RouterLink>
              </h5>
              <div class="flex justify-between items-center mt-3">
                <h6 class="text-base font-semibold text-default-800">$174.65</h6>
                <div>
                  <button type="button" class="btn btn-sm bg-primary text-white">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import img16 from '@/assets/images/landing/img-16.png'
import img17 from '@/assets/images/landing/img-17.png'
import img18 from '@/assets/images/landing/img-18.png'
import img19 from '@/assets/images/landing/img-19.png'
</script>
