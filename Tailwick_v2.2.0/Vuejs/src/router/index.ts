import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard/ecommerce'
    },
    {
      path: '/dashboard/ecommerce',
      name: 'Dashboard Ecommerce',
      meta: {
        title: 'Dashboard Ecommerce'
      },
      component: () => import('@/views/dashboard/ecommerce/index.vue')
    },
    {
      path: '/dashboard/analytics',
      name: 'Dashboard Analytics',
      meta: {
        title: 'Dashboard Analytics'
      },
      component: () => import('@/views/dashboard/analytics/index.vue')
    },
    {
      path: '/dashboard/email',
      name: 'Dashboard Email',
      meta: {
        title: 'Dashboard Email'
      },
      component: () => import('@/views/dashboard/email/index.vue')
    },
    {
      path: '/dashboard/hr',
      name: 'Dashboard Hr',
      meta: {
        title: 'Dashboard Hr'
      },
      component: () => import('@/views/dashboard/hr/index.vue')
    },
    {
      path: '/landing/one-page',
      name: 'Landing One page',
      meta: {
        title: 'Dashboard Hr'
      },
      component: () => import('@/views/landing/one-page/index.vue')
    },
    {
      path: '/landing/product',
      name: 'Landing Product',
      meta: {
        title: 'Landing Product'
      },
      component: () => import('@/views/landing/product/index.vue')
    },
    {
      path: '/apps/chat',
      name: 'Chat',
      meta: {
        title: 'Chat'
      },
      component: () => import('@/views/apps/chat/index.vue')
    },
    {
      path: '/apps/calendar',
      name: 'Calendar',
      meta: {
        title: 'Calendar'
      },
      component: () => import('@/views/apps/calendar/index.vue')
    },
    {
      path: '/apps/email',
      name: 'Email',
      meta: {
        title: 'Email'
      },
      component: () => import('@/views/apps/email/index.vue')
    },
    {
      path: '/apps/notes',
      name: 'Notes',
      meta: {
        title: 'Notes'
      },
      component: () => import('@/views/apps/notes/index.vue')
    },
    {
      path: '/ecommerce/product',
      name: 'Products',
      meta: {
        title: 'Products'
      },
      component: () => import('@/views/ecommerce/product/index.vue')
    },
    {
      path: '/ecommerce/product-grid',
      name: 'Products Grid',
      meta: {
        title: 'Products Grid'
      },
      component: () => import('@/views/ecommerce/product-grid/index.vue')
    },
    {
      path: '/ecommerce/product-detail',
      name: 'Product Details',
      meta: {
        title: 'Product Details'
      },
      component: () => import('@/views/ecommerce/product-detail/index.vue')
    },
    {
      path: '/ecommerce/cart',
      name: 'Product Cart',
      meta: {
        title: 'Product Cart'
      },
      component: () => import('@/views/ecommerce/cart/index.vue')
    },
    {
      path: '/ecommerce/checkout',
      name: 'Product Checkout',
      meta: {
        title: 'Product Checkout'
      },
      component: () => import('@/views/ecommerce/checkout/index.vue')
    },
    {
      path: '/ecommerce/product-add',
      name: 'Add Products',
      meta: {
        title: 'Add Products'
      },
      component: () => import('@/views/ecommerce/product-add/index.vue')
    },
    {
      path: '/ecommerce/order',
      name: 'Order',
      meta: {
        title: 'Order'
      },
      component: () => import('@/views/ecommerce/order/index.vue')
    },
    {
      path: '/ecommerce/order-detail',
      name: 'Order Detail',
      meta: {
        title: 'Order Detail'
      },
      component: () => import('@/views/ecommerce/order-detail/index.vue')
    },
    {
      path: '/ecommerce/sellers',
      name: 'Sellers',
      meta: {
        title: 'Sellers'
      },
      component: () => import('@/views/ecommerce/sellers/index.vue')
    },
    {
      path: '/hr-management/employee',
      name: 'Employee List',
      meta: {
        title: 'Employee List'
      },
      component: () => import('@/views/hr-management/employee/index.vue')
    },
    {
      path: '/hr-management/holidays',
      name: 'Holidays',
      meta: {
        title: 'Holidays'
      },
      component: () => import('@/views/hr-management/holidays/index.vue')
    },
    {
      path: '/hr-management/leave-employee',
      name: 'By Employee',
      meta: {
        title: 'By Employee'
      },
      component: () => import('@/views/hr-management/(leave-manage)/leave-employee/index.vue')
    },
    {
      path: '/hr-management/add-employee',
      name: 'Add Leave(Employee)',
      meta: {
        title: 'Add Leave(Employee)'
      },
      component: () => import('@/views/hr-management/(leave-manage)/add-employee/index.vue')
    },
    {
      path: '/hr-management/leave-hr',
      name: 'By HR',
      meta: {
        title: 'By HR'
      },
      component: () => import('@/views/hr-management/(leave-manage)/leave-hr/index.vue')
    },
    {
      path: '/hr-management/add-hr',
      name: 'Add Leave(HR)',
      meta: {
        title: 'Add Leave(HR)'
      },
      component: () => import('@/views/hr-management/(leave-manage)/add-hr/index.vue')
    },
    {
      path: '/hr-management/attendance',
      name: 'Attendance(HR)',
      meta: {
        title: 'Attendance(HR)'
      },
      component: () => import('@/views/hr-management/(attendance)/attendance/index.vue')
    },
    {
      path: '/hr-management/attendance-main',
      name: 'Attendance Main',
      meta: {
        title: 'Attendance Main'
      },
      component: () => import('@/views/hr-management/(attendance)/attendance-main/index.vue')
    },
    {
      path: '/hr-management/department',
      name: 'Department',
      meta: {
        title: 'Department'
      },
      component: () => import('@/views/hr-management/department/index.vue')
    },
    {
      path: '/hr-management/estimates',
      name: 'Estimates',
      meta: {
        title: 'Estimates'
      },
      component: () => import('@/views/hr-management/(sales)/estimates/index.vue')
    },
    {
      path: '/hr-management/payments',
      name: 'Payments',
      meta: {
        title: 'Payments'
      },
      component: () => import('@/views/hr-management/(sales)/payments/index.vue')
    },
    {
      path: '/hr-management/expenses',
      name: 'Expenses',
      meta: {
        title: 'Expenses'
      },
      component: () => import('@/views/hr-management/(sales)/expenses/index.vue')
    },
    {
      path: '/hr-management/employee-salary',
      name: 'Employee Salary',
      meta: {
        title: 'Employee Salary'
      },
      component: () => import('@/views/hr-management/(payroll)/employee-salary/index.vue')
    },
    {
      path: '/hr-management/payslip',
      name: 'Payslip',
      meta: {
        title: 'Payslip'
      },
      component: () => import('@/views/hr-management/(payroll)/payslip/index.vue')
    },
    {
      path: '/hr-management/create-payslip',
      name: 'Create Payslip',
      meta: {
        title: 'Create Payslip'
      },
      component: () => import('@/views/hr-management/(payroll)/create-payslip/index.vue')
    },
    {
      path: '/invoice/overview',
      name: 'Overview',
      meta: {
        title: 'Overview'
      },
      component: () => import('@/views/invoice/overview/index.vue')
    },
    {
      path: '/invoice/list',
      name: 'List Invoice',
      meta: {
        title: 'List Invoice'
      },
      component: () => import('@/views/invoice/list/index.vue')
    },
    {
      path: '/invoice/add',
      name: 'Add Invoice',
      meta: {
        title: 'Add Invoice'
      },
      component: () => import('@/views/invoice/add/index.vue')
    },
    {
      path: '/user/list',
      name: 'List View',
      meta: {
        title: 'List View'
      },
      component: () => import('@/views/user/list/index.vue')
    },
    {
      path: '/user/grid',
      name: 'Grid View',
      meta: {
        title: 'Grid View'
      },
      component: () => import('@/views/user/grid/index.vue')
    },
    {
      path: '/starter',
      name: 'Starter Page',
      meta: {
        title: 'Starter Page'
      },
      component: () => import('@/views/(pages)/starter/index.vue')
    },
    {
      path: '/pricing',
      name: 'Pricing',
      meta: {
        title: 'Pricing'
      },
      component: () => import('@/views/(pages)/pricing/index.vue')
    },
    {
      path: '/faqs',
      name: 'Faq',
      meta: {
        title: 'Faq'
      },
      component: () => import('@/views/(pages)/faqs/index.vue')
    },
    {
      path: '/maintenance',
      name: 'Maintenance',
      meta: {
        title: 'Maintenance'
      },
      component: () => import('@/views/(pages)/maintenance/index.vue')
    },
    {
      path: '/timeline',
      name: 'Timeline',
      meta: {
        title: 'Timeline'
      },
      component: () => import('@/views/(pages)/timeline/index.vue')
    },
    {
      path: '/coming-soon',
      name: 'Coming Soon',
      meta: {
        title: 'Coming Soon'
      },
      component: () => import('@/views/(pages)/coming-soon/index.vue')
    },
    {
      path: '/error',
      name: 'Error',
      meta: {
        title: 'Error'
      },
      component: () => import('@/views/(pages)/error/index.vue')
    },
    {
      path: '/offline',
      name: 'Offline',
      meta: {
        title: 'Offline'
      },
      component: () => import('@/views/(pages)/offline/index.vue')
    },
    {
      path: '/basic-auth/login',
      name: 'Basic Login',
      meta: {
        title: 'Basic Login'
      },
      component: () => import('@/views/(auth)/basic-auth/login/index.vue')
    },
    {
      path: '/basic-auth/register',
      name: 'Basic Register',
      meta: {
        title: 'Basic Register'
      },
      component: () => import('@/views/(auth)/basic-auth/register/index.vue')
    },
    {
      path: '/basic-auth/verify-email',
      name: 'Basic Verify-Email',
      meta: {
        title: 'Basic Verify-Email'
      },
      component: () => import('@/views/(auth)/basic-auth/verify-email/index.vue')
    },
    {
      path: '/basic-auth/two-steps',
      name: 'Basic Two Steps',
      meta: {
        title: 'Basic Two Steps'
      },
      component: () => import('@/views/(auth)/basic-auth/two-steps/index.vue')
    },
    {
      path: '/basic-auth/logout',
      name: 'Basic Logout',
      meta: {
        title: 'Basic Logout'
      },
      component: () => import('@/views/(auth)/basic-auth/logout/index.vue')
    },
    {
      path: '/basic-auth/reset-pass',
      name: 'Reset Password',
      meta: {
        title: 'Reset Password'
      },
      component: () => import('@/views/(auth)/basic-auth/reset-pass/index.vue')
    },
    {
      path: '/basic-auth/create-pass',
      name: 'Create Password',
      meta: {
        title: 'Create Password'
      },
      component: () => import('@/views/(auth)/basic-auth/create-pass/index.vue')
    },
    {
      path: '/cover-auth/login',
      name: 'Cover Login',
      meta: {
        title: 'Cover Login'
      },
      component: () => import('@/views/(auth)/cover-auth/login/index.vue')
    },
    {
      path: '/cover-auth/register',
      name: 'Cover Resgister',
      meta: {
        title: 'Cover Resgister'
      },
      component: () => import('@/views/(auth)/cover-auth/register/index.vue')
    },
    {
      path: '/cover-auth/verify-email',
      name: 'Cover Verify Email',
      meta: {
        title: 'Cover Verify Email'
      },
      component: () => import('@/views/(auth)/cover-auth/verify-email/index.vue')
    },
    {
      path: '/cover-auth/two-steps',
      name: 'Cover Two Steps',
      meta: {
        title: 'Cover Two Steps'
      },
      component: () => import('@/views/(auth)/cover-auth/two-steps/index.vue')
    },
    {
      path: '/cover-auth/logout',
      name: 'Cover Logout',
      meta: {
        title: 'Cover Logout'
      },
      component: () => import('@/views/(auth)/cover-auth/logout/index.vue')
    },
    {
      path: '/cover-auth/reset-pass',
      name: 'Cover Reset PassWord',
      meta: {
        title: 'Cover Reset PassWord'
      },
      component: () => import('@/views/(auth)/cover-auth/reset-pass/index.vue')
    },
    {
      path: '/cover-auth/create-pass',
      name: 'Cover Create PassWord',
      meta: {
        title: 'Cover Reset PassWord'
      },
      component: () => import('@/views/(auth)/cover-auth/create-pass/index.vue')
    },
    {
      path: '/boxed-auth/login',
      name: 'Boxed Login',
      meta: {
        title: 'Boxed Login'
      },
      component: () => import('@/views/(auth)/boxed-auth/login/index.vue')
    },
    {
      path: '/boxed-auth/register',
      name: 'Boxed Register',
      meta: {
        title: 'Boxed Register'
      },
      component: () => import('@/views/(auth)/boxed-auth/register/index.vue')
    },
    {
      path: '/boxed-auth/verify-email',
      name: 'Boxed Verify Email',
      meta: {
        title: 'Boxed Verify Email'
      },
      component: () => import('@/views/(auth)/boxed-auth/verify-email/index.vue')
    },
    {
      path: '/boxed-auth/two-steps',
      name: 'Boxed Two Steps',
      meta: {
        title: 'Boxed Two Steps'
      },
      component: () => import('@/views/(auth)/boxed-auth/two-steps/index.vue')
    },
    {
      path: '/boxed-auth/logout',
      name: 'Boxed Logout',
      meta: {
        title: 'Boxed Logout'
      },
      component: () => import('@/views/(auth)/boxed-auth/logout/index.vue')
    },
    {
      path: '/boxed-auth/reset-pass',
      name: 'Boxed Reset Password',
      meta: {
        title: 'Reset Password'
      },
      component: () => import('@/views/(auth)/boxed-auth/reset-pass/index.vue')
    },
    {
      path: '/boxed-auth/create-pass',
      name: 'Boxed Create Password',
      meta: {
        title: 'Create Password'
      },
      component: () => import('@/views/(auth)/boxed-auth/create-pass/index.vue')
    },
    {
      path: '/mordern-auth/login',
      name: 'Mordern Login',
      meta: {
        title: 'Mordern Login'
      },
      component: () => import('@/views/(auth)/mordern-auth/login/index.vue')
    },
    {
      path: '/mordern-auth/register',
      name: 'Mordern Register',
      meta: {
        title: 'Mordern Register'
      },
      component: () => import('@/views/(auth)/mordern-auth/register/index.vue')
    },
    {
      path: '/mordern-auth/verify-email',
      name: 'Mordern Verify Email',
      meta: {
        title: 'Mordern Verify Email'
      },
      component: () => import('@/views/(auth)/mordern-auth/verify-email/index.vue')
    },
    {
      path: '/mordern-auth/two-steps',
      name: 'Mordern Two Steps',
      meta: {
        title: 'Two Steps'
      },
      component: () => import('@/views/(auth)/mordern-auth/two-steps/index.vue')
    },
    {
      path: '/mordern-auth/logout',
      name: 'Mordern Two Logout',
      meta: {
        title: 'Two Logout'
      },
      component: () => import('@/views/(auth)/mordern-auth/logout/index.vue')
    },
    {
      path: '/mordern-auth/reset-pass',
      name: 'Mordern Reset Pass',
      meta: {
        title: 'Reset Pass'
      },
      component: () => import('@/views/(auth)/mordern-auth/reset-pass/index.vue')
    },
    {
      path: '/mordern-auth/create-pass',
      name: 'Mordern Create Password',
      meta: {
        title: 'Create Password'
      },
      component: () => import('@/views/(auth)/mordern-auth/create-pass/index.vue')
    },
    {
      path: '/layout/hover-sidebar',
      name: 'Hover Sidenav',
      meta: {
        title: 'Hover Sidenav'
      },
      component: () => import('@/views/layout/hover-sidebar/index.vue')
    },
    {
      path: '/layout/hover-active-sidebar',
      name: 'Hover Active Sidenav',
      meta: {
        title: 'Hover Active Sidenav'
      },
      component: () => import('@/views/layout/hover-active-sidebar/index.vue')
    },
    {
      path: '/layout/small-sidebar',
      name: 'Small Sidenav',
      meta: {
        title: 'Small Sidenav'
      },
      component: () => import('@/views/layout/small-sidebar/index.vue')
    },
    {
      path: '/layout/compact-sidebar',
      name: 'Compact Sidebar',
      meta: {
        title: 'Compact Sidebar'
      },
      component: () => import('@/views/layout/compact-sidebar/index.vue')
    },
    {
      path: '/layout/offcavas-sidebar',
      name: 'Offcanvas SideBar',
      meta: {
        title: 'Offcanvas Sidebar'
      },
      component: () => import('@/views/layout/offcavas-sidebar/index.vue')
    },
    {
      path: '/layout/hidden-sidebar',
      name: 'Hidden SideBar',
      meta: {
        title: 'Hidden SideBar'
      },
      component: () => import('@/views/layout/hidden-sidebar/index.vue')
    },
    {
      path: '/layout/dark-sidebar',
      name: 'Dark SideBar',
      meta: {
        title: 'Dark SideBar'
      },
      component: () => import('@/views/layout/dark-sidebar/index.vue')
    },
    {
      path: '/layout/dark-mode',
      name: 'Dark Mode',
      meta: {
        title: 'Dark Mode'
      },
      component: () => import('@/views/layout/dark-mode/index.vue')
    },
    {
      path: '/layout/rtl-mode',
      name: 'Rtl Mode',
      meta: {
        title: 'Rtl Mode'
      },
      component: () => import('@/views/layout/rtl-mode/index.vue')
    }
  ]
})

export default router
