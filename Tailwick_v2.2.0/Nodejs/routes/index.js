import express from 'express';

const route = express.Router();

route.get('/', (req, res, next) => {
    res.render('index', { title: 'Ecommerce',subtitle: 'Dashboards' });
});

route.get('/index', (req, res, next) => {
    res.render('index', { title: 'Ecommerce',subtitle: 'Dashboards' });
});

route.get('/apps-calendar', (req, res, next) => {
    res.render('apps-calendar', { title: 'Calendar', subtitle: 'Menu' });
});

route.get('/apps-chat', (req, res, next) => {
    res.render('apps-chat', { title: 'Chat' });
});

route.get('/apps-invoice-add-new', (req, res, next) => {
    res.render('apps-invoice-add-new', { title: 'Add New', subtitle: 'Menu' });
});

route.get('/apps-invoice-list', (req, res, next) => {
    res.render('apps-invoice-list', { title: 'List View', subtitle: 'Menu' });
});

route.get('/apps-invoice-overview', (req, res, next) => {
    res.render('apps-invoice-overview', { title: 'Invoice Overview', subtitle: 'Menu' });
});

route.get('/apps-mailbox', (req, res, next) => {
    res.render('apps-mailbox', { title: 'Mailbox', subtitle: 'Apps' });
});

route.get('/apps-notes', (req, res, next) => {
    res.render('apps-notes', { title: 'Notes', subtitle: 'Menu' });
});

route.get('/apps-users-grid', (req, res, next) => {
    res.render('apps-users-grid', { title: 'Grid View', subtitle: 'Menu' });
});

route.get('/apps-users-list', (req, res, next) => {
    res.render('apps-users-list', { title: 'List View', subtitle: 'Users' });
});

route.get('/auth-basic-create-password', (req, res, next) => {
    res.render('auth-basic-create-password', { title: 'Create Password' });
});

route.get('/auth-basic-login', (req, res, next) => {
    res.render('auth-basic-login', { title: 'Login' });
});

route.get('/auth-basic-logout', (req, res, next) => {
    res.render('auth-basic-logout', { title: 'Logout' });
});

route.get('/auth-basic-register', (req, res, next) => {
    res.render('auth-basic-register', { title: 'Sign In' });
});

route.get('/auth-basic-reset-password', (req, res, next) => {
    res.render('auth-basic-reset-password', { title: 'Reset Password' });
});

route.get('/auth-basic-two-steps', (req, res, next) => {
    res.render('auth-basic-two-steps', { title: 'Two Steps' });
});

route.get('/auth-basic-verify-email', (req, res, next) => {
    res.render('auth-basic-verify-email', { title: 'Verify Email' });
});


route.get('/auth-boxed-create-password', (req, res, next) => {
    res.render('auth-boxed-create-password', { title: 'Create Password' });
});

route.get('/auth-boxed-login', (req, res, next) => {
    res.render('auth-boxed-login', { title: 'Login' });
});

route.get('/auth-boxed-logout', (req, res, next) => {
    res.render('auth-boxed-logout', { title: 'Logout' });
});

route.get('/auth-boxed-register', (req, res, next) => {
    res.render('auth-boxed-register', { title: 'Register' });
});

route.get('/auth-boxed-reset-password', (req, res, next) => {
    res.render('auth-boxed-reset-password', { title: 'Reset Password' });
});

route.get('/auth-boxed-two-steps', (req, res, next) => {
    res.render('auth-boxed-two-steps', { title: 'Two Steps' });
});

route.get('/auth-cover-create-password', (req, res, next) => {
    res.render('auth-cover-create-password', { title: 'Create Password' });
});

route.get('/auth-cover-login', (req, res, next) => {
    res.render('auth-cover-login', { title: 'Login' });
});

route.get('/auth-cover-logout', (req, res, next) => {
    res.render('auth-cover-logout', { title: 'Logout' });
});

route.get('/auth-cover-register', (req, res, next) => {
    res.render('auth-cover-register', { title: 'Register' });
});

route.get('/auth-cover-reset-password', (req, res, next) => {
    res.render('auth-cover-reset-password', { title: 'Reset Password' });
});

route.get('/auth-cover-two-steps', (req, res, next) => {
    res.render('auth-cover-two-steps', { title: 'Two Steps' });
});

route.get('/auth-cover-verify-email', (req, res, next) => {
    res.render('auth-cover-verify-email', { title: 'Verify Email' });
});

route.get('/auth-modern-create-password', (req, res, next) => {
    res.render('auth-modern-create-password', { title: 'Create Password' });
});

route.get('/auth-modern-login', (req, res, next) => {
    res.render('auth-modern-login', { title: 'Login' });
});

route.get('/auth-modern-logout', (req, res, next) => {
    res.render('auth-modern-logout', { title: 'Logout' });
});

route.get('/auth-modern-register', (req, res, next) => {
    res.render('auth-modern-register', { title: 'Register' });
});

route.get('/auth-modern-reset-password', (req, res, next) => {
    res.render('auth-modern-reset-password', { title: 'Reset Password' });
});

route.get('/auth-modern-two-steps', (req, res, next) => {
    res.render('auth-modern-two-steps', { title: 'Two Steps' });
});

route.get('/auth-modern-verify-email', (req, res, next) => {
    res.render('auth-modern-verify-email', { title: 'Verify Email' });
});

route.get('/dashboards-analytics', (req, res, next) => {
    res.render('dashboards-analytics', { title: 'Analytics', subtitle: 'Dashboards' });
});

route.get('/dashboards-email', (req, res, next) => {
    res.render('dashboards-email', { title: 'Dashboards', subtitle: 'Email Analytics' });
});

route.get('/dashboards-hr', (req, res, next) => {
    res.render('dashboards-hr', { title: 'Dashboards', subtitle: 'HR' });
});

route.get('/apps-ecommerce-cart', (req, res, next) => {
    res.render('apps-ecommerce-cart', { title: 'Shopping Cart', subtitle: 'Menu' });
});
route.get('/apps-ecommerce-checkout', (req, res, next) => {
    res.render('apps-ecommerce-checkout', { title: 'Checkout', subtitle: 'Menu' });
});

route.get('/apps-ecommerce-order-overview', (req, res, next) => {
    res.render('apps-ecommerce-order-overview', { title: 'Order Overview', subtitle: 'Menu' });
});

route.get('/apps-ecommerce-orders', (req, res, next) => {
    res.render('apps-ecommerce-orders', { title: 'Orders', subtitle: 'Orders' });
});

route.get('/apps-ecommerce-product-create', (req, res, next) => {
    res.render('apps-ecommerce-product-create', { title: 'Product Create', subtitle: 'Menu' });
});

route.get('/apps-ecommerce-product-grid', (req, res, next) => {
    res.render('apps-ecommerce-product-grid', { title: 'Product Grid', subtitle: 'Menu' });
});

route.get('/apps-ecommerce-product-list', (req, res, next) => {
    res.render('apps-ecommerce-product-list', { title: 'Product List', subtitle: 'Menu' });
});

route.get('/apps-ecommerce-product-overview', (req, res, next) => {
    res.render('apps-ecommerce-product-overview', { title: 'Product Overview', subtitle: 'Menu' });
});

route.get('/apps-ecommerce-sellers', (req, res, next) => {
    res.render('apps-ecommerce-sellers', { title: 'Sellers', subtitle: 'Menu' });
});

route.get('/apps-hr-attendance', (req, res, next) => {
    res.render('apps-hr-attendance', { title: 'Attendance', subtitle: 'Menu' });
});

route.get('/apps-hr-attendance-main', (req, res, next) => {
    res.render('apps-hr-attendance-main', { title: 'Main Attendance', subtitle: 'Menu' });
});

route.get('/apps-hr-create-leave', (req, res, next) => {
    res.render('apps-hr-create-leave', { title: 'Add Leave (HR)', subtitle: 'Menu' });
});

route.get('/apps-hr-create-leave-employee', (req, res, next) => {
    res.render('apps-hr-create-leave-employee', { title: 'Add Leave (Employee)', subtitle: 'Menu' });
});

route.get('/apps-hr-department', (req, res, next) => {
    res.render('apps-hr-department', { title: 'Hr Department', subtitle: 'Menu' });
});

route.get('/apps-hr-employee', (req, res, next) => {
    res.render('apps-hr-employee', { title: 'Employee List', subtitle: 'Menu' });
});

route.get('/apps-hr-holidays', (req, res, next) => {
    res.render('apps-hr-holidays', { title: 'Holidays', subtitle: 'Menu' });
});

route.get('/apps-hr-leave', (req, res, next) => {
    res.render('apps-hr-leave', { title: 'Leave Manage (HR)', subtitle: 'Menu' });
});

route.get('/apps-hr-leave-employee', (req, res, next) => {
    res.render('apps-hr-leave-employee', { title: 'Leave Manage (Employee)', subtitle: 'Menu' });
});

route.get('/apps-hr-payroll-create-payslip', (req, res, next) => {
    res.render('apps-hr-payroll-create-payslip', { title: 'Create Payslip', subtitle: 'Menu' });
});

route.get('/apps-hr-payroll-employee-salary', (req, res, next) => {
    res.render('apps-hr-payroll-employee-salary', { title: 'Employee Salary', subtitle: 'Menu' });
});

route.get('/apps-hr-payroll-payslip', (req, res, next) => {
    res.render('apps-hr-payroll-payslip', { title: 'Payslip', subtitle: 'Menu' });
});

route.get('/apps-hr-sales-estimates', (req, res, next) => {
    res.render('apps-hr-sales-estimates', { title: 'Estimates', subtitle: 'Menu' });
});

route.get('/apps-hr-sales-expenses', (req, res, next) => {
    res.render('apps-hr-sales-expenses', { title: 'Expenses', subtitle: 'Menu' });
});

route.get('/apps-hr-sales-payments', (req, res, next) => {
    res.render('apps-hr-sales-payments', { title: 'Payments', subtitle: 'Menu' });
});

route.get('/layouts-dark-mode', (req, res, next) => {
    res.render('layouts-dark-mode', { title: 'Dark Mode', subtitle: 'Layouts' });
});

route.get('/layouts-rtl-mode', (req, res, next) => {
    res.render('layouts-rtl-mode', { title: 'Rtl Mode', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-compact', (req, res, next) => {
    res.render('layouts-sidenav-compact', { title: 'Compact Sidenav', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-dark', (req, res, next) => {
    res.render('layouts-sidenav-dark', { title: 'Dark Sidenav', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-hidden', (req, res, next) => {
    res.render('layouts-sidenav-hidden', { title: 'Hidden Sidenav', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-hover', (req, res, next) => {
    res.render('layouts-sidenav-hover', { title: 'Hover View Sidenav', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-hover-active', (req, res, next) => {
    res.render('layouts-sidenav-hover-active', { title: 'Hover Active Sidenav', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-offcanvas', (req, res, next) => {
    res.render('layouts-sidenav-offcanvas', { title: 'Offcanvas Sidenav', subtitle: 'Layouts' });
});

route.get('/layouts-sidenav-small', (req, res, next) => {
    res.render('layouts-sidenav-small', { title: 'Small Sidenav', subtitle: 'Layouts' });
});

route.get('/onepage-landing', (req, res, next) => {
    res.render('onepage-landing', { title: 'One Page Landing' });
});

route.get('/pages-404', (req, res, next) => {
    res.render('pages-404', { title: '404' });
});

route.get('/pages-coming-soon', (req, res, next) => {
    res.render('pages-coming-soon', { title: 'Coming Soon' });
});

route.get('/pages-faqs', (req, res, next) => {
    res.render('pages-faqs', { title: 'FAQs', subtitle: 'Pages' });
});

route.get('/pages-maintenance', (req, res, next) => {
    res.render('pages-maintenance', { title: 'Maintenance' });
});

route.get('/pages-offline', (req, res, next) => {
    res.render('pages-offline', { title: 'Offline' });
});

route.get('/pages-pricing', (req, res, next) => {
    res.render('pages-pricing', { title: 'Pricing', subtitle: 'Pages' });
});

route.get('/pages-starter', (req, res, next) => {
    res.render('pages-starter', { title: 'Starter Page', subtitle: 'Menu' });
});

route.get('/pages-timeline', (req, res, next) => {
    res.render('pages-timeline', { title: 'Timeline', subtitle: 'Components' });
});

route.get('/product-landing', (req, res, next) => {
    res.render('product-landing', { title: 'Landing' });
});

export default route;