import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { Pagination } from "../../../components/pagination/pagination";
import { EmployeeEdit } from "./components/employee-edit/employee-edit";
import { EmployeeDelete } from "./components/employee-delete/employee-delete";
import { PageTitle } from '../../../components/page-title/page-title';

type Employee = {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  country: string;
  experience: string;
  joiningDate: string;
  avatar: string;
}

@Component({
  selector: 'app-employee-list',
  imports: [NgIcon, RouterLink, Pagination, EmployeeEdit, EmployeeDelete, PageTitle],
  templateUrl: './employee-list.html',
  styles: ``
})
export class EmployeeList {
 
  tableHeaderData: string[] = [
    "Employee ID",
    "Name",
    "Designation",
    "Email Id",
    "Phone Number",
    "Location",
    "Experience",
    "Joining Date",
    "Action"
  ]

employees: Employee[] = [
  {
    id: "#TWE1001528",
    name: "Willie Torres",
    role: "Nuxt JS Developer",
    email: "willie@tailwick.com",
    phone: "070 3715 3689",
    country: "United States",
    experience: "3 Year",
    joiningDate: "05 Feb, 2020",
    avatar: "assets/images/user/user-1.jpg",
  },
  {
    id: "#TWE1001524",
    name: "Patricia Garcia",
    role: "ASP.Net Developer",
    email: "PatriciaJGarcia@tailwick.com",
    phone: "077 7317 7572",
    country: "Brazil",
    experience: "0.5 Year",
    joiningDate: "12 Aug, 2023",
    avatar: "assets/images/user/user-2.jpg",
  },
  {
    id: "#TWE1001506",
    name: "Tonya Johnson",
    role: "Project Manager",
    email: "TonyaEJohnson@tailwick.com",
    phone: "079 2383 2340",
    country: "Denmark",
    experience: "0 Year",
    joiningDate: "11 Nov, 2023",
    avatar: "assets/images/user/user-3.jpg",
  },
  {
    id: "#TWE1001502",
    name: "Jose White",
    role: "React Developer",
    email: "ameida@tailwick.com",
    phone: "03476 56 14 12",
    country: "Philippines",
    experience: "1.5 Year",
    joiningDate: "09 Jun, 2022",
    avatar: "assets/images/user/user-4.jpg",
  },
  {
    id: "#TWE1001503",
    name: "Juliette Fecteau",
    role: "Sr. Angular Developer",
    email: "JulietteFecteau@tailwick.com",
    phone: "07231 96 25 88",
    country: "Belgium",
    experience: "1.9 Year",
    joiningDate: "11 May, 2021",
    avatar: "assets/images/user/user-1.jpg",
  },
  {
    id: "#TWE1001504",
    name: "Jonas Frederiksen",
    role: "Team Leader",
    email: "jonas@tailwick.com",
    phone: "61 53 62 05",
    country: "France",
    experience: "2.9 Year",
    joiningDate: "18 Jan, 2019",
    avatar: "assets/images/user/user-2.jpg",
  },
  {
    id: "#TWE1001505",
    name: "Kim Broberg",
    role: "UI / UX Designer",
    email: "KimBroberg@tailwick.com",
    phone: "040 382 2096",
    country: "Finland",
    experience: "1.2 Year",
    joiningDate: "23 April, 2021",
    avatar: "assets/images/user/user-4.jpg",
  },
];
}
