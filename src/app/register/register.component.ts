import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AlertService} from "../services/alert.service";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true parameter to persist the message after redirecting to the login page
          this.alertService.success('Registration successful', true);
          console.log('Success');
          this.router.navigate(['/home']);
        },
        error => {
          // error = JSON.parse(error._body || null);
          this.alertService.error(error);
          this.loading = false;
          console.log(error._body);
        });
  }

}
