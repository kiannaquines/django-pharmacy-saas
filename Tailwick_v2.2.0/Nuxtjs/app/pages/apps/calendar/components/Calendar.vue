<template>
  <div class="lg:col-span-3">
    <div class="card">
      <div class="card-body">
        <div id="calendar"></div>
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </div>
  <div id="event-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="event-modal-label">
    <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
      <div class="card w-full flex flex-col border border-default-200 shadow-2xs rounded-xl pointer-events-auto">
        <div class="card-header">
          <h3 id="modal-title" class="font-semibold text-base text-default-800 dark:text-white">Add Event</h3>
          <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#event-modal">
            <span class="sr-only">Close</span>
            <Icon icon="lucide:x" class="size-5"></Icon>
          </button>
        </div>
        <form class="needs-validation" name="event-form" id="form-event" autocomplete="off">
          <div class="card-body">
            <div class="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div class="xl:col-span-12">
                <label for="event-title" class="inline-block mb-2 text-base font-medium">Event Name</label>
                <input type="text" id="event-title" class="form-input" placeholder="Event name" required />
              </div>
              <div class="xl:col-span-12">
                <label for="event-category" class="inline-block mb-2 text-base font-medium">Category</label>
                <select class="form-input flex items-center" name="event-category" id="event-category" required>
                  <option>Select Category</option>
                  <option selected value="!text-primary">Primary</option>
                  <option value="!text-success">Success</option>
                  <option value="!text-info">Info</option>
                  <option value="!text-warning">Warning</option>
                  <option value="!text-danger">Danger</option>
                </select>
              </div>
            </div>
          </div>
          <div class="card-footer flex gap-2 md:justify-end">
            <button type="reset" @click="hideEventModal" data-hs-overlay="#event-modal" class="bg-transparent text-danger btn border-0 hover:bg-red-50">Cancel</button>
            <button type="reset" id="btn-delete-event" class="bg-transparent text-danger btn border-0 hover:bg-red-50">Delete</button>
            <button type="submit" id="btn-save-event" class="btn bg-primary text-white">Add Order</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

const calendarEvents = [
  { title: 'All Day Event', start: '2025-09-01T12:00:00', classNames: ['text-warning'] },
  { title: 'Long Event', start: '2025-09-12T12:00:00', end: '2025-09-14T12:00:00', classNames: ['text-info'] },
  { title: 'Meeting', start: '2025-09-17T10:30:00', end: '2025-09-17T12:00:00', classNames: ['text-danger'] },
  { title: 'Birthday Party', start: '2025-09-18T19:00:00', end: '2025-09-18T22:30:00', classNames: ['text-info'] },
  { title: 'Lunch', start: '2025-09-17T12:00:00', classNames: 'text-success' },
  { title: 'Repeating Event', start: '2025-09-14T16:00:00' },
  { title: 'Repeating Event', start: '2025-09-21T16:00:00' },
  { title: 'Click for Google', start: '2025-09-28T12:00:00', end: '2025-09-17T12:00:00', classNames: ['text-primary'] }
]

function showEventModal() {
  const modal = document.getElementById('event-modal')
  if (modal) {
    modal.classList.remove('hidden')
    modal.classList.add('hs-overlay-open')
  }
}

function hideEventModal() {
  const modal = document.getElementById('event-modal')
  if (modal) {
    modal.classList.add('hidden')
    modal.classList.remove('hs-overlay-open')
  }
}

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next,today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,dayGridDay,listWeek'
  },
  editable: true,
  selectable: true,
  events: calendarEvents,
  dateClick() {
    showEventModal()
  }
}
</script>
