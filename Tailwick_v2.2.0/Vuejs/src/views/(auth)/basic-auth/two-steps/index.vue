<template>
  <Auth>
    <div class="mt-8">
      <h4 class="mb-4 text-primary text-xl font-semibold">Verify Email</h4>
      <p class="text-base/normal mb-8 text-default-500">Please enter the 4 digit code sent to tailwick@themesdesign.in</p>
    </div>
    <form action="/" class="mt-">
      <div class="grid grid-cols-4 gap-2">
        <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
        <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
        <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
        <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
      </div>
      <div class="mt-6">
        <button type="submit" class="btn text-white bg-primary w-full">Confirm</button>
      </div>
    </form>
  </Auth>
</template>

<script setup lang="ts">
import Auth from '@/layouts/auth.vue'
</script>
