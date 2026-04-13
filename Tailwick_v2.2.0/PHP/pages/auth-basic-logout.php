<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Logout";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="relative min-h-screen w-full flex justify-center items-center py-16 md:py-10">
        <div class="card md:w-lg w-screen z-10">
            <div class="text-center px-10 py-12">
                <!-- Logo -->
                <a href="/" class="flex justify-center">
                    <img src="/images/logo-dark.png" alt="logo dark" class="h-6 flex dark:hidden">
                    <img src="/images/logo-light.png" alt="logo light" class="h-6 hidden dark:flex" alt="">
                </a>

                <div class="mt-8 text-center">
                    <div class="mb-4">
                        <i data-lucide="log-out" class="size-6 text-purple-500 fill-purple-100 mx-auto"></i>
                    </div>
                    <h4 class="mb-2 text-primary text-xl font-semibold">You are Logged Out</h4>
                    <p class="mb-8 text-base text-default-500">Thank you for using tailwick admin template
                    </p>
                </div>
                <a href="/">
                    <button class="btn bg-primary text-white w-full">Sign In</button>
                </a>
            </div>
        </div>

        <div class="absolute inset-0 overflow-hidden">
            <svg aria-hidden="true" class="absolute inset-0 size-full fill-black/2 stroke-black/5 dark:fill-white/2.5 dark:stroke-white/2.5">
                <defs>
                    <pattern id="authPattern" width="56" height="56" patternUnits="userSpaceOnUse" x="50%" y="16">
                        <path d="M.5 56V.5H72" fill="none"></path>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#authPattern)"></rect>
            </svg>
        </div>
    </div>

</body>

</html>