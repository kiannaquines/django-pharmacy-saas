<template>
  <div class="grid grid-cols-1 gap-5 mb-5">
    <div class="card">
      <div class="card-header">
        <div class="md:flex md:space-y-0 space-y-3.5 gap-3 items-center">
          <div class="relative">
            <input type="email" class="ps-11 form-input form-input-sm w-full" placeholder="Search for...." />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon icon="lucide:search" class="size-3.5 flex items-center text-default-500"></Icon>
            </div>
          </div>
          <input ref="inputRef" type="text" class="form-input form-input-sm w-full" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly placeholder="Select Date" />
        </div>
        <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:plus" class="size-4 me-1"></Icon>Add Product</button>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead class="bg-default-150">
                  <tr class="text-sm font-normal text-default-700">
                    <th scope="col" class="px-3.5 py-3 text-start">Product Code</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Product Name</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Category</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Price</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Stock</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Revenue</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Status</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr class="text-default-800 font-normal" v-for="(item, idx) in products" :key="idx">
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">{{ item.code }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                      <a href="/ecommerce/product-detail" class="flex items-center gap-2">
                        <img :src="item.image" alt="Product images" class="h-6" />
                        <h6 class="text-default-800">{{ item.name }}</h6>
                      </a>
                    </td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                      <div class="inline-flex py-0.5 px-2.5 rounded text-xs font-normal bg-default-100 border border-default-200 text-default-500">{{ item.category }}</div>
                    </td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.price }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.stock }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.revenue }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap">
                      <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium" :class="item.variant">{{ item.status }}</span>
                    </td>
                    <td class="px-3.5 py-2.5">
                      <div class="hs-dropdown relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                          <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
                        </button>
                        <div class="hs-dropdown-menu" role="menu">
                          <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">
                            <Icon icon="lucide:eye" class="size-3"></Icon>
                            Overview
                          </a>
                          <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">
                            <Icon icon="lucide:edit" class="size-3"></Icon>
                            Edit
                          </a>
                          <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">
                            <Icon icon="lucide:trash-2" class="size-3"></Icon>
                            Delete
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { products } from './data'
import { useFlatpickr } from '~/composables/useFlatpickr'

const { inputRef } = useFlatpickr({
  mode: 'range',
  dateFormat: 'd M, Y'
})
</script>
