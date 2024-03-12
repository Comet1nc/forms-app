import { Routes } from '@angular/router';
import { HomeComponent } from './feature/about-app/pages/home/home.component';
import { AboutAppComponent } from './feature/about-app/about-app.component';
import { LoginComponent } from './feature/auth/pages/login/login.component';
import { AuthComponent } from './feature/auth/auth.component';
import { RegisterComponent } from './feature/auth/pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutAppComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
