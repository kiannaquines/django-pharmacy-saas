<template>
  <div class="card mb-5">
    <div class="card-header">
      <h6 class="card-title">Employee Performance</h6>
      <div class="flex gap-3 items-center">
        <div class="relative">
          <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
          <div class="absolute inset-y-0 start-0 flex items-center ps-3">
            <Icon icon="lucide:search" class="size-4 text-default-500"></Icon>
          </div>
        </div>
        <button class="btn btn-sm border-dashed border-primary hover:bg-primary/20 text-primary"><Icon icon="lucide:download" class="size-4 me-1"></Icon>Export</button>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-default-200">
              <thead class="bg-default-150">
                <tr class="text-default-600">
                  <th scope="col" class="py-3 px-4 text-start pe-0">
                    <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                  </th>
                  <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">ID</th>
                  <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Name</th>
                  <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Designation</th>
                  <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Performance</th>
                  <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Status</th>
                  <th scope="col" class="px-3.5 py-3 text-start text-sm font-medium">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-default-200">
                <tr class="text-default-800 text-sm whitespace-nowrap" v-for="(item, idx) in employees" :key="idx">
                  <td class="py-3.5 ps-4">
                    <input id="checkbox-all" type="checkbox" class="form-checkbox" />
                  </td>
                  <td class="px-3.5 py-2">{{ item.id }}</td>
                  <td class="px-3.5 py-2.5">
                    <div class="flex items-center gap-2">
                      <img :src="item.avatar" alt="" class="bg-green-100 size-10 rounded-full" />
                      <div class="text-sm">
                        <h6 class="font-semibold mb-0.5">{{ item.name }}</h6>
                        <p class="text-default-500">{{ item.email }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-3.5 py-2.5">{{ item.designation }}</td>
                  <td class="px-3.5 py-2.5" :class="item.textcolor">{{ item.performance }}</td>
                  <td class="px-3.5 py-2.5">
                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium" :class="item.statusColor">{{ item.status }}</span>
                  </td>
                  <td class="px-3.5 py-2.5 text-start">
                    <span class="inline-flex justify-start gap-2.5">
                      <RouterLink to="" class="btn size-8 bg-default-100 hover:bg-blue-100 text-default-600 hover:text-primary">
                        <Icon icon="lucide:pencil" class="size-4"></Icon>
                      </RouterLink>
                      <RouterLink to="" class="btn size-8 bg-default-100 hover:bg-red-100 text-default-600 hover:text-danger">
                        <Icon icon="lucide:trash-2" class="size-4"></Icon>
                      </RouterLink>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <p class="text-default-500 text-sm">Showing <b>10</b> of <b>19</b> Results</p>
        <nav class="flex items-center gap-2" aria-label="Pagination">
          <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"><Icon icon="lucide:chevron-left" class="size-4 me-1"></Icon>Prev</button>
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
import { employees } from './data'
import { RouterLink } from 'vue-router';
</script>
