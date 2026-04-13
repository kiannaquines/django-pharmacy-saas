<template>
  <div class="topbar-item hs-dropdown relative inline-flex">
    <button class="cursor-pointer bg-pink-100 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      <img :src="avatar1" alt="user-image" class="hs-dropdown-toggle rounded-full size-9.5" />
    </button>
    <div class="hs-dropdown-menu min-w-48" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons">
      <div class="p-2">
        <h6 class="mb-2 text-default-500">Welcome to Tailwick</h6>
        <a href="#!" class="flex gap-3">
          <div class="relative inline-block">
            <div class="rounded bg-default-200">
              <img :src="avatar1" alt="" class="size-12 rounded" />
            </div>
            <span class="-top-1 -end-1 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <h6 class="mb-1 text-sm font-semibold text-default-800">Paula Keenan</h6>
            <p class="text-default-500">CEO & Founder</p>
          </div>
        </a>
      </div>
      <div class="border-t border-t-default-200 -mx-2 my-2"></div>
      <div class="flex flex-col gap-y-1">
        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/apps/email">
          <Icon icon="lucide:mail" class="size-4"></Icon>
          Inbox
          <span class="size-4.5 font-semibold bg-danger rounded text-white flex items-center justify-center text-xs">15</span>
        </a>
        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/apps/chat">
          <Icon icon="lucide:messages-square" class="size-4"></Icon>
          Chat
        </a>
        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/pricing">
          <Icon icon="lucide:gem" class="size-4"></Icon>
          Upgrade Pro
        </a>
        <div class="border-t border-default-200 -mx-2 my-1"></div>
        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/basic-auth/logout">
          <Icon icon="lucide:log-out" class="size-4"></Icon>
          Sign Out
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import avatar1 from '~/assets/images/user/avatar-1.png'
</script>
