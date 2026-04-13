import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Register } from "./register/register";
import { VerifyEmail } from "./verify-email/verify-email";
import { TwoSteps } from "./two-steps/two-steps";
import { Logout } from "./logout/logout";
import { ResetPassword } from "./reset-password/reset-password";
import { CreatePassword } from "./create-password/create-password";

export const COVER_AUTH_ROUTES: Routes = [
    {
        path: 'auth-cover/login',
        component: Login,
        data: { title: 'Login' },
    },
    {
        path: 'auth-cover/register',
        component: Register,
        data: { title: 'Register' },
    },
    {
        path: 'auth-cover/verify-email',
        component: VerifyEmail,
        data: { title: 'Verify Email' },
    },
    {
        path: 'auth-cover/two-steps',
        component: TwoSteps,
        data: { title: 'Two Steps' },
    },
    {
        path: 'auth-cover/logout',
        component: Logout,
        data: { title: 'Logout' },
    },
    {
        path: 'auth-cover/reset-password',
        component: ResetPassword,
        data: { title: 'Reset Password' },
    },
    {
        path: 'auth-cover/create-password',
        component: CreatePassword,
        data: { title: 'Create Password' },
    }
]