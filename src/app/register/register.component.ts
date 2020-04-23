import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from "@angular/forms";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
import { ApiService } from "../loginservice/auth.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.angForm.controls;
  }

  postdata(angForm1) {
    this.submitted = true;
    if (this.angForm.invalid) {
      return;
    }

    this.dataService
      .userregistration(
        angForm1.value.name,
        angForm1.value.email,
        angForm1.value.password
      )
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(this.dataService.userregistration);
          this.router.navigate(["login"]);
        },

        (error) => {}
      );

    console.log("Register message on click");
  }
}
