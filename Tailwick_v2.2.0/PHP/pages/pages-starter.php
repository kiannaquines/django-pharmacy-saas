<?php include('./partials/main.php'); ?>

<head>
    <?php $title = "Starter Page";
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
                $title = "Starter Page";
                include './partials/page-title.php' ?>

                <div class="card h-40">

                </div>

            </main>

            <?php include('./partials/footer.php'); ?>

        </div>
        <!-- End Page content -->

    </div>

    <?php include('./partials/customizer.php'); ?>

</body>

</html>