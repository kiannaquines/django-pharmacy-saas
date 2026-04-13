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
  imports: [RouterLink, NgIcon],
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
 aboutUs: FooterSection = {
  title: 'About Us',
  links: [
    { label: 'News', routerLink: [] },
    { label: 'Service', routerLink: [] },
    { label: 'Our Policy', routerLink: [] },
    { label: 'Support 24/7', routerLink: [] },
    { label: "FAQ's", routerLink: [] }
  ]
};
 getHelp: FooterSection = {
  title: 'Get Help',
  links: [
    { label: 'About Us', routerLink: [] },
    { label: 'Contact Us', routerLink: [] },
    { label: 'Payment Policy', routerLink: [] },
    { label: 'Return Policy', routerLink: [] }
  ]
};

}
