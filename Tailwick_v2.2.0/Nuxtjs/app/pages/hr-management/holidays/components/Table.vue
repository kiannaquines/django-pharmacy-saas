<template>
  <div class="card">
    <div class="card-header">
      <h6 class="text-default-800 text-base font-semibold">Holidays 2024</h6>
      <button class="btn btn-sm bg-primary text-white"><Icon icon="lucide:plus" class="size-4 me-1"></Icon>Add Holiday</button>
    </div>
    <div class="flex flex-col">
      <div class="overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-default-200">
              <thead class="font-normal whitespace-nowrap">
                <tr class="text-sm text-default-800 divide-x divide-default-200">
                  <th scope="col" class="px-3.5 py-3 font-medium text-start">#</th>
                  <th scope="col" class="px-3.5 py-3 font-medium text-start">Day</th>
                  <th scope="col" class="px-3.5 py-3 font-medium text-start">Date</th>
                  <th scope="col" class="px-3.5 py-3 font-medium text-start">Holiday Name</th>
                  <th scope="col" class="px-3.5 py-3 font-medium text-start">Type</th>
                  <th scope="col" class="px-3.5 py-3 font-medium text-start">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-default-200">
                <tr class="text-default-800 font-normal whitespace-nowrap divide-x divide-default-200" v-for="(item, idx) in holidays" :key="idx">
                  <td class="px-3.5 py-3 text-sm">{{ item.id }}</td>
                  <td class="px-3.5 py-3 text-sm">{{ item.day }}</td>
                  <td class="px-3.5 py-3 text-sm">{{ item.date }}</td>
                  <td class="px-3.5 py-3 text-sm">{{ item.name }}</td>
                  <td class="px-3.5 py-3 text-sm">{{ item.type }}</td>
                  <td class="px-3.5 py-3">
                    <div class="flex items-center gap-2">
                      <a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="holidaysLeaveDeleteModal2" data-hs-overlay="#holidaysLeaveDeleteModal2">
                        <Icon icon="lucide:pencil" class="size-4"></Icon>
                      </a>
                      <a href="#" class="flex size-8 bg-default-200 rounded-md items-center justify-center hover:bg-primary/10 hover:text-primary transition-all text-default-600" aria-haspopup="dialog" aria-expanded="false" aria-controls="holidaysLeaveDeleteModal" data-hs-overlay="#holidaysLeaveDeleteModal">
                        <Icon icon="lucide:trash-2" class="size-4"></Icon>
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

type Holiday = {
  id: number
  day: string
  date: string
  name: string
  type: string
}

const holidays: Holiday[] = [
  { id: 1, day: 'Monday', date: '15 Jan', name: 'Makara Sankranti', type: 'Gazetted Holiday' },
  { id: 2, day: 'Friday', date: '26 Jan', name: 'Republic Day', type: 'Gazetted Holiday' },
  { id: 3, day: 'Monday', date: '25 Mar', name: 'Holi', type: 'Gazetted Holiday' },
  { id: 4, day: 'Friday', date: '29 Mar', name: 'Good Friday', type: 'Gazetted Holiday' },
  { id: 5, day: 'Sunday', date: '4 Aug', name: 'Friendship Day', type: 'Observance' },
  { id: 6, day: 'Thursday', date: '15 Aug', name: 'Independence Day', type: 'Gazetted Holiday' },
  { id: 7, day: 'Sunday', date: '15 Sep', name: 'Onam', type: 'Restricted Holiday' },
  { id: 8, day: 'Thursday', date: '31 Oct', name: 'Halloween', type: 'Observance' },
  { id: 9, day: 'Wednesday', date: '25 Dec', name: 'Christmas', type: 'Gazetted Holiday' },
  { id: 10, day: 'Tuesday', date: '31 Dec', name: 'New Year', type: 'Observance' }
]
</script>
