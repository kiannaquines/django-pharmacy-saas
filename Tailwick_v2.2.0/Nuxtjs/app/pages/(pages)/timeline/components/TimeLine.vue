<template>
  <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-5">
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Circle Timeline</h6>
        <div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Invitation Sent</h6>
            <p class="mb-2 text-default-400">No candidate reply</p>
            <p class="text-sm text-default-400">02 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Sent to reminder to candidate</h6>
            <p class="mb-2 text-default-500">Preview message sent</p>
            <p class="text-sm text-default-500">15 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Scheduled</h6>
          </div>
          <div class="relative px-6 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5">
            <h6 class="mb-4 text-base font-semibold">Interview Done</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Square Timeline</h6>
        <div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Invitation Sent</h6>
            <p class="mb-2 text-default-400">No candidate reply</p>
            <p class="text-sm text-default-400">02 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Sent to reminder to candidate</h6>
            <p class="mb-2 text-default-500">Preview message sent</p>
            <p class="text-sm text-default-500">15 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Scheduled</h6>
          </div>
          <div class="relative px-6 after:absolute after:size-2 after:bg-primary after:start-0 after:end-0 after:top-1.5">
            <h6 class="mb-4 text-base font-semibold">Interview Done</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Progress Timeline</h6>
        <div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:end-0.75 before:border-primary before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Invitation Sent</h6>
            <p class="mb-2 text-default-500">No candidate reply</p>
            <p class="text-sm text-default-500">02 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:end-0.75 before:border-primary before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Sent to reminder to candidate</h6>
            <p class="mb-2 text-default-500">Preview message sent</p>
            <p class="text-sm text-default-500">15 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-primary after:rounded-full after:start-0 after:end-0 after:top-1.5 pb-4">
            <h6 class="mb-4 text-base font-semibold">Scheduled</h6>
          </div>
          <div class="relative px-6 after:absolute after:size-2 after:bg-card after:border after:border-default-200 after:rounded-full after:start-0 after:end-0 after:top-1.5">
            <h6 class="mb-4 text-base font-semibold">Interview Done</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 card-title">Outline Timeline</h6>
        <div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-card after:border after:rounded-full after:start-0 after:end-0 after:top-1.5 after:border-default-200 pb-4">
            <h6 class="mb-4 text-base font-semibold">Invitation Sent</h6>
            <p class="mb-2 text-default-500">No candidate reply</p>
            <p class="text-sm text-default-500">02 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-card after:border after:rounded-full after:start-0 after:end-0 after:top-1.5 after:border-default-200 pb-4">
            <h6 class="mb-4 text-base font-semibold">Sent to reminder to candidate</h6>
            <p class="mb-2 text-default-500">Preview message sent</p>
            <p class="text-sm text-default-500">15 Aug, 2023</p>
          </div>
          <div class="relative px-6 before:absolute before:border-s before:start-0.75 before:border-default-200 before:end-0.75 before:top-1.5 before:-bottom-1.5 after:absolute after:size-2 after:bg-card after:border after:rounded-full after:start-0 after:end-0 after:top-1.5 after:border-default-200 pb-4">
            <h6 class="mb-4 text-base font-semibold">Scheduled</h6>
          </div>
          <div class="relative px-6 after:absolute after:size-2 after:bg-card after:border-default-200 after:border after:rounded-full after:start-0 after:end-0 after:top-1.5">
            <h6 class="mb-4 text-base font-semibold">Interview Done</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
