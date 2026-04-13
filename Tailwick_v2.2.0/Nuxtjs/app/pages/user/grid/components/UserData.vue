<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mb-5">
    <div class="card" v-for="(item, idx) in users" :key="idx">
      <div class="card-body">
        <div class="relative flex items-center justify-center mx-auto text-lg rounded-full size-16 bg-default-100">
          <img v-if="item.avatar" :src="item.avatar" alt="" class="rounded-full size-16" />
          {{ item.initials }}
          <span class="absolute bg-success border-2 border-white rounded-full size-3 end-0 bottom-1"></span>
        </div>
        <div class="mt-4 text-center text-default-500">
          <h5 class="mb-1 text-base text-default-800 font-semibold">
            <a href="/">{{ item.name }}</a>
          </h5>
          <p class="mb-3 text-sm text-default-500">@{{ item.role }}</p>
          <p class="text-sm text-default-500">{{ item.address }}</p>
        </div>
        <div class="flex gap-2 mt-5">
          <a href="/apps/chat" class="btn border-primary text-primary hover:bg-primary hover:text-white flex-grow">
            <Icon icon="lucide:messages-square" class="iconify"></Icon>
            <span class="align-middle">Send Message</span>
          </a>
          <div class="hs-dropdown relative inline-flex">
            <button type="button" class="hs-dropdown-toggle btn bg-primary size-9 text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
              <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
            </button>
            <div class="hs-dropdown-menu" role="menu">
              <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">
                <Icon icon="lucide:eye" class="size-3"></Icon>
                Overview
              </a>
              <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">
                <Icon icon="lucide:edit" class="size-3"></Icon>
                Edit
              </a>
              <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="">
                <Icon icon="lucide:trash-2" class="size-3"></Icon>
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import user1 from '~/assets/images/user/avatar-1.png'
import user2 from '~/assets/images/user/avatar-2.png'
import user3 from '~/assets/images/user/avatar-3.png'
import user4 from '~/assets/images/user/avatar-4.png'
import user5 from '~/assets/images/user/avatar-5.png'
import user6 from '~/assets/images/user/avatar-6.png'
import user7 from '~/assets/images/user/avatar-7.png'
import user8 from '~/assets/images/user/avatar-8.png'

type User = {
  id: number
  name: string
  role: string
  address: string
  avatar?: string
  initials?: string
  status: 'online' | 'offline'
}

const users: User[] = [
  {
    id: 1,
    name: 'Paula Keenan',
    role: 'Admin',
    address: '748 Luettgen Plain Suite South Winstonfort, NM',
    avatar: user1,
    status: 'online'
  },
  {
    id: 2,
    name: 'Marie Prohaska',
    role: 'Subscriber',
    address: '125 Ortiz Camp Suite 471 Rippinport, US',
    avatar: user2,
    status: 'online'
  },
  {
    id: 3,
    name: 'Jaqueline Hammes',
    role: 'Editor',
    address: '8716 Dell Manors New Ahmedmouth, WI',
    avatar: user3,
    status: 'online'
  },
  {
    id: 4,
    name: 'Angus Bergstrom',
    role: 'Developer',
    address: '617 Powlowski Crossroad Apt. 716 New Victoria',
    initials: 'AB',
    status: 'online'
  },
  {
    id: 5,
    name: 'Aurore Maggio',
    role: 'Subscriber',
    address: '8751 Boyer Courts Suite 532 West Fletcherside',
    avatar: user4,
    status: 'offline'
  },
  {
    id: 6,
    name: 'Andrea Pesina',
    role: 'Editor',
    address: '32 Maidstone Road WELLSBOROUGH',
    initials: 'AP',
    status: 'online'
  },
  {
    id: 7,
    name: 'Daniel Miller',
    role: 'Subscriber',
    address: '431 Elk Rd Little Ticonderoga, NY',
    avatar: user5,
    status: 'offline'
  },
  {
    id: 8,
    name: 'Ashley Wilson',
    role: 'Subscriber',
    address: '0816 Bradford Alley Lake Adamfort, ME',
    avatar: user6,
    status: 'online'
  },
  {
    id: 9,
    name: 'William Heineman',
    role: 'Author',
    address: '99614 Pollich Extension Apt. 938 South Alf, GA',
    avatar: user7,
    status: 'online'
  },
  {
    id: 10,
    name: 'Kara Miller',
    role: 'Subscriber',
    address: '755 Kody Plaza Apt. 138 East Reinholdberg, AR',
    avatar: user8,
    status: 'online'
  },
  {
    id: 11,
    name: 'Mark Walton',
    role: 'Author',
    address: '895 Camylle Tunnel Lake Chasity, SC',
    initials: 'MW',
    status: 'online'
  },
  {
    id: 12,
    name: 'David Biggs',
    role: 'Subscriber',
    address: '75, Deccan Gymkhana, Alwar',
    initials: 'DB',
    status: 'offline'
  }
]
</script>
