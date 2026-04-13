<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Reset Password";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="bg-cover  bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')]  min-h-screen flex justify-center items-center">
        <div class="relative">
            <div class="bg-card/70 rounded-lg w-2/3 mx-auto">
                <div class="grid lg:grid-cols-12 grid-cols-1 items-center gap-0">
                    <div class="lg:col-span-5">
                        <div class="text-center px-10 py-12">
                            <div class="mt-8">
                                <h4 class="mb-2 text-primary text-xl font-semibold">Forgot Password?</h4>
                                <p class="text-base mb-8 text-default-500">Reset your Tailwick password</p>
                            </div>

                            <div class="p-3 mb-6 text-warning rounded-md bg-warning/15">
                                Provide your email address, and instructions will be sent to you
                            </div>

                            <form action="/">
                                <div class="text-start">
                                    <label for="Email" class="inline-block mb-2 text-sm text-default-800 font-medium">Email</label>
                                    <input type="text" id="Email" class="form-input" placeholder="Enter Email" />
                                </div>

                                <div class="mt-8">
                                    <button type="button" class="btn bg-primary text-white w-full">Send Reset Link</button>
                                </div>

                                <div class="mt-4 text-center">
                                    <p class="text-base text-default-800">Wait, I remember my password... <a href="/auth-boxed-login" class="text-primary underline"> Click here </a></p>
                                </div>
                            </form>
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

                                <div>
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