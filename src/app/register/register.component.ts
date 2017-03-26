import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {AlertService} from "../services/alert.service";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading: boolean = false;

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
        this.router.navigate(['/home']);
      },
      error => {
        error = JSON.parse(error._body);
        this.alertService.error(this.forEachKey(error));
        this.loading = false;
        console.log(this.forEachKey(error));
      });
  }

  ngOnInit(): void {

    // console.log(this.model.acceptTermsAndCondition)
    console.log('Register');
  }

  forEachKey(obj: Object): string {

    let messages: string = '';
    let keys = Object.keys(obj);

    for (let key in keys) {
      if (keys[key] == 'message') {
        for (let value in obj[keys[key]]) {
          messages += `${obj[keys[key]][value][0]}`;
        }
      }
    }

    return messages;
  }
}
