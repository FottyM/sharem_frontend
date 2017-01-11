/**
 * Created by fotty on 1/6/17.
 */

import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { RegisterComponent } from './register/register.component'
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
