<template>
  <div class="lg:col-span-3 col-span-1">
    <div class="flex justify-between gap-2 flex-wrap items-center">
      <p class="text-default-700 text-sm">Showing all <b>7,410</b> items results</p>
      <div class="flex gap-2 items-center">
        <div class="hs-dropdown relative inline-flex">
          <button type="button" class="hs-dropdown-toggle inline-flex items-center btn btn-sm bg-transparent border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
            Sort by:<b class="font-medium">Highest Price</b>
            <Icon icon="lucide:chevron-down" class="size-4 ms-2"></Icon>
          </button>
          <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2 text-sm" role="menu">
            <a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> Lowest Price </a>
            <a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> Highest Price </a>
            <a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> High to Low </a>
            <hr class="border-t border-default-200 my-2 -mx-2" />
            <a class="flex items-center gap-x-3.5 py-2 font-medium px-4 text-default-600 hover:bg-default-150 rounded" href="#"> Low to High </a>
          </div>
        </div>
        <nav class="flex gap-x-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button type="button" class="hs-tab-active:font-semibold hs-tab-active:bg-sky-600 hs-tab-active:text-white btn size-7.5 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-600" id="items-1" aria-selected="false" data-hs-tab="#item-1" aria-controls="item-1" role="tab">
            <Icon icon="lucide:list" class="size-4"></Icon>
          </button>
          <button type="button" class="hs-tab-active:font-semibold hs-tab-active:bg-sky-600 hs-tab-active:text-white btn size-7.5 bg-sky-100 text-sky-500 hover:text-white hover:bg-sky-600 active" id="items-2" aria-selected="true" data-hs-tab="#item-2" aria-controls="item-2" role="tab">
            <Icon icon="lucide:layout-grid" class="size-4"></Icon>
          </button>
        </nav>
      </div>
    </div>
    <div class="flex items-center mt-3 gap-3">
      <span class="flex items-center gap-1 rounded-full px-2.5 py-0.75 border border-default-200 text-xs">
        High to Low
        <a href="#" class="align-middle transition-al duration-300">
          <Icon icon="lucide:x" class="size-3"></Icon>
        </a>
      </span>
      <span class="flex items-center gap-1 rounded-full px-2.5 py-0.75 border border-default-200 text-xs">
        New
        <a href="#" class="align-middle transition-al duration-300">
          <Icon icon="lucide:x" class="size-3"></Icon>
        </a>
      </span>
      <a href="#" class="py-0.75 px-2.5 text-xs rounded-md transition-all duration-300 hover:bg-default-150"> All Clear </a>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
      <div class="card" v-for="(item, idx) in products" :key="idx">
        <div class="card-body relative">
          <img :src="item.image" alt="" />
          <Icon icon="lucide:heart" class="size-5 text-danger fill-danger/15 absolute top-6 end-6"></Icon>
        </div>
        <div class="pb-5 px-5">
          <h6 class="text-base text-default-800 font-semibold hover:text-primary transition-all mb-2">
            <a href="#">{{ item.name }}</a>
          </h6>
          <div class="flex items-center gap-1">
            <div class="flex items-center gap-0.25 text-yellow-500">
              <Icon icon="lucide:star" class="size-4 fill-yellow-500"></Icon>
              <Icon icon="lucide:star" class="size-4 fill-yellow-500"></Icon>
              <Icon icon="lucide:star" class="size-4 fill-yellow-500"></Icon>
              <Icon icon="lucide:star" class="size-4 fill-yellow-500"></Icon>
              <Icon icon="lucide:star-half" class="size-4 fill-yellow-500"></Icon>
            </div>
            <span class="text-default-500">({{ item.reviewCount }})</span>
          </div>
          <h5 class="mt-4 text-base font-semibold text-default-800">
            {{ item.price }}
            <small class="line-through font-medium text-default-500">{{ item.originalPrice }}</small>
          </h5>
          <div class="flex items-center gap-2 mt-4">
            <button class="border border-default-600 w-full text-default-500 border-dashed btn">
              <Icon icon="lucide:shopping-cart" class="size-3"></Icon>
              Add to Cart
            </button>
            <div class="hs-dropdown relative inline-flex">
              <button type="button" class="hs-dropdown-toggle btn size-9 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
              </button>
              <div class="hs-dropdown-menu" role="menu">
                <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                  <Icon icon="lucide:eye" class="size-3"></Icon>
                  Overview
                </a>
                <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                  <Icon icon="lucide:edit" class="size-3"></Icon>
                  Edit
                </a>
                <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                  <Icon icon="lucide:trash-2" class="size-3"></Icon>
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap md:justify-between justify-center md:gap-0 gap-4 mt-5">
      <p class="text-default-500 text-sm">Showing <b>07</b> of <b>19</b> Results</p>
      <nav class="flex items-center gap-2" aria-label="Pagination">
        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"><Icon icon="lucide:chevron-left" class="size-4 me-1"></Icon> Prev</button>
        <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button>
        <button type="button" class="btn size-7.5 bg-primary text-white">2</button>
        <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button>
        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
          Next
          <Icon icon="lucide:chevron-right" class="size-4 ms-1"></Icon>
        </button>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { products } from './data'
</script>
