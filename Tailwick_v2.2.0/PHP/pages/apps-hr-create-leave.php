<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Add Leave (HR)";
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
                $title = "Add Leave (HR)";
                include './partials/page-title.php' ?>

                <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    <div class="lg:col-span-3 col-span-1">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title">Add Leave</h6>
                            </div>

                            <div class="card-body">
                                <div class="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
                                    <div>
                                        <label for="employeeName" class="inline-block mb-2 text-sm text-default-800 font-medium">Employee</label>
                                        <select class="form-input">
                                            <option value="">Select Employee</option>
                                            <option value="Willie Torres">Willie Torres</option>
                                            <option value="Patricia Garcia">Patricia Garcia</option>
                                            <option value="Juliette Fecteau">Juliette Fecteau</option>
                                            <option value="Thomas Hatfield">Thomas Hatfield</option>
                                            <option value="Willie Torres">Willie Torres</option>
                                            <option value="Juliette Fecteau">Juliette Fecteau</option>
                                            <option value="Nancy Reynolds">Nancy Reynolds</option>
                                            <option value="Holly Kavanaugh">Holly Kavanaugh</option>
                                            <option value="Jonas Frederiksen">Jonas Frederiksen</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="employeeId" class="inline-block mb-2 text-sm text-default-800 font-medium">Employee ID</label>
                                        <input type="text" id="employeeId" class="form-input" value="#TWE1001501" disabled>
                                    </div>

                                    <div>
                                        <label for="employeeName" class="inline-block mb-2 text-sm text-default-800 font-medium">Leave Type</label>
                                        <select class="form-input">
                                            <option value="">Select Leave Type</option>
                                            <option value="Medical Leave">Medical Leave</option>
                                            <option value="Casual Leave">Casual Leave</option>
                                            <option value="Sick Leave">Sick Leave</option>
                                            <option value="Annual Leave">Annual Leave</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label for="remainingLeaves" class="inline-block mb-2 text-sm text-default-800 font-medium">Remaining Leaves</label>
                                        <input type="text" id="remainingLeaves" class="form-input" value="18" disabled>
                                    </div>

                                    <div>
                                        <label for="fromInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Form</label>
                                        <input type="text" id="fromInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y">
                                    </div>

                                    <div>
                                        <label for="toInput" class="inline-block mb-2 text-sm text-default-800 font-medium">To</label>
                                        <input type="text" id="toInput" class="form-input" placeholder="Select date" data-provider="flatpickr" data-date-format="d M, Y">
                                    </div>

                                    <div>
                                        <label for="numberOfDayLeaves" class="inline-block mb-2 text-sm text-default-800 font-medium">Number of Days</label>
                                        <input type="text" id="numberOfDayLeaves" class="form-input" value="01" disabled>
                                    </div>

                                    <div>
                                        <label for="" class="inline-block mb-2 text-sm text-default-800 font-medium">Leave Day</label>
                                        <select class="form-input">
                                            <option value="">Select Leave Day</option>
                                            <option value="Full Day">Full Day</option>
                                            <option value="Half Day">Half Day</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="grid grid-cols-1 gap-5">
                                    <div>
                                        <label for="reasonInput" class="inline-block mb-2 text-sm text-default-800 font-medium">Reason</label>
                                        <textarea class="form-input" id="reasonInput" rows="3"></textarea>
                                    </div>
                                </div>

                                <div class="flex justify-end gap-2 mt-5">
                                    <button class="btn border-0 text-danger bg-transparent hover:bg-danger/10">Reset</button>
                                    <button class="btn bg-primary text-white">Apply Leave</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-span-1">
                        <div class="card">
                            <div class="card-header">
                                <h6 class="card-title">Leave Information (2023)</h6>
                            </div>
                            <div class="card-body">
                                <table class="w-full mb-0 text-sm">
                                    <tbody>
                                        <tr>
                                            <td class="py-2.5 text-default-800">Medical Leave</td>
                                            <th class="py-2.5 text-default-800 font-semibold">04</th>
                                        </tr>

                                        <tr>
                                            <td class="py-2.5 text-default-800">Casual Leave</td>
                                            <th class="py-2.5 text-default-800 font-semibold">08</th>
                                        </tr>

                                        <tr>
                                            <td class="py-2.5 text-default-800">Sick Leave</td>
                                            <th class="py-2.5 text-default-800 font-semibold">03</th>
                                        </tr>

                                        <tr>
                                            <td class="py-2.5 text-default-800">Annual Leave</td>
                                            <th class="py-2.5 text-default-800 font-semibold">12</th>
                                        </tr>

                                        <tr>
                                            <td class="py-2.5 text-default-800">Use Leave</td>
                                            <th class="py-2.5 text-default-800 font-semibold">09</th>
                                        </tr>

                                        <tr>
                                            <td class="py-2.5 text-default-800">Remaining Leave</td>
                                            <th class="py-2.5 text-default-800 font-semibold">18</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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