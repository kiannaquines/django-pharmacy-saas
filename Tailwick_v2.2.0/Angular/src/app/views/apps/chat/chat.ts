import { Component } from '@angular/core';
import { NgIcon } from "@ng-icons/core";
import { ChatSidebar } from "./components/chat-sidebar/chat-sidebar";
import { UserChat } from "./components/user-chat/user-chat";
import { ChatNavbar } from "./components/chat-navbar/chat-navbar";


@Component({
  selector: 'app-chat',
  imports: [NgIcon, ChatSidebar, UserChat, ChatNavbar],
  templateUrl: './chat.html',
  styles: ``
})
export class Chat {

}
