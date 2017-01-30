/**
 * Created by fotty on 1/6/17.
 */

import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  // { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
