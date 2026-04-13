import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { VerifyEmail } from "./verify-email/verify-email";
import { TwoSteps } from "./two-steps/two-steps";
import { Logout } from "./logout/logout";
import { ResetPassword } from "./reset-password/reset-password";
import { CreatePassword } from "./create-password/create-password";

export const BASIC_AUTH_ROUTES: Routes = [
    {
        path: 'auth-basic/login',
        component: Login,
        data: { title: 'Login' },
    },
    {
        path: 'auth-basic/register',
        component: Register,
        data: { title: 'Sign In' },
    },
    {
        path: 'auth-basic/verify-email',
        component: VerifyEmail,
        data: { title: 'Verify Email' },
    },
    {
        path: 'auth-basic/two-steps',
        component: TwoSteps,
        data: { title: 'Two Steps' },
    },
    {
        path: 'auth-basic/logout',
        component: Logout,
        data: { title: 'Logout' },
    },
    {
        path: 'auth-basic/reset-password',
        component: ResetPassword,
        data: { title: 'Reset Password' },
    },
    {
        path: 'auth-basic/create-password',
        component: CreatePassword,
        data: { title: 'Create Password' },
    }
]