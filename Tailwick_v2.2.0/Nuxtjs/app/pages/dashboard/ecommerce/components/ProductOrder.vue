<template>
  <div class="grid grid-cols-1 gap-5 mb-5">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Product Orders</h6>
        <div class="flex gap-3 items-center">
          <div class="relative">
            <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon icon="lucide:search" class="size-3.5 text-default-500"></Icon>
            </div>
          </div>
          <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:download" class="size-3.5 me-1"></Icon>Export</button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead class="bg-default-150">
                  <tr class="text-sm font-normal text-default-500 whitespace-nowrap">
                    <th scope="col" class="px-3.5 py-3 text-start">#</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Order ID</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Customer Name</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Location</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Order Date</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Payments</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Quantity</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Price</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Total Amount</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Status</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr class="text-default-800 font-normal" v-for="(item, idx) in orders" :key="idx">
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">0{{ item.id }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.orderId }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.customerName }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.location }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.orderDate }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.paymentMethod }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">0{{ item.quantity }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${{ item.price }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${{ item.totalAmount }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap">
                      <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium" :class="item.statusClass">{{ item.status }}</span>
                    </td>
                    <td class="px-3.5 py-2.5">
                      <div class="hs-dropdown relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-150 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                          <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
                        </button>
                        <div class="hs-dropdown-menu" role="menu">
                          <div>
                            <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="">
                              <Icon icon="lucide:eye" class="size-3"></Icon>
                              Overview
                            </a>
                            <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="">
                              <Icon icon="lucide:edit" class="size-3"></Icon>
                              Edit
                            </a>
                            <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-sm text-default-500 hover:bg-default-150 rounded" href="">
                              <Icon icon="lucide:trash-2" class="size-3"></Icon>
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
