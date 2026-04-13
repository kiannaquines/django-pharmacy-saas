<template>
  <div class="col-span-1">
    <div class="card z-10">
      <div class="card-header">
        <h6 class="card-title">Upcoming Interview</h6>
      </div>
      <simplebar class="h-98" data-simplebar>
        <div class="card-body">
          <div class="flex flex-col gap-3">
            <div class="border rounded-md border-default-200">
              <div class="flex justify-between items-center p-2 border-b border-default-200">
                <div class="flex flex-wrap items-center gap-3">
                  <div class="rounded-full size-10">
                    <img :src="user1" alt="" class="rounded-full" />
                  </div>
                  <div class="text-sm">
                    <h6 class="mb-1 text-default-800 font-semibold"><a href="#">James Krogman</a></h6>
                    <p class="text-default-500">james@tailwick.com</p>
                  </div>
                </div>
                <div class="hs-dropdown relative inline-flex">
                  <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                    <Icon icon="lucide:ellipsis-vertical" class="iconify size-4"></Icon>
                  </button>
                  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-60 mt-2 p-2" role="menu">
                    <div class="flex flex-col gap-y-1 text-sm">
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Overview </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Edit </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Delete </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="flex justify-between items-center gap-3 text-sm">
                  <div class="flex gap-3 items-center text-default-500">
                    <div class="flex items-center">
                      <Icon icon="lucide:calendar" class="size-4 me-1.5"></Icon>
                      <span>25 Nov</span>
                    </div>
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:clock" class="size-4 me-1.5"></Icon>
                      <span class="uppercase">02:41 pm</span>
                    </div>
                  </div>
                  <div>
                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-success/40 text-success">Confirm</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="border rounded-md border-default-200">
              <div class="flex justify-between items-center p-2 border-b border-default-200">
                <div class="flex flex-wrap items-center gap-3">
                  <div class="rounded-full size-10">
                    <img :src="user2" alt="" class="rounded-full" />
                  </div>
                  <div class="text-sm">
                    <h6 class="mb-1 text-default-800 font-semibold"><a href="#">Michael Scott</a></h6>
                    <p class="text-default-500">michaelScott@tailwick.com</p>
                  </div>
                </div>
                <div class="hs-dropdown relative inline-flex">
                  <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                    <Icon icon="lucide:ellipsis-vertical" class="iconify size-4"></Icon>
                  </button>
                  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2" role="menu">
                    <div class="flex flex-col gap-y-1 text-sm">
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Overview </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Edit </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Delete </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="flex justify-between items-center gap-3 text-sm">
                  <div class="flex gap-3 items-center">
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:calendar" class="size-4 me-1.5"></Icon>
                      <span>05 Dec</span>
                    </div>
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:clock" class="size-4 me-1.5"></Icon>
                      <span class="uppercase">01:23 pm</span>
                    </div>
                  </div>
                  <div>
                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-primary/40 text-primary">Re-scheduled</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="border rounded-md border-default-200">
              <div class="flex justify-between items-center p-2 border-b border-default-200">
                <div class="flex flex-wrap items-center gap-3">
                  <div class="rounded-full size-10">
                    <img :src="user3" alt="" class="rounded-full" />
                  </div>
                  <div class="text-sm">
                    <h6 class="mb-1 text-default-800 font-semibold"><a href="#">Denise Ledford</a></h6>
                    <p class="text-default-500">ledford@tailwick.com</p>
                  </div>
                </div>
                <div class="hs-dropdown relative inline-flex">
                  <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                    <Icon icon="lucide:ellipsis-vertical" class="iconify size-4"></Icon>
                  </button>
                  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2" role="menu">
                    <div class="flex flex-col gap-y-1 text-sm">
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Overview </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Edit </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Delete </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="flex justify-between items-center gap-3 text-sm">
                  <div class="flex gap-3 items-center">
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:calendar" class="size-4 me-1.5"></Icon>
                      <span> 27 Nov</span>
                    </div>
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:clock" class="size-4 me-1.5"></Icon>
                      <span class="uppercase">11:59 pm</span>
                    </div>
                  </div>
                  <div>
                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-secondary/40 text-secondary">Scheduled</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="border rounded-md border-default-200">
              <div class="flex justify-between items-center p-2 border-b border-default-200">
                <div class="flex flex-wrap items-center gap-3">
                  <div class="rounded-full size-10">
                    <img :src="avatar" alt="" class="rounded-full" />
                  </div>
                  <div>
                    <h6 class="mb-1 text-default-800 font-semibold"><a href="#">Gladys Smith</a></h6>
                    <p class="text-default-500">gap-4@tailwick.com</p>
                  </div>
                </div>
                <div class="hs-dropdown relative inline-flex">
                  <button type="button" class="hs-dropdown-toggle btn size-7.5 hover:bg-default-150 text-default-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                    <Icon icon="lucide:ellipsis-vertical" class="iconify size-4"></Icon>
                  </button>
                  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-40 card z-140 mt-2 p-2" role="menu">
                    <div class="flex flex-col gap-y-1 text-sm">
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Overview </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Edit </a>
                      <a class="py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href=""> Delete </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="flex justify-between items-center gap-3 text-sm">
                  <div class="flex gap-3 items-center">
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:calendar" class="size-4 me-1.5"></Icon>
                      <span> 07 Dec</span>
                    </div>
                    <div class="flex items-center text-default-500">
                      <Icon icon="lucide:clock" class="size-4 me-1.5"></Icon>
                      <span class="uppercase">05:19 pm</span>
                    </div>
                  </div>
                  <div>
                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded text-xs font-normal border border-danger/40 text-danger">Cancelled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import user1 from '~/assets/images/user/user-1.jpg'
import user2 from '~/assets/images/user/user-2.jpg'
import user3 from '~/assets/images/user/user-3.jpg'
import avatar from '~/assets/images/user/avatar-5.png'
</script>
