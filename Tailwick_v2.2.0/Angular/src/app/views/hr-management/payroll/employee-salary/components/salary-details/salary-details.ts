import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type PayrollRow = {
  id: string;
  date: string;
  employee: {
    name: string;
    image: string;
    email: string;
  };
  role: string;
  phone: string;
  salary: string;
  bonus: string;
}

@Component({
  selector: 'app-salary-details',
  imports: [RouterLink, NgIcon],
  templateUrl: './salary-details.html',
  styles: ``
})
export class SalaryDetails {

   payrollData: PayrollRow[] = [
    {
      id: "#TWE1001501",
      date: "05 Feb, 2020",
      employee: {
        name: "Willie Torres",
        image: "assets/images/user/user-1.jpg",
        email: "willie@tailwick.com"
      },
      role: "Nuxt JS Developer",
      phone: "070 3715 3689",
      salary: "$8,500",
      bonus: "$500"
    },
    {
      id: "#TWE1001524",
      date: "12 Aug, 2023",
      employee: {
        name: "Patricia Garcia",
        image: "assets/images/user/avatar-3.png",
        email: "PatriciaJGarcia@tailwick.com"
      },
      role: "ASP.Net Developer",
      phone: "077 7317 7572",
      salary: "$3,800",
      bonus: "-"
    },
    {
      id: "#TWE1001506",
      date: "11 Nov, 2023",
      employee: {
        name: "Tonya Johnson",
        image: "assets/images/user/avatar-6.png",
        email: "TonyaEJohnson@tailwick.com"
      },
      role: "Project Manager",
      phone: "079 2383 2340",
      salary: "$6,000",
      bonus: "$1,500"
    },
    {
      id: "#TWE1001502",
      date: "09 Jun, 2022",
      employee: {
        name: "Jose White",
        image: "assets/images/user/user-dummy-img.jpg",
        email: "ameida@tailwick.com"
      },
      role: "React Developer",
      phone: "03476 56 14 12",
      salary: "$7,150",
      bonus: "$300"
    },
    {
      id: "#TWE1001503",
      date: "11 May, 2021",
      employee: {
        name: "Juliette Fecteau",
        image: "assets/images/user/user-3.jpg",
        email: "JulietteFecteau@tailwick.com"
      },
      role: "Sr. Angular Developer",
      phone: "07231 96 25 88",
      salary: "$7,900",
      bonus: "-"
    },
    {
      id: "#TWE1001504",
      date: "18 Jan, 2019",
      employee: {
        name: "Jonas Frederiksen",
        image: "assets/images/user/user-2.jpg",
        email: "jonas@tailwick.com"
      },
      role: "Team Leader",
      phone: "61 53 62 05",
      salary: "$5,399",
      bonus: "-"
    },
    {
      id: "#TWE1001505",
      date: "23 April, 2021",
      employee: {
        name: "Kim Broberg",
        image: "assets/images/user/avatar-8.png",
        email: "KimBroberg@tailwick.com"
      },
      role: "UI / UX Designer",
      phone: "040 382 2096",
      salary: "$6,983",
      bonus: "$1,800"
    },
    {
      id: "#TWE1001507",
      date: "01 July, 2022",
      employee: {
        name: "Nancy Reynolds",
        image: "assets/images/user/avatar-10.png",
        email: "NancyM@tailwick.com"
      },
      role: "Web Designer",
      phone: "0391 13 79 21",
      salary: "$3,300",
      bonus: "$1,000"
    },
    {
      id: "#TWE1001508",
      date: "08 Aug, 2021",
      employee: {
        name: "Thomas Hatfield",
        image: "assets/images/user/avatar-9.png",
        email: "thomas@tailwick.com"
      },
      role: "VueJs Developer",
      phone: "0911 47 65 49",
      salary: "$9,145",
      bonus: "$760"
    },
    {
      id: "#TWE1001509",
      date: "23 Dec, 2020",
      employee: {
        name: "Holly Kavanaugh",
        image: "assets/images/user/avatar-4.png",
        email: "HollyKavanaugh@tailwick.com"
      },
      role: "Laravel Developer",
      phone: "819 947 5846",
      salary: "$8,750",
      bonus: "$2,300"
    }
  ];

}
