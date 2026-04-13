import { Routes } from "@angular/router";
import { Chat } from "./chat/chat";
import { Calendar } from "./calendar/calendar";
import { Email } from "./email/email";
import { Notes } from "./notes/notes";

export const APPS_ROUTES: Routes = [
    {
        path: 'apps/chat',
        component : Chat,
        data: { title: 'Chat' },
    },
    {
        path: 'apps/calendar',
        component : Calendar,
        data: { title: 'Calendar' },
    },
    {
        path: 'apps/email',
        component : Email,
        data: { title: 'Mailbox' },
    },
    {
        path: 'apps/notes',
        component : Notes,
        data: { title: 'Notes' },
    }
]