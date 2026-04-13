<template>
  <div class="grid lg:grid-cols-4 grid-cols-1 mb-5 gap-5">
    <div class="lg:col-span-2">
      <h5 class="mb-2 text-xl text-default-800 font-semibold">Welcome Paula Keenan 🎉</h5>
      <p>
        The salary of
        <RouterLink to="" class="underline text-default-900">Glennie Langosh</RouterLink>is pending since 05 Dec, 2023. the documentation of the tasks, workflows, and activities that make up a process managed by the HR or People Ops team.
        <RouterLink to="" class="text-danger">Learn More</RouterLink>
      </p>
    </div>

    <div class="lg:col-start-4">
      <div class="card">
        <div class="card-body">
          <div class="grid grid-cols-3">
            <div class="px-4 text-center border-e border-default-200 text-sm">
              <h6 class="mb-1 font-bold">
                <span class="counter-value text-default-800" data-target="36">36</span>
              </h6>
              <p class="text-default-500">Absent</p>
            </div>

            <div class="px-4 text-center border-e border-default-200 text-sm">
              <h6 class="mb-1 font-bold">
                <span class="counter-value text-default-800" data-target="465">465</span>
              </h6>
              <p class="text-default-500">Attendance</p>
            </div>

            <div class="px-4 text-center text-sm">
              <h6 class="mb-1 font-bold">
                <span class="counter-value text-default-800" data-target="50">50</span>
              </h6>
              <p class="text-default-500">Late</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
