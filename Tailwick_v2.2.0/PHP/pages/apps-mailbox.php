<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Mailbox";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="wrapper">

        <?php include('./partials/sidenav.php'); ?>

        <!-- Start Page Content Here -->
        <div class="page-content">

            <?php include('./partials/topbar.php'); ?>

            <main class="overflow-x-hidden">

                <?php $subtitle = "Apps";
                $title = "Mailbox";
                include './partials/page-title.php' ?>

                <div class="grid grid-cols-1">
                    <div class="col-span-1">
                        <div class="card">
                            <div class="flex">
                                <div class="lg:border-e border-default-200">
                                    <div id="mailBoxSidebar" class="hs-overlay [--auto-close:lg] lg:block lg:translate-x-0 lg:static lg:end-auto lg:bottom-0 w-64 hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform h-full hidden fixed top-0 start-0 bottom-0 overflow-hidden z-60" role="dialog" tabindex="-1" aria-label="Sidebar">
                                        <div class="card shadow-none relative flex flex-col h-full max-h-full overflow-hidden">
                                            <div class="card-body">
                                                <button class="btn bg-danger text-white w-full" data-hs-overlay="#addEmailModal">
                                                    <i data-lucide="plus" class="size-4"></i>
                                                    Compose Email
                                                </button>

                                                <div class="mt-4 text-sm">
                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="inbox" class="size-4"></i>
                                                        <span>Inbox</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="star" class="size-4"></i>
                                                        <span>Starred</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="pen-square" class="size-4"></i>
                                                        <span>Draft</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="step-forward" class="size-4"></i>
                                                        <span>Important</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="alert-octagon" class="size-4"></i>
                                                        <span>Spam</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="user-circle" class="size-4"></i>
                                                        <span>Contacts</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="trash-2" class="size-4"></i>
                                                        <span>Trash</span>
                                                    </a>

                                                    <p class="py-3 uppercase text-sm text-default-700">Category</p>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="radio-tower" class="size-4"></i>
                                                        <span>Social</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="squirrel" class="size-4"></i>
                                                        <span>Update</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="file-text" class="size-4"></i>
                                                        <span>Forums</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="tag" class="size-4"></i>
                                                        <span>Promotions</span>
                                                    </a>

                                                    <p class="py-3 uppercase text-sm text-default-700">Label</p>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="circle-dot" class="text-danger size-4"></i>
                                                        <span>Support</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="circle-dot" class="text-primary size-4"></i>
                                                        <span>Freelance</span>
                                                    </a>

                                                    <a href="#" class="py-2 flex gap-3 items-center hover:text-primary text-default-500 transition-all">
                                                        <i data-lucide="circle-dot" class="text-sky-500 size-4"></i>
                                                        <span>Personal</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="w-full relative">
                                    <div class="card-header">
                                        <div class="flex items-center gap-4.5">
                                            <button class="lg:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="mailBoxSidebar" aria-label="Toggle navigation" data-hs-overlay="#mailBoxSidebar">
                                                <i data-lucide="align-left" class="size-6"></i>
                                            </button>

                                            <input id="checkAll" type="checkbox" class="form-checkbox checked:bg-primary">
                                            <button><i data-lucide="refresh-cw" class="size-4 text-default-500 hover:text-primary"></i></button>

                                            <div class="w-px h-5 bg-default-200"></div>

                                            <button><i data-lucide="archive-restore" class="size-4 text-default-500 hover:text-primary"></i></button>
                                            <button><i data-lucide="alert-octagon" class="size-4 text-default-500 hover:text-primary"></i></button>
                                            <button><i data-lucide="trash-2" class="size-4 text-default-500 hover:text-primary"></i></button>

                                            <div class="w-px h-5 bg-default-200"></div>

                                            <button><i data-lucide="mail" class="size-4 text-default-500 hover:text-primary"></i></button>
                                            <button><i data-lucide="tag" class="size-4 text-default-500 hover:text-primary"></i></button>
                                            <button><i data-lucide="clock" class="size-4 text-default-500 hover:text-primary"></i></button>
                                        </div>

                                        <div class="flex items-center gap-2">
                                            <div class="relative flex-1">
                                                <input type="email" class="form-input form-input-sm ps-11" placeholder="Search for....">
                                                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                                                    <i data-lucide="search" class="size-4 flex items-center text-default-500"></i>
                                                </div>
                                            </div>

                                            <div class="hs-dropdown relative inline-flex">
                                                <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 text-default-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                                    <i class="iconify lucide--ellipsis size-4 "></i>
                                                </button>

                                                <div class="hs-dropdown-menu" role="menu">
                                                    <a class="flex items-center gap-x-3.5 py-1.5 px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                                        Show more message
                                                    </a>
                                                    <a class="flex items-center gap-x-3.5 py-1.5 px-3  text-default-600 hover:bg-default-150 rounded" href="#">
                                                        Important & Unread
                                                    </a>
                                                    <a class="flex items-center gap-x-3.5 py-1.5 px-3  text-default-600 hover:bg-default-150 rounded" href="#">
                                                        Hide section when empty
                                                    </a>
                                                    <a class="flex items-center gap-x-3.5 py-1.5 px-3  text-default-600 hover:bg-default-150 rounded" href="#">
                                                        All Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="h-166" data-simplebar>
                                        <div class="overflow-x-auto">
                                            <div class="min-w-full inline-block align-middle">
                                                <div class="overflow-hidden">
                                                    <table class="w-full mail-list">
                                                        <tbody class="divide-y divide-default-200">
                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-all" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Tonya Johnson</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Maintain the overall pristine status...</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">10:59 AM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Infra Teach</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">How Custom Software Can Solve Your Business Challenges.</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">04:15 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Facebook</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Post Basic High School, Ratanpur(GA) and 7 others are new Group suggestions for you</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">12:29 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Linkedin</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Front End Developer-HTML/CSS role at Gainserv: 1 connection</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">08:44 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Jobcy - Job Board & Landing</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">You’re invited: Job Search Tactics for Entry-Level Candidates</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">08:10 PM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Holly Kavanaugh
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Information
                                                                    Technology Rules Annual Reminder</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">04:33 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Jose White</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">I just requested
                                                                    to connect -Paula Keenan, respond to Meet’s now.</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">01:19 PM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Patricia Garcia
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">List all
                                                                    mail-enabled users who have specific permissions on the
                                                                    selected mailboxes...</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">01:20 AM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Tonya Johnson
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Maintain the
                                                                    overall pristine status and health of your Exchange
                                                                    Online environment...</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">10:57 AM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Themesdesign
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Your License
                                                                    expired</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">11:54 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Tonya Johnson
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Maintain the
                                                                    overall pristine status...</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">10:59 AM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Infra Teach</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">How Custom
                                                                    Software Can Solve Your Business Challenges.</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">04:15 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Facebook</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Post Basic High
                                                                    School, Ratanpur(GA) and 7 others are new Group
                                                                    suggestions for you</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">12:29 PM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Linkedin</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Front End
                                                                    Developer-HTML/CSS role at Gainserv: 1 connection</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">08:44 PM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Jobcy - Job
                                                                    Board & Landing</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">You’re invited:
                                                                    Job Search Tactics for Entry-Level Candidates</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">08:10 PM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Holly Kavanaugh
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Information
                                                                    Technology Rules Annual Reminder</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">04:33 PM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Jose White</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">I just requested
                                                                    to connect -Paula Keenan, respond to Meet’s now.</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">01:19 PM</td>
                                                            </tr>

                                                            <tr class="text-default-500 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Patricia Garcia
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">List all
                                                                    mail-enabled users who have specific permissions on the
                                                                    selected mailboxes...</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">01:20 AM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Tonya Johnson
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Maintain the
                                                                    overall pristine status and health of your Exchange
                                                                    Online environment...</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">10:57 AM</td>
                                                            </tr>

                                                            <tr class="text-default-800 text-sm" data-hs-overlay="#emailOverview">
                                                                <td class="py-2.5 ps-5">
                                                                    <div class="flex items-center gap-3 h-5">
                                                                        <input id="checkbox-1" type="checkbox" class="form-checkbox checked:bg-primary">
                                                                        <i class="iconify lucide--star size-4 text-default-500 hover:text-yellow-500"></i>
                                                                        <i class="iconify lucide--step-forward size-4 text-default-500 hover:text-yellow-500"></i>
                                                                    </div>
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Themesdesign
                                                                </td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">Your License
                                                                    expired</td>
                                                                <td class="px-3.5 py-2.5 whitespace-nowrap">11:54 PM</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Mail Overview Offcanvas -->
                                    <div id="emailOverview" class="card shadow-none hs-overlay [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 hidden translate-x-full absolute top-0 end-0 transition-all duration-300 transform h-full max-w-full w-full z-80 bg-card" role="dialog" tabindex="-1" aria-labelledby="emailOverview-label">
                                        <div class="card-header py-4">

                                            <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-default-100 text-default-800 hover:bg-default-150 focus:outline-hidden focus:bg-default-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#emailOverview">
                                                <span class="sr-only">Close</span>
                                                <i data-lucide="chevrons-left" class="size-4"></i>
                                            </button>

                                            <div class="flex-grow">
                                                <h3 id="emailOverview-label" class="font-bold text-default-800 mb-1.5">How Custom Software Can Solve Your Business Challenges</h3>
                                                <p class="text-default-500 dark:text-zink-200"><a href="#!">infrateach@tailwick.com</a> (Aug 6, 2023, 9:04 PM)</p>
                                            </div>

                                            <div class="flex gap-3 shrink-0">
                                                <a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-primary dark:hover:text-primary">
                                                    <i data-lucide="archive-restore" class="size-4"></i>
                                                </a>
                                                <a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-sky-500 dark:hover:text-sky-500">
                                                    <i data-lucide="printer" class="size-4"></i>
                                                </a>
                                                <a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-yellow-500 dark:hover:text-yellow-500">
                                                    <i data-lucide="star" class="size-4"></i>
                                                </a>
                                                <a href="#!" class="flex items-center justify-center transition-all duration-200 ease-linear size-6 text-default-500 dark:text-zink-200 hover:text-danger dark:hover:text-danger">
                                                    <i data-lucide="trash-2" class="size-4"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="max-h-150" data-simplebar>
                                            <div class="p-5 space-y-6">
                                                <div class="flex gap-3">
                                                    <div class="relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600">
                                                        <img src="/images/user/avatar-5.png" alt="" class="rounded-full h-9">
                                                    </div>

                                                    <div class="grow">
                                                        <div class="flex items-center">
                                                            <div class="grow">
                                                                <h6>Infra Teach</h6>
                                                                <p class="text-default-500 dark:text-zink-200"><a href="#!">infrateach@tailwick.com</a>
                                                            </div>
                                                            <div class="shrink-0">
                                                                Aug 6, 2023, 9:04 PM
                                                            </div>
                                                        </div>
                                                        <div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600">
                                                            <p class="mb-2 last:mb-0">Hi,</p>
                                                            <p class="mb-2 last:mb-0">Custom software solutions are tailor-made software applications designed to meet the unique needs of a specific business or organization. Unlike off-the-shelf software, which offers a standardized solution for a broad range of users, custom software is precisely crafted to align with the workflows, processes, and objectives of a particular business.</p>
                                                            <p class="mb-2 last:mb-0">The key advantage of custom software lies in its ability to be scalable and flexible. It can evolve alongside the business, accommodating changing requirements and supporting expansion. By adapting to the specific needs of the organization, custom software empowers businesses to gain a competitive edge, differentiate themselves in the market, and deliver enhanced experiences to their customers.</p>
                                                            <p class="mb-2 last:mb-0">Thank You</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="flex gap-3">
                                                    <div class="relative flex items-center justify-center font-semibold bg-pink-100 rounded-full text-default-500 size-9 shrink-0 dark:bg-pink-500/20 dark:text-zink-200">
                                                        <img src="/images/user/avatar-1.png" alt="" class="rounded-full h-9">
                                                    </div>
                                                    <div class="grow">
                                                        <div class="flex items-center">
                                                            <div class="grow">
                                                                <h6>Me</h6>
                                                                <p class="text-default-500 dark:text-zink-200"><a href="#!">paulakeenan@tailwick.com</a>
                                                            </div>
                                                            <div class="shrink-0">
                                                                07 Nov, 2023, 10:14 PM
                                                            </div>
                                                        </div>
                                                        <div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600">
                                                            <p class="mb-2 last:mb-0">Hi,</p>
                                                            <p class="mb-2 last:mb-0">I hope this email finds you well. Let me start by saying that I am a big fan of your work and it has inspired me to push myself beyond what I thought were my limits!</p>
                                                            <p class="mb-2 last:mb-0">After taking a good look at [target company] I realize that you could improve in [improvement area]. I have helped many others improve in the same area and I‘d be more than happy to talk with you about it!</p>
                                                            <p class="mb-2 last:mb-0">Would you be available for a quick call to discuss how our [product/service] could help you?</p>
                                                            <p class="mb-2 last:mb-0">Regards,</p>
                                                            <p class="mb-2 last:mb-0">Themesdesign</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="flex gap-3">
                                                    <div class="relative flex items-center justify-center font-semibold rounded-full text-default-500 size-9 bg-default-100 shrink-0 dark:text-zink-200 dark:bg-zink-600">
                                                        <img src="/images/user/avatar-5.png" alt="" class="rounded-full h-9">
                                                    </div>
                                                    <div class="grow">
                                                        <div class="flex items-center">
                                                            <div class="grow">
                                                                <h6>Infra Teach</h6>
                                                                <p class="text-default-500 dark:text-zink-200"><a href="#!">infrateach@tailwick.com</a>
                                                            </div>
                                                            <div class="shrink-0">
                                                                07 Nov, 2023, 10:42 PM
                                                            </div>
                                                        </div>
                                                        <div class="p-4 mt-3 rounded-md bg-default-100 dark:bg-zink-600">
                                                            <p class="mb-2 last:mb-0">Hello, Themesdesign</p>
                                                            <p class="mb-2 last:mb-0">You are probably very busy, I totally understand that!</p>
                                                            <p class="mb-2 last:mb-0">It would be great to hear back from you. So, please let me know when you find some time.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-footer py-4">
                                            <div class="grow">
                                                <input type="text" id="inputText" class="form-input" placeholder="Enter Message" required autocomplete="off">
                                            </div>

                                            <div class="flex gap-2 shrink-0">
                                                <button type="button" class="btn hover:bg-default-100"><i data-lucide="mic" class="size-4"></i></button>
                                                <button type="button" class="btn hover:bg-default-100"><i data-lucide="image" class="size-4"></i></button>
                                                <button type="button" class="btn bg-primary text-white"><i data-lucide="send" class="inline-block mr-1 align-middle size-4"></i> <span class="align-middle">Send</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <?php include('./partials/footer.php'); ?>

        </div>
        <!-- End Page content -->

    </div>

    <!-- Event Add Modal -->
    <div id="addEmailModal" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="addEmailModal-label">
        <div class=" hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-4xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
            <div class="card w-full border border-default-200 pointer-events-auto">

                <div class="card-header">
                    <h3 class="font-semibold text-base text-default-800">New Message</h3>
                    <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#addEmailModal">
                        <span class="sr-only">Close</span>
                        <i data-lucide="x" class="size-5"></i>
                    </button>
                </div>

                <div class="card-body">
                    <div class="mb-4">
                        <label for="event-title" class="inline-block mb-2 text-base font-medium">To</label>
                        <input type="text" id="event-title" class="form-input" placeholder="tailwink@themesdesign.in">
                    </div>

                    <div class="mb-4">
                        <label for="subject" class="inline-block mb-2 text-base font-medium">Subject</label>
                        <input type="text" id="subject" class="form-input" placeholder="Subject">
                    </div>

                    <div>
                        <label for="Textarea" class="inline-block mb-2 text-base font-medium">Example Textarea</label>
                        <textarea id="Textarea" class="form-input" rows="3"></textarea>
                    </div>
                </div>

                <div class="card-footer flex gap-2 md:justify-end">
                    <button type="reset" data-hs-overlay="#addEmailModal" class="btn text-danger btn border-0 hover:bg-red-50">Cancel</button>

                    <button type="submit" class="btn bg-primary text-white">Send</button>
                </div>


            </div>
        </div>
    </div>

    <?php include('./partials/customizer.php'); ?>

    <script src="/src/scripts/pages/apps-mailbox.js" type="module"></script>

</body>

</html>