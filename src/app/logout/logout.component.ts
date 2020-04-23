import { Component, OnInit } from "@angular/core";
import { ApiService } from "../loginservice/auth.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;

  constructor(private dataService: ApiService) {
    dataService.getLoggedInName.subscribe((name) => this.changeName(name));

    if (this.dataService.isLoggedIn()) {
      console.log("loggedin");
      this.loginbtn = false;
      this.logoutbtn = true;
    } else {
      this.loginbtn = true;
      this.logoutbtn = false;
    }
  }

  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

  ngOnInit() {}
}
