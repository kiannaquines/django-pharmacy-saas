import { Component } from '@angular/core';
import { Report } from "./components/report/report";
import { AttendanceDetail } from "./components/attendance-detail/attendance-detail";
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { RouterLink } from '@angular/router';

type EmployeeHours = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-hr-attendance',
  imports: [Report, AttendanceDetail, NgIcon, FlatpickrDirective, RouterLink],
  templateUrl: './hr-attendance.html', 
   providers: [provideFlatpickrDefaults()],
  styles: ``
})

export class HrAttendance {
  employeeHoursData: EmployeeHours[] = [
  { label: "Employee ID", value: "#TWE1001501" },
  { label: "Experience", value: "3 Year" },
  { label: "Joining Date", value: "05 Feb, 2020" },
  { label: "Total Hours (Years)", value: "953.8 Hrs" },
  { label: "Total Hours", value: "218.4 Hrs" },
  { label: "Regular Hours", value: "172 Hrs" },
  { label: "Overtime", value: "24 Hrs" },
  { label: "Holiday", value: "22.40 Hrs" }
];
}
