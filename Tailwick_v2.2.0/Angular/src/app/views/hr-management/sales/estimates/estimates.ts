import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { Pagination } from "../../../../components/pagination/pagination";
import { EstimatesAdd } from "./components/estimates-add/estimates-add";
import { PageTitle } from "../../../../components/page-title/page-title";

type TableRow = {
  id: string;
  company: string;
  department: string;
  startDate: string;
  endDate: string;
  amount: string;
  status: "Accepted" | "Declined" | "Expired";
  statusClass: string;
}

@Component({
  selector: 'app-estimates',
  imports: [RouterLink, NgIcon, FlatpickrDirective, Pagination, EstimatesAdd, PageTitle],
  templateUrl: './estimates.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})

export class Estimates {
 tableData: TableRow[] = [
    {
      id: "#TWE20015420",
      company: "Infra Teach",
      department: "HR",
      startDate: "02 July, 2023",
      endDate: "05 July, 2023",
      amount: "$2,403",
      status: "Accepted",
      statusClass: "bg-success/15 text-success"
    },
    {
      id: "#TWE20015421",
      company: "Themesdesign",
      department: "Admin",
      startDate: "08 Nov, 2023",
      endDate: "08 Nov, 2023",
      amount: "$1,749",
      status: "Declined",
      statusClass: "bg-danger/10 text-danger"
    },
    {
      id: "#TWE20015422",
      company: "Judil Fashion",
      department: "Admin",
      startDate: "11 Aug, 2023",
      endDate: "03 Aug, 2023",
      amount: "$816",
      status: "Expired",
      statusClass: "bg-warning/15 text-warning"
    },
    {
      id: "#TWE20015423",
      company: "4xM Infotech",
      department: "HR",
      startDate: "20 Sep, 2023",
      endDate: "21 Sep, 2023",
      amount: "$1,184",
      status: "Accepted",
      statusClass: "bg-success/15 text-success"
    },
    {
      id: "#TWE20015424",
      company: "Digitech Galaxy",
      department: "HR",
      startDate: "07 Oct, 2023",
      endDate: "09 Oct, 2023",
      amount: "$5,463",
      status: "Accepted",
      statusClass: "bg-success/15 text-success"
    },
    {
      id: "#TWE20015425",
      company: "Zoetic Fashion",
      department: "HR",
      startDate: "18 Dec, 2023",
      endDate: "20 Dec, 2023",
      amount: "$3,463",
      status: "Declined",
      statusClass: "bg-danger/10 text-danger"
    }
  ];
}
