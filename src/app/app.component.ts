import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Routes, Router, ActivatedRoute} from "@angular/router";
import {AlertService} from "./services/alert.service";
import {currentUser} from "./helpers/global-variables";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentUser = currentUser;
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router, private alertService: AlertService){}


  logout(){

    this.authenticationService.logout();
    this.alertService.success('Logged out',false);
    this.currentUser = null;
    window.history.back();

  }

  ngOnInit(){
    // console.log(this.currentUser);
  }

}
