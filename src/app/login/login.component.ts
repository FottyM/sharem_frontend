import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {AlertService} from "../services/alert.service";
import {Observable} from "rxjs";
import {currentUser} from "../helpers/global-variables";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;
  currentUser = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // console.log(`${currentUser.token}`);
  }

  login(): void{
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          this.alertService.success(`Welcome!`);
          this.router.navigateByUrl('/DummyComponent', true);
          this.router.navigate(["/home"]);
          // window.history.back();
          location.reload(true);
        },
        error => {
          this.alertService.error(this.stringify(error));
          this.loading = false;
          console.log(error)
        });



  }

  stringify( obj: any): string{
    return  JSON.parse(obj._body).error
  }

}
