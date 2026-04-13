<template>
  <div class="card">
    <div class="card-header">
      <div class="relative">
        <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
        <div class="absolute inset-y-0 start-0 flex items-center ps-3">
          <Icon icon="lucide:search" class="size-3.5 flex items-center text-default-500"></Icon>
        </div>
      </div>
      <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:plus" class="size-4 me-1"></Icon>Add Product</button>
    </div>
    <div class="card-header">
      <div class="flex items-center flex-wrap gap-3">
        <button type="button" class="btn btn-sm bg-primary text-white font-medium">
          <Icon icon="lucide:boxes" class="size-4"></Icon>
          All Orders
        </button>
        <button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">
          <Icon icon="lucide:loader" class="size-4"></Icon>
          Pending
        </button>
        <button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">
          <Icon icon="lucide:package-check" class="size-4"></Icon>
          Delivered
        </button>
        <button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">
          <Icon icon="lucide:refresh-cw" class="size-4"></Icon>
          Returns
        </button>
        <button type="button" class="btn btn-sm text-default-500 hover:text-primary border-0 bg-transparent">
          <Icon icon="lucide:package-x" class="size-4"></Icon>
          Cancelled
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-default-200">
              <thead class="bg-default-150">
                <tr class="text-sm font-normal text-default-500 whitespace-nowrap">
                  <th class="ps-4 text-start">
                    <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                  </th>
                  <th scope="col" class="px-3.5 py-3 text-start">Order ID</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Order Date</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Delivery Date</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Customer Name</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Payment Method</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Amount</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Delivery Status</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-default-200">
                <tr class="text-default-800 font-normal" v-for="(item, idx) in orders" :key="idx">
                  <td class="py-2.5 ps-4">
                    <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                  </td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">{{ item.id }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.orderDate }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.deliveryDate }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.customerName }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.paymentMethod }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${{ item.amount }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap">
                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium" :class="item.color">{{ item.deliveryStatus }}</span>
                  </td>
                  <td class="px-3.5 py-2.5">
                    <div class="hs-dropdown relative inline-flex">
                      <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
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
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { orders } from './data'
</script>
