<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Payments";
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
                $title = "Payments";
                include './partials/page-title.php' ?>

                <div class="card">
                    <div class="card-header">
                        <div class="flex gap-3">
                            <div class="relative">
                                <input type="email" class="form-input form-input-sm ps-9" placeholder="Search for....">
                                <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                                    <i data-lucide="search" class="size-4 flex items-center text-default-500"></i>
                                </div>
                            </div>

                            <input type="text" id="dateRangeFilterInput" class="form-input form-input-sm" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y" data-range-date="true">
                        </div>

                        <div>
                            <select type="text" id="dateRangeFilterInput" class="form-input form-input-sm" placeholder="Select date">
                                <option value="Accepted">Failed</option>
                                <option value="Declined" selected>Paid</option>
                                <option value="Expired">Pending</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <div class="overflow-x-auto">
                            <div class="min-w-full inline-block align-middle">
                                <div class="overflow-hidden">
                                    <table class="min-w-full  divide-y divide-default-200">
                                        <thead class="bg-default-150">
                                            <tr class="text-sm font-normal text-default-500">
                                                <th scope="col" class="px-3.5 py-3 text-start">Payment ID </th>
                                                <th scope="col" class="px-3.5 py-3 text-start">Membership Plan </th>
                                                <th scope="col" class="px-3.5 py-3 text-start">Date </th>
                                                <th scope="col" class="px-3.5 py-3 text-start">Payment Type </th>
                                                <th scope="col" class="px-3.5 py-3 text-start">Username </th>
                                                <th scope="col" class="px-3.5 py-3 text-start">Amount</th>
                                                <th scope="col" class="px-3.5 py-3 text-start">Status</th>
                                            </tr>
                                        </thead>

                                        <tbody class="divide-y divide-default-200">
                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021320</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Regular License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> 02 July, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">PayPal</td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Infra Teach </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$2,403 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">
                                                        <span class="size-1.5 me-1 rounded-full bg-success inline-block"></span>Paid
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021321</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> Extended License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> 08 Nov, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">Credit Card </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Kim Broberg </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$1,341 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning">
                                                        <span class="size-1.5 me-1 rounded-full bg-warning inline-block"></span>Pending
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021322</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> Extended License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">11 Aug, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">Bank Transfer </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Everett Moore </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$816.21 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger">
                                                        <span class="size-1.5 me-1 rounded-full bg-danger inline-block"></span>Failed
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021323</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Regular License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> 20 Sep, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">PayPal</td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Omari Welch </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$1,184 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">
                                                        <span class="size-1.5 me-1 rounded-full bg-success inline-block"></span>Paid
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021324</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Regular License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> 07 Oct, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">Debit Card </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Susana Dooley </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$5,463 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">
                                                        <span class="size-1.5 me-1 rounded-full bg-success inline-block"></span>Paid
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021325</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Regular License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> 18 Dec, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">PayPal</td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Paul Gerhold </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$3,463 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning">
                                                        <span class="size-1.5 me-1 rounded-full bg-warning inline-block"></span>Pending
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021326</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> Extended License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">21 Jan, 2024 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">Bank Transfer </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Lucie Beahan </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$1,543 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-danger/15 text-danger">
                                                        <span class="size-1.5 me-1 rounded-full bg-danger inline-block"></span>Failed
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021327</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Regular License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">02 Feb, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">PayPal</td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Jose White </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$4,177 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">
                                                        <span class="size-1.5 me-1 rounded-full bg-success inline-block"></span>Paid
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021328</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm"> Extended License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">11 Dec, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">Debit Card </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Jonas Frederiksen </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$2,307 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-warning/15 text-warning">
                                                        <span class="size-1.5 me-1 rounded-full bg-warning inline-block"></span>Pending
                                                    </span>
                                                </td>
                                            </tr>

                                            <tr class="text-default-800 font-normal">
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm text-primary">
                                                    <a href="#">#TWP10021329</a>
                                                </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Extended License </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">01 Jan, 2023 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm ">PayPal</td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">Stephen Tillman </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">$543.99 </td>
                                                <td class="px-3.5 py-2.5 whitespace-nowrap text-sm">
                                                    <span class="inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/15 text-success">
                                                        <span class="size-1.5 me-1 rounded-full bg-success inline-block"></span>Paid
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div class="card-footer">
                            <p class="text-default-500 text-sm">Showing <b>8</b> of <b>10</b> Results</p>
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
                            </nav>
                        </div>
                    </div>
                </div>
            </main>

            <?php include('./partials/footer.php'); ?>
        </div>

        <?php include('./partials/customizer.php'); ?>

        <script src="/src/scripts/components/timepicker.js" type="module"></script>
</body>

</html>