<template>
  <div class="lg:col-span-3 col-span-1">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-5">
      <div class="card" v-for="(item, idx) in stats" :key="idx">
        <div class="card-body">
          <div class="flex items-center gap-3">
            <div class="btn size-12" :class="item.color">
              <Icon :icon="item.icon" class="size-6"></Icon>
            </div>
            <div>
              <h5 class="mb-1 text-base text-heading font-semibold">
                <span class="counter-value" data-target="187">{{ item.value }}</span>
              </h5>
              <p class="text-default-500">{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="flex gap-3 items-center">
          <div class="relative">
            <input type="email" class="ps-11 form-input form-input-sm" placeholder="Search for...." />
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
              <Icon icon="lucide:search" class="size-3.5 flex items-center text-default-500"></Icon>
            </div>
          </div>
          <input ref="inputRef" type="text" placeholder="Select Date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly class="form-input form-input-sm" />
        </div>
        <div class="flex gap-3 items-center">
          <button type="button" class="border btn btn-sm border-dashed border-danger text-danger bg-transparent ease-linear hover:bg-red-50">Reject All</button>
          <button type="button" class="btn btn-sm bg-primary text-white">Approve All</button>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="min-w-full inline-block align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-default-200">
                <thead class="bg-default-100 font-normal whitespace-nowrap">
                  <tr class="text-sm text-default-800">
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Date</th>
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Check In</th>
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Check Out</th>
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Meal Break></th>
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Work Hours</th>
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Overtime</th>
                    <th scope="col" class="px-3.5 py-3 font-medium text-start">Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-default-200">
                  <tr class="text-default-800 font-normal whitespace-nowrap" v-for="(item, idx) in attendances" :key="idx">
                    <td class="px-3.5 py-3 text-sm">
                      {{ item.date }}
                      <span class="py-0.5 px-2.5 border border-default-200 text-default-600 rounded">{{ item.day }}</span>
                    </td>
                    <td class="px-3.5 py-3 text-sm">{{ item.checkIn }}</td>
                    <td class="px-3.5 py-3 text-sm">{{ item.checkOut }}</td>
                    <td class="px-3.5 py-3 text-sm">{{ item.mealBreak }}</td>
                    <td class="px-3.5 py-3 text-sm">{{ item.workHours }}</td>
                    <td class="px-3.5 py-3 text-sm">{{ item.overtime }}</td>
                    <td class="px-3.5 py-3">
                      <div class="flex items-center gap-2">
                        <a href="#" class="btn size-8 bg-success/10 hover:bg-success hover:text-white text-success">
                          <Icon icon="lucide:check" class="size-4"></Icon>
                        </a>
                        <a href="#" class="btn size-8 bg-danger/10 hover:bg-danger hover:text-white text-danger">
                          <Icon icon="lucide:x" class="size-4"></Icon>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <p class="text-default-500 text-sm">Showing <b>10</b> of <b>15</b> Results</p>
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
import { useFlatpickr } from '~/composables/useFlatpickr'

const { inputRef } = useFlatpickr({
  mode: 'range',
  dateFormat: 'd M, Y'
})

type Stat = {
  icon: string
  value: number
  label: string
  color: string
}

const stats: Stat[] = [
  { icon: 'lucide:clock', value: 187, label: 'Approved Hours', color: 'text-info bg-info/10' },
  { icon: 'lucide:x-octagon', value: 19, label: 'Rejected Hours', color: 'text-danger bg-danger/10' },
  { icon: 'lucide:refresh-cw', value: 32, label: 'Pending Hours', color: 'text-warning bg-warning/10' }
]

type AttendanceRecord = {
  date: string
  day: string
  checkIn: string
  checkOut: string
  mealBreak: string
  workHours?: string
  overtime: string
}

const attendances: AttendanceRecord[] = [
  { date: '13 Oct, 2023', day: 'Fri', checkIn: '08:23 AM', checkOut: '07:00 PM', mealBreak: '1.00 Hrs', workHours: '8.00 Hrs', overtime: '0.00 Hrs' },
  { date: '12 Oct, 2023', day: 'Thu', checkIn: '08:28 AM', checkOut: '05:46 PM', mealBreak: '0.45 Hrs', workHours: '8.00 Hrs', overtime: '0.15 Hrs' },
  { date: '11 Oct, 2023', day: 'Wed', checkIn: '09:00 AM', checkOut: '06:00 PM', mealBreak: '0.50 Hrs', workHours: '8.00 Hrs', overtime: '0.35 Hrs' },
  { date: '10 Oct, 2023', day: 'Tue', checkIn: '09:15 AM', checkOut: '05:00 PM', mealBreak: '0.35 Hrs', workHours: '7.55 Hrs', overtime: '0.15 Hrs' },
  { date: '09 Oct, 2023', day: 'Mon', checkIn: '08:28 AM', checkOut: '05:46 PM', mealBreak: '0.45 Hrs', workHours: '8.00 Hrs', overtime: '0.15 Hrs' },
  { date: '06 Oct, 2023', day: 'Fri', checkIn: '09:00 AM', checkOut: '06:00 PM', mealBreak: '0.50 Hrs', workHours: '8.00 Hrs', overtime: '0.35 Hrs' },
  { date: '05 Oct, 2023', day: 'Thu', checkIn: '08:28 AM', checkOut: '05:46 PM', mealBreak: '0.45 Hrs', workHours: '8.00 Hrs', overtime: '0.15 Hrs' },
  { date: '04 Oct, 2023', day: 'Wed', checkIn: '08:28 AM', checkOut: '05:46 PM', mealBreak: '0.45 Hrs', workHours: '8.00 Hrs', overtime: '0.15 Hrs' },
  { date: '03 Oct, 2023', day: 'Tue', checkIn: '08:23 AM', checkOut: '07:00 PM', mealBreak: '1.00 Hrs', workHours: '8.00 Hrs', overtime: '0.00 Hrs' },
  { date: '02 Oct, 2023', day: 'Mon', checkIn: '09:15 AM', checkOut: '05:00 PM', mealBreak: '0.35 Hrs', workHours: '7.55 Hrs', overtime: '0.15 Hrs' }
]
</script>
