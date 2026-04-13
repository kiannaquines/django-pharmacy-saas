<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title">Status of Monthly Campaign</h6>
    </div>
    <div class="card-body">
      <ul class="flex flex-col gap-5">
        <li class="flex items-center gap-3 text-sm">
          <div class="bg-danger/10 btn size-8">
            <Icon icon="lucide:mail" class="text-danger size-4"></Icon>
          </div>
          <h6 class="grow text-default-900">Clicked</h6>
          <p>9,745</p>
          <div class="w-12 text-success text-end">2.5%</div>
        </li>
        <li class="flex items-center gap-3 text-sm">
          <div class="bg-secondary/10 btn size-8">
            <Icon icon="lucide:users" class="text-secondary size-4"></Icon>
          </div>
          <h6 class="grow text-default-900">Subscribe</h6>
          <p>3,352</p>
          <div class="w-12 text-success text-end">18.9%</div>
        </li>
        <li class="flex items-center gap-3 text-sm">
          <div class="bg-orange-500/10 btn size-8">
            <Icon icon="lucide:user-x-2" class="text-orange-500 size-4"></Icon>
          </div>
          <h6 class="grow text-default-900">Unsubscribe</h6>
          <p>85,745</p>
          <div class="w-12 text-danger text-end">1.2%</div>
        </li>
        <li class="flex items-center gap-3 text-sm">
          <div class="bg-success/10 btn size-8">
            <Icon icon="lucide:eye" class="text-success size-4"></Icon>
          </div>
          <h6 class="grow text-default-900">Viewers</h6>
          <p>85,745</p>
          <div class="w-12 text-success text-end">11.6%</div>
        </li>
        <li class="flex items-center gap-3 text-sm">
          <div class="bg-default-950/10 btn size-8">
            <Icon icon="lucide:package-open" class="size-4"></Icon>
          </div>
          <h6 class="grow text-default-900">Opened</h6>
          <p>85,745</p>
          <div class="w-12 text-danger text-end">3.1%</div>
        </li>
        <li class="flex items-center gap-3 text-sm">
          <div class="bg-info/10 btn size-8">
            <Icon icon="lucide:user-x-2" class="text-info size-4"></Icon>
          </div>
          <h6 class="grow text-default-900">Trial Period</h6>
          <p>70,775</p>
          <div class="w-12 text-danger text-end">22%</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
