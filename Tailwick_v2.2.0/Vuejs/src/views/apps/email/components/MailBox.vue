<template>
  <div class="w-full relative">
    <div class="card-header">
      <div class="flex items-center gap-4.5">
        <button class="lg:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="mailBoxSidebar" aria-label="Toggle navigation" data-hs-overlay="#mailBoxSidebar">
          <Icon icon="lucide:align-left" class="size-6"></Icon>
        </button>
        <input id="checkAll" type="checkbox" class="form-checkbox checked:bg-primary" />
        <button><Icon icon="lucide:refresh-cw" class="size-4 text-default-500 hover:text-primary"></Icon></button>
        <div class="w-px h-5 bg-default-200"></div>
        <button><Icon icon="lucide:archive-restore" class="size-4 text-default-500 hover:text-primary"></Icon></button>
        <button><Icon icon="lucide:alert-octagon" class="size-4 text-default-500 hover:text-primary"></Icon></button>
        <button><Icon icon="lucide:trash-2" class="size-4 text-default-500 hover:text-primary"></Icon></button>
        <div class="w-px h-5 bg-default-200"></div>
        <button><Icon icon="lucide:mail" class="size-4 text-default-500 hover:text-primary"></Icon></button>
        <button><Icon icon="lucide:tag" class="size-4 text-default-500 hover:text-primary"></Icon></button>
        <button><Icon icon="lucide:clock" class="size-4 text-default-500 hover:text-primary"></Icon></button>
      </div>
      <div class="flex items-center gap-2">
        <div class="relative flex-1">
          <input type="email" class="form-input form-input-sm ps-11" placeholder="Search for...." />
          <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
            <Icon icon="lucide:search" class="size-4 flex items-center text-default-500"></Icon>
          </div>
        </div>
        <div class="hs-dropdown relative inline-flex">
          <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 text-default-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
            <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
          </button>
          <div class="hs-dropdown-menu" role="menu">
            <RouterLink class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" to=""> Show more message </RouterLink>
            <RouterLink class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" to=""> Important & Unread </RouterLink>
            <RouterLink class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" to=""> Hide section when empty </RouterLink>
            <RouterLink class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" to=""> All Delete </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <simplebar class="h-166" data-simplebar>
      <div class="overflow-x-auto">
        <div class="min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="w-full mail-list">
              <tbody class="divide-y divide-default-200">
                <tr :class="item.class" class="text-sm" data-hs-overlay="#emailOverview" v-for="(item, idx) in emails" :key="idx">
                  <td class="py-2.5 ps-5">
                    <div class="flex items-center gap-3 h-5">
                      <input id="checkbox-all" type="checkbox" class="form-checkbox checked:bg-primary" />
                      <Icon icon="lucide:star" class="iconify size-4 text-default-500 hover:text-yellow-500"></Icon>
                      <Icon icon="lucide:step-forward" class="iconify size-4 text-default-500 hover:text-yellow-500"></Icon>
                    </div>
                  </td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap">{{ item.sender }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap">{{ item.subject }}</td>
                  <td class="px-3.5 py-2.5 whitespace-nowrap">{{ item.time }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </simplebar>

    <div id="emailOverview" class="card shadow-none hs-overlay [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 hidden translate-x-full absolute top-0 end-0 transition-all duration-300 transform h-full max-w-full w-full z-80 bg-card" role="dialog" tabindex="-1" aria-labelledby="emailOverview-label">
      <div class="card-header py-4">
        <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-default-100 text-default-800 hover:bg-default-150 focus:outline-hidden focus:bg-default-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#emailOverview">
          <span class="sr-only">Close</span>
          <Icon icon="lucide:chevrons-left" class="size-4"></Icon>
        </button>
        <div class="flex-grow">
          <h3 id="emailOverview-label" class="font-bold text-default-800 mb-1.5">How Custom Software Can Solve Your Business Challenges</h3>
          <p class="text-default-500 dark:text-zink-200"><RouterLink to="">infrateach@tailwick.com</RouterLink> (Aug 6, 2023, 9:04 PM)</p>
        </div>
        <div class="flex gap-3 shrink-0">
          <RouterLink to="" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-primary dark:hover:text-primary">
            <Icon icon="lucide:archive-restore" class="size-4"></Icon>
          </RouterLink>
          <RouterLink to="" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500">
            <Icon icon="lucide:printer" class="size-4"></Icon>
          </RouterLink>
          <RouterLink to="" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-yellow-500 dark:hover:text-yellow-500">
            <Icon icon="lucide:star" class="size-4"></Icon>
          </RouterLink>
          <RouterLink to="" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-danger dark:hover:text-danger">
            <Icon icon="lucide:trash-2" class="size-4"></Icon>
          </RouterLink>
        </div>
      </div>
      <simplebar class="max-h-150" data-simplebar>
        <div class="p-5 space-y-6">
          <div class="flex gap-3">
            <div class="relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600">
              <img :src="avatar5" alt="" class="rounded-full h-9" />
            </div>
            <div class="grow">
              <div class="flex items-center">
                <div class="grow">
                  <h6>Infra Teach</h6>
                  <p class="text-default-500 dark:text-zink-200"><RouterLink to="">infrateach@tailwick.com</RouterLink></p>
                </div>
                <div class="shrink-0">Aug 6, 2023, 9:04 PM</div>
              </div>
              <div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600">
                <p class="mb-2 last:mb-0">Hi,</p>
                <p class="mb-2 last:mb-0">Custom software solutions are tailor-made software applications designed to meet the unique needs of a specific business or organization. Unlike off-the-shelf software, which offers a standardized solution for a broad range of users, custom software is precisely crafted to align with the workflows, processes, and objectives of a particular business.</p>
                <p class="mb-2 last:mb-0">The key advantage of custom software lies in its ability to be scalable and flexible. It can evolve alongside the business, accommodating changing requirements and supporting expansion. By adapting to the specific needs of the organization, custom software empowers businesses to gain a competitive edge, differentiate themselves in the market, and deliver enhanced experiences to their customers.</p>
                <p class="mb-2 last:mb-0">Thank You</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="relative flex items-center justify-center font-semibold bg-pink-100 rounded-full text-default-500 size-9 shrink-0 dark:bg-pink-500/20 dark:text-zink-200">
              <img :src="avatar1" alt="" class="rounded-full h-9" />
            </div>
            <div class="grow">
              <div class="flex items-center">
                <div class="grow">
                  <h6>Me</h6>
                  <p class="text-default-500 dark:text-zink-200"><RouterLink to="">paulakeenan@tailwick.com</RouterLink></p>
                </div>
                <div class="shrink-0">07 Nov, 2023, 10:14 PM</div>
              </div>
              <div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600">
                <p class="mb-2 last:mb-0">Hi,</p>
                <p class="mb-2 last:mb-0">I hope this email finds you well. Let me start by saying that I am a big fan of your work and it has inspired me to push myself beyond what I thought were my limits!</p>
                <p class="mb-2 last:mb-0">After taking a good look at [target company] I realize that you could improve in [improvement area]. I have helped many others improve in the same area and I‘d be more than happy to talk with you about it!</p>
                <p class="mb-2 last:mb-0">Would you be available for a quick call to discuss how our [product/service] could help you?</p>
                <p class="mb-2 last:mb-0">Regards,</p>
                <p class="mb-2 last:mb-0">Themesdesign</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600">
              <img :src="avatar5" alt="" class="rounded-full h-9" />
            </div>
            <div class="grow">
              <div class="flex items-center">
                <div class="grow">
                  <h6>Infra Teach</h6>
                  <p class="text-default-500 dark:text-zink-200"><RouterLink to="">infrateach@tailwick.com</RouterLink></p>
                </div>
                <div class="shrink-0">07 Nov, 2023, 10:42 PM</div>
              </div>
              <div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600">
                <p class="mb-2 last:mb-0">Hello, Themesdesign</p>
                <p class="mb-2 last:mb-0">You are probably very busy, I totally understand that!</p>
                <p class="mb-2 last:mb-0">It would be great to hear back from you. So, please let me know when you find some time.</p>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
      <div class="card-footer py-4">
        <div class="grow">
          <input type="text" id="inputText" class="form-input" placeholder="Enter Message" required autocomplete="off" />
        </div>
        <div class="flex gap-2 shrink-0">
          <button type="button" class="btn hover:bg-default-100"><Icon icon="lucide:mic" class="size-4"></Icon></button>
          <button type="button" class="btn hover:bg-default-100"><Icon icon="lucide:image" class="size-4"></Icon></button>
          <button type="button" class="btn bg-primary text-white"><Icon icon="lucide:send" class="inline-block mr-1 align-middle size-4"></Icon> <span class="align-middle">Send</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import avatar1 from '@/assets/images/user/avatar-1.png'
import avatar5 from '@/assets/images/user/avatar-5.png'
import { emails } from './data'
import { RouterLink } from 'vue-router'
</script>
