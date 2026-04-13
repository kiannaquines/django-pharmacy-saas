<template>
  <div class="card mb-5">
    <div class="card-body">
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div class="col-span-1">
          <h5 class="mb-1 text-lg text-default-800 font-semibold">$78,564.00 <small class="font-normal text-default-500">/ year</small></h5>
          <p class="text-default-500 text-sm">Average Base Salary (USD)</p>
          <div class="mt-6 mb-4">
            <div class="flex w-full h-10 rounded-md bg-default-2 text-sm">
              <div class="flex items-center justify-center h-10 text-white bg-primary rounded-tl-md rounded-bl-md" style="width: 20%">20%</div>
              <div class="flex items-center justify-center h-10 text-white bg-success" style="width: 15%">15%</div>
              <div class="flex items-center justify-center h-10 text-white bg-secondary" style="width: 35%">35%</div>
              <div class="flex items-center justify-center h-10 text-white bg-danger rounded-tr-md rounded-br-md" style="width: 30%">30%</div>
            </div>
          </div>
          <p class="text-sm">The average salary for all employees is $78,564.</p>
        </div>
        <div class="col-span-1">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <tbody>
                <tr>
                  <td class="px-3.5 py-2 text-default-800">Base Salary</td>
                  <td class="px-3.5 py-2 text-default-800 font-semibold">$45,932</td>
                </tr>
                <tr>
                  <td class="px-3.5 py-2 text-default-800">Bonus</td>
                  <td class="px-3.5 py-2 text-default-800 font-semibold">$16,000</td>
                </tr>
                <tr>
                  <td class="px-3.5 py-2 text-default-800">Profit Sharing</td>
                  <td class="px-3.5 py-2 text-default-800 font-semibold">$2.5k to 4.5k</td>
                </tr>
                <tr>
                  <td class="px-3.5 py-2 text-default-800">Total Pay</td>
                  <td class="px-3.5 py-2 text-default-800 font-semibold">$78,564.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
