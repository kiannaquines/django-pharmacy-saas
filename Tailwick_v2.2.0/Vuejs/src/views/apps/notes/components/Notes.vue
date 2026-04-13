<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
    <div class="card" v-for="(item, idx) in cards" :key="idx">
      <div class="card-body">
        <div class="flex flex-col justify-between h-full">
          <div class="mb-5 flex justify-between items-center gap-2">
            <div class="flex gap-2 items-center">
              <div class="hs-dropdown relative inline-flex">
                <button type="button" :class="item.buttonBg" class="hs-dropdown-toggle size-4 border border-dashed rounded-full dropdown-toggle shrink-0" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown"></button>
                <div class="hs-dropdown-menu" role="menu">
                  <div>
                    <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" to=""> Personal </RouterLink>
                    <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" to=""> Busssiness </RouterLink>
                    <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" to=""> Social </RouterLink>
                    <RouterLink class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-sm text-default-600 hover:bg-default-150 rounded" to=""> Home </RouterLink>
                  </div>
                </div>
              </div>
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
            <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
              <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                <Icon icon="lucide:ellipsis" class="iconify size-4"></Icon>
              </button>
              <div class="hs-dropdown-menu" role="menu">
                <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                  <Icon icon="lucide:eye" class="size-3"></Icon>
                  Overview
                </RouterLink>
                <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                  <Icon icon="lucide:edit" class="size-3"></Icon>
                  Edit
                </RouterLink>
                <RouterLink class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" to="">
                  <Icon icon="lucide:trash-2" class="size-3"></Icon>
                  Delete
                </RouterLink>
              </div>
            </div>
          </div>
          <p class="text-default-700 text-sm" v-html="item.description"></p>
          <div v-if="item.date" class="mt-4 flex justify-between gap-3 items-center">
            <Icon icon="lucide:star" :class="item.class" class="size-5"></Icon>
            <p class="text-default-500 text-sm">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

type CardType = {
  buttonBg: string
  title: string
  description: string
  date?: string
  class: string
}

const cards: CardType[] = [
  {
    buttonBg: 'bg-primary/15 border-primary',
    title: 'Show Then Our Research',
    description: 'You should identify and anticipate any ethical issues or dilemmas that may arise during or after your research, and how you will resolve them.You should identify and anticipate any ethical issues or dilemmas that may arise during...',
    date: '16 May, 2023',
    class: 'text-warning fill-warning/20'
  },
  {
    buttonBg: 'bg-danger/15 border-danger',
    title: 'New People Hiring',
    description: `Steps to recruiting employees
      <ol class="flex flex-col text-default-600 gap-1 text-sm mt-1">
        <li>Consider your actual needs</li>
        <li>Conduct interviews with top applicants</li>
        <li>Don’t take too long to hire</li>
        <li>Making the offer</li>
      </ol>`,
    date: '24 Mar,2023',
    class: 'text-default-500 fill-default-200'
  },
  {
    buttonBg: 'bg-secondary/10 border-secondary',
    title: 'Design Tools',
    description: 'Visual design tools are, for example, gesture, sketch, drawing, scale model, perspective drawing, photograph, film, video. These include flowcharts, pseudocode, and Nassi-Shneiderman diagrams.',
    date: '29 Feb, 2023',
    class: 'text-warning fill-warning/20'
  },
  {
    buttonBg: 'bg-success/10 border-success',
    title: 'Create Chat Apps',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    class: 'text-default-500 fill-default-200',
    date: '01 Jan, 2023'
  },
  {
    buttonBg: 'bg-primary/15 border-primary',
    title: 'Show Then Our Research',
    description: 'You should identify and anticipate any ethical issues or dilemmas that may arise during or after your research, and how you will resolve them. You should also consider the impact and consequences of your research on different stakeholders.',
    class: 'text-warning fill-warning/20',
    date: '16 May, 2023'
  },
  {
    buttonBg: 'bg-danger/15 border-danger',
    title: 'New People Hiring',
    description: `Steps to recruiting employees
      <ol class="flex flex-col text-default-600 gap-1 text-sm mt-1">
        <li>Consider your actual needs</li>
        <li>Conduct interviews with top applicants</li>
        <li>Don’t take too long to hire</li>
        <li>Making the offer</li>
      </ol>`,
    class: 'text-default-500 fill-default-200',
    date: '24 Mar, 2023'
  },
  {
    buttonBg: 'bg-primary/10 border-primary',
    title: 'Boarding is Important Thing',
    description: 'Living away from home and residing on campus in a dorm setting provides invaluable opportunities for personal growth. Boarding school students tend to develop life Business such as time management, work ethic',
    class: 'text-default-500 fill-default-200',
    date: '29 Mar, 2023'
  },
  {
    buttonBg: 'bg-secondary/10 border-secondary',
    title: 'Company Improvements',
    description: "Improving a business's performance requires a strategic and holistic approach that focuses on key areas such as setting and tracking KPIs, improving operational efficiency.",
    date: '09 Jun, 2023',
    class: 'text-warning fill-warning/20'
  }
]
</script>
