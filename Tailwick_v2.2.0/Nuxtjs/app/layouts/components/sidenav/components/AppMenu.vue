<template>
  <ul class="side-nav p-3 hs-accordion-group">
    <template v-for="(item, idx) in menuItems">
      <li v-if="item.isTitle" :key="item.key" class="menu-title">
        <span>{{ item.label }}</span>
      </li>
      <template v-else>
        <MenuItemWithChildren v-if="item.children" :item="item" :open-menu-key="openMenuKey" :set-open-menu-key="setOpenMenuKey" />
        <MenuItem v-else :item="item" />
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { menuItems } from './data'
import MenuItem from './MenuItem.vue'
import { ref } from 'vue'
import MenuItemWithChildren from './MenuItemWithChildren.vue'
import { scrollToElement } from '~/helpers/layout'

const openMenuKey = ref<string | null>(null)

const setOpenMenuKey = (key: string | null) => {
  openMenuKey.value = key
}

const scrollToActiveLink = () => {
  const activeItem: HTMLAnchorElement | null = document.querySelector('.side-nav-link.active')
  if (activeItem) {
    const simpleBarContent = document.querySelector('#sidenav .simplebar-content-wrapper')
    if (simpleBarContent) {
      const containerRect = simpleBarContent.getBoundingClientRect()
      const itemRect = activeItem.getBoundingClientRect()

      const offset = itemRect.top - containerRect.top - window.innerHeight * 0.4

      scrollToElement(simpleBarContent, simpleBarContent.scrollTop + offset, 500)
    }
  }
}

onMounted(() => {
  setTimeout(() => scrollToActiveLink(), 100)
})
</script>
