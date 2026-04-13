import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { UserProfile } from "./components/user-profile/user-profile";
import { LanguageDropdown } from "./components/language-dropdown/language-dropdown";
import { ThemeToggler } from "./components/theme-toggler/theme-toggler";
import { NotificationDropdown } from "./components/notification-dropdown/notification-dropdown";
import { CustomizerToggler } from './components/customizer-toggler/customizer-toggler';
import { LayoutService } from '../../../core/services/layout-store.service';

@Component({
  selector: 'app-topbar',
  imports: [NgIcon, UserProfile, LanguageDropdown, ThemeToggler, CustomizerToggler, NotificationDropdown],
  templateUrl: './topbar.html',
  styles: ``
})

export class Topbar {

  constructor(public layout: LayoutService) { }

  toggleSidebar() {
    const html = document.documentElement;
    const currentSize = html.getAttribute('data-sidenav-size');
    const savedSize = this.layout.sidenavSize;

    if (currentSize === 'offcanvas') {
      html.classList.toggle('sidenav-enable');
      this.layout.showBackdrop();
    }
    else if (savedSize === 'md') {
      this.layout.setSidenavSize(currentSize === 'md' ? 'sm' : 'md', false);
    } else if (savedSize === 'hidden') {
      this.layout.setSidenavSize(currentSize === 'hidden' ? 'default' : 'hidden', false);
    }
    else {
      this.layout.setSidenavSize(currentSize === 'sm' ? 'default' : 'sm');
    }
  }

}
