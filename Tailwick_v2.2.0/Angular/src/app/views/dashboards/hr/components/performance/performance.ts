import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { Pagination } from "../../../../../components/pagination/pagination";

type EmployeeRow = {
  id: string;
  avatar: string;
  name: string;
  email: string;
  role: string;
  performance: string;
  performanceClass: string;
  status: {
    label: string;
    class: string;
  };
}

@Component({
  selector: 'app-performance',
  imports: [NgIcon, RouterLink, Pagination],
  templateUrl: './performance.html',
  styles: ``
})

export class Performance {

  employeeRows: EmployeeRow[] = [
  {
    id: "TW-1001",
    avatar: "assets/images/user/avatar-10.png",
    name: "Kristen Redden",
    email: "kredden@tailwick.com",
    role: "Designer",
    performance: "Good",
    performanceClass: "text-green-700",
    status: {
      label: "Active",
      class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/30"
    }
  },
  {
    id: "TW-1002",
    avatar: "assets/images/user/avatar-2.png",
    name: "Howard George",
    email: "george@tailwick.com",
    role: "ASP.Net Developer",
    performance: "Low",
    performanceClass: "text-danger",
    status: {
      label: "Active",
      class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/30"
    }
  },
  {
    id: "TW-1003",
    avatar: "assets/images/user/avatar-3.png",
    name: "Laura Dawson",
    email: "laura@tailwick.com",
    role: "React Developer",
    performance: "Good",
    performanceClass: "text-green-700",
    status: {
      label: "Active",
      class: "inline-flex items-center gap-x-1.5 py-0.5 px-2.5 rounded text-xs font-medium bg-success/10 text-success border border-success/30"
    }
  },
  {
    id: "TW-1004",
    avatar: "assets/images/user/avatar-4.png",
    name: "Joseph Morgan",
    email: "morgan@tailwick.com",
    role: "Angular Developer",
    performance: "Good",
    performanceClass: "text-green-700",
    status: {
      label: "Disabled",
      class: "py-0.5 px-2.5 inline-flex items-center text-xs font-medium bg-default-100 text-default-600 border border-default-200 rounded"
    }
  },
  {
    id: "TW-1005",
    avatar: "assets/images/user/avatar-4.png",
    name: "Jeremy Rose",
    email: "rose@tailwick.com",
    role: "UI / UX Designer",
    performance: "Low",
    performanceClass: "text-danger",
    status: {
      label: "Disabled",
      class: "py-0.5 px-2.5 inline-flex items-center text-xs font-medium bg-default-100 text-default-600 border border-default-200 rounded"
    }
  }
];
}
