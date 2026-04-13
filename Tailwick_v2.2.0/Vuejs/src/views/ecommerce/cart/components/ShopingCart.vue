<template>
  <div class="lg:col-span-3 col-span-1">
    <div class="flex justify-between gap-5 items-center mb-5">
      <h5 class="text-base text-default-800 font-semibold underline">Shopping Cart (3)</h5>
      <button class="flex items-center gap-1.25 text-danger">
        <Icon icon="lucide:trash-2" class="size-4"></Icon>
        <span class="text-sm">Delete All</span>
      </button>
    </div>
    <div class="card p-5 mb-5">
      <div class="grid lg:grid-cols-12 grid-cols-1 gap-5">
        <div class="lg:col-span-2 col-span-1">
          <div class="p-4 rounded-md bg-default-150 flex justify-center">
            <img :src="img8" alt="" class="" />
          </div>
        </div>
        <div class="lg:col-span-3 col-span-1 flex flex-col justify-between">
          <div>
            <h5 class="mb-1 text-base text-default-800 font-semibold">
              <RouterLink to="/ecommerce/product-grid">Roar Twill Blue Baseball Cap</RouterLink>
            </h5>
            <p class="mb-2 text-default-500 text-sm"><RouterLink to="">Men's Fashion</RouterLink></p>
            <p class="mb-1 text-default-500 text-sm">Color: <span class="text-default-800">White/Blue</span></p>
            <p class="mb-3 text-default-500 text-sm">Size: <span class="text-default-800">L</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="inline-flex p-2 text-center border border-default-200 rounded">
              <button type="button" class="size-7 btn minusBtn bg-default-200">
                <Icon icon="lucide:minus" class="size-4 text-default-500"></Icon>
              </button>
              <input type="number" class="text-center product-quantity ps-2 w-15 h-7 border-0 ring-0 bg-transparent" value="2" min="0" max="100" readonly />
              <button type="button" class="size-7 plusBtn btn bg-default-200">
                <Icon icon="lucide:plus" class="size-4 text-default-500"></Icon>
              </button>
            </div>
            <button type="button" class="size-9.5 rounded bg-danger/15 justify-center items-center inline-flex text-danger hover:bg-danger hover:text-white transition-all duration-300" aria-haspopup="dialog" aria-expanded="false" aria-controls="cart-item-delete-modal" data-hs-overlay="#cart-item-delete-modal">
              <Icon icon="lucide:trash-2" class="size-4"></Icon>
            </button>
          </div>
        </div>
        <div class="lg:col-span-7 col-span-1 flex lg:justify-end">
          <div class="flex lg:flex-col flex-row w-full justify-between">
            <h6 class="text-base text-end text-default-800 font-semibold">
              $<span>149.99</span>
              <small class="font-normal line-through text-default-500">$299.99</small>
            </h6>
            <h6 class="text-base text-end text-default-800 font-semibold">$<span class="">299</span></h6>
          </div>
        </div>
      </div>
    </div>
    <div class="card p-5 mb-5">
      <div class="grid lg:grid-cols-12 grid-cols-1 gap-5">
        <div class="lg:col-span-2 col-span-1">
          <div class="p-4 rounded-md bg-default-150 flex justify-center">
            <img :src="img4" alt="" class="" />
          </div>
        </div>
        <div class="lg:col-span-3 col-span-1 flex flex-col justify-between">
          <div>
            <h5 class="mb-1 text-base text-default-800 font-semibold">
              <RouterLink to="/ecommerce/product-grid">Mesh Ergonomic Green Chair</RouterLink>
            </h5>
            <p class="mb-2 text-default-500 text-sm"><RouterLink to="">Home, Kitchen, Pets</RouterLink></p>
            <p class="mb-1 text-default-500 text-sm">Color: <span class="text-default-800">Green/Blue</span></p>
            <p class="mb-3 text-default-500 text-sm">Size: <span class="text-default-800">M</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="inline-flex p-2 text-center border border-default-200 rounded">
              <button type="button" class="size-7 btn minusBtn bg-default-200">
                <Icon icon="lucide:minus" class="size-4 text-default-500"></Icon>
              </button>
              <input type="number" class="text-center product-quantity ps-2 w-15 h-7 border-0 ring-0 bg-transparent" value="2" min="0" max="100" readonly />
              <button type="button" class="size-7 plusBtn btn bg-default-200">
                <Icon icon="lucide:plus" class="size-4 text-default-500"></Icon>
              </button>
            </div>
            <button type="button" class="size-9.5 rounded bg-danger/15 justify-center items-center inline-flex text-danger hover:bg-danger hover:text-white transition-all duration-300" aria-haspopup="dialog" aria-expanded="false" aria-controls="cart-item-delete-modal" data-hs-overlay="#cart-item-delete-modal">
              <Icon icon="lucide:trash-2" class="size-4"></Icon>
            </button>
          </div>
        </div>
        <div class="lg:col-span-7 col-span-1 flex lg:justify-end">
          <div class="flex lg:flex-col flex-row w-full justify-between">
            <h6 class="text-base text-end text-default-800 font-semibold">
              $<span>362.21 </span>
              <small class="font-normal line-through text-default-500">$599.99</small>
            </h6>
            <h6 class="text-base text-end text-default-800 font-semibold">$<span class="">362.21</span></h6>
          </div>
        </div>
      </div>
    </div>
    <div class="card p-5 mb-5">
      <div class="grid lg:grid-cols-12 grid-cols-1 gap-5">
        <div class="lg:col-span-2 col-span-1">
          <div class="p-4 rounded-md bg-default-150 flex justify-center">
            <img :src="img1" alt="" class="" />
          </div>
        </div>
        <div class="lg:col-span-3 col-span-1 flex flex-col justify-between">
          <div>
            <h5 class="mb-1 text-base text-default-800 font-semibold">
              <RouterLink to="/ecommerce/product-grid">Smartest Printed T-shirt</RouterLink>
            </h5>
            <p class="mb-2 text-default-500 text-sm"><RouterLink to="">Unisex Fashion</RouterLink></p>
            <p class="mb-1 text-default-500 text-sm">Color: <span class="text-default-800">Black/Blue</span></p>
            <p class="mb-3 text-default-500 text-sm">Size: <span class="text-default-800">M</span></p>
          </div>
          <div class="flex items-center gap-2">
            <div class="inline-flex p-2 text-center border border-default-200 rounded">
              <button type="button" class="size-7 btn minusBtn bg-default-200">
                <Icon icon="lucide:minus" class="size-4 text-default-500"></Icon>
              </button>
              <input type="number" class="text-center product-quantity ps-2 w-15 h-7 border-0 ring-0 bg-transparent" value="2" min="0" max="100" readonly />
              <button type="button" class="size-7 plusBtn btn bg-default-200">
                <Icon icon="lucide:plus" class="size-4 text-default-500"></Icon>
              </button>
            </div>
            <button type="button" class="size-9.5 rounded bg-danger/15 justify-center items-center inline-flex text-danger hover:bg-danger hover:text-white transition-all duration-300" aria-haspopup="dialog" aria-expanded="false" aria-controls="cart-item-delete-modal" data-hs-overlay="#cart-item-delete-modal">
              <Icon icon="lucide:trash-2" class="size-4"></Icon>
            </button>
          </div>
        </div>
        <div class="lg:col-span-7 col-span-1 flex lg:justify-end">
          <div class="flex lg:flex-col flex-row w-full justify-between">
            <h6 class="text-base text-end text-default-800 font-semibold">$<span>89.99 </span></h6>
            <h6 class="text-base text-end text-default-800 font-semibold">$<span class="">269.97</span></h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import img8 from '@/assets/images/product/img-08.png'
import img4 from '@/assets/images/product/img-04.png'
import img1 from '@/assets/images/product/img-01.png'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>
