<template>
  <div class="card">
    <div class="card-header">
      <div class="relative">
        <input type="email" class="ps-11 form-input form-input-sm" placeholder="Search for..." />
        <div class="absolute inset-y-0 start-0 flex items-center ps-3">
          <Icon icon="lucide:search" class="size-3.5 text-default-500"></Icon>
        </div>
      </div>
      <div class="relative">
        <input ref="inputRef" type="text" placeholder="Select Date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly class="form-input form-input-sm ps-10" />
        <Icon icon="lucide:calendar" class="absolute top-1.5 start-3 size-4 text-default-500"></Icon>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-default-200">
              <thead class="bg-default-100 font-normal whitespace-nowrap">
                <tr class="text-sm text-default-800">
                  <th class="px-3.5 py-3 font-medium">Employee Name</th>
                  <th v-for="day in 30" :key="day" class="px-3.5 py-3 font-medium">{{ day.toString().padStart(2, '0') }}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-default-200">
                <tr v-for="(employee, index) in employees" :key="index" class="text-default-800 font-normal whitespace-nowrap">
                  <td class="px-3.5 py-3 text-sm">{{ employee.name }}</td>
                  <td v-for="(status, dayIndex) in employee.days" :key="dayIndex" class="px-3.5 py-3 text-sm">
                    <template v-if="status === 'present'">
                      <Icon icon="lucide:check" class="size-4 text-success"></Icon>
                    </template>
                    <template v-else-if="status === 'absent'">
                      <Icon icon="lucide:x" class="size-4 text-danger"></Icon>
                    </template>
                    <template v-else> - </template>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { useFlatpickr } from '~/composables/useFlatpickr'

const { inputRef } = useFlatpickr({
  mode: 'range',
  dateFormat: 'd M, Y'
})

type AttendanceStatus = 'present' | 'absent' | 'none'

interface EmployeeAttendance {
  name: string
  days: AttendanceStatus[]
}
const employees: EmployeeAttendance[] = [
  {
    name: 'Patricia Garcia',
    days: ['absent', 'absent', 'none', 'none', 'present', 'present', 'present', 'present', 'absent', 'none', 'none', 'present', 'absent', 'present', 'present', 'present', 'none', 'none', 'absent', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present']
  },
  {
    name: 'Tonya Johnson',
    days: ['present', 'present', 'none', 'none', 'present', 'present', 'present', 'absent', 'present', 'none', 'none', 'absent', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'absent', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'absent']
  },
  {
    name: 'Willie Torres',
    days: ['present', 'absent', 'none', 'none', 'present', 'absent', 'absent', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'absent', 'present', 'present']
  },
  {
    name: 'Jose White',
    days: ['present', 'present', 'none', 'none', 'present', 'present', 'present', 'absent', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'absent', 'none', 'none', 'present', 'present', 'present', 'present', 'present']
  },
  {
    name: 'Jose White',
    days: ['absent', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'absent', 'absent', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present']
  },
  {
    name: 'Jonas Frederiksen',
    days: ['present', 'present', 'none', 'none', 'absent', 'absent', 'absent', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'absent', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'absent', 'present', 'present', 'present', 'present']
  },
  {
    name: 'Kim Broberg',
    days: ['present', 'present', 'none', 'none', 'present', 'present', 'present', 'absent', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'absent', 'none', 'none', 'present', 'absent', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present']
  },
  {
    name: 'Nancy Reynolds',
    days: ['present', 'present', 'none', 'none', 'absent', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'absent', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'present', 'present']
  },
  {
    name: 'Thomas Hatfield',
    days: ['absent', 'present', 'none', 'none', 'present', 'present', 'absent', 'present', 'present', 'none', 'none', 'present', 'present', 'absent', 'present', 'present', 'none', 'none', 'present', 'absent', 'present', 'present', 'present', 'none', 'none', 'present', 'present', 'absent', 'present', 'present']
  },
  {
    name: 'Holly Kavanaugh',
    days: ['present', 'present', 'none', 'none', 'present', 'present', 'present', 'absent', 'present', 'none', 'none', 'present', 'absent', 'present', 'present', 'present', 'none', 'none', 'absent', 'present', 'absent', 'present', 'present', 'none', 'none', 'present', 'present', 'present', 'absent', 'present']
  }
]
</script>
