<?php

$dispatcher = FastRoute\simpleDispatcher(function (FastRoute\RouteCollector $r) {
	$r->addRoute('GET', '/', function ($ROUTE_PARAMS) {
		include('pages/index.php');
	});

	$r->addRoute('GET', '/apps-calendar', function ($ROUTE_PARAMS) {
		include('pages/apps-calendar.php');
	});

	$r->addRoute('GET', '/apps-chat', function ($ROUTE_PARAMS) {
		include('pages/apps-chat.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-cart', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-cart.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-checkout', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-checkout.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-order-overview', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-order-overview.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-orders', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-orders.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-product-create', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-product-create.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-product-grid', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-product-grid.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-product-list', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-product-list.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-product-overview', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-product-overview.php');
	});

	$r->addRoute('GET', '/apps-ecommerce-sellers', function ($ROUTE_PARAMS) {
		include('pages/apps-ecommerce-sellers.php');
	});

	$r->addRoute('GET', '/apps-hr-attendance', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-attendance.php');
	});

	$r->addRoute('GET', '/apps-hr-attendance-main', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-attendance-main.php');
	});

	$r->addRoute('GET', '/apps-hr-create-leave', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-create-leave.php');
	});

	$r->addRoute('GET', '/apps-hr-create-leave-employee', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-create-leave-employee.php');
	});

	$r->addRoute('GET', '/apps-hr-department', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-department.php');
	});

	$r->addRoute('GET', '/apps-hr-employee', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-employee.php');
	});

	$r->addRoute('GET', '/apps-hr-holidays', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-holidays.php');
	});

	$r->addRoute('GET', '/apps-hr-leave', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-leave.php');
	});

	$r->addRoute('GET', '/apps-hr-leave-employee', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-leave-employee.php');
	});

	$r->addRoute('GET', '/apps-hr-payroll-create-payslip', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-payroll-create-payslip.php');
	});

	$r->addRoute('GET', '/apps-hr-payroll-employee-salary', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-payroll-employee-salary.php');
	});

	$r->addRoute('GET', '/apps-hr-payroll-payslip', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-payroll-payslip.php');
	});

	$r->addRoute('GET', '/apps-hr-sales-estimates', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-sales-estimates.php');
	});

	$r->addRoute('GET', '/apps-hr-sales-expenses', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-sales-expenses.php');
	});

	$r->addRoute('GET', '/apps-hr-sales-payments', function ($ROUTE_PARAMS) {
		include('pages/apps-hr-sales-payments.php');
	});

	$r->addRoute('GET', '/apps-invoice-add-new', function ($ROUTE_PARAMS) {
		include('pages/apps-invoice-add-new.php');
	});

	$r->addRoute('GET', '/apps-invoice-list', function ($ROUTE_PARAMS) {
		include('pages/apps-invoice-list.php');
	});

	$r->addRoute('GET', '/apps-invoice-overview', function ($ROUTE_PARAMS) {
		include('pages/apps-invoice-overview.php');
	});

	$r->addRoute('GET', '/apps-mailbox', function ($ROUTE_PARAMS) {
		include('pages/apps-mailbox.php');
	});

	$r->addRoute('GET', '/apps-notes', function ($ROUTE_PARAMS) {
		include('pages/apps-notes.php');
	});

	$r->addRoute('GET', '/apps-users-grid', function ($ROUTE_PARAMS) {
		include('pages/apps-users-grid.php');
	});

	$r->addRoute('GET', '/apps-users-list', function ($ROUTE_PARAMS) {
		include('pages/apps-users-list.php');
	});

	$r->addRoute('GET', '/auth-basic-create-password', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-create-password.php');
	});

	$r->addRoute('GET', '/auth-basic-login', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-login.php');
	});

	$r->addRoute('GET', '/auth-basic-logout', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-logout.php');
	});

	$r->addRoute('GET', '/auth-basic-register', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-register.php');
	});

	$r->addRoute('GET', '/auth-basic-reset-password', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-reset-password.php');
	});

	$r->addRoute('GET', '/auth-basic-two-steps', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-two-steps.php');
	});

	$r->addRoute('GET', '/auth-basic-verify-email', function ($ROUTE_PARAMS) {
		include('pages/auth-basic-verify-email.php');
	});

	$r->addRoute('GET', '/auth-boxed-create-password', function ($ROUTE_PARAMS) {
		include('pages/auth-boxed-create-password.php');
	});

	$r->addRoute('GET', '/auth-boxed-login', function ($ROUTE_PARAMS) {
		include('pages/auth-boxed-login.php');
	});

	$r->addRoute('GET', '/auth-boxed-logout', function ($ROUTE_PARAMS) {
		include('pages/auth-boxed-logout.php');
	});

	$r->addRoute('GET', '/auth-boxed-register', function ($ROUTE_PARAMS) {
		include('pages/auth-boxed-register.php');
	});

	$r->addRoute('GET', '/auth-boxed-reset-password', function ($ROUTE_PARAMS) {
		include('pages/auth-boxed-reset-password.php');
	});

	$r->addRoute('GET', '/auth-boxed-two-steps', function ($ROUTE_PARAMS) {
		include('pages/auth-boxed-two-steps.php');
	});

	$r->addRoute('GET', '/auth-cover-create-password', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-create-password.php');
	});

	$r->addRoute('GET', '/auth-cover-login', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-login.php');
	});

	$r->addRoute('GET', '/auth-cover-logout', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-logout.php');
	});

	$r->addRoute('GET', '/auth-cover-register', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-register.php');
	});

	$r->addRoute('GET', '/auth-cover-reset-password', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-reset-password.php');
	});

	$r->addRoute('GET', '/auth-cover-two-steps', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-two-steps.php');
	});

	$r->addRoute('GET', '/auth-cover-verify-email', function ($ROUTE_PARAMS) {
		include('pages/auth-cover-verify-email.php');
	});

	$r->addRoute('GET', '/auth-modern-create-password', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-create-password.php');
	});

	$r->addRoute('GET', '/auth-modern-login', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-login.php');
	});

	$r->addRoute('GET', '/auth-modern-logout', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-logout.php');
	});

	$r->addRoute('GET', '/auth-modern-register', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-register.php');
	});

	$r->addRoute('GET', '/auth-modern-reset-password', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-reset-password.php');
	});

	$r->addRoute('GET', '/auth-modern-two-steps', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-two-steps.php');
	});

	$r->addRoute('GET', '/auth-modern-verify-email', function ($ROUTE_PARAMS) {
		include('pages/auth-modern-verify-email.php');
	});

	$r->addRoute('GET', '/dashboards-analytics', function ($ROUTE_PARAMS) {
		include('pages/dashboards-analytics.php');
	});

	$r->addRoute('GET', '/dashboards-email', function ($ROUTE_PARAMS) {
		include('pages/dashboards-email.php');
	});

	$r->addRoute('GET', '/dashboards-hr', function ($ROUTE_PARAMS) {
		include('pages/dashboards-hr.php');
	});

	$r->addRoute('GET', '/layouts-dark-mode', function ($ROUTE_PARAMS) {
		include('pages/layouts-dark-mode.php');
	});

	$r->addRoute('GET', '/layouts-rtl-mode', function ($ROUTE_PARAMS) {
		include('pages/layouts-rtl-mode.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-compact', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-compact.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-dark', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-dark.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-hidden', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-hidden.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-hover', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-hover.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-hover-active', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-hover-active.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-offcanvas', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-offcanvas.php');
	});

	$r->addRoute('GET', '/layouts-sidenav-small', function ($ROUTE_PARAMS) {
		include('pages/layouts-sidenav-small.php');
	});

	$r->addRoute('GET', '/onepage-landing', function ($ROUTE_PARAMS) {
		include('pages/onepage-landing.php');
	});

	$r->addRoute('GET', '/pages-404', function ($ROUTE_PARAMS) {
		include('pages/pages-404.php');
	});

	$r->addRoute('GET', '/pages-coming-soon', function ($ROUTE_PARAMS) {
		include('pages/pages-coming-soon.php');
	});

	$r->addRoute('GET', '/pages-faqs', function ($ROUTE_PARAMS) {
		include('pages/pages-faqs.php');
	});

	$r->addRoute('GET', '/pages-maintenance', function ($ROUTE_PARAMS) {
		include('pages/pages-maintenance.php');
	});

	$r->addRoute('GET', '/pages-offline', function ($ROUTE_PARAMS) {
		include('pages/pages-offline.php');
	});

	$r->addRoute('GET', '/pages-pricing', function ($ROUTE_PARAMS) {
		include('pages/pages-pricing.php');
	});

	$r->addRoute('GET', '/pages-starter', function ($ROUTE_PARAMS) {
		include('pages/pages-starter.php');
	});

	$r->addRoute('GET', '/pages-timeline', function ($ROUTE_PARAMS) {
		include('pages/pages-timeline.php');
	});

	$r->addRoute('GET', '/product-landing', function ($ROUTE_PARAMS) {
		include('pages/product-landing.php');
	});
});

// Fetch method and URI from somewhere
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Strip query string (?foo=bar) and decode URI
if (false !== $pos = strpos($uri, '?')) {
	$uri = substr($uri, 0, $pos);
}
$uri = rawurldecode($uri);

$routeInfo = $dispatcher->dispatch($httpMethod, $uri);
switch ($routeInfo[0]) {
	case FastRoute\Dispatcher::NOT_FOUND:
		http_response_code(404);
		die('Not found...');
		break;
	// case FastRoute\Dispatcher::METHOD_NOT_ALLOWED:
	// 	$allowedMethods = $routeInfo[1];
	// 	// ... 405 Method Not Allowed
	// 	break;
	case FastRoute\Dispatcher::FOUND:
		$routeInfo[1]($routeInfo[2]);
		break;
}
