<template>
  <div class="col-span-1">
    <div class="card">
      <div class="card-body">
        <h4 class="mb-3.5 text-default-800 text-xl leading-relaxed font-semibold">Experience Our Fresh Email Composition Interface</h4>
        <p class="mb-5 text-default-500">A local-part, the symbol @, and a domain, which may be a domain name or an IP address enclosed in brackets.</p>
        <RouterLink to="/apps/email" class="mb-3 btn bg-primary text-white transition-all">Compose Email</RouterLink>
        <div class="flex justify-end">
          <img :src="email" alt="" class="-scale-x-100 h-48" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import email from '@/assets/images/email-dashboard.png'
</script>
