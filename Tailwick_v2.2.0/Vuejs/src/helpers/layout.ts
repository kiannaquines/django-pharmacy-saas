type ToggleDocumentAttributeType = (attribute: string, value: string, remove?: boolean, tag?: keyof HTMLElementTagNameMap) => void

export const toggleAttribute: ToggleDocumentAttributeType = (attribute, value, remove, tag = 'html'): void => {
  if  (typeof window !== 'undefined') {
    const element = document.getElementsByTagName(tag)[0] // already narrowed
    if (!element) return // ✅ safeguard for TS

    const hasAttribute = element.getAttribute(attribute)
    if (remove && hasAttribute) element.removeAttribute(attribute)
    else element.setAttribute(attribute, value)
  }
}

export const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export const scrollToElement = (element: Element, to: number, duration: number): void => {
  if (!(element instanceof HTMLElement)) return // ✅ TS safe guard

  const start = element.scrollTop
  const change = to - start
  const increment = 20
  let currentTime = 0

  const animateScroll = () => {
    currentTime += increment
    element.scrollTop = easeInOutQuad(currentTime, start, change, duration)
    if (currentTime < duration) {
      setTimeout(animateScroll, increment)
    }
  }

  animateScroll()
}
