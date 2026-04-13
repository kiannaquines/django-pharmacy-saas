import { Routes } from "@angular/router";
import { EmployeeList } from "./employee-list/employee-list";
import { Holidays } from "./holidays/holidays";
import { Department } from "./department/department";
import { CreateEmployeLeave } from "./leave-manage/create-employe-leave/create-employe-leave";
import { CreateHrLeave } from "./leave-manage/create-hr-leave/create-hr-leave";
import { EmployeeLeave } from "./leave-manage/employee-leave/employee-leave";
import { HrLeave } from "./leave-manage/hr-leave/hr-leave";
import { HrAttendance } from "./attendance/hr-attendance/hr-attendance";
import { MainAttendance } from "./attendance/main-attendance/main-attendance";
import { Estimates } from "./sales/estimates/estimates";
import { Payments } from "./sales/payments/payments";
import { Expenses } from "./sales/expenses/expenses";
import { EmployeeSalary } from "./payroll/employee-salary/employee-salary";
import { Payslip } from "./payroll/payslip/payslip";
import { CreatePayslip } from "./payroll/create-payslip/create-payslip";

export const MANAGEMENT_ROUTES: Routes = [
  {
    path: 'hr/employee-list',
    component: EmployeeList,
    data: { title: 'Employee' },
  },
  {
    path: 'hr/holidays',
    component: Holidays,
    data: { title: 'Holidays' },
  },
  {
    path: 'hr/leave/create-employee',
    component: CreateEmployeLeave,
    data: { title: 'Add Leave (Employee)' },
  },
  {
    path: 'hr/create-leave',
    component: CreateHrLeave,
    data: { title: 'Add Leave (HR)' },
  },
  {
    path: 'hr/leave/employee',
    component: EmployeeLeave,
    data: { title: 'Leave Manage (Employee)' },
  },
  {
    path: 'hr/leave',
    component: HrLeave,
    data: { title: 'Leave Manage (HR)' },
  },
  {
    path: 'hr/attendance',
    component: HrAttendance,
    data: { title: 'Attendance' },
  },
  {
    path: 'hr/attendance-main',
    component: MainAttendance,
    data: { title: 'Main Attendance' },
  },
  {
    path: 'hr/department',
    component: Department,
    data: { title: 'Department' },
  },
  {
    path: 'hr/sales/estimates',
    component: Estimates,
    data: { title: 'Estimates' },
  },
  {
    path: 'hr/sales/payments',
    component: Payments,
    data: { title: 'Payments' },
  },
  {
    path: 'hr/sales/expenses',
    component: Expenses,
    data: { title: 'Expenses' },
  },
  {
    path: 'hr/payroll/employee-salary',
    component: EmployeeSalary,
    data: { title: 'Employee Salary' },
  },
  {
    path: 'hr/payroll/payslip',
    component: Payslip,
    data: { title: 'Payslip' },
  },
  {
    path: 'hr/payroll/create-payslip',
    component: CreatePayslip,
    data: { title: 'Create Payslip' },
  }

]