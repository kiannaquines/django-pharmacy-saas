Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"

  root to: "dashboards#index"

  get "dashboards/email"
  get "dashboards/analytics"
  get "dashboards/hr"

  get "apps/mailbox"
  get "apps/invoice-overview", to: "apps#invoice_overview"
  get "apps/notes"
  get "apps/calendar"
  get "apps/users-grid", to: "apps#users_grid"
  get "apps/invoice-list", to: "apps#invoice_list"
  get "apps/chat"
  get "apps/invoice-add-new", to: "apps#invoice_add_new"
  get "apps/users-list", to: "apps#users_list"

  get "hr/department"
  get "hr/payroll-create-payslip", to: "hr#payroll_create_payslip"
  get "hr/create-leave", to: "hr#create_leave"
  get "hr/sales-expenses", to: "hr#sales_expenses"
  get "hr/attendance-main", to: "hr#attendance_main"
  get "hr/sales-estimates", to: "hr#sales_estimates"
  get "hr/leave"
  get "hr/holidays"
  get "hr/create-leave-employee", to: "hr#create_leave_employee"
  get "hr/attendance"
  get "hr/payroll-payslip", to: "hr#payroll_payslip"
  get "hr/payroll-employee-salary", to: "hr#payroll_employee_salary"
  get "hr/sales-payments", to: "hr#sales_payments"
  get "hr/leave-employee", to: "hr#leave_employee"
  get "hr/employee"

  get "auth/basic-register", to: "auth#basic_register"
  get "auth/basic-logout", to: "auth#basic_logout"
  get "auth/basic-reset-password", to: "auth#basic_reset_password"
  get "auth/basic-verify-email", to: "auth#basic_verify_email"
  get "auth/basic-login", to: "auth#basic_login"
  get "auth/basic-create-password", to: "auth#basic_create_password"
  get "auth/basic-two-steps", to: "auth#basic_two_steps"

  get "auth/boxed-reset-password", to: "auth#boxed_reset_password"
  get "auth/boxed-two-steps", to: "auth#boxed_two_steps"
  get "auth/boxed-logout", to: "auth#boxed_logout"
  get "auth/boxed-login", to: "auth#boxed_login"
  get "auth/boxed-register", to: "auth#boxed_register"
  get "auth/boxed-create-password", to: "auth#boxed_create_password"

  get "auth/cover-create-password", to: "auth#cover_create_password"
  get "auth/cover-logout", to: "auth#cover_logout"
  get "auth/cover-register", to: "auth#cover_register"
  get "auth/cover-two-steps", to: "auth#cover_two_steps"
  get "auth/cover-verify-email", to: "auth#cover_verify_email"
  get "auth/cover-login", to: "auth#cover_login"
  get "auth/cover-reset-password", to: "auth#cover_reset_password"

  get "auth/modern-create-password", to: "auth#modern_create_password"
  get "auth/modern-login", to: "auth#modern_login"
  get "auth/modern-verify-email", to: "auth#modern_verify_email"
  get "auth/modern-reset-password", to: "auth#modern_reset_password"
  get "auth/modern-two-steps", to: "auth#modern_two_steps"
  get "auth/modern-register", to: "auth#modern_register"
  get "auth/modern-logout", to: "auth#modern_logout"

  get "pages/pricing"
  get "pages/faqs"
  get "pages/coming-soon", to: "pages#coming_soon"
  get "pages/maintenance"
  get "pages/timeline"
  get "pages/404", to: "pages#error_404"
  get "pages/starter"
  get "pages/offline"

  get "ecommerce/orders"
  get "ecommerce/order-overview", to: "ecommerce#order_overview"
  get "ecommerce/product-create", to: "ecommerce#product_create"
  get "ecommerce/sellers"
  get "ecommerce/product-list", to: "ecommerce#product_list"
  get "ecommerce/checkout"
  get "ecommerce/product-grid", to: "ecommerce#product_grid"
  get "ecommerce/product-overview", to: "ecommerce#product_overview"
  get "ecommerce/cart"

  get "landing/onepage"
  get "landing/product"

  get "layouts/dark-mode", to: "layouts_eg#dark_mode"
  get "layouts/rtl-mode", to: "layouts_eg#rtl_mode"
  get "layouts/sidenav-compact", to: "layouts_eg#sidenav_compact"
  get "layouts/sidenav-dark", to: "layouts_eg#sidenav_dark"
  get "layouts/sidenav-hidden", to: "layouts_eg#sidenav_hidden"
  get "layouts/sidenav-hover-active", to: "layouts_eg#sidenav_hover_active"
  get "layouts/sidenav-hover", to: "layouts_eg#sidenav_hover"
  get "layouts/sidenav-offcanvas", to: "layouts_eg#sidenav_offcanvas"
  get "layouts/sidenav-small", to: "layouts_eg#sidenav_small"
  
end
