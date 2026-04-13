<template>
  <div class="lg:border-e border-default-200">
    <div id="mailBoxSidebar" class="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:static lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 overflow-hidden z-60" role="dialog" tabindex="-1" aria-label="Sidebar">
      <div class="card shadow-none relative flex flex-col h-full max-h-full overflow-hidden">
        <div class="card-body">
          <button v-if="sidebarItems[0]" class="btn bg-danger text-white w-full" data-hs-overlay="#addEmailModal">
            <Icon v-if="sidebarItems[0].icon" :icon="sidebarItems[0].icon" class="size-4" />
            Compose Email
          </button>
          <div class="mt-4 text-sm">
            <template v-for="(item, index) in sidebarItems.slice(1)" :key="index">
              <p v-if="item.category" class="py-3 uppercase text-sm text-default-700">{{ item.title }}</p>
              <a v-else href="" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                <Icon v-if="item.icon" :icon="item.icon" class="size-4" :class="item.class" />
                <span>{{ item.title }}</span>
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="addEmailModal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="addEmailModal-label">
    <div class="hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-4xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
      <div class="card w-full border border-default-200 pointer-events-auto">
        <div class="card-header">
          <h3 class="font-semibold text-base text-default-800">New Message</h3>
          <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#addEmailModal">
            <span class="sr-only">Close</span>
            <Icon icon="lucide:x" class="size-5"></Icon>
          </button>
        </div>
        <div class="card-body">
          <div class="mb-4">
            <label for="event-title" class="inline-block mb-2 text-base font-medium">To</label>
            <input type="text" id="event-title" class="form-input" placeholder="tailwink@themesdesign.in" />
          </div>
          <div class="mb-4">
            <label for="subject" class="inline-block mb-2 text-base font-medium">Subject</label>
            <input type="text" id="subject" class="form-input" placeholder="Subject" />
          </div>
          <div>
            <label for="Textarea" class="inline-block mb-2 text-base font-medium">Example Textarea</label>
            <textarea id="Textarea" class="form-input" rows="3"></textarea>
          </div>
        </div>
        <div class="card-footer flex gap-2 md:justify-end">
          <button type="reset" data-hs-overlay="#addEmailModal" class="btn text-danger btn border-0 hover:bg-red-50">Cancel</button>
          <button type="submit" class="btn bg-primary text-white">Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

type SidebarItem = {
  title: string
  icon?: string
  category?: boolean
  class?: string
}

const sidebarItems: SidebarItem[] = [
  { title: 'Compose Email', icon: 'lucide:plus' },
  { title: 'Inbox', icon: 'lucide:inbox' },
  { title: 'Starred', icon: 'lucide:star' },
  { title: 'Draft', icon: 'lucide:pen-square' },
  { title: 'Important', icon: 'lucide:step-forward' },
  { title: 'Spam', icon: 'lucide:alert-octagon' },
  { title: 'Contacts', icon: 'lucide:user-circle' },
  { title: 'Trash', icon: 'lucide:trash-2' },
  { title: 'Category', icon: '', category: true },
  { title: 'Social', icon: 'lucide:radio-tower' },
  { title: 'Update', icon: 'lucide:squirrel' },
  { title: 'Forums', icon: 'lucide:file-text' },
  { title: 'Promotions', icon: 'lucide:tag' },
  { title: 'Label', icon: '', category: true },
  { title: 'Support', icon: 'lucide:circle-dot', class: 'text-danger' },
  { title: 'Freelance', icon: 'lucide:circle-dot', class: 'text-primary' },
  { title: 'Personal', icon: 'lucide:circle-dot', class: 'text-sky-500' }
]
</script>
