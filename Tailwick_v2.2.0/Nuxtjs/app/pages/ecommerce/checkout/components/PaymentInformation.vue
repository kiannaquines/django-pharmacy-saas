<template>
  <div class="card p-5 mb-5">
    <h6 class="card-title mb-4">Payment Information</h6>

    <div class="mb-5">
      <label for="cardNumberInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Card Number</label>
      <input type="text" pattern="\d*" maxlength="16" id="cardNumberInput" class="form-input" placeholder="XXXX XXXX XXXX XXXX" style="border: 1px solid oklch(92% 0.004 286.32)" />
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div class="col-span-1">
        <label for="expiringInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Expiring (MM/YY)</label>
        <input type="text" pattern="\d*" maxlength="4" id="expiringInput" class="form-input" placeholder="MM/YY" style="border: 1px solid oklch(92% 0.004 286.32)" />
      </div>

      <div class="col-span-1">
        <label for="cvvInput" class="inline-block mb-2 text-sm text-default-800 font-medium">CVV Code</label>
        <input type="text" pattern="\d*" maxlength="3" id="cvvInput" class="form-input" placeholder="000" style="border: 1px solid oklch(92% 0.004 286.32)" />
      </div>
    </div>

    <div class="mt-3">
      <h6 class="inline-block mb-2 text-sm text-default-800 font-medium">We accept the following cards</h6>
      <div class="flex items-center gap-2">
        <img :src="img01" alt="" class="h-8" />
        <img :src="img02" alt="" class="h-8" />
        <img :src="img03" alt="" class="h-8" />
        <img :src="img04" alt="" class="h-8" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import img01 from '~/assets/images/payment/img-01.png'
import img02 from '~/assets/images/payment/img-02.png'
import img03 from '~/assets/images/payment/img-03.png'
import img04 from '~/assets/images/payment/img-04.png'
</script>
