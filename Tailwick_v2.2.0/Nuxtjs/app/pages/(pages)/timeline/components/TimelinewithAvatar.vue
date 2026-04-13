<template>
  <h5 class="mb-5 text-heading font-semibold underline text-lg"></h5>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mb-5">
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Timeline with Avatar</h6>
        <div>
          <div class="relative" :class="idx !== avatarTimeline.length - 1 ? 'before:absolute before:border-s-2 before:border-default-200 before:start-3.5 before:end-3.5 before:top-1.5 before:-bottom-1.5 pb-4' : ''" v-for="(item, idx) in avatarTimeline" :key="idx">
            <div class="relative flex gap-2">
              <img :src="item.avatar" alt="" class="size-8 p-0.5 bg-card border rounded-full shrink-0 border-default-200" />
              <div>
                <h6 class="mb-1 text-sm text-heading font-semibold">{{ item.title }}</h6>
                <p class="mb-2 text-default-500">{{ item.description }}</p>
                <p class="text-sm text-default-500">{{ item.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Timeline with Avatar</h6>
        <div>
          <div class="relative" :class="idx !== avatarTimeline.length - 1 ? 'before:absolute before:border-s-2 before:border-default-200 before:start-3.5 before:end-3.5 before:top-1.5 before:-bottom-1.5 pb-4' : ''" v-for="(item, idx) in iconTimeline" :key="idx">
            <div class="relative flex gap-2">
              <div class="size-8 p-0.5 bg-card flex items-center justify-center border rounded-full shrink-0 border-default-200" :class="item.color">
                <Icon :icon="item.icon" class="size-4" :class="item.color"></Icon>
              </div>
              <div>
                <h6 class="mb-1 text-sm text-heading font-semibold">{{ item.title }}</h6>
                <p class="mb-2 text-default-500">{{ item.description }}</p>
                <p class="text-sm text-default-500">{{ item.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import avatar1 from '~/assets/images/user/avatar-1.png'
import avatar2 from '~/assets/images/user/avatar-2.png'
import avatar3 from '~/assets/images/user/avatar-3.png'

type TimelineAvatarItem = {
  id: string
  avatar: string
  title: string
  description: string
  date: string
}

type TimelineIconItem = {
  id: string
  icon: string
  color: string
  title: string
  description: string
  date: string
}

const avatarTimeline: TimelineAvatarItem[] = [
  {
    id: 'a1',
    avatar: avatar1,
    title: 'Purchased by James Price',
    description: 'Product noise evolve smartwatch',
    date: '05:57 AM Today'
  },
  {
    id: 'a2',
    avatar: avatar2,
    title: 'Natasha Carey have liked the products',
    description: 'Allow users to like products in your WooCommerce store.',
    date: '25 Dec, 2023'
  },
  {
    id: 'a3',
    avatar: avatar3,
    title: 'Today offers by Digitech Galaxy',
    description: 'Offer is valid on orders of $230 Or above for selected products only.',
    date: '12 Dec, 2023'
  },
  {
    id: 'a4',
    avatar: avatar3,
    title: 'New ticket received',
    description: 'User Erica245 submitted a ticket',
    date: '26 Dec, 2023'
  }
]

const iconTimeline: TimelineIconItem[] = [
  {
    id: 'i1',
    icon: 'lucide:bar-chart-horizontal-big',
    color: 'text-primary',
    title: 'Purchased by James Price',
    description: 'Product noise evolve smartwatch',
    date: '05:57 AM Today'
  },
  {
    id: 'i2',
    icon: 'lucide:store',
    color: 'text-danger',
    title: 'Natasha Carey have liked the products',
    description: 'Allow users to like products in your WooCommerce store.',
    date: '25 Dec, 2023'
  },
  {
    id: 'i3',
    icon: 'lucide:shopping-cart',
    color: 'text-green-500',
    title: 'Today offers by Digitech Galaxy',
    description: 'Offer is valid on orders of $230 Or above for selected products only.',
    date: '12 Dec, 2023'
  },
  {
    id: 'i4',
    icon: 'lucide:percent',
    color: 'text-purple-500',
    title: 'New ticket received',
    description: 'User Erica245 submitted a ticket',
    date: '26 Dec, 2023'
  }
]
</script>
