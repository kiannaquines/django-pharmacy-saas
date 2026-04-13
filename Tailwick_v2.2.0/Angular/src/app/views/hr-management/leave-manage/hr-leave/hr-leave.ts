import { Component } from '@angular/core';
import { Pagination } from "../../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DeleteModal } from "./components/delete-modal/delete-modal";
import { PageTitle } from '../../../../components/page-title/page-title';

type LeaveApplication = {
  id: number;
  employeeName: string;
  leaveType: string;
  reason: string;
  days: number;
  startDate: string;
  endDate: string;
  status: "Approved" | "Pending" | "New" | "Declined";
}

type LeaveSummary = {
  icon: string;          
  iconColor: string;     
  iconBg: string;       
  count: string;         
  label: string;        
};

@Component({
  selector: 'app-hr-leave',
  imports: [Pagination, NgIcon, RouterLink, CommonModule, DeleteModal, PageTitle],
  templateUrl: './hr-leave.html',
  styles: ``
})
export class HrLeave {
  leaveApplications: LeaveApplication[] = [
    {
      id: 1,
      employeeName: "Willie Torres",
      leaveType: "Medical Leave",
      reason: "Going to Hospital",
      days: 2,
      startDate: "11 Oct, 2023",
      endDate: "12 Oct, 2023",
      status: "Approved"
    },
    {
      id: 2,
      employeeName: "Patricia Garcia",
      leaveType: "Casual Leave",
      reason: "Going to Family Function",
      days: 1,
      startDate: "07 Sept, 2023",
      endDate: "07 Sept, 2023",
      status: "Pending"
    },
    {
      id: 3,
      employeeName: "Juliette Fecteau",
      leaveType: "Casual Leave",
      reason: "Going to Holiday",
      days: 6,
      startDate: "11 Jun, 2023",
      endDate: "16 Jun, 2023",
      status: "New"
    },
    {
      id: 4,
      employeeName: "Thomas Hatfield",
      leaveType: "Sick Leave",
      reason: "Attend Birthday party",
      days: 1,
      startDate: "15 July, 2023",
      endDate: "15 July, 2023",
      status: "Approved"
    },
    {
      id: 5,
      employeeName: "Willie Torres",
      leaveType: "Sick Leave",
      reason: "Personal",
      days: 2,
      startDate: "19 Aug, 2023",
      endDate: "20 Aug, 2023",
      status: "Declined"
    },
    {
      id: 6,
      employeeName: "Juliette Fecteau",
      leaveType: "Casual Leave",
      reason: "Going to Family Function",
      days: 1,
      startDate: "14 Feb, 2022",
      endDate: "14 Feb, 2022",
      status: "Approved"
    },
    {
      id: 7,
      employeeName: "Eugene Clifford",
      leaveType: "Parental Leave",
      reason: "Child Care",
      days: 5,
      startDate: "01 Mar, 2023",
      endDate: "05 Mar, 2023",
      status: "Approved"
    },
    {
      id: 8,
      employeeName: "Laura Mendez",
      leaveType: "Annual Leave",
      reason: "Vacation Trip",
      days: 7,
      startDate: "10 Apr, 2023",
      endDate: "16 Apr, 2023",
      status: "Pending"
    },
    {
      id: 9,
      employeeName: "Marcus Lewis",
      leaveType: "Medical Leave",
      reason: "Hospitalization",
      days: 3,
      startDate: "20 May, 2023",
      endDate: "22 May, 2023",
      status: "Approved"
    },
    {
      id: 10,
      employeeName: "Sophie Turner",
      leaveType: "Casual Leave",
      reason: "Attending Wedding",
      days: 2,
      startDate: "05 Jun, 2023",
      endDate: "06 Jun, 2023",
      status: "Declined"
    }
  ];
  
  leaveSummaryData: LeaveSummary[] = [
  {
    icon: "lucideFileChartColumn",
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    count: "18/60",
    label: "Today/Presents Leave"
  },
  {
    icon: "lucideCalendarCheck",
    iconColor: "text-success",
    iconBg: "bg-success/10",
    count: "5",
    label: "Today Leaves"
  },
  {
    icon: "lucideCodepen",
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    count: "0",
    label: "Unplanned Leaves"
  },
  {
    icon: "lucideLoader",
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
    count: "11",
    label: "Remaining Leave"
  }
];

}
