import { Routes } from "@angular/router";
import { UsersGrid } from "./users-grid/users-grid";
import { UsersList } from "./users-list/users-list";

export const USERS_ROUTES: Routes = [
    {
        path: 'users/list',
        component: UsersList,
        data: { title: 'List View' },
    },
    {
        path: 'users/grid',
        component: UsersGrid,
        data: { title: 'Grid View' },
    }

]