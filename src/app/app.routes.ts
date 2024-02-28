import { Routes } from '@angular/router';
import { HomeComponent } from './feature/about-app/pages/home/home.component';
import { AboutAppComponent } from './feature/about-app/about-app.component';

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
];
