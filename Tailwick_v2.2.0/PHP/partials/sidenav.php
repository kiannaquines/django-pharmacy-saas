<!-- Start Sidebar -->
<aside id="app-menu" class="app-menu">

    <!-- Sidenav Menu Brand Logo -->
    <a href="/" class="logo-box sticky top-0 flex min-h-topbar-height items-center justify-start px-6 backdrop-blur-xs">
        <!-- Light Brand Logo -->
        <div class="logo-light">
            <img src="%BASE%/images/logo-light.png" class="logo-lg h-6" alt="Light logo">
            <img src="%BASE%/images/logo-sm.png" class="logo-sm h-6" alt="Small logo">
        </div>

        <!-- Dark Brand Logo -->
        <div class="logo-dark">
            <img src="%BASE%/images/logo-dark.png" class="logo-lg h-6" alt="Dark logo">
            <img src="%BASE%/images/logo-sm.png" class="logo-sm h-6" alt="Small logo">
        </div>
    </a>

    <!-- Sidenav Menu Toggle Button -->
    <div class="absolute top-0 end-5 flex h-topbar items-center justify">
        <button id="button-hover-toggle" class="">
            <i class="iconify tabler--circle size-5"></i>
        </button>
    </div>

    <!-- Sidenav Menu Item Link -->
    <div class="relative min-h-0 flex-grow">
        <div class="size-full" data-simplebar>
            <ul class="side-nav p-3 hs-accordion-group">
                <li class="menu-title">
                    <span>Overview</span>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="monitor-dot"></i></span>
                        <span class="menu-text"> Dashboards </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="/dashboards-analytics" class="menu-link">
                                <span class="menu-text"> Analytics </span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="/" class="menu-link">
                                <span class="menu-text"> Ecommerce </span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="/dashboards-email" class="menu-link">
                                <span class="menu-text"> Email </span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="/dashboards-hr" class="menu-link">
                                <span class="menu-text"> HR </span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="picture-in-picture-2"></i> </span>
                        <span class="menu-text"> Landing Page </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="onepage-landing" target="_blank" class="menu-link">
                                <span class="menu-text"> One Page </span>
                            </a>
                        </li>

                        <li class="menu-item">
                            <a href="product-landing" target="_blank" class="menu-link">
                                <span class="menu-text"> Product </span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-title">
                    <span>Apps</span>
                </li>

                <li class="menu-item">
                    <a class="menu-link" href="apps-chat">
                        <span class="menu-icon"><i data-lucide="messages-square"></i></span>
                        <div class="menu-text">Chat</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a class="menu-link" href="apps-calendar">
                        <span class="menu-icon"><i data-lucide="calendar-1"></i></span>
                        <div class="menu-text">Calendar</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a class="menu-link" href="apps-mailbox">
                        <span class="menu-icon"><i data-lucide="mail"></i></span>
                        <div class="menu-text">Email</div>
                    </a>
                </li>

                <li class="menu-item">
                    <a class="menu-link" href="apps-notes">
                        <span class="menu-icon"><i data-lucide="clipboard-list"></i></span>
                        <div class="menu-text">Notes</div>
                    </a>
                </li>


                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="shopping-bag"></i></span>
                        <span class="menu-text"> Ecommerce </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="apps-ecommerce-product-list" class="menu-link">
                                <span class="menu-text">Products</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-product-grid" class="menu-link">
                                <span class="menu-text">Products Grid</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-product-overview" class="menu-link">
                                <span class="menu-text">Product Details</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-cart" class="menu-link">
                                <span class="menu-text">Shopping Cart</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-checkout" class="menu-link">
                                <span class="menu-text">Checkout</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-product-create" class="menu-link">
                                <span class="menu-text">Add Products</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-orders" class="menu-link">
                                <span class="menu-text">Orders</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-order-overview" class="menu-link">
                                <span class="menu-text">Order Details</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-ecommerce-sellers" class="menu-link">
                                <span class="menu-text">Sellers</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="circuit-board"></i></span>
                        <span class="menu-text"> HR Management </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hs-accordion-group hidden">
                        <li class="menu-item">
                            <a href="apps-hr-employee" class="menu-link">
                                <span class="menu-text">Employee List</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-hr-holidays" class="menu-link">
                                <span class="menu-text">Holidays</span>
                            </a>
                        </li>
                        <li class="menu-item hs-accordion">
                            <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                                <span class="menu-text"> Leave Manage </span>
                                <span class="menu-arrow"></span>
                            </a>

                            <ul class="sub-menu hs-accordion-content hidden">
                                <li class="menu-item">
                                    <a href="apps-hr-leave-employee" class="menu-link">
                                        <span class="menu-text">By Employee</span>
                                    </a>
                                </li>

                                <li class="menu-item">
                                    <a href="apps-hr-create-leave-employee" class="menu-link">
                                        <span class="menu-text">Add Leave(Employee)</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-leave" class="menu-link">
                                        <span class="menu-text">By HR</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-create-leave" class="menu-link">
                                        <span class="menu-text">Add Leave(HR)</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item hs-accordion">
                            <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                                <span class="menu-text"> Attendance </span>
                                <span class="menu-arrow"></span>
                            </a>

                            <ul class="sub-menu hs-accordion-content hidden">
                                <li class="menu-item">
                                    <a href="apps-hr-attendance" class="menu-link">
                                        <span class="menu-text">Attendance(HR)</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-attendance-main" class="menu-link">
                                        <span class="menu-text">Main Attendance</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a href="apps-hr-department" class="menu-link">
                                <span class="menu-text">Department</span>
                            </a>
                        </li>
                        <li class="menu-item hs-accordion">
                            <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                                <span class="menu-text"> Sales </span>
                                <span class="menu-arrow"></span>
                            </a>

                            <ul class="sub-menu hs-accordion-content hidden">
                                <li class="menu-item">
                                    <a href="apps-hr-sales-estimates" class="menu-link">
                                        <span class="menu-text">Estimates</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-sales-payments" class="menu-link">
                                        <span class="menu-text">Payments</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-sales-expenses" class="menu-link">
                                        <span class="menu-text">Expenses</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item hs-accordion">
                            <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                                <span class="menu-text"> Payroll </span>
                                <span class="menu-arrow"></span>
                            </a>

                            <ul class="sub-menu hs-accordion-content hidden">
                                <li class="menu-item">
                                    <a href="apps-hr-payroll-employee-salary" class="menu-link">
                                        <span class="menu-text">Employee Salary</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-payroll-payslip" class="menu-link">
                                        <span class="menu-text">Payslip</span>
                                    </a>
                                </li>
                                <li class="menu-item">
                                    <a href="apps-hr-payroll-create-payslip" class="menu-link">
                                        <span class="menu-text">Create Payslip</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="file-text"></i></span>
                        <span class="menu-text"> Invoice </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="apps-invoice-overview" class="menu-link">
                                <span class="menu-text">Overview</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-invoice-list" class="menu-link">
                                <span class="menu-text">List Invoice</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-invoice-add-new" class="menu-link">
                                <span class="menu-text">Add Invoice</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="square-user-round"></i></span>
                        <span class="menu-text"> Users </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="apps-users-list" class="menu-link">
                                <span class="menu-text">List View</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="apps-users-grid" class="menu-link">
                                <span class="menu-text">Grid View</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-title">
                    <span>Extra</span>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="codesandbox"></i></span>
                        <span class="menu-text"> Pages </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="pages-starter" class="menu-link">
                                <span class="menu-text">Starter Page</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="pages-pricing" class="menu-link">
                                <span class="menu-text">Pricing</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="pages-faqs" class="menu-link">
                                <span class="menu-text">FAQ</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="pages-timeline" class="menu-link">
                                <span class="menu-text">Timeline</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="pages-coming-soon" class="menu-link">
                                <span class="menu-text">Coming Soon</span>
                            </a>
                        </li>                        
                        <li class="menu-item">
                            <a href="pages-maintenance" class="menu-link">
                                <span class="menu-text">Maintenance</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="pages-404" class="menu-link">
                                <span class="menu-text">404</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="pages-offline" class="menu-link">
                                <span class="menu-text">Offline</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="lock"></i></span>
                        <span class="menu-text"> Basic Auth </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="auth-basic-login" class="menu-link">
                                <span class="menu-text">Login</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-basic-register" class="menu-link">
                                <span class="menu-text">Register</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-basic-verify-email" class="menu-link">
                                <span class="menu-text">Verify Email</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-basic-two-steps" class="menu-link">
                                <span class="menu-text">Two Steps</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-basic-logout" class="menu-link">
                                <span class="menu-text">Logout</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-basic-reset-password" class="menu-link">
                                <span class="menu-text">Reset Password</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-basic-create-password" class="menu-link">
                                <span class="menu-text">Create Password</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="shield-check"></i></span>
                        <span class="menu-text"> Cover Auth </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="auth-cover-login" class="menu-link">
                                <span class="menu-text">Login</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-cover-register" class="menu-link">
                                <span class="menu-text">Register</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-cover-verify-email" class="menu-link">
                                <span class="menu-text">Verify Email</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-cover-two-steps" class="menu-link">
                                <span class="menu-text">Two Steps</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-cover-logout" class="menu-link">
                                <span class="menu-text">Logout</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-cover-reset-password" class="menu-link">
                                <span class="menu-text">Reset Password</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-cover-create-password" class="menu-link">
                                <span class="menu-text">Create Password</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="package"></i></span>
                        <span class="menu-text"> Boxed Auth </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="auth-boxed-login" class="menu-link">
                                <span class="menu-text">Login</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-boxed-register" class="menu-link">
                                <span class="menu-text">Register</span>
                            </a>
                        </li>                        
                        <li class="menu-item">
                            <a href="auth-boxed-two-steps" class="menu-link">
                                <span class="menu-text">Two Steps</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-boxed-logout" class="menu-link">
                                <span class="menu-text">Logout</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-boxed-reset-password" class="menu-link">
                                <span class="menu-text">Reset Password</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-boxed-create-password" class="menu-link">
                                <span class="menu-text">Create Password</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="fingerprint"></i></span>
                        <span class="menu-text"> Modern Auth </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="auth-modern-login" class="menu-link">
                                <span class="menu-text">Login</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-modern-register" class="menu-link">
                                <span class="menu-text">Register</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-modern-verify-email" class="menu-link">
                                <span class="menu-text">Verify Email</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-modern-two-steps" class="menu-link">
                                <span class="menu-text">Two Steps</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-modern-logout" class="menu-link">
                                <span class="menu-text">Logout</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-modern-reset-password" class="menu-link">
                                <span class="menu-text">Reset Password</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="auth-modern-create-password" class="menu-link">
                                <span class="menu-text">Create Password</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="layout-panel-left"></i></span>
                        <span class="menu-text"> Layouts </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="layouts-sidenav-hover" target="_blank" class="menu-link">Hover Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-sidenav-hover-active" target="_blank" class="menu-link">Hover Active Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-sidenav-small" target="_blank" class="menu-link">Small Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-sidenav-compact" target="_blank" class="menu-link">Compact Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-sidenav-offcanvas" target="_blank" class="menu-link">Offcanvas Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-sidenav-hidden" target="_blank" class="menu-link">Hidden Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-sidenav-dark" target="_blank" class="menu-link">Dark Sidenav</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-dark-mode" target="_blank" class="menu-link">Dark Mode</a>
                        </li>
                        <li class="menu-item">
                            <a href="layouts-rtl-mode" target="_blank" class="menu-link">RTL Mode</a>
                        </li>
                    </ul>
                </li>

                <li class="menu-item hs-accordion">
                    <a href="javascript:void(0)" class="hs-accordion-toggle menu-link">
                        <span class="menu-icon"><i data-lucide="share-2"></i></span>
                        <span class="menu-text"> Multi Level </span>
                        <span class="menu-arrow"></span>
                    </a>

                    <ul class="sub-menu hs-accordion-content hidden">
                        <li class="menu-item">
                            <a href="javascript: void(0)" class="menu-link">
                                <span class="menu-text">Item 1</span>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript: void(0)" class="menu-link">
                                <span class="menu-text">Item 2</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

</aside>
<!-- End Sidebar -->