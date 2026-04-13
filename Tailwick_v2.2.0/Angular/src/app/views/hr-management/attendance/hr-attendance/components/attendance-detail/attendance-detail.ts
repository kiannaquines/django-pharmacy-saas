import { Component } from '@angular/core';
import { Pagination } from "../../../../../../components/pagination/pagination";
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type AttendanceRecord = {
  date: string;            
  day: string;            
  inTime: string;          
  outTime: string;         
  workedHrs: string;       
  totalHrs: string;      
  overtime: string;        
  approveBtn: {
    icon: string;
    colorClass: string;
    bgClass: string;
  };
  rejectBtn: {
    icon: string;
    colorClass: string;
    bgClass: string;
  };
};

@Component({
  selector: 'app-attendance-detail',
  imports: [Pagination, RouterLink, NgIcon],
  templateUrl: './attendance-detail.html',
  styles: ``
})
export class AttendanceDetail {
  attendanceData: AttendanceRecord[] = [
  {
    date: "13 Oct, 2023",
    day: "Fri",
    inTime: "08:23 AM",
    outTime: "07:00 PM",
    workedHrs: "1.00 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.00 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "12 Oct, 2023",
    day: "Thu",
    inTime: "08:28 AM",
    outTime: "05:46 PM",
    workedHrs: "0.45 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.15 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "11 Oct, 2023",
    day: "Wed",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    workedHrs: "0.50 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.35 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "10 Oct, 2023",
    day: "Tue",
    inTime: "09:15 AM",
    outTime: "05:00 PM",
    workedHrs: "0.35 Hrs",
    totalHrs: "7.55 Hrs",
    overtime: "0.15 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "09 Oct, 2023",
    day: "Mon",
    inTime: "08:28 AM",
    outTime: "05:46 PM",
    workedHrs: "0.45 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.15 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "06 Oct, 2023",
    day: "Fri",
    inTime: "09:00 AM",
    outTime: "06:00 PM",
    workedHrs: "0.50 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.35 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "05 Oct, 2023",
    day: "Thu",
    inTime: "08:28 AM",
    outTime: "05:46 PM",
    workedHrs: "0.45 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.15 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "04 Oct, 2023",
    day: "Wed",
    inTime: "08:28 AM",
    outTime: "05:46 PM",
    workedHrs: "0.45 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.15 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "03 Oct, 2023",
    day: "Tue",
    inTime: "08:23 AM",
    outTime: "07:00 PM",
    workedHrs: "1.00 Hrs",
    totalHrs: "8.00 Hrs",
    overtime: "0.00 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  },
  {
    date: "02 Oct, 2023",
    day: "Mon",
    inTime: "09:15 AM",
    outTime: "05:00 PM",
    workedHrs: "0.35 Hrs",
    totalHrs: "7.55 Hrs",
    overtime: "0.15 Hrs",
    approveBtn: { icon: "lucideCheck", colorClass: "text-success", bgClass: "bg-success/10" },
    rejectBtn: { icon: "lucideX", colorClass: "text-danger", bgClass: "bg-danger/10" }
  }
];
}
