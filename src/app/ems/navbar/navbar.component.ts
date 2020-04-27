import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../loginservice/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;
displayname:any;
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

  ngOnInit() { 
    // print name on admin page 
    this.displayname = this.dataService.getToken();
    console.log(this.dataService.getToken());
  }
}
