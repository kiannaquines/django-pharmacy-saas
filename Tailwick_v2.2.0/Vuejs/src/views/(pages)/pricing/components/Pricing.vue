<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-6">
    <div v-for="plan in plans" :key="plan.id" class="card relative overflow-hidden">
      <div class="card-body">
        <div v-if="plan.badge" class="size-16 absolute top-0 end-0">
          <div class="absolute bg-primary text-center w-42.5 text-white py-1 transform rotate-45 top-6 -end-12 font-semibold">
            {{ plan.badge }}
          </div>
        </div>
        <h5 class="mb-2 flex items-center gap-1.5">
          <Icon :icon="plan.icon" :class="`${plan.color} size-5`"></Icon>
          <span class="text-lg font-semibold text-default-800">
            {{ plan.title }}
          </span>
        </h5>
        <p class="mb-4 text-default-500">{{ plan.description }}</p>
        <h1 class="mb-4 text-4xl text-default-800 font-normal">
          <span class="text-default-400">$</span>{{ plan.price }}
          <small class="text-base text-default-500">/Monthly</small>
        </h1>
        <button type="button" class="btn border w-full border-dashed border-primary bg-transparent text-primary hover:bg-primary/20">Purchase Now</button>
        <ul class="mt-5 flex flex-col gap-3 text-sm">
          <li v-for="(feature, idx) in plan.features" :key="idx" class="flex items-center gap-2.5">
            <Icon :icon="feature.included ? 'lucide:check-check' : 'lucide:x'" :class="feature.included ? 'size-4 text-success' : 'size-4 text-danger'" />
            <span v-if="feature.included" class="text-default-900" v-html="feature.label"></span>
            <del v-else class="text-default-500" v-html="feature.label"></del>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

type Feature = {
  label: string
  included: boolean
}

type Plan = {
  id: number
  title: string
  description: string
  price: string
  icon: string
  color: string
  badge?: string
  features: Feature[]
}

const plans: Plan[] = [
  {
    id: 1,
    title: 'Lite',
    description: 'Perfect plan for Lite',
    price: '9.99',
    icon: 'lucide:goal',
    color: 'text-success',
    features: [
      { label: '<b>3</b> Projects', included: true },
      { label: '<b>299</b> Customers', included: true },
      { label: 'Scalable Bandwidth', included: true },
      { label: '<b>0</b> No Team Account', included: true },
      { label: 'In app messaging', included: false },
      { label: '5 FTP Login', included: false },
      { label: 'Detailed Analytics', included: false },
      { label: 'Custom Domain', included: false },
      { label: 'Smart Workflow', included: false },
      { label: 'IQ test', included: false }
    ]
  },
  {
    id: 2,
    title: 'Professional',
    description: 'For users who want to do more.',
    price: '29.99',
    icon: 'lucide:graduation-cap',
    color: 'text-secondary',
    features: [
      { label: '<b>3</b> Projects', included: true },
      { label: '<b>299</b> Customers', included: true },
      { label: 'Scalable Bandwidth', included: true },
      { label: '<b>3</b> No Team Account', included: true },
      { label: 'In app messaging', included: true },
      { label: '5 FTP Login', included: false },
      { label: 'Detailed Analytics', included: false },
      { label: 'Custom Domain', included: false },
      { label: 'Smart Workflow', included: false },
      { label: 'IQ test', included: false }
    ]
  },
  {
    id: 3,
    title: 'Enterprise',
    description: 'Run your company on your teams',
    price: '39.99',
    icon: 'lucide:crown',
    color: 'text-primary',
    badge: '25% Sale',
    features: [
      { label: '<b>3</b> Projects', included: true },
      { label: '<b>299</b> Customers', included: true },
      { label: 'Scalable Bandwidth', included: true },
      { label: '<b>3</b> No Team Account', included: true },
      { label: 'In app messaging', included: true },
      { label: '5 FTP Login', included: true },
      { label: 'Detailed Analytics', included: true },
      { label: 'Custom Domain', included: false },
      { label: 'Smart Workflow', included: false },
      { label: 'IQ test', included: false }
    ]
  },
  {
    id: 4,
    title: 'Unlimited',
    description: 'Your entire team in one place',
    price: '49.99',
    icon: 'lucide:luggage',
    color: 'text-danger',
    features: [
      { label: '<b>3</b> Projects', included: true },
      { label: '<b>299</b> Customers', included: true },
      { label: 'Scalable Bandwidth', included: true },
      { label: '<b>3</b> No Team Account', included: true },
      { label: 'In app messaging', included: true },
      { label: '5 FTP Login', included: true },
      { label: 'Detailed Analytics', included: true },
      { label: 'Custom Domain', included: true },
      { label: 'Smart Workflow', included: true },
      { label: 'IQ test', included: true }
    ]
  }
]
</script>
