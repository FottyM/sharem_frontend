import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {AlertService} from "../services/alert.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {currentUser, EMAIL_REGXP} from "../helpers/global-variables";
import {Subscription} from 'rxjs/Subscription';
import {User} from "../models/user";
import {IMyOptions} from 'mydatepicker';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: FormGroup;
  private dateOfBirth: IMyOptions = { dateFormat: 'dd.mm.yyyy'};

  constructor(private userService: UserService, private alertService: AlertService, private fb: FormBuilder) { }



  ngOnInit() {
    this.user = this.initUserFormBuilder();
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {

    console.log(value, valid);
    return this.userService.update(value).subscribe(
      data => {
        this.alertService.success('Infos Updated')
      },
      error => {
        this.alertService.error(error._body);
        console.log(error._body);
      }
    );

  }

  initUserFormBuilder(){

    return this.fb.group({
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.minLength(10), Validators.pattern(EMAIL_REGXP)]],
      username: ['mutunda', [Validators.required, Validators.minLength(2)]],
      id_code: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      date_of_birth: [{date: {year: 1918, month: 10, day: 9}}, [Validators.required]],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        postal: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }

}
