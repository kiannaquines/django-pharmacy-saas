import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { PageTitle } from "../../../components/page-title/page-title";

type CardItem = {
  dropdownColor: string;
  dropdownBorder: string;
  title: string;
  description: string;
  list?: string[];
  date: string;
  starColor?: string;
}

@Component({
  selector: 'app-notes',
  imports: [RouterLink, NgIcon, PageTitle],
  templateUrl: './notes.html',
  styles: ``
})

export class Notes {
  itemdata: CardItem[] = [
    {
    dropdownColor: "bg-primary/15",
    dropdownBorder: "border-primary",
    title: "Show Then Our Research",
    description: "You should identify and anticipate any ethical issues or dilemmas that may arise during or after your research, and how you will resolve them.You should identify and anticipate any ethical issues or dilemmas that may arise during...",
    date: "16 May, 2023",
    starColor: "text-warning fill-warning/20"
  },
 
  {
    dropdownColor: "bg-danger/15",
    dropdownBorder: "border-danger",
    title: "New People Hiring",
    description: "Steps to recruiting employees",
    list: [
      "Consider your actual needs",
      "Conduct interviews with top applicants",
      "Don’t take too long to hire",
      "Making the offer"
    ],
    date: "24 Mar, 2023",
    starColor: "text-default-500 fill-default-200"
  },
    {
    dropdownColor: "bg-secondary/10",
    dropdownBorder: "border-secondary",
    title: "Design Tools",
    description: "Visual design tools are, for example, gesture, sketch, drawing, scale model, perspective drawing, photograph, film, video. These include flowcharts, pseudocode, and Nassi-Shneiderman diagrams.",
    date: "29 Feb, 2023",
    starColor: "text-warning fill-warning/20"
  },
    {
    dropdownColor: "bg-success/10",
    dropdownBorder: "border-success",
    title: "Create Chat Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "01 Jan, 2023",
    starColor: "text-default-500 fill-default-200"
  },
   {
    dropdownColor: "bg-primary/10",
    dropdownBorder: "border-primary",
    title: "Show Then Our Research",
    description: "You should identify and anticipate any ethical issues or dilemmas that may arise during or after your research, and how you will resolve them. You should also consider the impact and consequences of your research on different stakeholders.",
    date: "16 May, 2023",
    starColor: "text-warning fill-warning/20"
  },
  {
    dropdownColor: "bg-danger/15",
    dropdownBorder: "border-danger",
    title: "New People Hiring",
    description: "Steps to recruiting employees",
    list: [
      "Consider your actual needs",
      "Conduct interviews with top applicants",
      "Don’t take too long to hire",
      "Making the offer"
    ],
    date: "24 Mar,2023",
    starColor: "text-default-500 fill-default-200"
  },
  {
    dropdownColor: "bg-primary/10",
    dropdownBorder: "border-primary",
    title: "Boarding is Important Thing",
    description: "Living away from home and residing on campus in a dorm setting provides invaluable opportunities for personal growth. Boarding school students tend to develop life Business such as time management, work ethic",
    date: "29 Mar, 2023",
    starColor: "text-default-500 fill-default-200"
  },
  {
    dropdownColor: "bg-secondary/10",
    dropdownBorder: "border-secondary",
    title: "Company Improvements",
    description: "Improving a business's performance requires a strategic and holistic approach that focuses on key areas such as setting and tracking KPIs, improving operational efficiency.",
    date: "09 Jun, 2023",
    starColor: "text-warning fill-warning/20"
  }
  
];

}
