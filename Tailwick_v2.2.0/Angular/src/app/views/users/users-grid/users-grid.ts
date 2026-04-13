import { Component } from '@angular/core';
import { Pagination } from "../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { UserAdd } from "./components/user-add/user-add";
import { PageTitle } from "../../../components/page-title/page-title";

@Component({
  selector: 'app-users-grid',
  imports: [Pagination, NgIcon, RouterLink, UserAdd, PageTitle],
  templateUrl: './users-grid.html',
  styles: ``
})
export class UsersGrid {
  users = [
  {
    name: 'Paula Keenan',
    role: '@Admin',
    address: '748 Luettgen Plain Suite South Winstonfort, NM',
    avatar: 'assets/images/user/avatar-1.png',
    status: 'success'
  },
  {
    name: 'Marie Prohaska',
    role: '@Subscriber',
    address: '125 Ortiz Camp Suite 471 Rippinport, US',
    avatar: 'assets/images/user/avatar-2.png',
    status: 'success'
  },
  {
    name: 'Jaqueline Hammes',
    role: '@Editor',
    address: '8716 Dell Manors New Ahmedmouth, WI',
    avatar: 'assets/images/user/avatar-3.png',
    status: 'success'
  },
  {
    name: 'Angus Bergstrom',
    role: '@Developer',
    address: '617 Powlowski Crossroad Apt. 716 New Victoria',
    avatar: null,
    initials: 'AB',
    status: 'success'
  },
  {
    name: 'Aurore Maggio',
    role: '@Subscriber',
    address: '8751 Boyer Courts Suite 532 West Fletcherside',
    avatar: 'assets/images/user/avatar-4.png',
    status: 'danger'
  },
  {
    name: 'Andrea Pesina',
    role: '@Editor',
    address: '32 Maidstone Road WELLSBOROUGH',
    avatar: null,
    initials: 'AB',
    status: 'success'
  },
  {
    name: 'Daniel Miller',
    role: '@Subscriber',
    address: '431 Elk Rd Little Ticonderoga, NY',
    avatar: 'assets/images/user/avatar-5.png',
    status: 'danger'
  },
  {
    name: 'Ashley Wilson',
    role: '@Subscriber',
    address: '0816 Bradford Alley Lake Adamfort, ME',
    avatar: 'assets/images/user/avatar-6.png',
    status: 'success'
  },
  {
    name: 'William Heineman',
    role: '@Author',
    address: '99614 Pollich Extension Apt. 938 South Alf, GA',
    avatar: 'assets/images/user/avatar-7.png',
    status: 'success'
  },
  {
    name: 'Kara Miller',
    role: '@Subscriber',
    address: '755 Kody Plaza Apt. 138 East Reinholdberg, AR',
    avatar: 'assets/images/user/avatar-8.png',
    status: 'success'
  },
  {
    name: 'Mark Walton',
    role: '@Author',
    address: '895 Camylle Tunnel Lake Chasity, SC',
    avatar: null,
    initials: 'MW',
    status: 'success'
  },
  {
    name: 'David Biggs',
    role: '@Subscriber',
    address: '75, Deccan Gymkhana, Alwar',
    avatar: null,
    initials: 'DB',
    status: 'danger'
  }
];

getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('');
}

}
