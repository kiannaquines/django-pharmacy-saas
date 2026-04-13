import { ref, onMounted, onUnmounted } from 'vue'

export function useCountdown(targetDate: string) {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  let intervalId: number | null = null

  const updateCountdown = () => {
    const now = new Date().getTime()
    const distance = new Date(targetDate).getTime() - now

    if (distance <= 0) {
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      if (intervalId) clearInterval(intervalId)
      return
    }

    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
  }

  onMounted(() => {
    updateCountdown()
    intervalId = window.setInterval(updateCountdown, 1000)
  })

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
  })

  return {
    days,
    hours,
    minutes,
    seconds
  }
}
