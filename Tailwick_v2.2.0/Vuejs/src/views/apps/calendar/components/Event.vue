<template>
  <div class="col-span-1">
    <div class="card">
      <div class="card-body">
        <h6 class="mb-4 text-15">Draggable Events</h6>
        <div id="external-events" class="flex flex-col gap-3">
          <p class="text-default-400">Drag and drop your event or click in the calendar</p>

          <div class="external-event fc-event text-success" data-class="!text-success"><Icon icon="tabler:circle-filled" class="iconify me-2"></Icon>New Event Planning</div>

          <div class="external-event fc-event text-info" data-class="!text-info"><Icon icon="tabler:circle-filled" class="iconify me-2"></Icon>Meeting</div>

          <div class="external-event fc-event text-warning" data-class="!text-warning"><Icon icon="tabler:circle-filled" class="iconify me-2"></Icon>Generating Reports</div>

          <div class="external-event fc-event text-danger" data-class="!text-danger"><Icon icon="tabler:circle-filled" class="iconify me-2"></Icon>Create New theme</div>

          <div class="flex items-center gap-2">
            <input id="drop-remove" class="form-checkbox" type="checkbox" />
            <label for="drop-remove" class="align-middle cursor-pointer">Remove after drop</label>
          </div>
          <div class="flex items-center gap-2">
            <input id="businessCalendar" class="form-checkbox" type="checkbox" />
            <label for="businessCalendar" class="align-middle cursor-pointer">Business Hours & Week</label>
          </div>
          <div class="flex items-center gap-2">
            <input id="weekNumberCalendar" class="form-checkbox" type="checkbox" />
            <label for="weekNumberCalendar" class="align-middle cursor-pointer">Week Number</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
