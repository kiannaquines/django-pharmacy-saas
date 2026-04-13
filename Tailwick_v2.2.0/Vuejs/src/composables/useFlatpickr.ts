import { ref, onMounted, onBeforeUnmount } from 'vue'
import flatpickr from 'flatpickr'
import type { Instance } from 'flatpickr/dist/types/instance'
import type { Options } from 'flatpickr/dist/types/options'

export function useFlatpickr(options: Partial<Options> = {}) {
  const inputRef = ref<HTMLInputElement>()
  let picker: Instance | null = null

  onMounted(() => {
    if (inputRef.value) {
      picker = flatpickr(inputRef.value, options)
    }
  })

  onBeforeUnmount(() => {
    picker?.destroy()
    picker = null
  })

  return { inputRef, picker }
}
