export const toPascalCase = (value: string) =>
  value
    .replace(/[-_ ]+/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')

export const toTitleCase = (value: string) =>
  value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

export const toLabelCase = (value: string) => {
  return value
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(' ')
    .map((word) => {
      // Make acronyms (ltr, rtl) full uppercase
      if (word.toLowerCase() === 'ltr' || word.toLowerCase() === 'rtl') {
        return word.toUpperCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}
