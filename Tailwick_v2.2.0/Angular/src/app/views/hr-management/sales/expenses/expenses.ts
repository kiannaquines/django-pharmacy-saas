import { Component } from '@angular/core';
import { Pagination } from "../../../../components/pagination/pagination";
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { ExpensesAdd } from "./components/expenses-add/expenses-add";
import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { PageTitle } from "../../../../components/page-title/page-title";

type ExpenseItem = {
  date: string;
  item: string;
  from: string;
  to: string;
  amount: string;
}

@Component({
  selector: 'app-expenses',
  imports: [Pagination, RouterLink, NgIcon, ExpensesAdd, FlatpickrDirective, PageTitle],
  templateUrl: './expenses.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})
export class Expenses {
  expenseList: ExpenseItem[] = [
  {
    date: "02 July, 2023",
    item: "Mac System",
    from: "HR",
    to: "HR",
    amount: "$5,478"
  },
  {
    date: "08 Nov, 2023",
    item: "HP Desktop",
    from: "Louisa Howe",
    to: "HR",
    amount: "$4,342"
  },
  {
    date: "11 Aug, 2023",
    item: "i5 PC",
    from: "Everett Moore",
    to: "Admin",
    amount: "$8,327"
  },
  {
    date: "20 Sep, 2023",
    item: "Decoration",
    from: "Omari Welch",
    to: "HR",
    amount: "$563"
  },
  {
    date: "07 Oct, 2023",
    item: "Cake",
    from: "HR",
    to: "Susana Dooley",
    amount: "$148"
  },
  {
    date: "18 Dec, 2023",
    item: "Salary to Employees",
    from: "Omari Welch",
    to: "Paula Keenan",
    amount: "$4,500"
  },
  {
    date: "21 Jan, 2024",
    item: "Salary to Employees",
    from: "Everett Moore",
    to: "Paula Keenan",
    amount: "$3,000"
  },
  {
    date: "02 Feb, 2023",
    item: "HP & Lenovo Desktop",
    from: "HR",
    to: "HR",
    amount: "$4,177"
  },
  {
    date: "11 Dec, 2023",
    item: "Birthday Party",
    from: "HR",
    to: "HR",
    amount: "$2,307"
  },
  {
    date: "01 Jan, 2023",
    item: "Festival Decoration",
    from: "Lucie Beahan",
    to: "HR",
    amount: "$543.99"
  }
];
}
