<template>
  <div class="lg:col-span-1 col-span-1 card print:hidden">
    <div class="sticky top-24">
      <div class="card-body">
        <h6 class="mb-4 card-title">Invoice List</h6>
        <div class="flex items-center gap-2">
          <div class="relative w-full">
            <input type="email" class="ps-11 form-input form-input-sm" placeholder="Search for..." />
            <div class="absolute inset-y-0 start-0 flex items-center ps-3">
              <Icon icon="lucide:search" class="size-4 flex items-center fill-default-100 text-default-500"></Icon>
            </div>
          </div>
          <div>
            <button type="button" class="btn size-7.5 bg-info/15 text-primary hover:text-white hover:bg-sky-600">
              <Icon icon="lucide:sliders-horizontal" class="size-4"></Icon>
            </button>
          </div>
        </div>
      </div>
      <simplebar class="overflow-x-auto h-150" data-simplebar>
        <a href="#" class="block border-t p-5 bg-default-100 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090251</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Paula Keenan</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$873.96</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>21 Jan, 2024</button>
                </div>
              </div>
            </div>
            <div>
              <span class="text-warning bg-warning/20 rounded text-xs py-0.5 px-2.5">Unpaid</span>
            </div>
          </div>
        </a>
        <a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090252</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Jaqueline Hammes</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$1,203.74</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>27 Oct, 2023</button>
                </div>
              </div>
            </div>
            <div>
              <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success">Paid</span>
            </div>
          </div>
        </a>

        <a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090253</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Akeem Paucek</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$1,423.10</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>04 Feb, 2024</button>
                </div>
              </div>
            </div>
            <div>
              <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success">Paid</span>
            </div>
          </div>
        </a>

        <a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090254</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Stephon Trantow</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$1,420.99</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>14 July, 2023</button>
                </div>
              </div>
            </div>
            <div>
              <span class="text-danger bg-danger/10 rounded text-xs py-0.5 px-2.5">Cancel</span>
            </div>
          </div>
        </a>

        <a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090255</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Domenic Tromp</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$247.18</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>11 April, 2023</button>
                </div>
              </div>
            </div>
            <div>
              <span class="text-default-600 bg-default-200 rounded text-xs py-0.5 px-2.5">Refund</span>
            </div>
          </div>
        </a>

        <a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090256</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Marie Prohaska</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$559.32</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>03 Aug, 2023</button>
                </div>
              </div>
            </div>
            <div>
              <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success">Paid</span>
            </div>
          </div>
        </a>

        <a href="#" class="block border-t p-5 border-default-200 hover:bg-default-100 active">
          <div class="flex justify-between">
            <div class="w-full">
              <h6 class="font-semibold text-sm text-default-700">#TW15090257</h6>
              <div>
                <h6 class="mt-3 mb-2 text-base font-semibold text-default-800">Ethel Corwin</h6>
                <div class="flex items-center justify-between gap-6">
                  <p class="text-default-500 text-sm">$2,147.65</p>
                  <button type="button" class="inline-flex text-sm items-center"><Icon icon="lucide:calendar-clock" class="size-4 text-default-500 me-1.5"></Icon>15 Dec, 2024</button>
                </div>
              </div>
            </div>
            <div>
              <span class="text-warning bg-warning/10 rounded text-xs py-0.5 px-2.5">Unpaid</span>
            </div>
          </div>
        </a>
      </simplebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
</script>
