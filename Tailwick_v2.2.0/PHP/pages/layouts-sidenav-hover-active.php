<!DOCTYPE html>
<html lang="en" data-sidenav-size="hover-active">

<head>
    <?php $title = "Hover Active Sidenav";
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

                <?php $subtitle = "Layouts";
                $title = "Hover Active Sidenav";
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