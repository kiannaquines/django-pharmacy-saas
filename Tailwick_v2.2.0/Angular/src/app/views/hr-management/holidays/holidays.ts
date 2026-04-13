import { Component } from '@angular/core';
import { Pagination } from "../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { HolidayDelete2 } from "./components/holiday-delete2/holiday-delete2";
import { HolidayDelete } from "./components/holiday-delete/holiday-delete";
import { PageTitle } from '../../../components/page-title/page-title';

type Holiday = {
  id: number;       
  day: string;      
  date: string;     
  name: string;     
  type: string;    
}

@Component({
  selector: 'app-holidays',
  imports: [Pagination, NgIcon, RouterLink, HolidayDelete2, HolidayDelete, PageTitle],
  templateUrl: './holidays.html',
  styles: ``
})
export class Holidays {
  holidays: Holiday[] = [
  { id: 1, day: "Monday",    date: "15 Jan", name: "Makara Sankranti", type: "Gazetted Holiday" },
  { id: 2, day: "Friday",    date: "26 Jan", name: "Republic Day",     type: "Gazetted Holiday" },
  { id: 3, day: "Monday",    date: "25 Mar", name: "Holi",             type: "Gazetted Holiday" },
  { id: 4, day: "Friday",    date: "29 Mar", name: "Good Friday",      type: "Gazetted Holiday" },
  { id: 5, day: "Sunday",    date: "4 Aug",  name: "Friendship Day",   type: "Observance" },
  { id: 6, day: "Thursday",  date: "15 Aug", name: "Independence Day", type: "Gazetted Holiday" },
  { id: 7, day: "Sunday",    date: "15 Sep", name: "Onam",             type: "Restricted Holiday" },
  { id: 8, day: "Thursday",  date: "31 Oct", name: "Halloween",        type: "Observance" },
  { id: 9, day: "Wednesday", date: "25 Dec", name: "Christmas",        type: "Gazetted Holiday" },
  { id: 10,day: "Tuesday",   date: "31 Dec", name: "New Year",         type: "Observance" }
];
}
