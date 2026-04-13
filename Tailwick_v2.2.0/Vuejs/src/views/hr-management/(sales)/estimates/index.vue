<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Estimates" />
    <div class="card">
      <div class="card-header">
        <div class="flex gap-3">
          <div class="relative">
            <input type="email" class="form-input form-input-sm ps-11" placeholder="Search for...." />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon icon="lucide:search" class="size-4 flex items-center text-default-500"></Icon>
            </div>
          </div>
          <select type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date">
            <option value="Accepted" selected>Accepted</option>
            <option value="Declined">Declined</option>
            <option value="Expired">Expired</option>
          </select>
          <input ref="inputRef" type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" />
        </div>
        <RouterLink to="" class="btn btn-sm bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="sales-estimates-add" data-hs-overlay="#sales-estimates-add">
          <Icon icon="lucide:plus" class="size-4 me-1"></Icon>
          Add Estimate
        </RouterLink>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-default-150">
                  <tr class="text-sm font-normal text-default-500">
                    <th scope="col" class="px-3.5 py-3 text-start">Estimate Number</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Client Name</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Estimate By</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Estimate Date</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Expiry Date</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Amount</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Status</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr class="text-default-800 font-normal" v-for="(item, idx) in estimates" :key="idx">
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                      <RouterLink to="">{{ item.id }}</RouterLink>
                    </td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.clientName }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.estimateBy }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.estimateDate }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.expiryDate }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.amount }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                      <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium" :class="item.color">{{ item.status }}</span>
                    </td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                      <div class="hs-dropdown relative inline-flex">
                        <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                          <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
                        </button>
                        <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-30 mt-2 p-2 text-sm" role="menu">
                          <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                            <Icon icon="lucide:edit" class="size-3"></Icon>
                            Edit
                          </RouterLink>
                          <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                            <Icon icon="lucide:trash-2" class="size-3"></Icon>
                            Delete
                          </RouterLink>
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
          <p class="text-default-500 text-sm">Showing <b>6</b> of <b>8</b> Results</p>
          <nav class="flex items-center gap-2" aria-label="Pagination">
            <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10"><Icon icon="lucide:chevron-left" class="size-4 me-1"></Icon> Prev</button>
            <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">1</button>
            <button type="button" class="btn size-7.5 bg-primary text-white">2</button>
            <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">3</button>
            <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
              Next
              <Icon icon="lucide:chevreon-right" class="size-4 ms-1"></Icon>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </Vertical>
  <div id="sales-estimates-add" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1">
    <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
      <div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto">
        <div class="card-header">
          <h3 class="font-bold text-default-800 text-base">Add Estimate</h3>
          <div>
            <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#sales-estimates-add">
              <span class="sr-only">Close</span>
              <Icon icon="lucide:x" class="size-5"></Icon>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">User ID</label>
              <input id="" type="text" class="form-input" placeholder="#TW1500004" disabled />
            </div>
            <div class="col-span-2">
              <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Client Name</label>
              <input type="text" id="invoiceNo" class="form-input" placeholder="Client name" />
            </div>
            <div class="col-span-2">
              <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Estimate By</label>
              <select type="date" id="invoiceNo" class="form-input">
                <option value="">Admin</option>
                <option value="">Hr</option>
              </select>
            </div>
            <div class="col-span-1">
              <label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Estimate Date</label>
              <input type="text" id="publishDateTime" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" readonly />
            </div>
            <div class="col-span-1 mb-4">
              <label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Expiry Date</label>
              <input type="text" id="publishDateTime" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" readonly />
            </div>
            <div class="col-span-2">
              <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Amount</label>
              <input type="number" id="invoiceNo" class="form-input" placeholder="$00.00" />
            </div>
            <div class="col-span-2">
              <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Status</label>
              <select type="date" id="invoiceNo" class="form-input">
                <option value="">Accepted</option>
                <option value="">Declined</option>
                <option value="">Expired</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer flex gap-2 justify-end">
          <button data-hs-overlay="#sales-estimates-add" class="btn border-0 text-danger bg-transparent hover:bg-red-50">Cancel</button>
          <button class="text-white btn bg-primary">Add Estimate</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import { useFlatpickr } from '@/composables/useFlatpickr'
import { RouterLink } from 'vue-router'

const { inputRef } = useFlatpickr({
  mode: 'range',
  dateFormat: 'd M, Y'
})

type Estimate = {
  id: string
  clientName: string
  estimateBy: string
  estimateDate: string
  expiryDate: string
  amount: string
  color: 'bg-danger/10 text-danger' | 'bg-success/15 text-success' | 'bg-warning/15 text-warning'
  status: 'Accepted' | 'Declined' | 'Expired'
}

const estimates: Estimate[] = [
  { id: '#TWE20015420', clientName: 'Infra Teach', estimateBy: 'HR', estimateDate: '02 July, 2023', expiryDate: '05 July, 2023', amount: '$2,403', status: 'Accepted', color: 'bg-success/15 text-success' },
  { id: '#TWE20015421', clientName: 'Themesdesign', estimateBy: 'Admin', estimateDate: '08 Nov, 2023', expiryDate: '08 Nov, 2023', amount: '$1,749', status: 'Declined', color: 'bg-danger/10 text-danger' },
  { id: '#TWE20015422', clientName: 'Judil Fashion', estimateBy: 'Admin', estimateDate: '11 Aug, 2023', expiryDate: '03 Aug, 2023', amount: '$816', status: 'Expired', color: 'bg-warning/15 text-warning' },
  { id: '#TWE20015423', clientName: '4xM Infotech', estimateBy: 'HR', estimateDate: '20 Sep, 2023', expiryDate: '21 Sep, 2023', amount: '$1,184', status: 'Accepted', color: 'bg-success/15 text-success' },
  { id: '#TWE20015424', clientName: 'Digitech Galaxy', estimateBy: 'HR', estimateDate: '07 Oct, 2023', expiryDate: '09 Oct, 2023', amount: '$5,463', status: 'Accepted', color: 'bg-success/15 text-success' },
  { id: '#TWE20015425', clientName: 'Zoetic Fashion', estimateBy: 'HR', estimateDate: '18 Dec, 2023', expiryDate: '20 Dec, 2023', amount: '$3,463', status: 'Declined', color: 'bg-danger/10 text-danger' }
]
</script>
