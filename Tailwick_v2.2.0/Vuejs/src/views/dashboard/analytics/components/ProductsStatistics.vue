<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Products Statistics</h6>
      <div class="flex gap-3 items-center">
        <div class="relative">
          <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
          <div class="absolute inset-y-0 start-0 flex items-center ps-3">
            <Icon icon="lucide:search" class="size-3.5 text-default-500"></Icon>
          </div>
        </div>
        <button class="btn btn-sm bg-transparent text-primary border border-dashed border-primary hover:bg-primary/20"><Icon icon="lucide:download" class="size-4 me-1"></Icon>Export</button>
      </div>
    </div>
    <div class="overflow-x-auto">
      <div class="min-w-full inline-block align-middle">
        <div class="overflow-hidden">
          <table class="min-w-full divide-y divide-default-200">
            <thead class="bg-default-150">
              <tr class="text-default-600">
                <th scope="col" class="py-3 text-start ps-4">
                  <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                </th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Products</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Price</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Income</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Sales</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">View</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Click</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium whitespace-nowrap">Click (%)</th>
                <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Status</th>
              </tr>
            </thead>

            <tbody class="divide-y divide-default-200">
              <tr class="text-default-800" v-for="(item, idx) in products" :key="idx">
                <td class="py-2.5 ps-4">
                  <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                </td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.name }}</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.price }}</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.income }}</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.sales }}</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.view }}</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.click }}</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.clickPercent }}%</td>
                <td class="px-3.5 py-2.5 whitespace-nowrap">
                  <span :class="['py-0.5 px-2.5 inline-flex items-center gap-x-1 text-xs font-medium rounded', item.status === 'Active' ? 'bg-success/15 text-success' : 'bg-danger/15 text-danger']">
                    <Icon :icon="item.status === 'Active' ? 'lucide:check-circle-2' : 'lucide:x-circle'" class="size-3" />
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <p class="text-default-500 text-sm">Showing <b>07</b> of <b>11</b> Results</p>
      <nav class="flex items-center gap-2" aria-label="Pagination">
        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"><Icon icon="chevron-left" class="size-4 me-1"></Icon> Prev</button>
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
import { Icon } from '@iconify/vue';
import { products } from './data';
</script>
