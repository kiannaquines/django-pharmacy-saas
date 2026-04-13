import { Component } from '@angular/core';
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";


@Component({
  selector: 'app-header',
  imports: [MobileMenu, RouterLink, NgIcon],
  templateUrl: './header.html',
  styles: ``
})
export class Header {
   


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
