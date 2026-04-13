import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { MobileMenu } from "../mobile-menu/mobile-menu";

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIcon, MobileMenu],
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
