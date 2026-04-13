import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { TwoSteps } from "./two-steps/two-steps";
import { Logout } from "./logout/logout";
import { ResetPassword } from "./reset-password/reset-password";
import { CreatePassword } from "./create-password/create-password";

export const BOXED_AUTH_ROUTES: Routes = [
    {
        path: 'auth-boxed/login',
        component: Login,
        data: { title: 'Login' },
    },
    {
        path: 'auth-boxed/register',
        component: Register,
        data: { title: 'Register' },
    },
    {
        path: 'auth-boxed/two-steps',
        component: TwoSteps,
        data: { title: 'Two Steps' },
    },
    {
        path: 'auth-boxed/logout',
        component: Logout,
        data: { title: 'Logout' },
    },
    {
        path: 'auth-boxed/reset-password',
        component: ResetPassword,
        data: { title: 'Reset Password' },
    },
    {
        path: 'auth-boxed/create-password',
        component: CreatePassword,
        data: { title: 'Create Password' },
    }
]