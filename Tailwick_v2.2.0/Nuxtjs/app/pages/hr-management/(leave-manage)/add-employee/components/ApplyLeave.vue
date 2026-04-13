<template>
  <div class="lg:col-span-3 col-span-1">
    <div class="card">
      <div class="card-header">
        <h6 class="card-title">Apply Leave</h6>
      </div>
      <div class="card-body">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
          <div>
            <label for="employeeName" class="inline-block mb-2 text-sm text-default-800 font-medium">Leave Type</label>
            <select class="form-input" style="padding: 0 12px">
              <option value="">Select Leave Type</option>
              <option value="Medical Leave">Medical Leave</option>
              <option value="Casual Leave">Casual Leave</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Annual Leave">Annual Leave</option>
            </select>
          </div>
          <div>
            <label for="remainingLeaves" class="inline-block mb-2 text-sm text-default-800 font-medium">Remaining Leaves</label>
            <input type="text" id="remainingLeaves" class="form-input" value="18" disabled style="padding: 0 12px" />
          </div>
          <div>
            <label for="fromInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Form</label>
            <input ref="fromRef" type="text" id="fromInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" style="padding: 0 12px" />
          </div>
          <div>
            <label for="toInput" class="inline-block mb-2 text-sm text-default-800 font-medium">To</label>
            <input ref="toRef" type="text" id="toInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" style="padding: 0 12px" />
          </div>
          <div>
            <label for="numberOfDayLeaves" class="inline-block mb-2 text-sm text-default-800 font-medium">Number of Days</label>
            <input type="text" id="numberOfDayLeaves" class="form-input" value="01" disabled style="padding: 0 12px" />
          </div>
          <div>
            <label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">Leave Day</label>
            <select class="form-input" style="padding: 0 12px">
              <option value="">Select Leave Day</option>
              <option value="Full Day">Full Day</option>
              <option value="Half Day">Half Day</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-5">
          <div>
            <label for="reasonInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Reason</label>
            <textarea class="form-input" id="reasonInput" rows="3"></textarea>
          </div>
        </div>
        <div class="flex justify-end gap-2 mt-5">
          <button class="btn border-0 text-danger bg-transparent hover:bg-danger/10">Reset</button>
          <button class="text-white btn bg-primary">Apply Leave</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFlatpickr } from '~/composables/useFlatpickr'

const { inputRef: fromRef } = useFlatpickr({
  dateFormat: 'd M, Y'
})

const { inputRef: toRef } = useFlatpickr({
  dateFormat: 'd M, Y'
})
</script>
