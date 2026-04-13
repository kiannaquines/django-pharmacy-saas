import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { SimplebarAngularModule } from 'simplebar-angular';

interface Appointment {
  avatar: string;
  name: string;
  email: string;
  date: string;
  time: string;
  status: {
    label: string;
    class: string;
  };
}

@Component({
  selector: 'app-upcoming-interview',
  imports: [NgIcon, SimplebarAngularModule, RouterLink ],
  templateUrl: './upcoming-interview.html',
  styles: ``
})

export class UpcomingInterview {

  appointments: Appointment[] = [
  {
    avatar: "assets/images/user/user-1.jpg",
    name: "James Krogman",
    email: "james@tailwick.com",
    date: "25 Nov",
    time: "02:41 pm",
    status: {
      label: "Confirm",
      class:
        " border-success/40 text-success"
    }
  },
  {
    avatar: "assets/images/user/user-2.jpg",
    name: "Michael Scott",
    email: "michaelScott@tailwick.com",
    date: "05 Dec",
    time: "01:23 pm",
    status: {
      label: "Re-scheduled",
      class:
        "border-primary/40 text-primary"
    }
  },
  {
    avatar: "assets/images/user/user-3.jpg",
    name: "Denise Ledford",
    email: "ledford@tailwick.com",
    date: "27 Nov",
    time: "11:59 pm",
    status: {
      label: "Scheduled",
      class:
        " border-secondary/40 text-secondary"
    }
  },
  {
    avatar: "assets/images/user/avatar-5.png",
    name: "Gladys Smith",
    email: "gap-4@tailwick.com",
    date: "07 Dec",
    time: "05:19 pm",
    status: {
      label: "Cancelled",
      class:
        " border-danger/40 text-danger"
    }
  }
];

}
