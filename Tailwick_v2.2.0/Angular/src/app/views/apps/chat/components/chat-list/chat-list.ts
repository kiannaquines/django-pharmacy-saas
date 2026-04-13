import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimplebarAngularModule } from "simplebar-angular";

type ChatUser = {
  name: string;
  message: string;
  time: string;
  img?: string;
  initials?: string;       
  statusColor: string;     
  bgClass: string;         
  section: 'recent' | 'all'; 
}

@Component({
  selector: 'app-chat-list',
  imports: [RouterLink, SimplebarAngularModule],
  templateUrl: './chat-list.html',
  styles: ``
})

export class ChatList {
  
  chats: ChatUser[] = [
  {
    name: 'Marie Prohaska',
    message: 'I will purchase it for support',
    time: '2min ago',
    img: 'assets/images/user/avatar-5.png',
    statusColor: 'green-500',
    bgClass: 'bg-default-200',
    section: 'recent',
  },
  {
    name: 'Kara Miller',
    message: "Hey, how's it going?",
    time: '02:57 PM',
    img: 'assets/images/user/user-1.jpg',
    statusColor: 'danger',
    bgClass: 'bg-default-200',
    section: 'recent',
  },
  {
    name: 'Mark Walton',
    message: "Hey, how's it going?",
    time: 'Yesterday',
    img: 'assets/images/user/avatar-1.png',
    statusColor: 'green-500',
    bgClass: 'bg-default-200',
    section: 'recent',
  },

  // All Conversion
  {
    name: 'Aurore Maggio',
    message: 'React Developer',
    time: '',
    img: 'assets/images/user/user-2.jpg',
    statusColor: 'default-500',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Mark Walton',
    message: 'UI / UX Designer',
    time: '',
    initials: 'LP',
    statusColor: 'green-500',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Daniel Miller',
    message: 'ASP.Net Developer',
    time: '',
    img: 'assets/images/user/avatar-5.png',
    statusColor: 'danger',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Jaqueline Hammes',
    message: 'Angular Developer',
    time: '',
    img: 'assets/images/user/user-3.jpg',
    statusColor: 'default-950',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Andrea Pesina',
    message: 'Laravel Developer',
    time: '',
    img: 'assets/images/user/avatar-8.png',
    statusColor: 'default-950',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Bernard Pereira',
    message: 'Web Designer',
    time: '',
    img: 'assets/images/user/avatar-10.png',
    statusColor: 'green-500',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'William Jones',
    message: 'Project Manager',
    time: '',
    img: 'assets/images/user/user-4.jpg',
    statusColor: 'default-950',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Aurore Maggio',
    message: 'React Developer',
    time: '',
    img: 'assets/images/user/user-2.jpg',
    statusColor: 'default-500',
    bgClass: 'bg-default-200',
    section: 'all',
  },
  {
    name: 'Mark Walton',
    message: 'UI / UX Designer',
    time: '',
    initials: 'LP',
    statusColor: 'green-500',
    bgClass: 'bg-default-200',
    section: 'all',
  },
];
}
