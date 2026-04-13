import { Component } from '@angular/core';
import { Pagination } from "../../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { PageTitle } from "../../../../components/page-title/page-title";

type LeaveBalance = {
  icon: string;      
  color: string;      
  value: number;     
  label: string;     
};

 type LeaveHistory = {
  id: string;
  type: string;
  reason: string;
  days: string;
  startDate: string;
  endDate: string;
  approvedBy: string;
  status: {
    text: string;   
    color: string; 
  };
  actions: {
    edit?: boolean;   
    info: boolean;    
  };
};

@Component({
  selector: 'app-employee-leave',
  imports: [Pagination, NgIcon, RouterLink, PageTitle],
  templateUrl: './employee-leave.html',
  styles: ``
})
export class EmployeeLeave {
  leaveBalanceData: LeaveBalance[] = [
  {
    icon: "lucideFileChartColumn",
    color: "text-danger bg-danger/10",
    value: 23,
    label: "Total Leave Balance"
  },
  {
    icon: "lucideStethoscope",
    color: "text-secondary bg-secondary/10",
    value: 4,
    label: "Medical Leave"
  },
  {
    icon: "lucideCalendarDays",
    color: "text-success bg-success/10",
    value: 12,
    label: "Annual Leave"
  },
  {
    icon: "lucideAnchor",
    color: "text-info bg-info/10",
    value: 11,
    label: "Remaining Leave"
  }
];
 
leaveHistoryData: LeaveHistory[] = [
  {
    id: '01',
    type: "Medical Leave",
    reason: "Going to Hospital",
    days: '02',
    startDate: "11 Oct, 2023",
    endDate: "12 Oct, 2023",
    approvedBy: "Paula Keenan",
    status: { text: "Approved", color: "bg-success/15 text-success" },
    actions: { info: true }
  },
  {
    id: '02',
    type: "Casual Leave",
    reason: "Going to Family Function",
    days: '01',
    startDate: "07 Sept, 2023",
    endDate: "07 Sept, 2023",
    approvedBy: "Admin",
    status: { text: "Pending", color: "bg-warning/15 text-warning" },
    actions: { edit: true, info: true }
  },
  {
    id: '03',
    type: "Casual Leave",
    reason: "Going to Holiday",
    days: '06',
    startDate: "11 Jun, 2023",
    endDate: "16 Jun, 2023",
    approvedBy: "Admin",
    status: { text: "Declined", color: "bg-danger/10 text-danger" },
    actions: { info: true }
  },
  {
    id: '04',
    type: "Sick Leave",
    reason: "Attend Birthday party",
    days: '01',
    startDate: "15 July, 2023",
    endDate: "15 July, 2023",
    approvedBy: "Paula Keenan",
    status: { text: "Approved", color: "bg-success/15 text-success" },
    actions: { info: true }
  },
  {
    id: '05',
    type: "Sick Leave",
    reason: "Personal",
    days: '02',
    startDate: "19 Aug, 2023",
    endDate: "20 Aug, 2023",
    approvedBy: "Paula Keenan",
    status: { text: "Declined", color: "bg-danger/10 text-danger" },
    actions: { info: true }
  },
  {
    id: '06',
    type: "Casual Leave",
    reason: "Going to Family Function",
    days: '01',
    startDate: "14 Feb, 2022",
    endDate: "14 Feb, 2022",
    approvedBy: "Admin",
    status: { text: "Approved", color: "bg-success/15 text-success" },
    actions: { info: true }
  },
  {
    id: '07',
    type: "Medical Leave",
    reason: "Medical Emergency",
    days: '04',
    startDate: "23 Jan, 2023",
    endDate: "26 Jan, 2023",
    approvedBy: "Paula Keenan",
    status: { text: "Pending", color: "bg-warning/15 text-warning" },
    actions: { edit: true, info: true }
  },
  {
    id: '08',
    type: "Casual Leave",
    reason: "Personal",
    days: '02',
    startDate: "16 Dec, 2023",
    endDate: "17 Dec, 2023",
    approvedBy: "Paula Keenan",
    status: { text: "Declined", color: "bg-danger/10 text-danger" },
    actions: { info: true }
  },
  {
    id: '09',
    type: "Casual Leave",
    reason: "Going to Holiday",
    days: '05',
    startDate: "29 Nov, 2023",
    endDate: "03 Dec, 2023",
    approvedBy: "Admin",
    status: { text: "Approved", color: "bg-success/15 text-success" },
    actions: { info: true }
  },
  {
    id: '10',
    type: "Sick Leave",
    reason: "Going to Hospital",
    days: '01',
    startDate: "15 Oct, 2023",
    endDate: "15 Oct, 2023",
    approvedBy: "Paula Keenan",
    status: { text: "Approved", color: "bg-success/15 text-success" },
    actions: { info: true }
  }
];

}
