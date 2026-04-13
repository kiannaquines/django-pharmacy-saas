import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";

type FooterLink = {
  label: string;
  routerLink: string[];
}

type FooterSection = {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  imports: [NgIcon, RouterLink],
  templateUrl: './footer.html',
  styles: ``
})
export class Footer {

  dashboards: FooterSection = {
    title: 'Dashboards',
    links: [
      { label: 'Analytics', routerLink: [] },
      { label: 'CRM', routerLink: [] },
      { label: 'Ecommerce', routerLink: [] },
      { label: 'Email', routerLink: [] },
      { label: 'HR', routerLink: [] },
      { label: 'Social Media', routerLink: [] }
    ]
  };

  appsPages: FooterSection = {
    title: 'Apps Pages',
    links: [
      { label: 'Ecommerce Apps', routerLink: [] },
      { label: 'Invoices', routerLink: [] },
      { label: 'Email App', routerLink: [] },
      { label: 'Chat App', routerLink: [] },
      { label: 'Users Apps', routerLink: [] },
      { label: 'HR Management', routerLink: [] },
      { label: 'Social Media', routerLink: [] }
    ]
  };

  resources: FooterSection = {
    title: 'Resources',
    links: [
      { label: 'All Resources', routerLink: [] },
      { label: 'Blog', routerLink: [] },
      { label: "FAQ's", routerLink: [] },
      { label: 'Help Center', routerLink: [] }
    ]
  };

}
