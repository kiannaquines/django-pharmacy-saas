<!DOCTYPE html>
<html lang="en" data-theme="dark">

<head>
    <?php $title = "HR";
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
                $title = "Dark Mode";
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