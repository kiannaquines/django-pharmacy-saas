declare module '*.png' {
  const value: string
  export default value
}
declare module '*.jpg' {
  const value: string
  export default value
}
declare module '*.jpeg' {
  const value: string
  export default value
}
declare module '*.svg' {
  const value: string
  export default value
}

import type { IStaticMethods } from 'preline/dist'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

export {}
