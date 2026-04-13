<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Register";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="bg-cover  bg-no-repeat bg-[url('../images/auth-bg.jpg')] dark:bg-[url('../images/auth-bg-dark.jpg')]  h-screen w-full flex justify-center items-center">
        <div class="relative">
            <div class="bg-card/70 rounded-lg w-lg relative">
                <div class="text-center px-10 py-12">
                    <a href="/" class="flex justify-center">
                        <img src="/images/logo-dark.png" alt="logo dark" class="h-6 block dark:hidden">
                        <img src="/images/logo-light.png" alt="logo light" class="h-6 hidden dark:block" alt="">
                    </a>

                    <div class="mt-8 text-center">
                        <h4 class="mb-2.5 text-xl font-semibold text-purple-500">Welcome Back !</h4>
                        <p class="text-base text-default-500">Sign in to continue to Tailwick.</p>
                    </div>

                    <!-- form -->
                    <form action="/" class="text-left w-full mt-10">
                        <div class="mb-4">
                            <label for="email" class="block  font-medium text-default-900 text-sm mb-2">Enter email</label>
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

                        <div class="my-9 relative text-center  before:absolute before:top-2.5 before:left-0 before:border-t before:border-t-default-200 before:w-full before:h-0.5 before:right-0 before:-z-0">
                            <h4 class="relative z-1 py-0.5 px-2 inline-block font-medium bg-card rounded-md">Create Account with</h4>
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
                                <a href="/auth-cover-login" class="font-semibold underline hover:text-primary transition duration-200"> Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>

</html>