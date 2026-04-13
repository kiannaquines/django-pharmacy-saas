<!-- Topbar Start -->
<div class="app-header min-h-topbar-height flex items-center sticky top-0 z-30 bg-(--topbar-background) border-b border-default-200">
    <div class="w-full flex items-center justify-between px-6">
        <div class="flex items-center gap-5">
            <!-- Sidenav Menu Toggle Button -->
            <button id="button-toggle-menu" class="btn btn-icon size-8 hover:bg-default-150 rounded">
                <i class="iconify lucide--align-left text-xl"></i>
            </button>

            <!-- Topbar Search -->
            <div class="lg:flex hidden items-center relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <i class="iconify tabler--search text-base"></i>
                </div>

                <input type="search" id="topbar-search" class="form-input px-12 text-sm rounded border-transparent focus:border-transparent w-60" placeholder="Search something...">

                <button type="button" class="absolute inset-y-0 end-0 flex items-center pe-4">
                    <span class="ms-auto font-medium">⌘ K</span>
                </button>
            </div>
        </div>

        <div class="flex items-center gap-3">

            <!-- Language Dropdown Button -->
            <div class="topbar-item hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" type="button" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <img src="%BASE%/images/flags/us.jpg" alt="" class="size-4.5 rounded">
                </button>

                <div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/us.jpg" alt="" class="size-4 rounded-full">
                        English
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/spain.jpg" alt="" class="size-4 rounded-full">
                        Spanish
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/germany.jpg" alt="" class="size-4 rounded-full">
                        German
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">

                        <img src="%BASE%/images/flags/french.jpg" alt="" class="size-4 rounded-full">
                        French
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/japanese.svg" alt="" class="size-4 rounded-full">
                        Japanese
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/italy.jpg" alt="" class="size-4 rounded-full">
                        Italian
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/russia.jpg" alt="" class="size-4 rounded-full">
                        Russian
                    </a>
                    <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                        <img src="%BASE%/images/flags/arebian.svg" alt="" class="size-4 rounded-full">
                        Arabic
                    </a>
                </div>
            </div>

            <!-- Light/Dark Mode Button -->
            <div class="topbar-item">
                <button class="btn btn-icon size-8 hover:bg-default-150 transition-[scale,background] rounded-full" id="light-dark-mode" type="button">
                    <i class="iconify tabler--moon text-xl absolute dark:scale-0 dark:-rotate-90 scale-100 rotate-0 transition-all duration-200"></i>
                    <i class="iconify tabler--sun text-xl absolute dark:scale-100 dark:rotate-0 scale-0 rotate-90 transition-all duration-200"></i>
                </button>
            </div>

            <!-- Notification Button -->
            <div class="topbar-item hs-dropdown [--auto-close:inside] relative inline-flex">
                <button type="button" class="hs-dropdown-toggle btn btn-icon size-8 hover:bg-default-150 rounded-full relative" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <i data-lucide="bell-ring" class="size-4.5"></i>
                    <span class="absolute end-0 top-0 size-1.5 bg-primary/90 rounded-full"></span>
                </button>

                <div class="hs-dropdown-menu max-w-100 p-0" role="menu">
                    <!-- Header -->
                    <div class="p-4 border-b border-default-200">
                        <div class="flex items-center gap-2">
                            <h3 class="text-base text-default-800">Notifications</h3>
                            <span class="size-5 font-semibold bg-orange-500 rounded text-white flex items-center justify-center text-xs">15</span>
                        </div>
                    </div>

                    <!-- Tabs -->
                    <nav class="flex gap-x-1 bg-default-150 p-2 border-b border-default-200" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        <button data-hs-tab="#tabsViewall" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600 active" aria-selected="true" aria-controls="tabsViewall" role="tab">
                            View all
                        </button>
                        <button data-hs-tab="#tabsMentions" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsMentions" role="tab">
                            Mentions
                        </button>
                        <button data-hs-tab="#tabsFollowers" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsFollowers" role="tab">
                            Followers
                        </button>
                        <button data-hs-tab="#tabsInvites" type="button" class="hs-tab-active:bg-card hs-tab-active:text-primary py-0.5 px-4 rounded font-semibold inline-flex items-center gap-x-2 border-b-2 border-transparent text-xs whitespace-nowrap text-default-500 hover:text-blue-600" aria-selected="false" aria-controls="tabsInvites" role="tab">
                            Invites
                        </button>
                    </nav>

                    <!-- Tabs content -->
                    <div class="h-80" data-simplebar>
                        <!-- View all -->
                        <div id="tabsViewall" role="tabpanel" aria-labelledby="tabsViewall-item">
                            <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
                                <div>
                                    <div class="size-10 rounded-md  bg-default-100">
                                        <img src="%BASE%/images/user/avatar-3.png" alt="" class="rounded-md">
                                    </div>
                                </div>

                                <div class="flex justify-between w-full text-sm">
                                    <div>
                                        <h6 class="mb-2 font-medium text-default-800"><b>@willie_passem</b> followed you</h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i>
                                            <span>Wednesday 03:42 PM</span>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center  gap-2 text-xs text-default-500">
                                            <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>4 sec
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
                                <div>
                                    <div class="size-10 rounded-md  bg-yellow-100">
                                        <img src="%BASE%/images/user/avatar-5.png" alt="" class="rounded-md">
                                    </div>
                                </div>

                                <div class="flex justify-between w-full">
                                    <div class="text-sm">
                                        <h6 class="mb-2 font-medium text-default-800"><b>@caroline_jessica</b> commented <br>on your post</h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i>
                                            <span>Wednesday 03:42 PM</span>
                                        </p>

                                        <p class="p-2  bg-default-50 text-default-500 mt-2 rounded">
                                            Amazing! Fast, to the point, professional and really amazing to work
                                            with them!!!
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center gap-2 text-xs text-default-500">
                                            <div>
                                                <div class="size-1.5 bg-primary rounded-full"></div>
                                            </div>15 min
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
                                <div>
                                    <div class="size-10 rounded-md  bg-red-100 flex justify-center items-center">
                                        <i data-lucide="shopping-bag" class="size-5 text-danger"></i>
                                    </div>
                                </div>

                                <div class="flex justify-between gap-2 w-full">
                                    <div>
                                        <h6 class="mb-1 font-medium text-default-800 text-sm">Successfully purchased a business plan for
                                            <span class="text-danger">$199.99</span>
                                        </h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i>
                                            <span>Monday 11:26 AM</span>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center  gap-2 text-xs text-default-500">
                                            <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>yesterday
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
                                <div class="relative">
                                    <div class="size-10 rounded-md  bg-pink-100">
                                        <img src="%BASE%/images/user/avatar-7.png" alt="" class="rounded-md">
                                    </div>
                                    <div class="absolute text-orange-500 bottom-0 -end-0.5 text-base">
                                        <i data-lucide="heart" class="size-3.5 fill-orange-500"></i>
                                    </div>
                                </div>

                                <div class="flex justify-between w-full">
                                    <div>
                                        <h6 class="mb-1 font-medium text-default-800  text-sm"><b>@scott</b> liked your post</h6>
                                        <p class="flex gap-1 items-center text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i><span>Thursday 06:59 AM</span>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center gap-2 text-xs text-default-500">
                                            <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>1 Week
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <!-- Mentions -->
                        <div id="tabsMentions" class="hidden" role="tabpanel" aria-labelledby="tabsMentions-item">
                            <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
                                <div>
                                    <div class="size-10 rounded-md  bg-yellow-100">
                                        <img src="%BASE%/images/user/avatar-5.png" alt="" class="rounded-md">
                                    </div>
                                </div>

                                <div class="flex justify-between w-full">
                                    <div class="text-sm">
                                        <h6 class="mb-2 font-medium text-default-800"><b>@caroline_jessica</b> commented <br>on your post</h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i>
                                            <span>Wednesday 03:42 PM</span>
                                        </p>

                                        <p class="p-2  bg-default-50 text-default-500 mt-2 rounded">
                                            Amazing! Fast, to the point, professional and really amazing to work
                                            with them!!!
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center gap-2 text-xs text-default-500">
                                            <div>
                                                <div class="size-1.5 bg-primary rounded-full"></div>
                                            </div>15 min
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
                                <div class="relative">
                                    <div class="size-10 rounded-md  bg-pink-100">
                                        <img src="%BASE%/images/user/avatar-7.png" alt="" class="rounded-md">
                                    </div>
                                    <div class="absolute text-orange-500 bottom-0 -end-0.5 text-base">
                                        <i data-lucide="heart" class="size-3.5 fill-orange-500"></i>
                                    </div>
                                </div>

                                <div class="flex justify-between w-full">
                                    <div>
                                        <h6 class="mb-1 font-medium text-default-800  text-sm"><b>@scott</b> liked your post</h6>
                                        <p class="flex gap-1 items-center text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i><span>Thursday 06:59 AM</span>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center gap-2 text-xs text-default-500">
                                            <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>1 Week
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <!-- Followers -->
                        <div id="tabsFollowers" class="hidden" role="tabpanel" aria-labelledby="tabsFollowers-item">
                            <a href="#" class="flex gap-3 p-4 items-center hover:bg-default-150">
                                <div>
                                    <div class="size-10 rounded-md  bg-default-100">
                                        <img src="%BASE%/images/user/avatar-3.png" alt="" class="rounded-md">
                                    </div>
                                </div>

                                <div class="flex justify-between w-full text-sm">
                                    <div>
                                        <h6 class="mb-2 font-medium text-default-800"><b>@willie_passem</b> followed you</h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i>
                                            <span>Wednesday 03:42 PM</span>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center  gap-2 text-xs text-default-500">
                                            <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>4 sec
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <!-- Invites -->
                        <div id="tabsInvites" class="hidden" role="tabpanel" aria-labelledby="tabsInvites-item">
                            <a href="#" class="flex gap-3 p-4 items-start hover:bg-default-150">
                                <div>
                                    <div class="size-10 rounded-md  bg-red-100 flex justify-center items-center">
                                        <i data-lucide="shopping-bag" class="size-5 text-danger"></i>
                                    </div>
                                </div>

                                <div class="flex justify-between gap-2 w-full">
                                    <div>
                                        <h6 class="mb-1 font-medium text-default-800 text-sm">Successfully purchased a business plan for
                                            <span class="text-danger">$199.99</span>
                                        </h6>
                                        <p class="flex items-center gap-1 text-default-500 text-xs">
                                            <i data-lucide="clock" class="align-middle size-3.5"></i>
                                            <span>Monday 11:26 AM</span>
                                        </p>
                                    </div>

                                    <div>
                                        <div class="flex items-center  gap-2 text-xs text-default-500">
                                            <div class="w-1.5 h-1.5 bg-primary rounded-full"></div>yesterday
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="flex items-center justify-between p-4 border-t border-default-200">
                        <a href="#!" class="text-sm font-medium text-default-900">Manage Notification</a>
                        <button type="button" class="btn btn-sm text-white bg-primary">
                            View All
                            <i data-lucide="move-right" class="size-4"></i>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Setting Offcanvas Button -->
            <div class="topbar-item">
                <button class="btn btn-icon size-8 hover:bg-default-150 rounded-full" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="theme-customization" data-hs-overlay="#theme-customization">
                    <i data-lucide="settings" class="size-4.5"></i>
                </button>
            </div>

            <!-- Profile Dropdown Button -->
            <div class="topbar-item hs-dropdown relative inline-flex">
                <button class="cursor-pointer bg-pink-100 rounded-full" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <img src="%BASE%/images/user/avatar-1.png" alt="user-image" class="hs-dropdown-toggle rounded-full size-9.5">
                </button>

                <div class="hs-dropdown-menu min-w-48" role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-with-icons">
                    <div class="p-2">
                        <h6 class="mb-2 text-default-500">Welcome to Tailwick</h6>

                        <a href="#!" class="flex gap-3">
                            <div class="relative inline-block">
                                <div class="rounded bg-default-200">
                                    <img src="%BASE%/images/user/avatar-1.png" alt="" class="size-12 rounded">
                                </div>
                                <span class="-top-1 -end-1 absolute w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                            </div>

                            <div>
                                <h6 class="mb-1 text-sm font-semibold text-default-800">Paula Keenan</h6>
                                <p class="text-default-500">CEO & Founder</p>
                            </div>
                        </a>
                    </div>

                    <div class="border-t border-t-default-200 -mx-2 my-2"></div>

                    <div class="flex flex-col gap-y-1">
                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/apps-mailbox">
                            <i data-lucide="mail" class="size-4"></i>
                            Inbox
                            <span class="size-4.5 font-semibold bg-danger rounded text-white flex items-center justify-center text-xs">15</span>
                        </a>

                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/apps-chat">
                            <i data-lucide="messages-square" class="size-4"></i>
                            Chat
                        </a>

                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/pages-pricing">
                            <i data-lucide="gem" class="size-4"></i>
                            Upgrade Pro
                        </a>

                        <div class="border-t border-default-200 -mx-2 my-1"></div>

                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="/auth-basic-logout">
                            <i data-lucide="log-out" class="size-4"></i>
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Topbar End -->