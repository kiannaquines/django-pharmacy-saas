<template>
  <li class="menu-item hs-accordion" :class="{ active: isOpen }">
    <button type="button" class="hs-accordion-toggle menu-link w-full" :class="{ active: isOpen }">
      <span v-if="item.icon" class="menu-icon"><Icon :icon="item.icon"></Icon></span>
      <span class="menu-text">{{ item.label }}</span>
      <span class="menu-arrow">
        <Icon icon="lucide:chevron-right" class="ms-auto transition-transform duration-200" />
      </span>
    </button>
    <ul v-show="isOpen" class="sub-menu hs-accordion-content hs-accordion-group">
      <template v-for="(child, idx) in item.children" :key="idx">
        <MenuItemWithChildren v-if="child.children" :item="child" :level="(level ?? 0) + 1" />
        <MenuItem v-else :item="child" :key="idx" />
      </template>
    </ul>
  </li>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { MenuItemType } from '~/types/layout'
import MenuItem from './MenuItem.vue'
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

type PropsType = {
  item: MenuItemType
  openMenuKey?: string | null
  setOpenMenuKey?: (key: string | null) => void
  level?: number
}

const props = defineProps<PropsType>()

const route = useRoute()
const pathname = computed(() => route.path)
const isTopLevel = computed(() => (props.level ?? 0) === 0)
const localOpen = ref(false)
const didAutoOpen = ref(false)

const isActive = computed(() => {
  const isChildActive = (children: MenuItemType[]): boolean => children.some((child) => (child.url && pathname.value.includes(child.url)) || (child.children && isChildActive(child.children)))
  return isChildActive(props.item.children || [])
})

const isOpen = computed(() => {
  return isTopLevel.value ? props.openMenuKey === props.item.key : localOpen.value
})

watchEffect(() => {
  if (isActive.value && !didAutoOpen.value) {
    if (isTopLevel.value && props.setOpenMenuKey) {
      props.setOpenMenuKey(props.item.key)
    } else {
      localOpen.value = true
    }
    didAutoOpen.value = true
  }
})

const toggleOpen = () => {
  if (isTopLevel.value && props.setOpenMenuKey) {
    props.setOpenMenuKey(isOpen.value ? null : props.item.key)
  } else {
    localOpen.value = !localOpen.value
  }
}
</script>
