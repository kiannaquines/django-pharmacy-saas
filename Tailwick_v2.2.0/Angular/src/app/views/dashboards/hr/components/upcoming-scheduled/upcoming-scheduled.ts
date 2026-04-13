import { Component } from '@angular/core';

type EventItem = {
  date: string;
  month: string;
  title: string;
  time?: string;
  createdBy: string;
};

@Component({
  selector: 'app-upcoming-scheduled',
  imports: [],
  templateUrl: './upcoming-scheduled.html',
  styles: ``
})

export class UpcomingScheduled {
  events: EventItem[] = [
    { date: '28', month: 'July', title: 'Meeting with Designer', time: '09:57 AM', createdBy: 'Admin' },
    { date: '08', month: 'June', title: 'Developing Line Managers Conference', time: '10:54 AM', createdBy: 'HR' },
    { date: '17', month: 'July', title: 'Airplane in Las Vegas', time: '12:00 PM', createdBy: 'HR' },
    { date: '11', month: 'Nov', title: 'Hospitality Project Discuses', createdBy: 'Admin' },
    { date: '20', month: 'Nov', title: 'Gartner Digital Workplace', time: '03:49 PM', createdBy: 'HR' },
    { date: '04', month: 'Dec', title: 'Nordic People Analytics', time: '11:00 AM', createdBy: 'Admin' },
    { date: '17', month: 'Jan', title: 'CIPD Festival of Work', time: '01:29 PM', createdBy: 'HR' },
    { date: '03', month: 'Feb', title: 'HRO Today Forum', time: '02:15 PM', createdBy: 'Admin' },
    { date: '15', month: 'Mar', title: 'HR Training Workshop', time: '09:00 AM', createdBy: 'HR' },
    { date: '29', month: 'Apr', title: 'Marketing Strategy Review', time: '04:45 PM', createdBy: 'Marketing' },
    { date: '10', month: 'May', title: 'Client Demo Presentation', time: '11:30 AM', createdBy: 'Admin' },
  ];
}
