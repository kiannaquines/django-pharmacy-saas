import { Component } from '@angular/core';
import { Pagination } from "../../../components/pagination/pagination";
import { NgIcon } from "@ng-icons/core";
import { RouterLink } from '@angular/router';
import { PageTitle } from '../../../components/page-title/page-title';

type UserTable = {
  id: string;
  avatar: string;
  name: string;
  role: string;
  country: string;
  email: string;
  phone: string;
  date: string;
  status: {
    label: string;
    bgClass: string;
    textClass: string;
    icon: string;
  };
}

@Component({
  selector: 'app-users-list',
  imports: [Pagination, NgIcon, RouterLink, PageTitle],
  templateUrl: './users-list.html',
  styles: ``
})
export class UsersList {
  userTableData: UserTable[] = [
  {
    id: '#TW1500001',
    avatar: 'assets/images/user/avatar-2.png',
    name: 'Marie Prohaska',
    role: 'Graphic Designer',
    country: 'United Kingdom',
    email: 'prohaska@tailwick.com',
    phone: '853 565 9802',
    date: '04 Jan, 2023',
    status: { label: 'Verified', bgClass: 'bg-success/10', textClass: 'text-success', icon: 'lucideCircleCheck' }
  },
  {
    id: '#TW1500002',
    avatar: 'assets/images/user/avatar-1.png',
    name: 'Jaqueline Hammes',
    role: 'ASP.Net Developer',
    country: 'Brazil',
    email: 'jaqueline@tailwick.com',
    phone: '546 6334 586',
    date: '18 Jan, 2023',
    status: { label: 'Waiting', bgClass: 'bg-default-200', textClass: 'text-default-600', icon: 'lucideLoader' }
  },
  {
    id: '#TW1500003',
    avatar: 'assets/images/user/avatar-2.png',
    name: 'Marlene Hirthe',
    role: 'Angular Developer',
    country: 'Spain',
    email: 'marlene@tailwick.com',
    phone: '141 654 9876',
    date: '04 Feb, 2023',
    status: { label: 'Verified', bgClass: 'bg-success/10', textClass: 'text-success', icon: 'lucideCircleCheck' }
  },
  {
    id: '#TW1500004',
    avatar: 'assets/images/user/avatar-3.png',
    name: 'Akeem Paucek',
    role: 'Jr. Developer',
    country: 'Mexico',
    email: 'akeem.p@tailwick.com',
    phone: '783 962 3972',
    date: '12 Feb, 2023',
    status: { label: 'Rejected', bgClass: 'bg-danger/10', textClass: 'text-danger', icon: 'lucideCircleX' }
  },
  {
    id: '#TW1500005',
    avatar: 'assets/images/user/avatar-1.png',
    name: 'Stephon Trantow',
    role: 'Full Stack Developer',
    country: 'Spain',
    email: 'akeem.p@tailwick.com',
    phone: '032 126 5833',
    date: '31 Feb, 2023',
    status: { label: 'Rejected', bgClass: 'bg-danger/10', textClass: 'text-danger', icon: 'lucideCircleX' }
  },
   {
    id: '#TW1500006',
    avatar: '',
    name: 'Domenic Tromp',
    role: 'Team Leader',
    country: 'Germany',
    email: 'domenic@tailwick.com',
    phone: '612 6088 735',
    date: '27 Oct, 2023',
    status: { label: 'Verified', bgClass: 'bg-success/10', textClass: 'text-success', icon: 'lucideCircleCheck' }
  },
  {
    id: '#TW1500007',
    avatar: 'assets/images/user/avatar-2.png',
    name: 'Ethel Corwin',
    role: 'Web Designer',
    country: 'Italy',
    email: 'ecorwin@tailwick.com',
    phone: '216 897 4978',
    date: '03 Aug, 2023',
    status: { label: 'Verified', bgClass: 'bg-success/10', textClass: 'text-success', icon: 'lucideCircleCheck' }
  },
  {
    id: '#TW1500008',
    avatar: 'assets/images/user/avatar-3.png',
    name: 'Rickie Cremin',
    role: 'Web Designer',
    country: 'France',
    email: 'ecorwin@tailwick.com',
    phone: '388 946 3889',
    date: '01 July, 2023',
    status: { label: 'Waiting', bgClass: 'bg-default-200', textClass: 'text-default-600', icon: 'lucideLoader' }
  },
  {
    id: '#TW1500009',
    avatar: '',
    name: 'Reagan Larson',
    role: 'Team Leader',
    country: 'Denmark',
    email: 'reagan@tailwick.com',
    phone: '612 6088 735',
    date: '27 Oct, 2023',
    status: { label: 'Verified', bgClass: 'bg-success/10', textClass: 'text-success', icon: 'lucideCircleCheck' }
  },
  {
    id: '#TW1500010',
    avatar: 'assets/images/user/avatar-4.png',
    name: 'Glennie Langosh',
    role: 'Project Manager',
    country: 'Germany',
    email: 'glennie@tailwick.com',
    phone: '357 716 8847',
    date: '11 Dec, 2023',
    status: { label: 'Rejected', bgClass: 'bg-danger/10', textClass: 'text-danger', icon: 'lucideCircleX' }
  }
];

getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('');
}

}
