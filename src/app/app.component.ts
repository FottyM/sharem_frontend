import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Routes, Router, ActivatedRoute} from "@angular/router";
import {AlertService} from "./services/alert.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, private router: Router, private alertService: AlertService){}


  logout(){

    this.authenticationService.logout();
    this.alertService.success('Logged out',false);
    this.currentUser = null;
    window.history.back();

  }

  ngOnInit(){
    console.log(this.currentUser);
  }

}
