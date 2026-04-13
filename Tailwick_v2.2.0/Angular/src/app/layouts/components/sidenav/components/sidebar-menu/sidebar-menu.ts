import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";


type MenuItem = {
  type: 'title' | 'item' | 'accordion';
  label: string;
  icon?: string;
  link?: string;
  target?: string;
  children?: MenuItem[];
};

@Component({
  selector: 'app-sidebar-menu',
  imports: [NgIcon, RouterLink, CommonModule],
  templateUrl: './sidebar-menu.html',
  styles: ``
})
export class SidebarMenu {

  menus: MenuItem[] = [
    {
      type: 'title',
      label: 'Overview'
    },
    {
      type: 'accordion',
      label: 'Dashboards',
      icon: 'lucideMonitorDot',
      children: [
        { type: 'item', label: 'Analytics', link: '/dashboards/analytics' },
        { type: 'item', label: 'Ecommerce', link: '/dashboards/e-commerce' },
        { type: 'item', label: 'Email', link: '/dashboards/email' },
        { type: 'item', label: 'HR', link: '/dashboards/hr' }
      ]
    },
    {
      type: 'accordion',
      label: 'Landing Page',
      icon: 'lucidePictureInPicture2',
      children: [
        { type: 'item', label: 'One Page', link: '/landing/onepage', target: '_blank' },
        { type: 'item', label: 'Product', link: '/landing/product', target: '_blank' }
      ]
    },
    {
      type: 'title',
      label: 'Apps'
    },
    {
      type: 'item',
      label: 'Chat',
      link: '/apps/chat',
      icon: 'lucideMessagesSquare'
    },
    {
      type: 'item',
      label: 'Calendar',
      link: '/apps/calendar',
      icon: 'lucideCalendar1'
    },
    {
      type: 'item',
      label: 'Email',
      link: '/apps/email',
      icon: 'lucideMail'
    },
    {
      type: 'item',
      label: 'Notes',
      link: '/apps/notes',
      icon: 'lucideClipboardList'
    },
    {
      type: 'accordion',
      label: 'Ecommerce',
      icon: 'lucideShoppingBag',
      children: [
        { type: 'item', label: 'Products', link: '/e-commerce/product-list' },
        { type: 'item', label: 'Products Grid', link: '/e-commerce/product-grid' },
        { type: 'item', label: 'Product Details', link: '/e-commerce/product-overview' },
        { type: 'item', label: 'Shopping Cart', link: '/e-commerce/cart' },
        { type: 'item', label: 'Checkout', link: '/e-commerce/checkout' },
        { type: 'item', label: 'Add Products', link: '/e-commerce/product-create' },
        { type: 'item', label: 'Orders', link: '/e-commerce/orders' },
        { type: 'item', label: 'Order Details', link: '/e-commerce/order-overview' },
        { type: 'item', label: 'Sellers', link: '/e-commerce/sellers' }
      ]
    },
    {
      type: 'accordion',
      label: 'HR Management',
      icon: 'lucideCircuitBoard',
      children: [
        { type: 'item', label: 'Employee List', link: '/hr/employee-list' },
        { type: 'item', label: 'Holidays', link: '/hr/holidays' },
        {
          type: 'accordion',
          label: 'Leave Manage',
          children: [
            { type: 'item', label: 'By Employee', link: '/hr/leave/employee' },
            { type: 'item', label: 'Add Leave(Employee)', link: '/hr/leave/create-employee' },
            { type: 'item', label: 'By HR', link: '/hr/leave' },
            { type: 'item', label: 'Add Leave(HR)', link: '/hr/create-leave' }
          ]
        },
        {
          type: 'accordion',
          label: 'Attendance',
          children: [
            { type: 'item', label: 'Attendance(HR)', link: '/hr/attendance' },
            { type: 'item', label: 'Main Attendance', link: '/hr/attendance-main' }
          ]
        },
        { type: 'item', label: 'Department', link: '/hr/department' },
        {
          type: 'accordion',
          label: 'Sales',
          children: [
            { type: 'item', label: 'Estimates', link: '/hr/sales/estimates' },
            { type: 'item', label: 'Payments', link: '/hr/sales/payments' },
            { type: 'item', label: 'Expenses', link: '/hr/sales/expenses' }
          ]
        },
        {
          type: 'accordion',
          label: 'Payroll',
          children: [
            { type: 'item', label: 'Employee Salary', link: '/hr/payroll/employee-salary' },
            { type: 'item', label: 'Payslip', link: '/hr/payroll/payslip' },
            { type: 'item', label: 'Create Payslip', link: '/hr/payroll/create-payslip' }
          ]
        }
      ]
    },
    {
      type: 'accordion',
      label: 'Invoice',
      icon: 'lucideFileText',
      children: [
        { type: 'item', label: 'Overview', link: '/invoice/overview' },
        { type: 'item', label: 'List Invoice', link: '/invoice/list' },
        { type: 'item', label: 'Add Invoice', link: '/invoice/add-new' }
      ]
    },
    {
      type: 'accordion',
      label: 'Users',
      icon: 'lucideSquareUserRound',
      children: [
        { type: 'item', label: 'List View', link: '/users/list' },
        { type: 'item', label: 'Grid View', link: '/users/grid' }
      ]
    },
    {
      type: 'title',
      label: 'Extra'
    },
    {
      type: 'accordion',
      label: 'Pages',
      icon: 'lucideCodesandbox',
      children: [
        { type: 'item', label: 'Starter Page', link: '/pages/starter' },
        { type: 'item', label: 'Pricing', link: '/pages/pricing' },
        { type: 'item', label: 'FAQ', link: '/pages/faqs' },
        { type: 'item', label: 'Maintenance', link: '/pages/maintenance' },
        { type: 'item', label: 'Timeline', link: '/pages/timeline' },
        { type: 'item', label: 'Coming Soon', link: '/pages/coming-soon' },
        { type: 'item', label: '404', link: '/pages/404' },
        { type: 'item', label: 'Offline', link: '/pages/offline' }
      ]
    },
    {
      type: 'accordion',
      label: 'Basic Auth',
      icon: 'lucideLock',
      children: [
        { type: 'item', label: 'Login', link: '/auth-basic/login' },
        { type: 'item', label: 'Register', link: '/auth-basic/register' },
        { type: 'item', label: 'Verify Email', link: '/auth-basic/verify-email' },
        { type: 'item', label: 'Two Steps', link: '/auth-basic/two-steps' },
        { type: 'item', label: 'Logout', link: '/auth-basic/logout' },
        { type: 'item', label: 'Reset Password', link: '/auth-basic/reset-password' },
        { type: 'item', label: 'Create Password', link: '/auth-basic/create-password' }
      ]
    },
    {
      type: 'accordion',
      label: 'Cover Auth',
      icon: 'lucideShieldCheck',
      children: [
        { type: 'item', label: 'Login', link: '/auth-cover/login' },
        { type: 'item', label: 'Register', link: '/auth-cover/register' },
        { type: 'item', label: 'Verify Email', link: '/auth-cover/verify-email' },
        { type: 'item', label: 'Two Steps', link: '/auth-cover/two-steps' },
        { type: 'item', label: 'Logout', link: '/auth-cover/logout' },
        { type: 'item', label: 'Reset Password', link: '/auth-cover/reset-password' },
        { type: 'item', label: 'Create Password', link: '/auth-cover/create-password' }
      ]
    },
    {
      type: 'accordion',
      label: 'Boxed Auth',
      icon: 'lucidePackage',
      children: [
        { type: 'item', label: 'Login', link: '/auth-boxed/login' },
        { type: 'item', label: 'Register', link: '/auth-boxed/register' },
        { type: 'item', label: 'Two Steps', link: '/auth-boxed/two-steps' },
        { type: 'item', label: 'Logout', link: '/auth-boxed/logout' },
        { type: 'item', label: 'Reset Password', link: '/auth-boxed/reset-password' },
        { type: 'item', label: 'Create Password', link: '/auth-boxed/create-password' }
      ]
    },
    {
      type: 'accordion',
      label: ' Modern Auth',
      icon: 'lucideFingerprint',
      children: [
        { type: 'item', label: 'Login', link: '/auth-modern/login' },
        { type: 'item', label: 'Register', link: '/auth-modern/register' },
        { type: 'item', label: 'Verify Email', link: '/auth-modern/verify-email' },
        { type: 'item', label: 'Two Steps', link: '/auth-modern/two-steps' },
        { type: 'item', label: 'Logout', link: '/auth-modern/logout' },
        { type: 'item', label: 'Reset Password', link: '/auth-modern/reset-password' },
        { type: 'item', label: 'Create Password', link: '/auth-modern/create-password' }
      ]
    },
    {
      type: 'accordion',
      label: 'Layouts',
      icon: 'lucideLayoutPanelLeft',
      children: [
        { type: 'item', label: 'Hover Sidenav', link: '/layouts/hover-sidenav', target: '_blank' },
        { type: 'item', label: 'Hover Active Sidenav', link: '/layouts/hover-active-sidenav', target: '_blank' },
        { type: 'item', label: 'Small Sidenav', link: '/layouts/small-sidenav', target: '_blank' },
        { type: 'item', label: 'Compact Sidenav', link: '/layouts/compact-sidenav', target: '_blank' },
        { type: 'item', label: 'Offcanvas Sidenav', link: '/layouts/offcanvas-sidenav', target: '_blank' },
        { type: 'item', label: 'Hidden Sidenav', link: '/layouts/hidden-sidenav', target: '_blank' },
        { type: 'item', label: 'Dark Sidenav', link: '/layouts/dark-sidenav', target: '_blank' },
        { type: 'item', label: 'Dark Mode', link: '/layouts/dark-mode', target: '_blank' },
        { type: 'item', label: 'RTL Mode', link: '/layouts/rtl-mode', target: '_blank' }
      ]
    },
    {
      type: 'accordion',
      label: ' Multi Level',
      icon: 'lucideShare2',
      children: [
        { type: 'item', label: 'Item 1', link: '' },
        { type: 'item', label: 'Item 2', link: '' },

      ]
    }
  ]

  

   constructor(private router: Router) {}

  isItemActive(item: any): boolean {
    const url = this.router.url;
    if (item.link && url === item.link) return true;
    if (item.children) {
      return item.children.some((child: any) => this.isItemActive(child));
    }
    return false;
  }





}
