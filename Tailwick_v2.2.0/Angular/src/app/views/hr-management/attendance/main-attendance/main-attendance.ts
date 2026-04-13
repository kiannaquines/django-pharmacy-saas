import { FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { AttendanceCard } from "./components/attendance-card/attendance-card";

type TableRow = {
  name: string;
  values: ("check" | "x" | "-")[];
}

@Component({
  selector: 'app-main-attendance',
  standalone: true,
  imports: [NgIcon, AttendanceCard, FlatpickrDirective],
  templateUrl: './main-attendance.html',
  providers: [provideFlatpickrDefaults()],
  styles: ``
})

export class MainAttendance {

  tableData: TableRow[] = [
    {
      name: "Patricia Garcia",
      values: [
        "x", "x", "-", "-", "check", "check", "check", "check", "x",
        "-", "-", "check", "x", "check", "check", "check", "-", "-",
        "x", "check", "check", "check", "check", "-", "-", "check",
        "check", "check", "check", "check"
      ]
    },
    {
      name: "Tonya Johnson",
      values: [
        "check", "check", "-", "-", "check", "check", "check", "x",
        "check", "-", "-", "x", "check", "check", "check", "check",
        "-", "-", "check", "check", "x", "check", "check", "-", "-",
        "check", "check", "check", "check", "x"
      ]
    },
    {
      name: "Willie Torres",
      values: [
        "check", "x", "-", "-", "check", "x", "x", "check", "check",
        "-", "-", "check", "check", "check", "check", "check", "-", "-",
        "check", "check", "check", "check", "check", "-", "-", "check",
        "check", "x", "check", "check"
      ]
    },
    {
      name: "Jose White",
      values: [
        "check", "check", "-", "-", "check", "check", "check", "x",
        "check", "-", "-", "check", "check", "check", "check", "check",
        "-", "-", "check", "check", "check", "check", "x", "-", "-",
        "check", "check", "check", "check", "check"
      ]
    },
    {
      name: "Jose White",
      values: [
        "x", "check", "-", "-", "check", "check", "check", "check",
        "check", "-", "-", "x", "x", "check", "check", "check", "-", "-",
        "check", "check", "check", "check", "check", "-", "-", "check",
        "check", "check", "check", "check"
      ]
    },
    {
      name: "Jonas Frederiksen",
      values: [
        "check", "check", "-", "-", "x", "x", "x", "check", "check",
        "-", "-", "check", "check", "check", "check", "x", "-", "-",
        "check", "check", "check", "check", "check", "-", "-", "x",
        "check", "check", "check", "check"
      ]
    },
    {
      name: "Kim Broberg",
      values: [
        "check", "check", "-", "-", "check", "check", "check", "x",
        "check", "-", "-", "check", "check", "check", "check", "x", "-", "-",
        "check", "x", "check", "check", "check", "-", "-", "check",
        "check", "check", "check", "check"
      ]
    },
    {
      name: "Nancy Reynolds",
      values: [
        "check", "check", "-", "-", "x", "check", "check", "check",
        "check", "-", "-", "check", "check", "check", "x", "check", "-", "-",
        "check", "check", "check", "check", "check", "-", "-", "check",
        "check", "check", "check", "check"
      ]
    },
    {
      name: "Thomas Hatfield",
      values: [
        "x", "check", "-", "-", "check", "check", "x", "check", "check",
        "-", "-", "check", "check", "x", "check", "check", "-", "-",
        "check", "x", "check", "check", "check", "-", "-", "check",
        "check", "x", "check", "check"
      ]
    },
    {
      name: "Holly Kavanaugh",
      values: [
        "check", "check", "-", "-", "check", "check", "check", "x",
        "check", "-", "-", "check", "x", "check", "check", "check", "-", "-",
        "x", "check", "x", "check", "check", "-", "-", "check", "check",
        "check", "x", "check"
      ]
    }
  ];
}
