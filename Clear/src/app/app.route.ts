import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {ModulecComponent} from "./modulec/modulec.component";
import {HomeComponent} from "./home/home.component";

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'module', component: ModulecComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router,  {useHash: true});
