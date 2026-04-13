<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Email Performance</h6>
      <div class="flex gap-3 items-center">
        <div class="relative">
          <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
          <div class="absolute inset-y-0 start-0 flex items-center ps-3">
            <Icon icon="lucide:search" class="size-3.5 text-default-500"></Icon>
          </div>
        </div>
        <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:download" class="size-4"></Icon>Export</button>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-default-200">
              <thead class="bg-default-150">
                <tr class="text-sm font-normal text-default-500 whitespace-nowrap">
                  <th scope="col" class="py-3 px-4 pe-0 text-start">
                    <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                  </th>
                  <th scope="col" class="px-3.5 py-3 text-start">Email</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Create Date</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Open Rate (%)</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Click Through (%)</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Click Rate (%)</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Unsubscribed (%)</th>
                  <th scope="col" class="px-3.5 py-3 text-start">Bounce (%)</th>
                  <th scope="col" class="px-3.5 py-3 text-start">TSpam(%)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-default-200">
                <tr class="text-default-800 font-normal" v-for="(item, idx) in performance" :key="idx">
                  <td class="py-2.5 ps-4">
                    <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                  </td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.email }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.date }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.openRate }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.through }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.clickRate }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.unsubscribed }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.bounce }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.spam }}</td>
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
import { performance } from './data'
</script>
