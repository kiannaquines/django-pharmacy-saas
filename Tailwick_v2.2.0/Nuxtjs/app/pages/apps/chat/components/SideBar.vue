<template>
  <div class="lg:border-e border-default-200">
    <div id="hs-offcanvas-left" class="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:static lg:end-auto lg:bottom-0 w-96 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 overflow-hidden z-60" role="dialog" tabindex="-1" aria-label="Sidebar">
      <div class="card rounded-none shadow-none relative flex flex-row h-full max-h-full overflow-hidden divide-x divide-default-200">
        <div class="card-body flex flex-col justify-between">
          <a href="">
            <img :src="logo" alt="logo" class="h-8 mx-auto" />
          </a>
          <div class="flex flex-col items-center gap-6 pt-10">
            <button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">
              <Icon icon="lucide:messages-square" class="size-5"></Icon>
            </button>
            <button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">
              <Icon icon="lucide:user-square" class="size-5"></Icon>
            </button>
            <button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">
              <Icon icon="lucide:bot" class="size-5"></Icon>
            </button>
            <button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">
              <Icon icon="lucide:user-2" class="size-5"></Icon>
            </button>
            <button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">
              <Icon icon="lucide:scroll-text" class="size-5"></Icon>
            </button>
          </div>
          <div class="flex flex-col items-center gap-4">
            <button class="btn size-9 hover:bg-primary/10 hover:text-primary transition-all">
              <Icon icon="lucide:settings" class="size-5"></Icon>
            </button>
            <div class="hs-dropdown relative">
              <button type="button" class="hs-dropdown-toggle flex justify-center items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="top-end">
                <img :src="avatar1" alt="avatar" class="rounded-md bg-pink-500/10 size-12 object-cover" />
              </button>
              <div class="hs-dropdown-menu" role="menu">
                <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" href=""> Logout </a>
                <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" href=""> Switch Account </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-80">
          <div class="card-body">
            <div class="flex justify-between">
              <div class="flex gap-3 items-center">
                <h6 class="card-title">Chats</h6>
              </div>
              <button class="size-8 btn bg-default-150">
                <Icon icon="lucide:plus" class="size-4 text-default-500 hover:text-primary"></Icon>
              </button>
            </div>
            <div class="mt-5 relative">
              <input type="email" class="ps-11 block w-full form-input form-input-sm" placeholder="Search for...." />
              <div class="absolute inset-y-0 start-0 flex items-center ps-4">
                <Icon icon="lucide:search" class="size-3.5 flex items-center text-default-500"></Icon>
              </div>
            </div>
          </div>
          <simplebar class="lg:h-[calc(100vh-310px)] h-[calc(100vh-125px)]" data-simplebar>
            <div class="px-5 mb-1">
              <p class="mb-1 text-default-500 text-sm">Recent Chats</p>
            </div>
            <a href="" class="flex gap-3 py-2 px-4 bg-default-200">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="avatar5" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"></span>
              </div>
              <div class="flex-grow">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Marie Prohaska</h6>
                <p class="text-xs truncate text-default-500">I will purchase it for support</p>
              </div>
              <small class="text-xs text-default-500">2min ago</small>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="user1" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-danger"></span>
              </div>
              <div class="flex-grow">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Kara Miller</h6>
                <p class="text-xs truncate text-default-500">Hey, how's it going?</p>
              </div>
              <small class="text-xs text-default-500">02:57 PM</small>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="avatar1" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"></span>
              </div>
              <div class="flex-grow">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Mark Walton</h6>
                <p class="text-xs truncate text-default-500">Hey, how's it going?</p>
              </div>
              <small class="text-xs text-default-500">Yesterday</small>
            </a>
            <div class="px-5 pt-2">
              <p class="mb-1 text-default-500 text-sm">All Conversion</p>
            </div>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="user2" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-500"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Aurore Maggio</h6>
                <p class="text-xs truncate text-default-500">React Developer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                LP
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Mark Walton</h6>
                <p class="text-xs truncate text-default-500">UI / UX Designer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="avatar5" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-danger"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Daniel Miller</h6>
                <p class="text-xs truncate text-default-500">ASP.Net Developer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="user3" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Jaqueline Hammes</h6>
                <p class="text-xs truncate text-default-500">Angular Developer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="avatar8" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Andrea Pesina</h6>
                <p class="text-xs truncate text-default-500">Laravel Developer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="avatar10" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Bernard Pereira</h6>
                <p class="text-xs truncate text-default-500">Web Designer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="user4" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-950"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">William Jones</h6>
                <p class="text-xs truncate text-default-500">Project Manager</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                <img :src="user2" alt="" class="rounded-full w-9 h-9" />
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-default-500"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Aurore Maggio</h6>
                <p class="text-xs truncate text-default-500">React Developer</p>
              </div>
            </a>
            <a href="" class="flex gap-3 py-2 px-4 hover:bg-default-150">
              <div class="relative flex items-center justify-center font-semibold rounded-full size-9 bg-default-200">
                LP
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-default-50 rounded-full bg-green-500"></span>
              </div>
              <div class="">
                <h6 class="mb-1 text-default-800 font-semibold text-sm">Mark Walton</h6>
                <p class="text-xs truncate text-default-500">UI / UX Designer</p>
              </div>
            </a>
          </simplebar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import logo from '~/assets/images/logo-sm.png'
import user1 from '~/assets/images/user/user-1.jpg'
import user2 from '~/assets/images/user/user-2.jpg'
import user3 from '~/assets/images/user/user-3.jpg'
import user4 from '~/assets/images/user/user-4.jpg'
import avatar10 from '~/assets/images/user/avatar-10.png'
import avatar8 from '~/assets/images/user/avatar-8.png'
import avatar1 from '~/assets/images/user/avatar-1.png'
import avatar5 from '~/assets/images/user/avatar-5.png'
</script>
