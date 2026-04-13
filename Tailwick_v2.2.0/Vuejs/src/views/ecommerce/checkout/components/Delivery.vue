<template>
  <div class="p-5 card mb-5">
    <h6 class="card-title mb-4">Delivery</h6>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div class="flex gap-2.5 items-center">
        <input type="radio" class="peer form-radio" id="radio_1" name="level" checked value="1" />
        <label class="flex lg:flex-nowrap flex-wrap justify-between border border-default-200 w-full peer-checked:border-primary rounded-md p-5 gap-4" for="radio_1">
          <div class="flex gap-4">
            <img :src="delivery1" alt="" class="h-12" width="48" />
            <span class="grow">
              <span class="block mb-1 font-semibold text-default-800 text-[15px]">Express Delivery</span>
              <span class="text-default-500 text-sm">Expected delivery: 01 Nov, Wednesday</span>
            </span>
          </div>
          <span class="text-lg text-default-800 font-semibold">$11.99 </span>
        </label>
      </div>
      <div class="flex items-center gap-2.5">
        <input type="radio" class="peer form-radio" id="radio_2" name="level" value="2" />
        <label class="flex flex-wrap justify-between border border-default-200 w-full peer-checked:border-primary rounded-md p-5 gap-4" for="radio_2">
          <div class="flex gap-4">
            <img :src="delivery2" alt="" class="h-12" width="48" />
            <span class="grow">
              <span class="block mb-1 font-semibold text-[15px] text-default-800">Air Logistic Delivery</span>
              <span class="text-default-500 text-sm">Expected delivery: 06 Nov, Monday</span>
            </span>
          </div>
          <span class="text-lg text-default-800 font-semibold">$5</span>
        </label>
      </div>
      <div class="flex gap-2.5 items-center">
        <input type="radio" class="peer form-radio" id="radio_3" name="level" value="3" />
        <label class="flex flex-wrap justify-between border border-default-200 w-full peer-checked:border-primary rounded-md p-5 gap-4" for="radio_3">
          <div class="flex gap-4">
            <img :src="delivery3" alt="" class="h-12" width="48" />
            <span class="grow">
              <span class="block mb-1 font-semibold text-default-800 text-[15px]">Free Delivery</span>
              <span class="text-default-500 text-sm">Expected delivery: 11 Nov, Saturday</span>
            </span>
          </div>
          <span class="text-lg text-default-800 font-semibold">$0 </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import delivery1 from '@/assets/images/brand/delivery-1.png'
import delivery2 from '@/assets/images/brand/delivery-2.png'
import delivery3 from '@/assets/images/brand/delivery-3.png'
</script>
