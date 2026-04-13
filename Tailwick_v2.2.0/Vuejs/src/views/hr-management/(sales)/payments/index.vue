<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Payments" />
    <div class="card">
      <div class="card-header">
        <div class="flex gap-3">
          <div class="relative">
            <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for...." />
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
              <Icon icon="lucide:search" class="size-4 flex items-center text-default-500"></Icon>
            </div>
          </div>
          <input ref="inputRef" type="text" id="dateRangeFilterInput" class="form-input form-input-sm" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" />
        </div>
        <div>
          <select type="text" id="dateRangeFilterInput" class="form-input form-input-sm" placeholder="Select date">
            <option value="Accepted">Failed</option>
            <option value="Declined" selected>Paid</option>
            <option value="Expired">Pending</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead class="bg-default-150">
                  <tr class="text-sm font-normal text-default-500">
                    <th scope="col" class="px-3.5 py-3 text-start">Payment ID</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Membership Plan</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Date</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Payment Type</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Username</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Amount</th>
                    <th scope="col" class="px-3.5 py-3 text-start">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr class="text-default-800 font-normal" v-for="(item, idx) in payments" :key="idx">
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                      <RouterLink to="">{{ item.id }}</RouterLink>
                    </td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.plan }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.date }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.type }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">{{ item.username }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">${{ item.amount }}</td>
                    <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                      <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium" :class="item.textcolor"> <span class="size-1.5 me-1 rounded-full inline-block" :class="item.variant"></span>{{ item.status }} </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <p class="text-default-500 text-sm">Showing <b>8</b> of <b>10</b> Results</p>
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

type PaymentType = {
  id: string
  plan: string
  date: string
  type: string
  username: string
  amount: number
  status: 'Paid' | 'Pending' | 'Failed'
  textcolor: 'bg-success/15 text-success' | 'bg-warning/15 text-warning' | 'bg-danger/15 text-danger'
  variant: 'bg-success' | 'bg-warning' | 'bg-danger'
}

const payments: PaymentType[] = [
  {
    id: '#TWP10021320',
    plan: 'Regular License',
    date: '02 July, 2023',
    type: 'PayPal',
    username: 'Infra Teach',
    amount: 2403,
    status: 'Paid',
    variant: 'bg-success',
    textcolor: 'bg-success/15 text-success'
  },
  {
    id: '#TWP10021321',
    plan: 'Extended License',
    date: '08 Nov, 2023',
    type: 'Credit Card',
    username: 'Kim Broberg',
    amount: 1341,
    status: 'Pending',
    variant: 'bg-warning',
    textcolor: 'bg-warning/15 text-warning'
  },
  {
    id: '#TWP10021322',
    plan: 'Extended License',
    date: '11 Aug, 2023',
    type: 'Bank Transfer',
    username: 'Everett Moore',
    amount: 816.21,
    status: 'Failed',
    variant: 'bg-danger',
    textcolor: 'bg-danger/15 text-danger'
  },
  {
    id: '#TWP10021323',
    plan: 'Regular License',
    date: '20 Sep, 2023',
    type: 'PayPal',
    username: 'Omari Welch',
    amount: 1184,
    status: 'Paid',
    variant: 'bg-success',
    textcolor: 'bg-success/15 text-success'
  },
  {
    id: '#TWP10021324',
    plan: 'Regular License',
    date: '07 Oct, 2023',
    type: 'Debit Card',
    username: 'Susana Dooley',
    amount: 5463,
    status: 'Paid',
    variant: 'bg-success',
    textcolor: 'bg-success/15 text-success'
  },
  {
    id: '#TWP10021325',
    plan: 'Regular License',
    date: '18 Dec, 2023',
    type: 'PayPal',
    username: 'Paul Gerhold',
    amount: 3463,
    status: 'Pending',
    variant: 'bg-warning',
    textcolor: 'bg-warning/15 text-warning'
  },
  {
    id: '#TWP10021326',
    plan: 'Extended License',
    date: '21 Jan, 2024',
    type: 'Bank Transfer',
    username: 'Lucie Beahan',
    amount: 1543,
    status: 'Failed',
    variant: 'bg-danger',
    textcolor: 'bg-danger/15 text-danger'
  },
  {
    id: '#TWP10021327',
    plan: 'Regular License',
    date: '02 Feb, 2023',
    type: 'PayPal',
    username: 'Jose White',
    amount: 4177,
    status: 'Paid',
    variant: 'bg-success',
    textcolor: 'bg-success/15 text-success'
  },
  {
    id: '#TWP10021328',
    plan: 'Extended License',
    date: '11 Dec, 2023',
    type: 'Debit Card',
    username: 'Jonas Frederiksen',
    amount: 2307,
    status: 'Pending',
    variant: 'bg-warning',
    textcolor: 'bg-warning/15 text-warning'
  },
  {
    id: '#TWP10021329',
    plan: 'Extended License',
    date: '01 Jan, 2023',
    type: 'PayPal',
    username: 'Stephen Tillman',
    amount: 543.99,
    status: 'Paid',
    variant: 'bg-success',
    textcolor: 'bg-success/15 text-success'
  }
]
</script>
