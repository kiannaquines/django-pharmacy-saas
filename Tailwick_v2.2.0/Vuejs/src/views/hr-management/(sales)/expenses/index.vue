<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Estimates" />
    <div class="card">
      <div class="card-header">
        <div class="flex gap-3">
          <div class="relative">
            <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon icon="lucide:search" class="size-4 flex items-center text-default-500"></Icon>
            </div>
          </div>
          <input ref="fromRef" type="text" id="dateRangeFilterInput" class="form-input form-input-sm lg:w-52 w-full" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" />
        </div>
        <RouterLink to="" class="btn btn-sm bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="sales-expenses-add" data-hs-overlay="#sales-expenses-add">
          <Icon icon="lucide:plus" class="size-4 me-1"></Icon>
          Add Estimate
        </RouterLink>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead class="bg-default-150">
                  <tr class="text-sm font-normal text-default-500 whitespace-nowrap">
                    <th scope="col" class="px-3.5 py-3 text-start">Purchase Date</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Item</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Purchased By</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Paid By</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Amount</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr class="text-default-800 font-normal" v-for="(item, idx) in estimates" :key="idx">
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.date }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.item }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.purchasedBy }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.paidBy }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.amount }}</td>
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
          <p class="text-default-500 text-sm">Showing <b>10</b> of <b>25</b> Results</p>
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
  </Vertical>
  <div id="sales-expenses-add" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="sales-expenses-add-label2">
    <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
      <div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto">
        <div class="card-header">
          <h3 id="sales-expenses-add-label2" class="font-bold text-default-800 text-base">Add Expense</h3>
          <div>
            <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#sales-expenses-add">
              <span class="sr-only">Close</span>
              <Icon icon="lucide:x" class="size-5"></Icon>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="mb-4">
            <label for="publishDateTime" class="inline-block mb-2 text-sm text-default-800 font-medium">Purchase Date</label>
            <input ref="toRef" type="text" id="publishDateTime" class="form-input" placeholder="Purchase Date" data-provider="flatpickr" data-date-format="d M, Y" data-enable-time="" required readonly />
          </div>
          <div class="mb-4">
            <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Purchased By</label>
            <input type="text" id="invoiceNo" class="form-input" placeholder="Purchased By  " required />
          </div>
          <div class="mb-4">
            <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Paid By</label>
            <input type="text" id="invoiceNo" class="form-input" placeholder="Paid By  " required />
          </div>
          <div class="mb-4">
            <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Item</label>
            <input type="text" id="invoiceNo" class="form-input" placeholder="Item title" required />
          </div>
          <div class="mb-4">
            <label for="invoiceNo" class="inline-block mb-2 text-sm text-default-800 font-medium">Amount</label>
            <input type="number" id="invoiceNo" class="form-input" placeholder="$00.00" required />
          </div>
        </div>
        <div class="card-footer mt-4 flex gap-2 justify-end">
          <button class="bg-transparent text-danger btn border-0 hover:bg-danger/10">Cancel</button>
          <button class="text-white btn bg-primary">Add Expense</button>
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

const { inputRef: fromRef } = useFlatpickr({
  dateFormat: 'd M, Y'
})

const { inputRef: toRef } = useFlatpickr({
  dateFormat: 'd M, Y'
})

type Estimate = {
  date: string
  item: string
  purchasedBy: string
  paidBy: string
  amount: string
}

const estimates: Estimate[] = [
  { date: '02 July, 2023', item: 'Mac System', purchasedBy: 'HR', paidBy: 'HR', amount: '$5,478' },
  { date: '08 Nov, 2023', item: 'HP Desktop', purchasedBy: 'Louisa Howe', paidBy: 'HR', amount: '$4,342' },
  { date: '11 Aug, 2023', item: 'i5 PC', purchasedBy: 'Everett Moore', paidBy: 'Admin', amount: '$8,327' },
  { date: '20 Sep, 2023', item: 'Decoration', purchasedBy: 'Omari Welch', paidBy: 'HR', amount: '$563' },
  { date: '07 Oct, 2023', item: 'Cake', purchasedBy: 'HR', paidBy: 'Susana Dooley', amount: '$148' },
  { date: '18 Dec, 2023', item: 'Salary to Employees', purchasedBy: 'Omari Welch', paidBy: 'Paula Keenan', amount: '$4,500' },
  { date: '21 Jan, 2024', item: 'Salary to Employees', purchasedBy: 'Everett Moore', paidBy: 'Paula Keenan', amount: '$3,000' },
  { date: '02 Feb, 2023', item: 'HP & Lenovo Desktop', purchasedBy: 'HR', paidBy: 'HR', amount: '$4,177' },
  { date: '11 Dec, 2023', item: 'Birthday Party', purchasedBy: 'HR', paidBy: 'HR', amount: '$2,307' },
  { date: '01 Jan, 2023', item: 'Festival Decoration', purchasedBy: 'Lucie Beahan', paidBy: 'HR', amount: '$543.99' }
]
</script>
