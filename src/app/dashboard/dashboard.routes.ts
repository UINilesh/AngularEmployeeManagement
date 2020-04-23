import { Routes } from '@angular/router';
 

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard.component';
import { AuthguardGuard } from '../guard/authguard.guard';


export const dashboardRoutes: Routes = [
  {

    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
    ]
  }
];
