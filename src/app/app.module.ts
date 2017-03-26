import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, BaseRequestOptions} from '@angular/http';


import { routing } from './app.routing';
import { UserService } from './services/user.service';



import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './helpers/alert/alert.component';
import {AlertService} from './services/alert.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthGuard} from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProductsService} from './services/products.service';
import {MyDatePickerModule} from 'mydatepicker';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { NgUploaderModule } from 'ngx-uploader';
import {SearchResultsComponent} from './search-results/search-results.component';
import {SearchComponent} from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({

  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    DashboardComponent,
    ProductManagementComponent,
    ProductListComponent,
    SearchResultsComponent,
    SearchComponent,
    ProductDetailsComponent,
    ProductDetailsComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    NgUploaderModule,
    routing

  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    AlertService,
    ProductsService,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
