<template>
  <div class="col-span-1">
    <div class="mb-5">
      <label for="deliveryStatusSelect" class="inline-block card-title">Select Employee</label>
      <select id="typeSelect" name="typeSelect" class="form-input">
        <option value="">Select Employee</option>
        <option value="Willie Torres">Willie Torres</option>
        <option value="Patricia Garcia">Patricia Garcia</option>
        <option value="Juliette Fecteau">Juliette Fecteau</option>
        <option value="Thomas Hatfield">Thomas Hatfield</option>
        <option value="Juliette Fecteau">Juliette Fecteau</option>
        <option value="Nancy Reynolds">Nancy Reynolds</option>
        <option value="Holly Kavanaugh">Holly Kavanaugh</option>
        <option value="Jonas Frederiksen">Jonas Frederiksen</option>
      </select>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="text-center">
          <div class="mx-auto rounded-full size-20 bg-default-100">
            <img :src="user3" alt="" class="h-20 rounded-full" />
          </div>
          <h6 class="mt-3 mb-1 text-base text-heading font-semibold"><a href="#">Willie Torres</a></h6>
          <p class="text-default-500">Product Designer</p>
        </div>
        <div class="mt-5 overflow-x-auto">
          <table class="w-full mb-0">
            <tbody>
              <tr>
                <td class="py-2.5 text-default-500">Employee ID</td>
                <td class="py-2.5 font-semibold">#TWE1001501</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Experience</td>
                <td class="py-2.5 font-semibold">3 Year</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Joining Date</td>
                <td class="py-2.5 font-semibold">05 Feb, 2020</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Total Hours (Years)</td>
                <td class="py-2.5 font-semibold">953.8 Hrs</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Total Hours</td>
                <td class="py-2.5 font-semibold">218.4 Hrs</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Regular Hours</td>
                <td class="py-2.5 font-semibold">172 Hrs</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Overtime</td>
                <td class="py-2.5 font-semibold">24 Hrs</td>
              </tr>
              <tr>
                <td class="py-2.5 text-default-500">Holiday</td>
                <td class="py-2.5 font-semibold">22.40 Hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import user3 from '~/assets/images/user/user-3.jpg'
</script>
