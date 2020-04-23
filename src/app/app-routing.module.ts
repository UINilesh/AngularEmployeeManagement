import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// router angular core
import { Routes, RouterModule } from '@angular/router';

// shared component data here 
import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// authguard 
import { AuthguardGuard } from './guard/authguard.guard';
  
const routes: Routes = [
  { path:"", redirectTo:"/login", pathMatch:"full"},
  { path:"login", component:LoginComponent },
  { path: "home", component:HomeComponent,canActivate: [AuthguardGuard]},
  { path:"add", component:AddComponent,canActivate: [AuthguardGuard] },
  { path:"edit/:id", component:EditComponent,canActivate: [AuthguardGuard]},
  { path:"show/:id", component:ShowComponent,canActivate: [AuthguardGuard]},
  { path: "register", component:RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
