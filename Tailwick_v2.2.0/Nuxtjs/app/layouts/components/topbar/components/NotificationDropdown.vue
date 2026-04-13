<template>
  <div class="topbar-item hs-dropdown [--auto-close:inside] relative inline-flex">
    <button type="button" class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      <Icon icon="lucide:bell-ring" class="size-4.5"></Icon>
      <span class="absolute end-0 top-0 size-1.5 bg-primary/90 rounded-full"></span>
    </button>
    <div class="hs-dropdown-menu max-w-100 p-0" role="menu">
      <div class="p-4 border-b border-default-200">
        <div class="flex items-center gap-2">
          <h3 class="text-base text-default-800">Notifications</h3>
          <span class="size-5 font-semibold bg-orange-500 rounded text-white flex items-center justify-center text-xs">15</span>
        </div>
      </div>
      <nav class="flex gap-x-1 bg-default-150 p-2 border-b border-default-200" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <button data-hs-tab="#tabsViewall" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600 active" aria-selected="true" aria-controls="tabsViewall" role="tab">View all</button>
        <button data-hs-tab="#tabsMentions" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsMentions" role="tab">Mentions</button>
        <button data-hs-tab="#tabsFollowers" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsFollowers" role="tab">Followers</button>
        <button data-hs-tab="#tabsInvites" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsInvites" role="tab">Invites</button>
      </nav>
      <simplebar class="h-80" data-simplebar>
        <div id="tabsViewall" role="tabpanel" aria-labelledby="tabsViewall-item">
          <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
            <div>
              <div class="size-10 rounded-md bg-default-100">
                <img :src="avatar3" alt="" class="rounded-md" />
              </div>
            </div>
            <div class="flex justify-between w-full text-sm">
              <div>
                <h6 class="mb-2 font-medium text-default-800"><b>@willie_passem</b> followed you</h6>
                <p class="flex items-center gap-1 text-default-500 text-xs">
                  <Icon icon="lucide:clock" class="align-middle size-3.5"></Icon>
                  <span>Wednesday 03:42 PM</span>
                </p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  4 sec
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
            <div>
              <div class="size-10 rounded-md bg-yellow-100">
                <img :src="avatar5" alt="" class="rounded-md" />
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="text-sm">
                <h6 class="mb-2 font-medium text-default-800"><b>@caroline_jessica</b> commented <br />on your post</h6>
                <p class="flex items-center gap-1 text-default-500 text-xs">
                  <Icon icon="lucide:clock" class="align-middle size-3.5"></Icon>
                  <span>Wednesday 03:42 PM</span>
                </p>
                <p class="p-2 bg-default-50 text-default-500 mt-2 rounded">Amazing! Fast, to the point, professional and really amazing to work with them!!!</p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div>
                    <div class="size-1.5 bg-primary rounded-full"></div>
                  </div>
                  15 min
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
            <div>
              <div class="size-10 rounded-md bg-red-100 flex justify-center items-center">
                <Icon icon="lucide:shopping-bag" class="size-5 text-danger"></Icon>
              </div>
            </div>
            <div class="flex justify-between gap-2 w-full">
              <div>
                <h6 class="mb-1 font-medium text-default-800 text-sm">
                  Successfully purchased a business plan for
                  <span class="text-danger">$199.99</span>
                </h6>
                <p class="flex items-center gap-1 text-default-500 text-xs">
                  <Icon icon="lucide:clock" class="align-middle size-3.5"></Icon>
                  <span>Monday 11:26 AM</span>
                </p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  yesterday
                </div>
              </div>
            </div>
          </a>

          <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
            <div class="relative">
              <div class="size-10 rounded-md bg-pink-100">
                <img :src="avatar7" alt="" class="rounded-md" />
              </div>
              <div class="absolute text-orange-500 bottom-0 -end-0.5 text-base">
                <Icon icon="lucide:heart" class="size-3.5 fill-orange-500"></Icon>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div>
                <h6 class="mb-1 font-medium text-default-800 text-sm"><b>@scott</b> liked your post</h6>
                <p class="flex gap-1 items-center text-default-500 text-xs"><Icon icon="lucide:clock" class="align-middle size-3.5"></Icon><span>Thursday 06:59 AM</span></p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  1 Week
                </div>
              </div>
            </div>
          </a>
        </div>

        <div id="tabsMentions" class="hidden" role="tabpanel" aria-labelledby="tabsMentions-item">
          <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
            <div>
              <div class="size-10 rounded-md bg-yellow-100">
                <img :src="avatar5" alt="" class="rounded-md" />
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div class="text-sm">
                <h6 class="mb-2 font-medium text-default-800"><b>@caroline_jessica</b> commented <br />on your post</h6>
                <p class="flex items-center gap-1 text-default-500 text-xs">
                  <Icon icon="lucide:clock" class="align-middle size-3.5"></Icon>
                  <span>Wednesday 03:42 PM</span>
                </p>
                <p class="p-2 bg-default-50 text-default-500 mt-2 rounded">Amazing! Fast, to the point, professional and really amazing to work with them!!!</p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div>
                    <div class="size-1.5 bg-primary rounded-full"></div>
                  </div>
                  15 min
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
            <div class="relative">
              <div class="size-10 rounded-md bg-pink-100">
                <img :src="avatar7" alt="" class="rounded-md" />
              </div>
              <div class="absolute text-orange-500 bottom-0 -end-0.5 text-base">
                <Icon icon="lucide:heart" class="size-3.5 fill-orange-500"></Icon>
              </div>
            </div>
            <div class="flex justify-between w-full">
              <div>
                <h6 class="mb-1 font-medium text-default-800 text-sm"><b>@scott</b> liked your post</h6>
                <p class="flex gap-1 items-center text-default-500 text-xs"><Icon icon="lucide:clock" class="align-middle size-3.5"></Icon><span>Thursday 06:59 AM</span></p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  1 Week
                </div>
              </div>
            </div>
          </a>
        </div>

        <div id="tabsFollowers" class="hidden" role="tabpanel" aria-labelledby="tabsFollowers-item">
          <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
            <div>
              <div class="size-10 rounded-md bg-default-100">
                <img :src="avatar3" alt="" class="rounded-md" />
              </div>
            </div>
            <div class="flex justify-between w-full text-sm">
              <div>
                <h6 class="mb-2 font-medium text-default-800"><b>@willie_passem</b> followed you</h6>
                <p class="flex items-center gap-1 text-default-500 text-xs">
                  <Icon icon="lucide:clock" class="align-middle size-3.5"></Icon>
                  <span>Wednesday 03:42 PM</span>
                </p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  4 sec
                </div>
              </div>
            </div>
          </a>
        </div>

        <div id="tabsInvites" class="hidden" role="tabpanel" aria-labelledby="tabsInvites-item">
          <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
            <div>
              <div class="size-10 rounded-md bg-red-100 flex justify-center items-center">
                <Icon icon="lucide:shopping-bag" class="size-5 text-danger"></Icon>
              </div>
            </div>
            <div class="flex justify-between gap-2 w-full">
              <div>
                <h6 class="mb-1 font-medium text-default-800 text-sm">
                  Successfully purchased a business plan for
                  <span class="text-danger">$199.99</span>
                </h6>
                <p class="flex items-center gap-1 text-default-500 text-xs">
                  <Icon icon="lucide:clock" class="align-middle size-3.5"></Icon>
                  <span>Monday 11:26 AM</span>
                </p>
              </div>
              <div>
                <div class="flex items-center gap-2 text-xs text-default-500">
                  <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  yesterday
                </div>
              </div>
            </div>
          </a>
        </div>
      </simplebar>
      <div class="flex items-center justify-between p-4 border-t border-default-200">
        <a href="" class="text-sm font-medium text-default-900">Manage Notification</a>
        <button type="button" class="btn btn-sm text-white bg-primary">
          View All
          <Icon icon="lucide:move-right" class="size-4"></Icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import simplebar from 'simplebar-vue'
import avatar3 from '~/assets/images/user/avatar-3.png'
import avatar5 from '~/assets/images/user/avatar-5.png'
import avatar7 from '~/assets/images/user/avatar-7.png'
</script>
