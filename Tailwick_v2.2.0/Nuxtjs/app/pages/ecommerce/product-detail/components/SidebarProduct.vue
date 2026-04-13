<template>
  <div class="col-span-1">
    <div class="sticky top-24">
      <div class="card mb-5">
        <div class="card-body">
          <div class="grid md:grid-cols-3 grid-cols-1 gap-5 mb-5">
            <div class="md:col-span-2 grid-cols-1">
              <div class="rounded-md bg-default-100">
                <img :src="overview01" alt="" width="299" height="299" />
              </div>
            </div>
            <div class="col-span-1">
              <div class="rounded-md bg-default-100 mb-5">
                <img :src="overview02" alt="" height="139" width="139" />
              </div>
              <div class="rounded-md bg-default-100">
                <img :src="product" alt="" />
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
            <div class="rounded-md bg-default-100">
              <img :src="product09" alt="" />
            </div>
            <div class="rounded-md bg-default-100">
              <img :src="product12" alt="" />
            </div>
            <div class="rounded-md bg-default-100">
              <img :src="product13" alt="" />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 mt-4">
            <a href="/ecommerce/cart" class="border border-primary w-full rounded btn text-primary hover:bg-primary/10 border-dashed">
              <Icon icon="lucide:shopping-cart" class="size-3"></Icon>
              Add to Cart
            </a>
            <button class="bg-danger/85 w-full rounded btn text-white hover:bg-danger">Buy Now</button>
          </div>
          <div class="flex items-center gap-3 mt-3 justify-evenly">
            <a href="#" class="flex items-center gap-1.25 text-default-700 text-sm transition-all duration-300 hover:text-primary">
              <Icon icon="lucide:repeat" class="size-3"></Icon>
              <span class="align-middle">Compare</span>
            </a>
            <a href="#" class="flex items-center gap-1.25 text-default-700 text-sm transition-all duration-300 hover:text-primary">
              <Icon icon="lucide:help-circle" class="size-3"></Icon>
              <span class="align-middle">Ask a Question</span>
            </a>
            <a href="#" class="flex items-center gap-1.25 text-default-700 text-sm transition-all duration-300 hover:text-primary">
              <Icon icon="lucide:share-2" class="size-3"></Icon>
              <span class="align-middle">Share</span>
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body border-b border-b-default-200">
          <div class="flex justify-between flex-wrap gap-5">
            <h6 class="text-default-800 font-semibold text-[15px] flex items-center gap-1.25">
              <icon icon="lucide:store" class="size-4"></icon>
              Themesdesign
            </h6>
            <span class="flex items-center gap-1.25 text-default-700">
              <Icon icon="lucide:star" class="size-4 text-yellow-500"></Icon>
              (4.8)
            </span>
          </div>
        </div>
        <div class="card-body">
          <div class="flex gap-5 justify-between">
            <h6 class="text-default-800 font-semibold text-[15px] flex items-center gap-1.25">
              <Icon icon="lucide:store" class="size-4 text-orange-500"></Icon>
              California, USA
            </h6>
            <button class="text-white btn btn-sm btn-primary">View Store</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import product from '~/assets/images/product/img-01.png'
import product09 from '~/assets/images/product/img-09.png'
import product12 from '~/assets/images/product/img-12.png'
import product13 from '~/assets/images/product/img-13.png'
import overview01 from '~/assets/images/product/overview-01.png'
import overview02 from '~/assets/images/product/overview-02.png'
</script>
