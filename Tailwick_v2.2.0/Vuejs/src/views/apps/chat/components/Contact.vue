<template>
  <div class="w-full border-e border-default-200 rounded">
    <div class="card-body">
      <div class="gap-3 flex justify-between">
        <div class="flex gap-3.5 items-center">
          <button class="lg:hidden size-8 rounded-md flex justify-center items-center bg-default-100" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-left" data-hs-overlay="#hs-offcanvas-left">
            <Icon icon="lucide:chevrons-left" class="size-4 text-default-500 hover:text-primary"></Icon>
          </button>
          <div class="rounded-full size-10 bg-default-100">
            <img :src="avatar7" alt="" class="h-10 rounded-full" />
          </div>
          <div>
            <h6 class="text-default-800 mb-1 font-bold text-sm">William Heineman</h6>
            <p class="text-xs text-default-500">NextJS Developer</p>
          </div>
        </div>
        <div class="flex gap-3">
          <button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">
            <Icon icon="lucide:phone" class="size-5"></Icon>
          </button>
          <button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">
            <Icon icon="lucide:video" class="size-5"></Icon>
          </button>
          <button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">
            <Icon icon="lucide:search" class="size-5"></Icon>
          </button>
          <button class="btn rounded-full size-9 hover:bg-primary/10 hover:text-primary transition-all">
            <Icon icon="lucide:panel-right-open" class="size-5"></Icon>
          </button>
        </div>
      </div>
    </div>
    <simplebar class="h-[calc(100vh-340px)]" data-simplebar>
      <div class="card-body bg-default-50">
        <div class="flex flex-col gap-5">
          <div class="flex gap-3 items-end">
            <RouterLink to="#" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200">
              <img :src="avatar7" alt="" class="object-cover rounded-full h-9" />
            </RouterLink>
            <div class="p-4 card text-default-700 text-sm">Sure, I have my pen and paper ready.</div>
          </div>
          <div class="flex gap-3 justify-end items-end">
            <div class="w-92 p-4 card text-default-700 text-sm">Great. Please read the notes of our last meeting for us.</div>
            <RouterLink to="" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200">
              <img :src="avatar1" alt="" class="object-cover rounded-full h-9" />
            </RouterLink>
          </div>
          <div class="flex gap-3 items-end">
            <div>
              <RouterLink to="#" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200">
                <img :src="avatar7" alt="" class="object-cover rounded-full h-9" />
              </RouterLink>
            </div>
            <div class="flex flex-col gap-3">
              <div class="w-92 p-4 card">
                <div class="text-default-700 text-sm">Okay. First, we talked about the budget for next year.</div>
                <div class="grid grid-cols-3 gap-4 mt-4">
                  <RouterLink to="#">
                    <img :src="avatar3" alt="" class="rounded-md" />
                  </RouterLink>
                  <RouterLink to="#">
                    <img :src="avatar5" alt="" class="rounded-md" />
                  </RouterLink>
                </div>
              </div>
              <div class="w-77 p-4 card text-default-700 text-sm">I will budget is getting smaller every year.</div>
              <div class="w-92 p-4 card text-default-700 text-sm">Second, we talked about the new products we are going to selling.</div>
              <div class="w-92 p-4 card text-default-700 text-sm">O.K. Third, we talked about the profits that we had last month. And fourth, we talked about the bills we had to pay.</div>
            </div>
          </div>
          <div class="flex gap-3 justify-end items-end">
            <div class="w-92 p-4 card text-default-700 text-sm">Sorry, William. O.K. We have a few things to talk about today. would you like to give your report.</div>
            <RouterLink to="#" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200">
              <img :src="avatar1" alt="" class="object-cover rounded-full h-9" />
            </RouterLink>
          </div>
          <div class="flex gap-3 items-end">
            <RouterLink to="#" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200">
              <img :src="avatar7" alt="" class="object-cover rounded-full h-9" />
            </RouterLink>
            <div class="w-92 p-4 card text-default-700 text-sm">Yes, thank you 🤩. I have a sales graph I would like to show everyone. This shows how well we are selling our products this year.</div>
          </div>
          <div class="flex gap-3 justify-end items-end">
            <div class="w-92 p-4 card text-default-700 text-sm">Thank you 🤩, William. Very good. Tom, do you have anything to tell everyone.</div>
            <RouterLink to="#" class="flex items-center justify-center text-sm font-semibold rounded-full size-9 bg-default-200">
              <img :src="avatar1" alt="" class="object-cover rounded-full h-9" />
            </RouterLink>
          </div>
        </div>
      </div>
    </simplebar>
    <div class="card-body">
      <div class="flex gap-2 items-center">
        <input type="text" class="form-input w-full" placeholder="Type your message here..." />
        <div class="flex items-center gap-2">
          <button class="btn size-9 bg-danger/10 text-danger hover:bg-danger hover:text-white">
            <Icon icon="lucide:mic" class="size-4"></Icon>
          </button>
          <button class="btn size-9 bg-primary/10 text-primary hover:bg-primary hover:text-white">
            <Icon icon="lucide:image" class="size-4"></Icon>
          </button>
          <button class="btn bg-primary text-white"><Icon icon="lucide:send" class="size-4"></Icon>Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import avatar1 from '@/assets/images/user/avatar-1.png'
import avatar7 from '@/assets/images/user/avatar-7.png'
import avatar3 from '@/assets/images/small/img-3.jpg'
import avatar5 from '@/assets/images/small/img-5.jpg'
import { RouterLink } from 'vue-router'
</script>
