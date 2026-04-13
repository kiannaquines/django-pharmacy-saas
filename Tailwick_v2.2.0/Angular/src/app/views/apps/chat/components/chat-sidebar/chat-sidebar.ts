import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from "@ng-icons/core";
import { ChatList } from "../chat-list/chat-list";

@Component({
  selector: 'app-chat-sidebar',
  imports: [RouterLink, NgIcon, ChatList],
  templateUrl: './chat-sidebar.html',
  styles: ``
})
export class ChatSidebar {

}
