import { defineStore } from 'pinia'
import type { LayoutThemeType, LayoutType, SideNavType, LayoutDirectionType } from '@/types/layout'
import { ref } from 'vue'
import { useSystemTheme } from '@/composables/useSystemTheme'
import { toggleAttribute } from '@/helpers/layout'

const INIT_STATE: LayoutType = {
  theme: 'light',
  sidenav: {
    size: 'default',
    color: 'light'
  },
  position: 'ltr-mode',
  isMobileMenuOpen: false
}

export const useLayout = defineStore(
  'layout',
  () => {
    const layout = ref<LayoutType>({ ...INIT_STATE })

    const systemTheme = useSystemTheme()
    const isCustomizerOpen = ref(false)

    /** Theme */
    const setTheme = (nTheme: LayoutThemeType, persist = true) => {
      const resolvedTheme = nTheme === 'system' ? systemTheme.value : nTheme
      toggleAttribute('data-theme', resolvedTheme)
      if (persist) layout.value.theme = nTheme
    }

    /** Sidenav Color */
    const setSideNavColor = (nColor: SideNavType['color'], persist = true) => {
      toggleAttribute('data-sidenav-color', nColor)
      if (persist) layout.value.sidenav = { ...layout.value.sidenav, color: nColor }
    }

    /** Sidenav Size */
    const setSideNavSize = (nSize: SideNavType['size'], persist = true) => {
      toggleAttribute('data-sidenav-size', nSize)
      if (persist) layout.value.sidenav.size = nSize

      const html = document.documentElement

      if (nSize === 'offcanvas') {
        html.classList.add('sidenav-enable')
        showBackdrop()
      } else {
        // Only remove sidenav-enable if mobile menu is NOT open
        if (!layout.value.isMobileMenuOpen) {
          html.classList.remove('sidenav-enable')
          hideBackdrop()
        }
      }
    }

    /** Toggle mobile menu */
    const toggleMobileMenu = () => {
      layout.value.isMobileMenuOpen = !layout.value.isMobileMenuOpen
      const html = document.documentElement
      html.classList.toggle('sidenav-enable', layout.value.isMobileMenuOpen)
      if (layout.value.isMobileMenuOpen) showBackdrop()
      else hideBackdrop()
    }

    const setPosition = (nPosition: LayoutDirectionType, persist = true) => {
      toggleAttribute('dir', nPosition === 'rtl-mode' ? 'rtl' : 'ltr')
      if (persist) layout.value.position = nPosition
    }

    const toggleCustomizer = () => {
      isCustomizerOpen.value = !isCustomizerOpen.value
    }
    const customizer = { isCustomizerOpen, toggleCustomizer }

    const showBackdrop = () => {
      if (!document.getElementById('custom-backdrop')) {
        const backdrop = document.createElement('div')
        backdrop.id = 'custom-backdrop'
        backdrop.className = 'transition duration fixed inset-0 bg-default-900/50 z-40'
        document.body.appendChild(backdrop)
        backdrop.addEventListener('click', () => {
          layout.value.sidenav.size = 'default'
          document.documentElement.classList.remove('sidenav-enable')
          hideBackdrop()
        })
      }
    }

    const hideBackdrop = () => {
      const backdrop = document.getElementById('custom-backdrop')
      if (backdrop) document.body.removeChild(backdrop)
    }

    /** Hover toggle for sidebar (for hover-active feature) */
    const toggleHoverSidebar = () => {
      const html = document.documentElement
      const current = layout.value.sidenav.size
      const newSize = current === 'hover-active' ? 'hover' : 'hover-active'
      setSideNavSize(newSize)
    }

    const init = () => {
      setTheme(layout.value.theme)
      setSideNavColor(layout.value.sidenav.color)
      setSideNavSize(layout.value.sidenav.size)
      setPosition(layout.value.position)
    }

    const reset = () => {
      setTheme(INIT_STATE.theme)
      setSideNavColor(INIT_STATE.sidenav.color)
      setSideNavSize(INIT_STATE.sidenav.size)
      setPosition(INIT_STATE.position)
    }

    return {
      layout,
      setTheme,
      setSideNavColor,
      setSideNavSize,
      toggleMobileMenu,
      setPosition,
      toggleHoverSidebar,
      isCustomizerOpen,
      toggleCustomizer,
      init,
      reset,
      customizer
    }
  },
  {
    persist: true
  }
)
