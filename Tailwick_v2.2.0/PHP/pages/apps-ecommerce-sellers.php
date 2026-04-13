<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Sellers";
    include('./partials/title-meta.php') ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <div class="wrapper">

        <?php include('./partials/sidenav.php'); ?>

        <!-- Start Page Content here -->
        <div class="page-content">

            <?php include('./partials/topbar.php'); ?>

            <main>

                <?php $subtitle = "Menu";
                $title = "Sellers";
                include './partials/page-title.php' ?>

                <div class="flex justify-between gap-3 flex-wrap items-center mb-5">
                    <div class="relative">
                        <input type="email" class="ps-11 form-input" placeholder="Search for...">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3">
                            <i data-lucide="search" class="size-4 flex items-center text-default-500"></i>
                        </div>
                    </div>

                    <button type="button" class="btn  bg-primary text-white" aria-haspopup="dialog" aria-expanded="false" aria-controls="ecommerce-sellers-add" data-hs-overlay="#ecommerce-sellers-add">
                        <i data-lucide="plus" class="size-4 ms-1"></i>
                        Add Seller
                    </button>
                </div>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-warning fill-warning/10"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--google-adwords size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Themesdesign</h6>
                                    <p class="text-default-500 text-sm">Paula Keenan</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">4.5k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">310</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$235.3k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-warning fill-warning/10"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--apple-app-store size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Nazox Fashion</h6>
                                    <p class="text-default-500 text-sm">Kara Miller</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">2.3k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">67</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$235.3k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-default-500 fill-default-100"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--google-gmail size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">4xM Infotech</h6>
                                    <p class="text-default-500 text-sm">Daniel Miller</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">7.1k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">138</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$465.9k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-warning fill-warning/10"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--android-icon size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Extra Fashion</h6>
                                    <p class="text-default-500 text-sm">Mark Walton</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">1.9k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">49</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$198.3k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-warning fill-warning/10"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--figma size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Nesta Technologies</h6>
                                    <p class="text-default-500 text-sm">William Heineman</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">4.8k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">172</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$746.1k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-default-500 fill-default-100"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--meta-icon size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Digitech Galaxy</h6>
                                    <p class="text-default-500 text-sm">David Biggs</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">9.2k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">674</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$14.4m</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-default-500 fill-default-100"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--google-icon size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Zoetic Fashion</h6>
                                    <p class="text-default-500 text-sm">Jaqueline Hammes</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">1.8k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">112</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$132.4k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <div class="flex justify-between gap-5 items-center mb-4">
                                <i data-lucide="heart" class="size-5 text-default-500 fill-default-100"></i>

                                <div class="hs-dropdown relative inline-flex">
                                    <button type="button" class="hs-dropdown-toggle btn size-7.5 bg-default-200 hover:bg-default-600 text-default-500 hover:text-white" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" hs-dropdown-placement="bottom-end">
                                        <i class="iconify lucide--ellipsis size-4"></i>
                                    </button>
                                    <div class="hs-dropdown-menu" role="menu">
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="eye" class="size-3"></i>
                                            Overview
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="edit" class="size-3"></i>
                                            Edit
                                        </a>
                                        <a class="flex items-center gap-1.5 py-1.5 font-medium px-3 text-default-500 hover:bg-default-150 rounded" href="#">
                                            <i data-lucide="trash-2" class="size-3"></i>
                                            Delete
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="flex items-center justify-center mx-auto rounded-full size-16 bg-default-100 outline outline-default-100 outline-offset-4">
                                    <i class="iconify-color logos--telegram size-10"></i>
                                </div>

                                <div class="mt-4 mb-6 text-center">
                                    <h6 class="text-base text-default-800 font-semibold">Force Medicines</h6>
                                    <p class="text-default-500 text-sm">Ashley Uilson</p>
                                </div>

                                <div class="grid grid-cols-3">
                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">4.1k</h6>
                                        <p class="text-default-500">Sales</p>
                                    </div>

                                    <div class="text-center p-2 border-e border-s border-dashed border-default-200 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">243</h6>
                                        <p class="text-default-500">Product</p>
                                    </div>

                                    <div class="text-center p-2 text-sm">
                                        <h6 class="mb-1 text-default-800 font-semibold">$861.7k</h6>
                                        <p class="text-default-500">Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center md:justify-between items-center md:gap-0 gap-4 mt-5 text-default-500">
                    <p class="text-default-500 text-sm">Showing <b>12</b> of <b>44</b> Results</p>
                    <nav class="flex items-center gap-2" aria-label="Pagination">
                        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                            <i data-lucide="chevron-left" class="size-4 me-1"></i> Prev
                        </button>

                        <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                            1
                        </button>

                        <button type="button" class="btn size-7.5 bg-primary text-white">
                            2
                        </button>

                        <button type="button" class="btn size-7.5 bg-transparent border border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">
                            3
                        </button>

                        <button type="button" class="btn btn-sm border bg-transparent border-default-200 text-default-600 hover:bg-primary/10 hover:text-primary hover:border-primary/10">Next
                            <i data-lucide="chevron-right" class="size-4 ms-1"></i>
                        </button>

                </div>
            </main>

            <?php include('./partials/footer.php'); ?>

        </div>
    </div>

    <?php include('./partials/customizer.php'); ?>

    <div id="ecommerce-sellers-add" class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="ecommerce-sellers-add-label">
        <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
            <div class="w-full flex flex-col card border border-default-200 shadow-2xs rounded-xl pointer-events-auto">
                <div class="card-header">
                    <h3 id="ecommerce-sellers-add-label" class="font-semibold text-base text-default-800">
                        Add Seller
                    </h3>

                    <button type="button" class="size-5 text-default-800" aria-label="Close" data-hs-overlay="#ecommerce-sellers-add">
                        <span class="sr-only">Close</span>
                        <i data-lucide="x" class="size-5"></i>
                    </button>
                </div>

                <div class="card-body overflow-y-auto">
                    <div class="mb-4">
                        <label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">Company Logo</label>
                        <div class="flex items-center justify-center bg-transparent border border-dashed rounded-md cursor-pointer dropzone border-default-300 dropzone2">
                            <div class="w-full py-5 text-lg text-center dz-message needsclick">
                                <div class="mb-3 flex justify-center">
                                    <i data-lucide="upload-cloud" class="size-12 fill-default-200 text-default-500"></i>
                                </div>

                                <h5 class="mb-0 font-normal text-[15px] text-default-500">Drag and drop your files or <a href="#">browse</a> your files</h5>
                            </div>
                        </div>
                    </div>

                    <div class="mb-4">
                        <label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">Company Name</label>
                        <input id="" type="text" class="form-input" placeholder="Seller name">
                    </div>

                    <div>
                        <label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">Owner Name</label>
                        <input id="" type="text" class="form-input" placeholder="Owner Name">
                    </div>

                    <div class="mt-4 flex gap-2 md:justify-end">
                        <button class="btn border-0 text-danger bg-transparent transition-all duration-300 hover:bg-danger/10" aria-label="Close" data-hs-overlay="#ecommerce-sellers-add">Cancel</button>

                        <button class="btn bg-primary text-white">Add Seller</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</body>

</html>