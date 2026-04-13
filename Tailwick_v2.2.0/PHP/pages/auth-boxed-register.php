<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Register";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="bg-cover bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')]  min-h-screen flex justify-center items-center">
        <div class="relative">
            <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
                <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
                    <div class="lg:col-span-5">
                        <div>
                            <!-- Tab Nav -->
                            <div class="flex justify-center gap-x-3" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                                <button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-200 font-medium gap-2 flex items-center transition-all duration-300 active" id="tabs-with-underline-item-1" aria-selected="true" data-hs-tab="#tabsForEmail" aria-controls="tabsForEmail" role="tab">
                                    <i data-lucide="mail" class="size-4"></i>
                                    Email
                                </button>

                                <button type="button" class="hs-tab-active:bg-primary hs-tab-active:text-white text-sm py-2.5 px-12 text-default-500 rounded-md bg-default-200 font-medium gap-2 flex items-center transition-all duration-300" id="tabs-with-underline-item-2" aria-selected="false" data-hs-tab="#tabsForPhone" aria-controls="tabsForPhone" role="tab">
                                    <i data-lucide="smartphone" class="size-4"></i>
                                    Phone
                                </button>
                            </div>

                            <!-- Tab Content -->
                            <div class="mt-10 w-110 mx-auto">
                                <!-- Email Tab -->
                                <div id="tabsForEmail" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                                    <form action="/" class="text-left w-full mt-10">
                                        <div class="mb-4">
                                            <label for="email" class="block  font-medium text-default-900 text-sm mb-2">Email ID</label>
                                            <input type="text" id="email" class="form-input" placeholder="Enter Username or email" />
                                        </div>

                                        <div class="mb-4">
                                            <label for="Username" class="block  font-medium text-default-900 text-sm mb-2">Username</label>
                                            <input type="text" id="Username" class="form-input" placeholder="Enter Username" />
                                        </div>

                                        <div class="mb-4">
                                            <label for="Password" class="block  font-medium text-default-900 text-sm mb-2">Password</label>
                                            <input type="text" id="Password" class="form-input" placeholder="Enter Password" />
                                        </div>

                                        <p class="italic text-sm font-medium text-default-500">By registering you agree to the Tailwick <a href="#" class="underline">Terms of Use</a></p>


                                        <div class="mt-10 text-center">
                                            <button type="button" class="btn bg-primary text-white w-full">Sign
                                                In</button>
                                        </div>

                                        <div class="my-9 relative text-center  before:absolute before:top-2.5 before:left-0 before:border-t before:border-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                                            <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create
                                                account with
                                            </h4>
                                        </div>

                                        <div class="flex w-full justify-center items-center gap-2">
                                            <a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                                                <i class="iconify-color logos--google-icon"></i>
                                                Use Google
                                            </a>

                                            <a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                                                <i class="iconify logos--apple"></i>
                                                Use Apple
                                            </a>
                                        </div>

                                        <div class="mt-10 text-center">
                                            <p class="text-base text-default-500">Already have an account ?
                                                <a href="/auth-boxed-login" class="font-semibold underline hover:text-primary transition duration-200">Login</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>

                                <!-- Phone Tab -->
                                <div id="tabsForPhone" class="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                                    <form action="/" class="text-left w-full mt-10">
                                        <div class="mb-4">
                                            <label for="Phone Number" class="block  font-medium text-default-900 text-sm mb-2">Phone
                                                Number</label>
                                            <input type="text" id="Phone Number" class="form-input" placeholder="Enter phone" />
                                        </div>

                                        <div class="mb-4">
                                            <label for="Username" class="block  font-medium text-default-900 text-sm mb-2">Username</label>
                                            <input type="text" id="Username" class="form-input" placeholder="Enter Username" />
                                        </div>

                                        <div class="mb-4">
                                            <label for="Password" class="block  font-medium text-default-900 text-sm mb-2">Password</label>
                                            <input type="text" id="Password" class="form-input" placeholder="Enter Password" />
                                        </div>

                                        <p class="italic text-sm font-medium text-default-500">By registering you agree to the Tailwick <a href="#" class="underline">Terms of Use</a></p>


                                        <div class="mt-10 text-center">
                                            <button type="button" class="btn bg-primary text-white w-full">Sign
                                                In</button>
                                        </div>

                                        <div class="my-9 relative text-center  before:absolute before:top-2.5 before:left-0 before:border-t before:border-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                                            <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create
                                                account with</h4>
                                        </div>

                                        <div class="flex w-full justify-center items-center gap-2">
                                            <a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                                                <i class="iconify-color logos--google-icon"></i>
                                                Use Google
                                            </a>

                                            <a href="#" class="bg-card btn border border-default-200 flex-grow hover:bg-default-150 shadow-sm hover:text-default-800">
                                                <i class="iconify logos--apple"></i>
                                                Use Apple
                                            </a>
                                        </div>

                                        <div class="mt-10 text-center">
                                            <p class="text-base text-default-500">Already have an account ?
                                                <a href="/auth-basic-login" class="font-semibold underline hover:text-primary transition duration-200">Login</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="lg:col-span-7 bg-card/60 mx-2 my-2 shadow-[0_14px_15px_-3px_#f1f5f9,0_4px_6px_-4px_#f1f5f9] dark:shadow-none rounded-lg ">
                        <div class="pt-10 px-10 h-full">
                            <div class="flex items-center justify-between gap-3">
                                <div>
                                    <a href="/">
                                        <img src="/images/logo-dark.png" alt="logo dark" class="h-6 block dark:hidden">
                                        <img src="/images/logo-light.png" alt="logo light" class="h-6 hidden dark:block" alt="">
                                    </a>
                                </div>

                                <!-- Language Dropdown Button -->
                                <div class="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle py-2 px-4 bg-transparent border border-default-200 text-default-600 hover:border-primary rounded-md  hover:text-primary font-medium text-sm gap-2 flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                        <img src="/images/flags/us.jpg" alt="" class="size-5 rounded-full">
                                        English
                                    </button>

                                    <div class="hs-dropdown-menu" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu">
                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/us.jpg" alt="" class="size-4 rounded-full">
                                            English
                                        </a>
                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/spain.jpg" alt="" class="size-4 rounded-full">
                                            Spanish
                                        </a>
                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/germany.jpg" alt="" class="size-4 rounded-full">
                                            German
                                        </a>
                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">

                                            <img src="/images/flags/french.jpg" alt="" class="size-4 rounded-full">
                                            French
                                        </a>

                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/japanese.svg" alt="" class="size-4 rounded-full">
                                            Japanese
                                        </a>

                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/italy.jpg" alt="" class="size-4 rounded-full">
                                            Italian
                                        </a>

                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/russia.jpg" alt="" class="size-4 rounded-full">
                                            Russian
                                        </a>

                                        <a class="flex items-center gap-x-3.5 py-1.5 font-medium px-3 text-default-600 hover:bg-default-150 rounded" href="#">
                                            <img src="/images/flags/arebian.svg" alt="" class="size-4 rounded-full">
                                            Arabic
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto">
                                <img src="/images/boxed.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>