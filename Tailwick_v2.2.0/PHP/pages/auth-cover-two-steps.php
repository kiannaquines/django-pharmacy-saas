<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Two Steps";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="bg-cover  bg-no-repeat bg-[url(../images/auth-bg.jpg)] dark:bg-[url('../images/auth-bg-dark.jpg')]   h-screen w-full flex justify-center items-center">
        <div class="relative">
            <div class="bg-default-50 rounded-lg w-lg relative">
                <div class="text-center px-10 py-12">
                    <a href="/" class="flex justify-center">
                        <img src="/images/logo-dark.png" alt="logo dark" class="h-6 block dark:hidden">
                        <img src="/images/logo-light.png" alt="logo light" class="h-6 hidden dark:block" alt="">
                    </a>

                    <div class="mt-8">
                        <h4 class="mb-2 text-primary text-xl font-semibold">Verify Email</h4>
                        <p class="text-base mb-8 text-default-500">Please enter the 4 digit code sent to tailwick@themesdesign.in</p>
                    </div>

                    <form action="/">
                        <div class="grid grid-cols-4 gap-2">
                            <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                            <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                            <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                            <input type="text" class="form-input text-center" placeholder="•" maxlength="1" />
                        </div>

                        <div class="mt-10">
                            <button type="button" class="btn bg-primary text-white w-full">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>

</html>