import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ems/navbar/navbar.component';
import { HomeComponent } from './ems/home/home.component';
import { AddComponent } from './ems/add/add.component';
import { EditComponent } from './ems/edit/edit.component';
import { ShowComponent } from './ems/show/show.component';
import { EmpService } from './emp.service';
import { LoginComponent } from './login/login.component';
import { ApiService } from './loginservice/auth.service';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { FooterComponent } from './footer/footer.component'; 
 
// search data filter 
import { FilterPipe } from './searchdata/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddComponent,
    EditComponent,
    ShowComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    FooterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,  
    ReactiveFormsModule
  ],
  providers: [EmpService, ApiService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
