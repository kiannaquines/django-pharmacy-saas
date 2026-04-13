import type { LayoutDirectionType, LayoutThemeType, SideNavType } from '~/types/layout'

export type ThemeOptionType = { theme: LayoutThemeType }

export type SideNavColorOptionType = { color: SideNavType['color'] }

export type SideBarSizeType = { label: string; size: SideNavType['size']; preview: string }

export type PositionType = { dir: LayoutDirectionType }

export const setPositionOptions: PositionType[] = [{ dir: 'ltr-mode' }, { dir: 'rtl-mode' }]

export const sidenavColorOptions: SideNavColorOptionType[] = [{ color: 'light' }, { color: 'dark' }]

export const themeOptions: ThemeOptionType[] = [{ theme: 'light' }, { theme: 'dark' }, { theme: 'system' }]

export const sidenavSizes: SideBarSizeType[] = [
  {
    preview: ` <span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                    <span class="block w-8 bg-default-100">
                        <span class="mt-1.5 mx-1.5 block space-y-1">
                            <span class="h-1 block rounded-sm mb-2.5 bg-default-300"></span>
                            <span class="h-1 block rounded-sm bg-default-300"></span>
                            <span class="h-1 block rounded-sm bg-default-300"></span>
                            <span class="h-1 block rounded-sm bg-default-300"></span>
                            <span class="h-1 block rounded-sm bg-default-300"></span>
                            <span class="h-1 block rounded-sm bg-default-300"></span>
                        </span>
                    </span>
                    <span class="flex flex-col flex-auto border-s border-default-200">
                        <span class="h-3 bg-default-100">
                            <span class="flex items-center justify-end h-full mr-1.5">
                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                            </span>
                        </span>
                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                    </span>
                </span>`,
    label: 'Defauit',
    size: 'default'
  },
  {
    preview: `  <span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                    <span class="w-3 bg-default-100">
                        <span class="w-1.5 h-1.5 mt-1 mx-auto rounded-sm bg-default-300"></span>
                        <span class="flex flex-col items-center w-full mt-1.5 space-y-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                        </span>
                    </span>
                    <span class="flex flex-col flex-auto border-s border-default-200">
                        <span class="h-3 bg-default-100">
                            <span class="flex items-center justify-end h-full mr-1.5">
                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                            </span>
                        </span>
                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                    </span>
                </span> `,
    label: 'Hover',
    size: 'hover'
  },
  {
    preview: `  <span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                                    <span class="w-8 bg-default-100">
                                        <span class="mt-1.5 mx-1.5 block space-y-1">
                                            <span class="flex mb-2.5 gap-1">
                                                <span class="h-1 block w-full rounded-sm bg-default-300"></span>
                                                <span class="h-1 block w-2 rounded-full bg-default-300"></span>
                                            </span>
                                            <span class="h-1 block rounded-sm bg-default-300"></span>
                                            <span class="h-1 block rounded-sm bg-default-300"></span>
                                            <span class="h-1 block rounded-sm bg-default-300"></span>
                                            <span class="h-1 block rounded-sm bg-default-300"></span>
                                            <span class="h-1 block rounded-sm bg-default-300"></span>
                                        </span>
                                    </span>
                                    <span class="flex flex-col flex-auto border-s border-default-200">
                                        <span class="h-3 bg-default-100">
                                            <span class="flex items-center justify-end h-full mr-1.5">
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                                    </span>
                                </span>`,
    label: 'Hover-Active',
    size: 'hover-active'
  },
  {
    preview: `   <span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                                    <span class="w-3 bg-default-100">
                                        <span class="w-1.5 h-1.5 mt-1 mx-auto rounded-sm bg-default-300"></span>
                                        <span class="flex flex-col items-center w-full mt-1.5 space-y-1">
                                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                                            <span class="w-1.5 h-1.5 rounded-full bg-default-300"></span>
                                        </span>
                                    </span>
                                    <span class="flex flex-col flex-auto border-s border-default-200">
                                        <span class="h-3 bg-default-100">
                                            <span class="flex items-center h-full mr-1.5">
                                                <span class="grow">
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                </span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                                    </span>
                                </span>`,
    label: 'Small',
    size: 'sm'
  },
  {
    preview: `<span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                                    <span class="w-4 bg-default-100">
                                        <span class="w-2 h-2 mt-2 mx-auto rounded-sm bg-default-300"></span>
                                        <span class="flex flex-col items-center w-full mt-2 space-y-1">
                                            <span class="w-2 h-2 rounded-sm bg-default-300"></span>
                                            <span class="w-2 h-2 rounded-sm bg-default-300"></span>
                                            <span class="w-2 h-2 rounded-sm bg-default-300"></span>
                                        </span>
                                    </span>
                                    <span class="flex flex-col flex-auto border-s border-default-200">
                                        <span class="h-3 bg-default-100">
                                            <span class="flex items-center h-full mr-1.5">
                                                <span class="grow">
                                                    <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                </span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ml-1 rounded-full bg-default-300"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                                    </span>
                                </span> `,
    label: 'Compact',
    size: 'md'
  },
  {
    preview: ` <span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                                    <span class="flex flex-col flex-auto">
                                        <span class="h-3 bg-default-100">
                                            <span class="flex items-center h-full mr-1.5">
                                                <span class="w-1.5 h-1.5  ms-1 rounded-sm bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1  rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-auto rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                                    </span>
                                </span> `,
    label: 'Mobile',
    size: 'offcanvas'
  },
  {
    preview: `  <span class="flex h-16 overflow-hidden border border-default-200 rounded-md">
                                    <span class="flex flex-col flex-auto">
                                        <span class="h-3 bg-default-100">
                                            <span class="flex flex-auto items-center h-full me-1.5">
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-auto rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                                <span class="w-1 h-1 block ms-1 rounded-full bg-default-300"></span>
                                            </span>
                                        </span>
                                        <span class="flex flex-auto border-t border-default-200 bg-default-50"></span>
                                    </span>
                                </span>`,
    label: 'Hidden',
    size: 'hidden'
  }
]
