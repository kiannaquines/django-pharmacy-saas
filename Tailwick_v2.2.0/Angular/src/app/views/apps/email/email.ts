import { Component } from '@angular/core';
import { EmailSidebar } from "./components/email-sidebar/email-sidebar";
import { EmailNavbar } from "./components/email-navbar/email-navbar";
import { EmailInbox } from "./components/email-inbox/email-inbox";
import { EmailOverview } from "./components/email-overview/email-overview";
import { NgIcon } from "@ng-icons/core";
import { EmailModal } from "./components/email-modal/email-modal";


@Component({
  selector: 'app-email',
  imports: [EmailSidebar, EmailNavbar, EmailInbox, EmailOverview, NgIcon, EmailModal],
  templateUrl: './email.html',
  styles: ``
})
export class Email {

}
