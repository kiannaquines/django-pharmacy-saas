<template>
  <div>
    <div id="theme-customization" class="hs-overlay hs-overlay-open:translate-x-0 hidden bg-card dark:bg-default-100 hs-overlay-open:flex flex-col translate-x-full rtl:-translate-x-full fixed inset-y-0 end-0 bottom-0 transition-all duration-300 transform max-w-sm w-full z-80 overflow-hidden">
      <div class="min-h-16 flex items-center text-default-600 border-b border-dashed border-default-900/10 px-6 gap-3">
        <h5 class="text-base grow">Theme Settings</h5>
        <button @click="toggleFullscreen" :class="{ 'fullscreen-active': isFullscreen }" class="btn size-9 rounded-full btn-sm hover:bg-default-150 group" id="fullscreenBtn" data-toggle="fullscreen" aria-label="Full Screen">
          <Icon v-if="!isFullscreen" icon="lucide:fullscreen" class="iconify size-5 group-[.fullscreen-active]:hidden"></Icon>
          <Icon v-else icon="lucide:minimize" class="iconify size-5 hidden group-[.fullscreen-active]:inline-block"></Icon>
        </button>
        <button @click="customizer.toggleCustomizer" type="button" data-hs-overlay="#theme-customization" class="btn size-9 rounded-full btn-sm hover:bg-default-150">
          <Icon icon="tabler:x" class="iconify text-xl"></Icon>
        </button>
      </div>
      <simplebar class="h-full flex-grow overflow-y-auto" data-simplebar>
        <div class="divide-y divide-dashed divide-default-200">
          <div class="p-6">
            <h5 class="font-semibold text-sm mb-3">Sidenav View</h5>
            <div class="grid grid-cols-3 gap-3">
              <div class="card-radio" v-for="(item, idx) in sidenavSizes" :key="idx">
                <input class="hidden" type="radio" name="sidenav-size" :id="`sidenav-size-${item.size}`" :value="item.size" :checked="layout.sidenav.size === item.size" @change="() => setSideNavSize(item.size)" />
                <label :for="`sidenav-size-${item.size}`" class="form-label cursor-pointer">
                  <span v-html="item.preview"></span>
                </label>
                <div class="mt-1 text-md font-medium text-center text-default-600">{{ toPascalCase(item.label) }}</div>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h5 class="font-semibold text-sm mb-3">Theme Mode</h5>
            <div class="flex gap-2">
              <div v-for="(item, idx) in themeOptions" :key="idx">
                <input class="hidden" type="radio" name="" data-theme :id="`theme-${item.theme}`" :value="item.theme" :checked="layout.theme === item.theme" @change="() => setTheme(item.theme)" />
                <label class="form-label btn bg-default-150" :for="`theme-${item.theme}`">{{ toPascalCase(item.theme) }}</label>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h5 class="font-semibold text-sm mb-3">Direction</h5>
            <div class="flex gap-2">
              <div v-for="(item, idx) in setPositionOptions" :key="idx">
                <input type="radio" class="hidden" :id="`dir-${item.dir}`" :value="item.dir" :checked="layout.position === item.dir" @change="() => setPosition(item.dir)" name="dir" />
                <label class="form-label btn bg-default-150" :for="`dir-${item.dir}`"> {{ toLabelCase(item.dir.replace('-mode', '')) }} Mode </label>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h5 class="font-semibold text-sm mb-3">Sidenav Color</h5>
            <div class="flex gap-2">
              <div v-for="(item, idx) in sidenavColorOptions" :key="idx">
                <input :id="`sidenav-color-${item.color}`" class="hidden" type="radio" name="data-sidenav-color" :value="item.color" :checked="layout.sidenav.color === item.color" @change="() => setSideNavColor(item.color)" />
                <label :for="`sidenav-color-${item.color}`" class="form-label btn bg-default-150">{{ toPascalCase(item.color) }}</label>
              </div>
            </div>
          </div>
        </div>
      </simplebar>
      <div class="p-4 flex border-t border-dashed border-default-900/10">
        <div class="flex w-full gap-4">
          <button type="button" class="btn bg-default-150 grow" id="reset-layout" @click="reset">Reset</button>
          <RouterLink to="https://1.envato.market/tailwick-tailwind" target="_blank" class="btn bg-primary text-white grow">Buy Now</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import { ref } from 'vue'
import { toLabelCase, toPascalCase } from '@/helpers/casing'
import { useLayout } from '@/stores/layout'
import { setPositionOptions, sidenavColorOptions, sidenavSizes, themeOptions } from './data'
import { RouterLink } from 'vue-router'

const { setTheme, layout, customizer, setSideNavColor, setPosition, setSideNavSize, reset } = useLayout()

const isFullscreen = ref(false)

const toggleFullscreen = () => {
  const doc = document.documentElement

  if (!isFullscreen.value) {
    if (doc.requestFullscreen) doc.requestFullscreen()
    else if ((doc as any).webkitRequestFullscreen) (doc as any).webkitRequestFullscreen()
    else if ((doc as any).msRequestFullscreen) (doc as any).msRequestFullscreen()
  } else {
    if (document.exitFullscreen) document.exitFullscreen()
    else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen()
    else if ((document as any).msExitFullscreen) (document as any).msExitFullscreen()
  }

  isFullscreen.value = !isFullscreen.value
}

document.addEventListener('fullscreenchange', () => {
  isFullscreen.value = !!document.fullscreenElement
})
</script>
