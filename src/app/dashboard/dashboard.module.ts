import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { dashboardRoutes } from './dashboard.routes';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  providers: [  ],
  declarations: [HomeComponent, HeaderComponent, FooterComponent,
    
]
})
export class DashboardModule { }