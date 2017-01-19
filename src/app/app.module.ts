import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';


import { routing } from './app.routing'
import { UserService } from './services/user.service'


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './helpers/alert/alert.component';
import {AlertService} from "./services/alert.service";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./guards/auth.guard";
import { LoginComponent } from './login/login.component';


@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    AlertService,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
