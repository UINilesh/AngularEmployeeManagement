import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
// login service 
import { ApiService } from '../loginservice/auth.service';

import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   displayerrors = false;
   angForm: FormGroup;
   submitted = false;

constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {}

  ngOnInit() { 
      this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      });
      
  }  

   // convenience getter for easy access to form fields
   get f() { return this.angForm.controls; }

 
postdata(angForm1)
{
  this.submitted = true;
    if (this.angForm.invalid) {
      return;
  }  
   this.dataService.userlogin(angForm1.value.email,angForm1.value.password)
   .pipe(first())
   .subscribe(
   data => {
   const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/home';
  // print user value in page
   //this.displayname.angForm1.value.email;
   //console.log(this.displayname.value.email);
  this.router.navigate([redirect]);
},
error => {
//alert("User name or password is incorrect")
 this.displayerrors = true;
 console.log(this.displayerrors=true);
});
}
 



}
