import { Component } from '@angular/core';
import { Pagination } from "../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { EditModal } from "./components/edit-modal/edit-modal";
import { DeleteModal } from "./components/delete-modal/delete-modal";

type DepartmentRow = {
  id: number;
  department: string;
  manager: string;
  phone: string;
  email: string;
  employees: string;
};

@Component({
  selector: 'app-department',
  imports: [Pagination, NgIcon, RouterLink, EditModal, DeleteModal],
  templateUrl: './department.html',
  styles: ``
})

export class Department {
 tableRows: DepartmentRow[] = [
    {
      id: 1,
      department: "Web Development",
      manager: "Patricia Garcia",
      phone: "077 7317 7572",
      email: "PatriciaJGarcia@tailwick.com",
      employees: '15'
    },
    {
      id: 2,
      department: "IOS Application Development",
      manager: "Frederiksen",
      phone: "61 53 62 05",
      email: "jonas@tailwick.com",
      employees: '09'
    },
    {
      id: 3,
      department: "Designing",
      manager: "Juliette Fecteau",
      phone: "07231 96 25 88",
      email: "JulietteFecteau@tailwick.com",
      employees: '11'
    },
    {
      id: 4,
      department: "HR Management",
      manager: "Thomas Hatfield",
      phone: "0911 47 65 49",
      email: "thomas@tailwick.com",
      employees: '03'
    },
    {
      id: 5,
      department: "Accounts Management",
      manager: "Holly Kavanaugh",
      phone: "819 947 5846",
      email: "HollyKavanaugh@tailwick.com",
      employees: '02'
    }
  ];
}
