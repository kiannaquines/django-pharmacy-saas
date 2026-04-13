import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { SimplebarAngularModule } from "simplebar-angular";

type Email = {
  id: string;
  name: string;
  message: string;
  time: string;
  isRead: boolean;
}

@Component({
  selector: 'app-email-inbox',
  imports: [NgIcon, SimplebarAngularModule],
  templateUrl: './email-inbox.html',
  styles: ``
})

export class EmailInbox {
  emails: Email[] = [
  {
    id: "checkbox-all",
    name: "Tonya Johnson",
    message: "Maintain the overall pristine status...",
    time: "10:59 AM",
    isRead: false
  },
  {
    id: "checkbox-1",
    name: "Infra Teach",
    message: "How Custom Software Can Solve Your Business Challenges.",
    time: "04:15 PM",
    isRead: false
  },
  {
    id: "checkbox-2",
    name: "Facebook",
    message: "Post Basic High School, Ratanpur(GA) and 7 others are new Group suggestions for you",
    time: "12:29 PM",
    isRead: true
  },
  {
    id: "checkbox-3",
    name: "Linkedin",
    message: "Front End Developer-HTML/CSS role at Gainserv: 1 connection",
    time: "08:44 PM",
    isRead: true
  },
  {
    id: "checkbox-4",
    name: "Jobcy - Job Board & Landing",
    message: "You’re invited: Job Search Tactics for Entry-Level Candidates",
    time: "08:10 PM",
    isRead: true
  },
  {
    id: "checkbox-5",
    name: "Holly Kavanaugh",
    message: "Information Technology Rules Annual Reminder",
    time: "04:33 PM",
    isRead: false
  },
  {
    id: "checkbox-6",
    name: "Jose White",
    message: "I just requested to connect -Paula Keenan, respond to Meet’s now.",
    time: "01:19 PM",
    isRead: true
  },
  {
    id: "checkbox-7",
    name: "Patricia Garcia",
    message: "List all mail-enabled users who have specific permissions on the selected mailboxes...",
    time: "01:20 AM",
    isRead: false
  },
  {
    id: "checkbox-8",
    name: "Tonya Johnson",
    message: "Maintain the overall pristine status and health of your Exchange Online environment...",
    time: "10:57 AM",
    isRead: true
  },
  {
    id: "checkbox-9",
    name: "Themesdesign",
    message: "Your License expired",
    time: "11:54 PM",
    isRead: false
  },
  {
    id: "checkbox-10",
    name: "Tonya Johnson",
    message: "Maintain the overall pristine status...",
    time: "10:59 AM",
    isRead: true
  },
  {
    id: "checkbox-11",
    name: "Infra Teach",
    message: "How Custom Software Can Solve Your Business Challenges.",
    time: "04:15 PM",
    isRead: true
  },
  {
    id: "checkbox-12",
    name: "Facebook",
    message: "Post Basic High School, Ratanpur(GA) and 7 others are new Group suggestions for you",
    time: "12:29 PM",
    isRead: true
  },
  {
    id: "checkbox-13",
    name: "Linkedin",
    message: "Front End Developer-HTML/CSS role at Gainserv: 1 connection",
    time: "08:44 PM",
    isRead: false
  },
  {
    id: "checkbox-14",
    name: "Jobcy - Job Board & Landing",
    message: "You’re invited: Job Search Tactics for Entry-Level Candidates",
    time: "08:10 PM",
    isRead: true
  },
  {
    id: "checkbox-15",
    name: "Holly Kavanaugh",
    message: "Information Technology Rules Annual Reminder",
    time: "04:33 PM",
    isRead: false
  },
  {
    id: "checkbox-16",
    name: "Jose White",
    message: "I just requested to connect -Paula Keenan, respond to Meet’s now.",
    time: "01:19 PM",
    isRead: false
  },
  {
    id: "checkbox-17",
    name: "Patricia Garcia",
    message: "List all mail-enabled users who have specific permissions on the selected mailboxes...",
    time: "01:20 AM",
    isRead: false
  },
  {
    id: "checkbox-18",
    name: "Tonya Johnson",
    message: "Maintain the overall pristine status and health of your Exchange Online environment...",
    time: "10:57 AM",
    isRead: true
  },
  {
    id: "checkbox-19",
    name: "Themesdesign",
    message: "Your License expired",
    time: "11:54 PM",
    isRead: false
  }
];
}
