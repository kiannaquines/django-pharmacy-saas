<template>
  <Vertical>
    <PageTitle subtitle="Menu" title="Holidays" />
    <Table />

    <div id="holidaysLeaveDeleteModal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="holidaysLeaveDeleteModal-label">
      <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 md:w-sm m-3 mx-auto min-h-[calc(100%-56px)] flex items-center">
        <div class="w-full flex flex-col card shadow-2xs border border-default-200 rounded-xl pointer-events-auto px-6 py-8 relative">
          <div class="absolute top-3 end-3">
            <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#holidaysLeaveDeleteModal">
              <span class="sr-only">Close</span>
              <Icon icon="lucide:x" class="size-5"></Icon>
            </button>
          </div>
          <h3 class="font-semibold text-base text-default-800 text-center">
            <img :src="deleteIcon" alt="" class="size-12 mx-auto" />
            <div class="mt-5 text-center">
              <h5 class="mb-1 text-lg font-semibold text-default-800">Are you sure?</h5>
              <p class="text-default-500 text-sm font-normal">Are you certain you want to delete this record?</p>
              <div class="mt-5 flex gap-2 justify-center">
                <button class="btn text-danger bg-transparent hover:bg-danger/10" aria-label="Close">Cancel</button>
                <button class="btn bg-danger text-white">Yes,Delete It!</button>
              </div>
            </div>
          </h3>
        </div>
      </div>
    </div>

    <div id="holidaysLeaveDeleteModal2" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="holidaysLeaveDeleteModal-label2">
      <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
        <div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto">
          <div class="card-header">
            <h3 id="holidaysLeaveDeleteModal-label2" class="card-title">Add Holiday</h3>
            <div>
              <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#holidaysLeaveDeleteModal2">
                <span class="sr-only">Close</span>
                <Icon icon="lucide:x" class="size-5"></Icon>
              </button>
            </div>
          </div>
          <div class="card-body">
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">
              <div class="lg:col-span-12">
                <label for="typeSelect" class="inline-block mb-2 text-base font-medium">Type</label>
                <select id="typeSelect" name="typeSelect" class="form-input" data-choices data-choices-search-false>
                  <option value="Gazetted Holiday">Gazetted Holiday</option>
                  <option value="Observance">Observance</option>
                  <option value="Restricted Holiday" selected>Restricted Holiday</option>
                  <option value="Season">Season</option>
                </select>
              </div>
              <div class="lg:col-span-12">
                <label for="holidayInput" class="inline-block mb-2 text-base font-medium">Holiday Name</label>
                <input type="text" id="holidayInput" class="form-input bg-transparent border-default-200 focus:outline-none focus:border-primary placeholder:text-default-400" placeholder="Holiday name" />
              </div>
              <div class="lg:col-span-12">
                <label for="holidayDateInput" class="inline-block mb-2 text-base font-medium">Date</label>
                <input ref="inputRef" type="text" placeholder="Select Date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true" readonly class="form-input" />
              </div>
            </div>
          </div>
          <div class="flex justify-end items-center gap-x-2 py-3 px-4">
            <button class="btn border-0 text-sm rounded-md text-danger bg-transparent transition-all duration-300 hover:bg-danger/10" aria-label="Close">Cancel</button>
            <button type="button" class="btn bg-primary text-white">Add Holiday</button>
          </div>
        </div>
      </div>
    </div>
  </Vertical>
</template>

<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import Vertical from '@/layouts/vertical.vue'
import Table from './components/Table.vue'
import { Icon } from '@iconify/vue'
import { useFlatpickr } from '@/composables/useFlatpickr'
import deleteIcon from '@/assets/images/delete.png'

const { inputRef } = useFlatpickr({
  mode: 'range',
  dateFormat: 'd M, Y'
})
</script>
