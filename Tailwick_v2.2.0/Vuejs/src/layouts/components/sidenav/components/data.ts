import type { MenuItemType } from '@/types/layout'

export const menuItems: MenuItemType[] = [
  {
    key: 'overview-title',
    label: 'Overview',
    isTitle: true
  },
  {
    key: 'dashboards',
    label: 'Dashboards',
    icon: 'lucide:monitor-dot',
    children: [
      { key: 'analytics', label: 'Analytics', url: '/dashboard/analytics' },
      { key: 'ecommerce', label: 'Ecommerce', url: '/dashboard/ecommerce' },
      { key: 'email', label: 'Email', url: '/dashboard/email' },
      { key: 'hr', label: 'HR', url: '/dashboard/hr' }
    ]
  },
  {
    key: 'landing',
    label: 'Landing Page',
    icon: 'lucide:picture-in-picture-2',
    children: [
      { key: 'one-page', label: 'One Page', url: '/landing/one-page' },
      { key: 'product', label: 'Product', url: '/landing/product' }
    ]
  },
  {
    key: 'apps-title',
    label: 'Apps',
    isTitle: true
  },
  {
    key: 'chat',
    label: 'Chat',
    icon: 'lucide:messages-square',
    url: '/apps/chat'
  },
  {
    key: 'calendar',
    label: 'Calendar',
    icon: 'lucide:calendar-1',
    url: '/apps/calendar'
  },
  {
    key: 'email',
    label: 'Email',
    icon: 'lucide:mail',
    url: '/apps/email'
  },
  {
    key: 'notes',
    label: 'Notes',
    icon: 'lucide:clipboard-list',
    url: '/apps/notes'
  },
  {
    key: 'ecommerce',
    label: 'Ecommerce',
    icon: 'lucide:shopping-bag',
    children: [
      { key: 'product', label: 'Products', url: '/ecommerce/product' },
      { key: 'product-grid', label: 'Products Grid', url: '/ecommerce/product-grid' },
      { key: 'product-detail', label: 'Product Details', url: '/ecommerce/product-detail' },
      { key: 'cart', label: 'Shopping Cart', url: '/ecommerce/cart' },
      { key: 'checkout', label: 'Checkout', url: '/ecommerce/checkout' },
      { key: 'product-add', label: 'Add Products', url: '/ecommerce/product-add' },
      { key: 'order', label: 'Orders', url: '/ecommerce/order' },
      { key: 'order-detail', label: 'Order Details', url: '/ecommerce/order-detail' },
      { key: 'sellers', label: 'Sellers', url: '/ecommerce/sellers' }
    ]
  },
  {
    key: 'hr-management',
    label: 'HR Management',
    icon: 'lucide:circuit-board',
    children: [
      { key: 'employee', label: 'Employee List', url: '/hr-management/employee' },
      { key: 'holidays', label: 'Holidays', url: '/hr-management/holidays' },
      {
        key: 'leave-manage',
        label: 'Leave Manage',
        parentKey: 'hr-management',
        children: [
          { key: 'leave-employee', label: 'By Employee', url: '/hr-management/leave-employee' },
          { key: 'add-employee', label: 'Add Leave(Employee)', url: '/hr-management/add-employee' },
          { key: 'leave-hr', label: 'By HR', url: '/hr-management/leave-hr' },
          { key: 'add-hr', label: 'Add Leave(HR)', url: '/hr-management/add-hr' }
        ]
      },
      {
        key: 'attendance',
        label: 'Attendance',
        parentKey: 'hr-management',
        children: [
          { key: 'attendance', label: 'Attendance(HR)', url: '/hr-management/attendance' },
          { key: 'attendance-main', label: 'Main Attendance', url: '/hr-management/attendance-main' }
        ]
      },
      { key: 'department', label: 'Department', url: '/hr-management/department' },
      {
        key: 'sales',
        label: 'Sales',
        parentKey: 'hr-management',
        children: [
          { key: 'estimates', label: 'Estimates', url: '/hr-management/estimates' },
          { key: 'payments', label: 'Payments', url: '/hr-management/payments' },
          { key: 'expenses', label: 'Expenses', url: '/hr-management/expenses' }
        ]
      },
      {
        key: 'sales',
        label: 'Payroll',
        parentKey: 'hr-management',
        children: [
          { key: 'employee-salary', label: 'Employee Salary', url: '/hr-management/employee-salary' },
          { key: 'payslip', label: 'Payslip', url: '/hr-management/payslip' },
          { key: 'create-payslip', label: 'Create Payslip', url: '/hr-management/create-payslip' }
        ]
      }
    ]
  },
  {
    key: 'invoice',
    label: 'Invoice',
    icon: 'lucide:file-text',
    children: [
      { key: 'overview', label: 'Overview', url: '/invoice/overview' },
      { key: 'list', label: 'List Invoice', url: '/invoice/list' },
      { key: 'add', label: 'Add Invoice', url: '/invoice/add' }
    ]
  },
  {
    key: 'users',
    label: 'Users',
    icon: 'lucide:square-user-round',
    children: [
      { key: 'list', label: 'List View', url: '/user/list' },
      { key: 'grid', label: 'Grid View', url: '/user/grid' }
    ]
  },
  {
    key: 'extra-title',
    label: 'Extra',
    isTitle: true
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: 'lucide:codesandbox',
    children: [
      { key: 'starter', label: 'Starter Page', url: '/starter' },
      { key: 'pricing', label: 'Pricing', url: '/pricing' },
      { key: 'faqs', label: 'FAQ', url: '/faqs' },
      { key: 'maintenance', label: 'Maintenance', url: '/maintenance' },
      { key: 'timeline', label: 'Timeline', url: '/timeline' },
      { key: 'coming-soon', label: 'Coming Soon', url: '/coming-soon' },
      { key: 'error', label: '404', url: '/error' },
      { key: 'offline', label: 'Offline', url: '/offline' }
    ]
  },
  {
    key: 'basic-auth',
    label: 'Basic Auth',
    icon: 'lucide:lock',
    children: [
      { key: 'login', label: 'Login', url: '/basic-auth/login' },
      { key: 'register', label: 'Register', url: '/basic-auth/register' },
      { key: 'verify-email', label: 'Verify Email', url: '/basic-auth/verify-email' },
      { key: 'two-steps', label: 'Two Steps', url: '/basic-auth/two-steps' },
      { key: 'logout', label: 'Logout', url: '/basic-auth/logout' },
      { key: 'reset-pass', label: 'Reset Password', url: '/basic-auth/reset-pass' },
      { key: 'create-pass', label: 'Create Password', url: '/basic-auth/create-pass' }
    ]
  },
  {
    key: 'cover-auth',
    label: 'Cover Auth',
    icon: 'lucide:shield-check',
    children: [
      { key: 'login', label: 'Login', url: '/cover-auth/login' },
      { key: 'register', label: 'Register', url: '/cover-auth/register' },
      { key: 'verify-email', label: 'Verify Email', url: '/cover-auth/verify-email' },
      { key: 'two-steps', label: 'Two Steps', url: '/cover-auth/two-steps' },
      { key: 'logout', label: 'Logout', url: '/cover-auth/logout' },
      { key: 'reset-pass', label: 'Reset Password', url: '/cover-auth/reset-pass' },
      { key: 'create-pass', label: 'Create Password', url: '/cover-auth/create-pass' }
    ]
  },
  {
    key: 'boxed-auth',
    label: 'Boxed Auth',
    icon: 'lucide:package',
    children: [
      { key: 'login', label: 'Login', url: '/boxed-auth/login' },
      { key: 'register', label: 'Register', url: '/boxed-auth/register' },
      { key: 'verify-email', label: 'Verify Email', url: '/boxed-auth/verify-email' },
      { key: 'two-steps', label: 'Two Steps', url: '/boxed-auth/two-steps' },
      { key: 'logout', label: 'Logout', url: '/boxed-auth/logout' },
      { key: 'reset-pass', label: 'Reset Password', url: '/boxed-auth/reset-pass' },
      { key: 'create-pass', label: 'Create Password', url: '/boxed-auth/create-pass' }
    ]
  },
  {
    key: 'modern-auth',
    label: 'Modern Auth',
    icon: 'lucide:fingerprint',
    children: [
      { key: 'login', label: 'Login', url: '/mordern-auth/login' },
      { key: 'register', label: 'Register', url: '/mordern-auth/register' },
      { key: 'verify-email', label: 'Verify Email', url: '/mordern-auth/verify-email' },
      { key: 'two-steps', label: 'Two Steps', url: '/mordern-auth/two-steps' },
      { key: 'logout', label: 'Logout', url: '/mordern-auth/logout' },
      { key: 'reset-pass', label: 'Reset Password', url: '/mordern-auth/reset-pass' },
      { key: 'create-pass', label: 'Create Password', url: '/mordern-auth/create-pass' }
    ]
  },
  {
    key: 'layouts',
    label: 'Layouts',
    icon: 'lucide:layout-panel-left',
    children: [
      { key: 'hover-sidenav', label: 'Hover Sidenav', url: '/layout/hover-sidebar' },
      { key: 'hover-active-sideba', label: 'Hover Active Sidenav', url: '/layout/hover-active-sidebar' },
      { key: 'small-sidebar', label: 'Small Sidenav', url: '/layout/small-sidebar' },
      { key: 'compact-sidenav', label: 'Compact Sidenav', url: '/layout/compact-sidebar' },
      { key: 'offcanvas-sidenav', label: 'Offcanvas Sidenav', url: '/layout/offcavas-sidebar' },
      { key: 'hidden-sidenav', label: 'Hidden Sidenav', url: '/layout/hidden-sidebar' },
      { key: 'dark-sidenav', label: 'Dark Sidenav', url: '/layout/dark-sidebar' },
      { key: 'dark-mode', label: 'Dark Mode', url: '/layout/dark-mode' },
      { key: 'rtl-mode', label: 'RTL Mode', url: '/layout/rtl-mode' }
    ]
  },
  {
    key: 'multi-level',
    label: 'Multi Level',
    icon: 'lucide:share-2',
    children: [
      { key: 'item-1', label: 'Item 1', url: '' },
      { key: 'item-2', label: 'Item 2', url: '' }
    ]
  }
]
